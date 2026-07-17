// Open roles source (repo-based). To publish a role, set `active: true`.
// Only active roles render on the Careers page; if none are active, the page
// shows the "nothing open right now" empty state and points to the talent network.
//
// (The founder's doc also allows sourcing these from a Google Sheet "Roles" tab
// later; this file is the no-backend default so closing/opening a role is a one
// line change here.)

export interface JobRole {
  id: string;
  title: string;
  /** e.g. "Islamabad" or "Remote". */
  location: string;
  /** e.g. "Full-time", "Contract", "Internship". */
  type: string;
  description?: string;
  active: boolean;
}

export const ROLES: JobRole[] = [
  // Examples, inactive by default. Flip `active` to true (and edit) to publish.
  { id: "senior-recruiter", title: "Senior Recruiter", location: "Islamabad", type: "Full-time", active: false },
  { id: "talent-sourcer", title: "Talent Sourcer", location: "Remote", type: "Full-time", active: false },
];

export const ACTIVE_ROLES: JobRole[] = ROLES.filter((r) => r.active);
