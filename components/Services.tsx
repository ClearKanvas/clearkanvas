import Link from "next/link";
import Image from "next/image";
import Arrow from "./Arrow";
import { SERVICE_NAV } from "@/lib/services";

// Card banner image per service (files live in /public).
const SERVICE_IMG: Record<string, string> = {
  recruitment: "/recruitment.jpg",
  "employer-of-record": "/EOR.jpg",
  "staff-offshoring": "/staff-offshoring.jpg",
  "training-leadership-retreats": "/training.jpg",
};

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="wrap">
        <div className="head reveal">
          <span className="eyebrow">What we do</span>
          <h2>Four ways we help you build and lead your team</h2>
          <p>
            One partner to find talent, employ it compliantly, run it long term, and develop the
            leaders who guide it. Start with one service or use all four.
          </p>
        </div>
        <div className="svc-grid svc-grid-4" data-stagger>
          {SERVICE_NAV.map((s, i) => (
            <Link
              className={`svc-card${s.flagship ? " svc-card-flag" : ""}`}
              href={`/services/${s.slug}`}
              key={s.slug}
              data-tilt
            >
              {SERVICE_IMG[s.slug] && (
                <div className="svc-media">
                  <Image
                    src={SERVICE_IMG[s.slug]}
                    alt=""
                    fill
                    sizes="(max-width: 620px) 100vw, (max-width: 980px) 50vw, 33vw"
                  />
                </div>
              )}
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
