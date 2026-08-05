# ClearKanvas ATS: the live Apps Script (`Code.gs`)

This is the authoritative copy of the Google Apps Script deployed in the
**clearkanvasglobal@gmail.com** account (project "ClearKanvas ATS"). The Careers
form posts to `app/api/careers/route.ts`, which forwards each application here.

The taxonomy the form sends (`category` + `specialization`) is defined once in
`lib/careers.ts`. The `CATEGORIES` list below MUST stay identical to
`APPLICATION_CATEGORIES` there, so the Drive subfolder names line up.

## Column layout (Applications sheet)

`timestamp, name, email, phone, linkedin, category, specialization,
appliedPosting, studentOrGrad, university, degree, cgpa, gradYear, studyStatus,
availability, location, portfolio, answer, cvLink, aiCategory, seniority, years,
skills, fitScore, summary, status`

The last six before `status` (aiCategory..summary) are filled only if the
optional AI tagging is enabled; otherwise they stay blank.

## Internship Program (separate tab and folder)

Internship applications come from `app/api/internships/route.ts` tagged with
`applicationType: "Internship"`. The script routes them to their own
**"Internships" tab** (columns include `cohort`, the academic and availability
fields, `unpaidAck`, plus `stage` and `status` for the pipeline) and saves the CV
under **`Internships / <cohort> / <function>/`** in Drive. Both the tab and the
folders are created automatically on the first internship submission, so there is
nothing to set up by hand. The `cohort` label comes from `INTERNSHIP_COHORT` in
`lib/internships.ts` (currently "Internship Program"); change it per intake if you
want each intake in its own folder. Interns receive their own acknowledgment email.

## How to apply an update

1. Open the Sheet, **Extensions > Apps Script**.
2. Select everything in `Code.gs` and delete it, then paste the script below.
3. If you use AI tagging, paste your Gemini key on the `GEMINI_API_KEY` line;
   otherwise leave it as `""` (AI stays off, no cost, no errors).
4. **Save.**
5. In the Sheet, delete the old header row / clear the `Applications` tab so the
   new headers regenerate on the next submission. (Or rename the old tab to keep
   it as an archive; the script recreates `Applications` fresh.)
6. **Deploy > Manage deployments > Edit (pencil) > Version: New version >
   Deploy.** This keeps the same Web App URL, so nothing changes in Vercel.
7. Test: submit an application from the site with the student box ticked, and
   confirm the row lands with category + specialization in the right columns and
   the CV in a subfolder named after the category.

