# Careers application form: backend setup

The Careers page has a native application form. The frontend and API route are built.
To make submissions actually land somewhere (Sheet + Drive + emails), do the one-time
Google setup below. Until then, the form returns a friendly "not enabled yet" message.

The API route (`app/api/careers/route.ts`) validates the submission and forwards it,
with the CV as base64, to a Google Apps Script Web App URL held in the env var
`CAREERS_WEBHOOK_URL`. The Apps Script does the Sheet/Drive/email work. This keeps the
Next.js app dependency-free and avoids storing a service-account key.

## 1. Create the Sheet and Drive folder
1. Create a Google Sheet named "ClearKanvas Applications".
   - Tab **Applications** with headers: `timestamp, name, email, phone, linkedin, role, answer, cvLink, status`.
   - (Optional) Tab **Roles** if you later want to manage openings from the Sheet.
2. Create a Drive folder named "ClearKanvas CVs". Copy its folder ID from the URL.

## 2. Add the Apps Script Web App
In the Sheet: Extensions > Apps Script, paste this, set `CV_FOLDER_ID` and `TEAM_EMAIL`,
then Deploy > New deployment > type "Web app" > execute as you, access "Anyone".
Copy the Web App URL.

```javascript
const CV_FOLDER_ID = "PUT_DRIVE_FOLDER_ID_HERE";
const TEAM_EMAIL = "hello@clearkanvas.com";

function doPost(e) {
  const d = JSON.parse(e.postData.contents);
  // Save CV to Drive
  const bytes = Utilities.base64Decode(d.cvBase64);
  const blob = Utilities.newBlob(bytes, d.cvType, d.cvName);
  const file = DriveApp.getFolderById(CV_FOLDER_ID).createFile(blob);
  file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
  // Append row
  const sheet = SpreadsheetApp.getActive().getSheetByName("Applications");
  sheet.appendRow([new Date(), d.name, d.email, d.phone, d.linkedin, d.role, d.answer, file.getUrl(), "New"]);
  // Emails
  MailApp.sendEmail(d.email, "We received your application", "Thanks " + d.name + ", we reply to every applicant and will be in touch.");
  MailApp.sendEmail(TEAM_EMAIL, "New application: " + d.role, d.name + " (" + d.email + ")\n\n" + d.answer + "\n\nCV: " + file.getUrl());
  return ContentService.createTextOutput(JSON.stringify({ ok: true })).setMimeType(ContentService.MimeType.JSON);
}
```

## 3. Set the env var
- Local: add `CAREERS_WEBHOOK_URL=<your Web App URL>` to `.env.local`.
- Vercel: add `CAREERS_WEBHOOK_URL` in Project Settings > Environment Variables, then redeploy.

## Managing open roles
Roles live in `lib/roles.ts`. Set `active: true` on a role to publish it; the Careers
page renders only active roles, and shows the empty state when none are active. (If you
prefer managing roles from the Sheet later, we can switch the source to the Roles tab.)

## Note
This uses the Apps Script Web App pattern rather than a service-account + googleapis
integration. It produces the same outcome (row in the Sheet, CV in Drive, acknowledgment
and team emails) with far less setup and no secret key in the app. If you specifically
want the service-account approach from the copy doc, say so and it can be swapped in.
