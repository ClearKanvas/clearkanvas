/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
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

        <span className="regions-k reveal">Our offices</span>
        <div className="geo-offices reveal">
          {OFFICES.map((o) => (
            <div className="geo-office" key={o.country}>
              <img
                className="geo-flag geo-flag-lg"
                src={`/flags/${o.flag}.svg`}
                alt={`${o.country} flag`}
                width={40}
                height={28}
              />
              <div>
                <strong>{o.country}</strong>
                <span>{o.role}</span>
              </div>
            </div>
          ))}
        </div>

        <span className="regions-k reveal regions-k-markets">Markets we serve</span>
        <div className="geo-grid" data-stagger>
          {REGIONS.map((r) => (
            <article className="geo-card" key={r.region}>
              <Image
                className="geo-img"
                src={r.img}
                alt=""
                fill
                sizes="(max-width: 620px) 100vw, (max-width: 980px) 50vw, 33vw"
              />
              <div className="geo-body">
                <h3>{r.region}</h3>
                <p>{r.coverage}</p>
                <div className="geo-flags">
                  {r.flags.map((f) => (
                    <img
                      className="geo-flag"
                      key={f}
                      src={`/flags/${f}.svg`}
                      alt=""
                      width={27}
                      height={18}
                    />
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
