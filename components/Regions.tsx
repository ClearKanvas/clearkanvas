import { REGIONS, OFFICES } from "@/lib/services";

export default function Regions() {
  return (
    <section className="section regions" id="regions">
      <div className="wrap">
        <div className="head reveal">
          <span className="eyebrow">Global reach</span>
          <h2>Where our offices are, and where we find your talent</h2>
          <p>
            Our offices are in Pakistan and the United States. Our reach is far wider. We
            recruit, employ, and deploy talent across six regions, so you can hire the best
            person for the role wherever they are.
          </p>
        </div>

        <div className="regions-split">
          <div className="regions-offices reveal">
            <span className="regions-k">Our offices</span>
            <ul>
              {OFFICES.map((o) => (
                <li key={o.country}>
                  <strong>{o.country}</strong>
                  <span>{o.role}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="regions-markets">
            <span className="regions-k">Markets we serve</span>
            <div className="regions-grid" data-stagger>
              {REGIONS.map((r) => (
                <div className="region-card" key={r.region}>
                  <h3>{r.region}</h3>
                  <p>{r.coverage}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
