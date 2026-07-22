import { OFFICES } from "@/lib/services";

/**
 * Offices section. The placeholder team cards were removed deliberately: nothing
 * on the site should read "coming soon". Real team members can be reintroduced
 * here once names, titles, and photos are supplied.
 *
 * Keeps id="team" so existing /#team links in the nav and footer still resolve.
 */
export default function Team() {
  return (
    <section className="section team" id="team">
      <div className="wrap">
        <div className="head reveal">
          <span className="eyebrow">Where we operate from</span>
          <h2>Real entities in two countries</h2>
          <p>
            A named team you can actually talk to, backed by real legal entities in Pakistan and
            the United States.
          </p>
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
