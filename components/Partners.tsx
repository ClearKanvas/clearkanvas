import { PARTNER_GROUPS } from "@/lib/services";

export default function Partners() {
  return (
    <section className="section partners" id="partners">
      <div className="wrap">
        <div className="head reveal">
          <span className="eyebrow">Trusted infrastructure</span>
          <h2>Backed by proven platforms and partners</h2>
          <p>
            We deliver through established payroll, compliance, sourcing, and verification
            networks, so your hires are handled on infrastructure that scales globally.
          </p>
        </div>
        <div className="partners-grid" data-stagger>
          {PARTNER_GROUPS.map((g) => (
            <div className="partner-card" key={g.category}>
              <span className="partner-cat">{g.category}</span>
              <p className="partner-names">{g.partners}</p>
              <p className="partner-enables">{g.enables}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
