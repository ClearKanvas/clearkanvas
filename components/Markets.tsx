import Link from "next/link";
import Arrow from "./Arrow";

const MARKETS = [
  { name: "United States", region: "North America" },
  { name: "Pakistan", region: "South Asia" },
  { name: "Bahrain", region: "Gulf" },
];

export default function Markets() {
  return (
    <section className="section" id="markets">
      <div className="wrap">
        <div className="head reveal">
          <span className="eyebrow">Markets we serve</span>
          <h2>Local presence. Global reach.</h2>
          <p>
            We serve clients in the United States, Pakistan, and Bahrain, and are growing into
            new markets, delivered from our base in Pakistan with a regional presence in
            Bahrain. Close enough in time zone to collaborate in real time, far enough in cost
            to change your economics.
          </p>
        </div>
        <div className="markets-row" data-stagger>
          {MARKETS.map((m) => (
            <div className="market" key={m.name}>
              <span className="flagdot"></span>
              <span>
                <span className="mk-name">{m.name}</span>
                <span className="mk-sub">{m.region}</span>
              </span>
            </div>
          ))}
        </div>
        <div className="markets-foot reveal">
          <p className="markets-operate">
            <span className="mo-k">Where we operate</span>
            Pakistan (primary delivery center), Bahrain
          </p>
          <Link className="btn btn-ghost" href="/about/global-presence">
            Where we operate <Arrow size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}
