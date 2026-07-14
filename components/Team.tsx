import { OFFICES } from "@/lib/services";

// Placeholder team slots until real names, titles, bios, photos, and LinkedIn
// links are supplied. Count only, no invented people.
const TEAM_SLOTS = 4;

export default function Team() {
  return (
    <section className="section team" id="team">
      <div className="wrap">
        <div className="head reveal">
          <span className="eyebrow">Real people, real presence</span>
          <h2>The people behind ClearKanvas</h2>
          <p>
            A named team you can actually talk to, backed by real legal entities in two
            countries.
          </p>
        </div>

        <div className="team-grid" data-stagger>
          {Array.from({ length: TEAM_SLOTS }).map((_, i) => (
            <div className="team-card team-card-placeholder" key={i}>
              <div className="team-photo" aria-hidden="true" />
              <span className="team-name">Team member</span>
              <span className="team-role">Coming soon</span>
            </div>
          ))}
        </div>

        <div className="offices-strip reveal">
          {OFFICES.map((o) => (
            <div className="office" key={o.country}>
              <strong>{o.country}</strong>
              <span>{o.entity}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
