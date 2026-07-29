# Careers application form: backend setup

The Careers page has a native application form. The frontend and API route are built and live.
This document is the one-time Google setup that makes submissions land in a Sheet, with the CV
saved to Drive and emails sent. Until the two Vercel env vars at the end are set, the form shows
"Applications are not enabled yet, please email your CV to hello@clearkanvas.com" and nothing is
lost.

How it works: `app/api/careers/route.ts` validates the submission, then POSTs it as JSON (CV
base64 encoded) to a Google Apps Script Web App. The script saves the CV to Drive, appends a row,
and sends the acknowledgment and team emails. This keeps the Next.js app dependency free and
avoids storing a service-account key.

## Already created (in taimurnadeem6886@gmail.com's Drive)

| Item | ID |
| --- | --- |
| Sheet "ClearKanvas Applications" | `1YhgItwqG4Xed472RTVTeptQW9FCwUjXGdpmmvTHk4e0` |
| Drive folder "ClearKanvas CVs" | `1a_7br7lUXR7JwzgbJXXl-8N2x-_87WMY` |

Sheet: https://docs.google.com/spreadsheets/d/1YhgItwqG4Xed472RTVTeptQW9FCwUjXGdpmmvTHk4e0/edit
Folder: https://drive.google.com/drive/folders/1a_7br7lUXR7JwzgbJXXl-8N2x-_87WMY

No need to add header rows by hand. The script below creates the `Applications` tab and its
headers on the first submission if they are missing.

## Step 1: Add the Apps Script

1. Open the Sheet above, then **Extensions > Apps Script**.
2. Delete whatever is in `Code.gs` and paste the script below **exactly as is**. The folder ID and
   shared secret are already filled in.
3. Click **Save**.

```javascript
const CV_FOLDER_ID = "1a_7br7lUXR7JwzgbJXXl-8N2x-_87WMY";
const TEAM_EMAIL = "hello@clearkanvas.com";
const SHARED_SECRET = "m07XULd3aEItDLASqhRWsxLr3PDe8K8vCM0LhmW4";

const HEADERS = [
  "timestamp", "name", "email", "phone", "linkedin", "role", "answer", "cvLink", "status",
];

function doPost(e) {
  try {
    const d = JSON.parse(e.postData.contents);

    // Only this site may write here. The Web App must be open to "Anyone",
    // so this secret is what actually protects the endpoint.
    if (d.secret !== SHARED_SECRET) {
      return json({ ok: false, error: "unauthorized" });
    }

    // Save the CV to Drive.
    const bytes = Utilities.base64Decode(d.cvBase64);
    const blob = Utilities.newBlob(bytes, d.cvType, d.cvName);
    const file = DriveApp.getFolderById(CV_FOLDER_ID).createFile(blob);
    file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);

    // Append the row, creating the tab and headers on first run.
    const ss = SpreadsheetApp.getActive();
    let sheet = ss.getSheetByName("Applications");
    if (!sheet) sheet = ss.insertSheet("Applications");
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(HEADERS);
      sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight("bold");
      sheet.setFrozenRows(1);
    }
    sheet.appendRow([
      new Date(), d.name, d.email, d.phone, d.linkedin, d.role, d.answer, file.getUrl(), "New",
    ]);

    // Acknowledge the applicant, notify the team.
    MailApp.sendEmail(
      d.email,
      "We received your application",
      "Hi " + d.name + ",\n\nThanks for applying for " + d.role + ". We reply to every applicant, "
        + "so you will hear from us either way.\n\nClearKanvas Global"
    );
    MailApp.sendEmail(
      TEAM_EMAIL,
      "New application: " + d.role + " (" + d.name + ")",
      d.name + "\n" + d.email + "\n" + (d.phone || "no phone") + "\n" + (d.linkedin || "no LinkedIn")
        + "\n\nWhy this role:\n" + d.answer + "\n\nCV: " + file.getUrl()
    );

    return json({ ok: true });
  } catch (err) {
    return json({ ok: false, error: String(err) });
  }
}

function json(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
```

## Step 2: Deploy it as a Web App

1. **Deploy > New deployment**.
2. Click the gear next to "Select type" and choose **Web app**.
3. Set **Execute as: Me**, and **Who has access: Anyone**.
   ("Anyone" is required so the site's server can call it. The shared secret is what keeps it safe.)
4. **Deploy**, then **Authorize access** and approve the Drive/Gmail permissions. Google will warn
   that the app is unverified: click **Advanced > Go to (project name)** and continue. This is
   normal for your own scripts.
5. Copy the **Web app URL**. It looks like
   `https://script.google.com/macros/s/AKfycb.../exec`.

## Step 3: Add the two env vars in Vercel

Vercel > project > **Settings > Environment Variables**, scope **Production** (tick Preview too if
you want the preview site to work):

| Name | Value |
| --- | --- |
| `CAREERS_WEBHOOK_URL` | the Web app URL from step 2 |
| `CAREERS_WEBHOOK_SECRET` | `m07XULd3aEItDLASqhRWsxLr3PDe8K8vCM0LhmW4` |

Then **Deployments > latest > Redeploy**, because env vars are only picked up by a new build.

## Step 4: Test it end to end

1. Go to https://www.clearkanvas.com/careers and click **Join the Talent Network**.
2. Submit the form with your own email and any small PDF.
3. Confirm all four: the success message on screen, a new row in the Sheet, the CV in the Drive
   folder, and both emails (yours and hello@clearkanvas.com).

If it fails, open Apps Script > **Executions** to see the error. Most common causes are skipping
the authorization step, or a mismatch between the two `CAREERS_WEBHOOK_SECRET` values.

## Managing open roles

Roles live in `lib/roles.ts`. Set `active: true` on a role to publish it. The Careers page renders
only active roles and shows the empty state when none are active. When someone clicks Apply on a
posting, that posting title is recorded on the application as `appliedPosting`.

The form's "Role applying for" and "Area of expertise" dropdowns are a two-level cascade driven by
`APPLICATION_TAXONOMY` in `lib/careers.ts` (category, then its specializations), not by open roles.
The deployed Apps Script is documented in `docs/careers-ats-Code.gs.md`; its `CATEGORIES` list must
stay identical to `APPLICATION_CATEGORIES` in `lib/careers.ts`.

## Rotating the secret

Change `SHARED_SECRET` in the Apps Script, save, **Deploy > Manage deployments > Edit > Version:
New version > Deploy**, then update `CAREERS_WEBHOOK_SECRET` in Vercel and redeploy. The URL stays
the same as long as you edit the existing deployment rather than creating a new one.
