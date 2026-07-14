import Link from "next/link";
import Arrow from "./Arrow";
import { SERVICE_NAV } from "@/lib/services";

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="wrap">
        <div className="head reveal">
          <span className="eyebrow">What we do</span>
          <h2>Three ways we put the right people in your business</h2>
          <p>
            One partner for finding talent, employing it compliantly, and running it long term.
            Start with one service or use all three.
          </p>
        </div>
        <div className="svc-grid svc-grid-3" data-stagger>
          {SERVICE_NAV.map((s, i) => (
            <Link
              className={`svc-card${s.flagship ? " svc-card-flag" : ""}`}
              href={`/services/${s.slug}`}
              key={s.slug}
              data-tilt
            >
              <div className="svc-head">
                <span className="svc-num">{String(i + 1).padStart(2, "0")}</span>
                {s.flagship && <span className="svc-flag">Flagship</span>}
              </div>
              <h3>{s.name}</h3>
              <p className="desc">{s.menuDesc}</p>
              <span className="learn">
                Learn more <Arrow />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