```javascript
/**
 * ClearKanvas ATS , Apps Script backend for the Careers application form.
 * Deployed as a Web App (Execute as: Me, Access: Anyone). The Next.js route
 * app/api/careers/route.ts POSTs each application here as JSON (CV base64).
 *
 * doPost (fast path, runs on every submission):
 *   1. Verify the shared secret.
 *   2. Save the CV to Drive, in a subfolder named after the category.
 *   3. Append a row to the Applications sheet.
 *   4. Acknowledge the applicant (no internal alert email: review the sheet).
 *
 * processNewApplications (optional, OFF by default): fills the AI columns via
 * Gemini. Stays off unless GEMINI_API_KEY is set AND setupTriggers() is run.
 */

// ---- Config -------------------------------------------------------------
const SHEET_ID = "17Iit6Y8sQx7HLv6vXpa3rTlfmmGmbtI7Vumlv8FX_zg";
const FOLDER_ID = "1aT9fjaV7atxSLQ7EqF5L6-LDjmPL4EX3";
const SHARED_SECRET = "m07XULd3aEItDLASqhRWsxLr3PDe8K8vCM0LhmW4";
// Recruitment inbox (kept for reference). Per-application alert emails were
// removed to save quota; review new rows in the sheet instead.
const TEAM_EMAIL = "clearkanvasglobal@gmail.com";
// Applicant emails are sent from this address. It must be set up in Gmail under
// Settings > Accounts and Import > "Send mail as" (done via app password), so it
// appears in GmailApp.getAliases(). Used as both the From and Reply-To.
const REPLY_TO = "careers@clearkanvas.com";
const FROM_NAME = "ClearKanvas Global";

// AI tagging (optional). Leave the key blank to keep AI off (no cost, no errors).
const GEMINI_API_KEY = "";
const GEMINI_MODEL = "gemini-2.0-flash";

// Top-level categories. MUST match APPLICATION_CATEGORIES in lib/careers.ts.
// Drives the Drive subfolder name (and the AI category validation later).
const CATEGORIES = [
  "Human Resources & Recruitment",
  "Finance & Accounting",
  "Software & Technology",
  "Sales & Business Development",
  "Marketing & Creative",
  "Operations & Administration",
  "Customer Support & Success",
  "Other / General",
];

const SHEET_NAME = "Applications";
const HEADERS = ["timestamp","name","email","phone","linkedin","category",
  "specialization","appliedPosting","studentOrGrad","university","degree","cgpa",
  "gradYear","studyStatus","availability","location","portfolio","answer","cvLink",
  "aiCategory","seniority","years","skills","fitScore","summary","status"];

// Internship Program: its own tab and its own Drive subfolder tree. Applications
// posted by app/api/internships/route.ts carry applicationType "Internship".
const INTERN_SHEET_NAME = "Internships";
const INTERN_HEADERS = ["timestamp","name","email","phone","linkedin","cohort","category",
  "specialization","university","degree","cgpa","gradYear","studyStatus","startDate",
  "commit3Months","availability","workMode","location","conflicts","portfolio","source",
  "unpaidAck","motivation","cvLink","aiCategory","seniority","skills","fitScore","summary",
  "stage","status"];

// ---- Web app entry point ------------------------------------------------
function doPost(e) {
  try {
    const d = JSON.parse(e.postData.contents);
    if (d.secret !== SHARED_SECRET) return json({ ok: false, error: "unauthorized" });

    // Internship applications take a separate path (own tab, own folder, own email).
    if (d.applicationType === "Internship") return handleInternship(d);

    const category = sanitizeCategory(d.category);

    // Save the CV into the category subfolder.
    const bytes = Utilities.base64Decode(d.cvBase64);
    const blob = Utilities.newBlob(bytes, d.cvType || "application/octet-stream", d.cvName || "cv");
    const file = getCategoryFolder(category).createFile(blob);
    file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
    const cvUrl = file.getUrl();

    getSheet().appendRow([new Date(), d.name || "", d.email || "", d.phone || "",
      d.linkedin || "", category, d.specialization || "", d.appliedPosting || "",
      d.studentOrGrad || "", d.university || "", d.degree || "", d.cgpa || "",
      d.gradYear || "", d.studyStatus || "", d.availability || "", d.location || "",
      d.portfolio || "", d.answer || "", cvUrl,
      "", "", "", "", "", "", "New"]);

    // Acknowledge the applicant, sent FROM the careers@ alias (see senderOptions).
    // Non-fatal: the row and CV are already saved above, so if the daily email
    // quota is reached we still keep the application and only skip the auto-reply.
    if (d.email) {
      try {
        GmailApp.sendEmail(d.email, "We received your application",
          "Hi " + (d.name || "there") + ",\n\n" +
          "Thanks for your interest in ClearKanvas Global. We appreciate you taking the time to " +
          "apply. If your experience matches a current or upcoming role, our team will reach out." +
          "\n\nWith appreciation,\nClearKanvas Global Team",
          senderOptions({ name: FROM_NAME, replyTo: REPLY_TO }));
      } catch (mailErr) { /* quota reached or send failed; application still saved */ }
    }

    // No team alert email: new applications are reviewed in the Applications
    // sheet (optionally with the Sheet's own Tools > Notification settings). This
    // keeps one email per application, so the free Gmail quota goes further.

    return json({ ok: true });
  } catch (err) {
    return json({ ok: false, error: String(err) });
  }
}

// ---- Helpers ------------------------------------------------------------
function getSheet() {
  const ss = SpreadsheetApp.openById(SHEET_ID);
  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) sheet = ss.insertSheet(SHEET_NAME);
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
    sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight("bold");
    sheet.setFrozenRows(1);
  }
  return sheet;
}

function sanitizeCategory(raw) {
  const c = String(raw || "").trim();
  return CATEGORIES.indexOf(c) !== -1 ? c : "Other / General";
}

function getCategoryFolder(category) {
  const parent = DriveApp.getFolderById(FOLDER_ID);
  const safe = category.replace(/[\\/:*?"<>|]/g, "-");
  const it = parent.getFoldersByName(safe);
  return it.hasNext() ? it.next() : parent.createFolder(safe);
}

function json(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

// Send applicant email FROM the careers@ alias when it is configured as a
// "Send mail as" address on this account; otherwise fall back to the default
// sender so mail is never blocked.
function senderOptions(base) {
  if (GmailApp.getAliases().indexOf(REPLY_TO) !== -1) base.from = REPLY_TO;
  return base;
}

// ---- Internship Program -------------------------------------------------
function handleInternship(d) {
  const category = sanitizeCategory(d.category);
  const cohort = String(d.cohort || "Internship Program");

  // Save the CV under Internships / <cohort> / <function>/.
  const bytes = Utilities.base64Decode(d.cvBase64);
  const blob = Utilities.newBlob(bytes, d.cvType || "application/octet-stream", d.cvName || "cv");
  const file = getInternFolder(cohort, category).createFile(blob);
  file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
  const cvUrl = file.getUrl();

  getInternSheet().appendRow([new Date(), d.name || "", d.email || "", d.phone || "",
    d.linkedin || "", cohort, category, d.specialization || "", d.university || "",
    d.degree || "", d.cgpa || "", d.gradYear || "", d.studyStatus || "", d.startDate || "",
    d.commit3Months || "", d.availability || "", d.workMode || "", d.location || "",
    d.conflicts || "", d.portfolio || "", d.source || "", d.unpaidAck || "", d.answer || "",
    cvUrl, "", "", "", "", "", "", "New"]);

  // Acknowledge the applicant (internship-specific copy). Non-fatal: the row and
  // CV are already saved, so a reached email quota never loses an application.
  if (d.email) {
    try {
      GmailApp.sendEmail(d.email, "We received your internship application",
        "Hi " + (d.name || "there") + ",\n\n" +
        "Thanks for applying to the ClearKanvas Global Internship Program. This is a learning-based, " +
        "unpaid internship of about three months. We appreciate you taking the time to apply, and if " +
        "your application is a fit for the current intake, our team will reach out." +
        "\n\nWith appreciation,\nClearKanvas Global Team",
        senderOptions({ name: FROM_NAME, replyTo: REPLY_TO }));
    } catch (mailErr) { /* quota reached or send failed; application still saved */ }
  }

  // No team alert email: new interns are reviewed in the Internships sheet.

  return json({ ok: true });
}

function getInternSheet() {
  const ss = SpreadsheetApp.openById(SHEET_ID);
  let sheet = ss.getSheetByName(INTERN_SHEET_NAME);
  if (!sheet) sheet = ss.insertSheet(INTERN_SHEET_NAME);
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(INTERN_HEADERS);
    sheet.getRange(1, 1, 1, INTERN_HEADERS.length).setFontWeight("bold");
    sheet.setFrozenRows(1);
  }
  return sheet;
}

function getInternFolder(cohort, category) {
  const root = DriveApp.getFolderById(FOLDER_ID);
  return childFolder(childFolder(childFolder(root, "Internships"), safeName(cohort)), safeName(category));
}

function childFolder(parent, name) {
  const it = parent.getFoldersByName(name);
  return it.hasNext() ? it.next() : parent.createFolder(name);
}

function safeName(s) {
  return String(s || "").replace(/[\\/:*?"<>|]/g, "-").trim() || "Other";
}

// ---- Optional AI tagging (OFF unless GEMINI_API_KEY is set) --------------
// Run setupTriggers() once to start the 5-minute timer; it self-disables while
// the key is blank. Delete the trigger any time from Triggers (clock icon).
function setupTriggers() {
  ScriptApp.getProjectTriggers().forEach(function (t) {
    if (t.getHandlerFunction() === "processNewApplications") ScriptApp.deleteTrigger(t);
  });
  ScriptApp.newTrigger("processNewApplications").timeBased().everyMinutes(5).create();
}

function processNewApplications() {
  if (!GEMINI_API_KEY) return; // AI off
  const sheet = getSheet();
  const rows = sheet.getDataRange().getValues();
  const statusCol = HEADERS.indexOf("status");
  const aiCol = HEADERS.indexOf("aiCategory");
  for (let r = 1; r < rows.length; r++) {
    if (rows[r][statusCol] !== "New") continue;
    const a = analyzeWithGemini(rows[r]);
    if (!a) continue;
    sheet.getRange(r + 1, aiCol + 1, 1, 6)
      .setValues([[a.category, a.seniority, a.years, a.skills, a.fitScore, a.summary]]);
    sheet.getRange(r + 1, statusCol + 1).setValue("Reviewed");
  }
}

function analyzeWithGemini(row) {
  const catIdx = HEADERS.indexOf("category");
  const specIdx = HEADERS.indexOf("specialization");
  const answerIdx = HEADERS.indexOf("answer");
  const cvIdx = HEADERS.indexOf("cvLink");

  // Pull the CV back out of Drive to feed the model.
  let pdfPart = null;
  const m = String(row[cvIdx] || "").match(/[-\w]{25,}/);
  if (m) {
    try {
      const blob = DriveApp.getFileById(m[0]).getBlob();
      pdfPart = { inline_data: { mime_type: blob.getContentType(), data: Utilities.base64Encode(blob.getBytes()) } };
    } catch (e) { /* CV unreadable, fall back to text only */ }
  }

  const prompt =
    "You are an ATS assistant. From the CV and details, return strict JSON with keys: " +
    "category, seniority, years, skills, fitScore, summary. " +
    "category = best fit from: " + CATEGORIES.join("; ") + ". " +
    "seniority = one of Intern, Junior, Mid, Senior, Lead. " +
    "years = number of years of experience. skills = comma separated top skills. " +
    "fitScore = 1 to 10 for fit to their stated area '" +
    (row[catIdx] || "") + " / " + (row[specIdx] || "") + "'. " +
    "summary = two sentences. Candidate note: " + (row[answerIdx] || "");

  const parts = [{ text: prompt }];
  if (pdfPart) parts.push(pdfPart);
  const payload = { contents: [{ parts: parts }], generationConfig: { responseMimeType: "application/json" } };
  const url = "https://generativelanguage.googleapis.com/v1beta/models/" + GEMINI_MODEL +
    ":generateContent?key=" + GEMINI_API_KEY;
  const resp = UrlFetchApp.fetch(url, { method: "post", contentType: "application/json",
    payload: JSON.stringify(payload), muteHttpExceptions: true });
  if (resp.getResponseCode() !== 200) return null;

  const data = JSON.parse(resp.getContentText());
  const text = data.candidates && data.candidates[0] &&
    data.candidates[0].content.parts[0].text;
  if (!text) return null;
  const a = JSON.parse(text);
  return { category: a.category || "", seniority: a.seniority || "", years: a.years || "",
    skills: a.skills || "", fitScore: a.fitScore || "", summary: a.summary || "" };
}

// Diagnostic: run once to confirm the Gemini key works before enabling the timer.
function testGemini() {
  if (!GEMINI_API_KEY) { console.log("No key set , AI is off."); return; }
  const url = "https://generativelanguage.googleapis.com/v1beta/models/" + GEMINI_MODEL +
    ":generateContent?key=" + GEMINI_API_KEY;
  const resp = UrlFetchApp.fetch(url, { method: "post", contentType: "application/json",
    payload: JSON.stringify({ contents: [{ parts: [{ text: "Reply with the word OK." }] }] }),
    muteHttpExceptions: true });
  console.log("HTTP " + resp.getResponseCode());
  console.log(resp.getContentText());
}
```
