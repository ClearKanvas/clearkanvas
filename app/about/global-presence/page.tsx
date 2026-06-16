import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import PageHero from "@/components/PageHero";
import Arrow from "@/components/Arrow";

export const metadata: Metadata = {
  title: "Global Presence | ClearKanvas Global",
  description:
    "Where we serve, and where we deliver. Clients across North America, the UK, Europe, and the Gulf, delivered from Pakistan.",
};

const OPERATE = [
  { name: "Pakistan", note: "Primary delivery center" },
  { name: "Bahrain", note: "Regional presence" },
  { name: "Dubai, UAE", note: "Regional presence" },
];

const SERVE = ["United States", "Canada", "United Kingdom", "Europe", "United Arab Emirates", "Bahrain"];

export default function GlobalPresencePage() {
  return (
    <>
      <Nav />
      <main id="top">
        <PageHero
          eyebrow="Global Presence"
          title="Global presence"
          tagline="Where we serve, and where we deliver."
          intro="We partner with companies across North America, the United Kingdom, Europe, and the Gulf, delivered from our operations base in Pakistan with a presence in key client markets. Our clients get the cost and scale advantages of offshore with the responsiveness of a partner who keeps your hours."
          crumbs={[{ href: "/about", label: "About" }, { label: "Global Presence" }]}
        />
        <section className="section">
          <div className="wrap">
            <div className="presence-grid">
              <div className="presence-col reveal">
                <span className="presence-k">
                  <span className="presence-dot operate" aria-hidden="true"></span>
                  Where we operate
                </span>
                <div className="presence-list" data-stagger>
                  {OPERATE.map((o) => (
                    <div className="presence-item operate" key={o.name}>
                      <span className="presence-pin" aria-hidden="true"></span>
                      <span>
                        <span className="presence-name">{o.name}</span>
                        <span className="presence-note">{o.note}</span>
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="presence-col reveal">
                <span className="presence-k">
                  <span className="presence-dot serve" aria-hidden="true"></span>
                  Markets we serve
                </span>
                <div className="presence-pills" data-stagger>
                  {SERVE.map((s) => (
                    <span className="presence-pill" key={s}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <p className="presence-foot reveal">
              Local presence where you are. Delivery where it makes sense.
            </p>
          </div>
        </section>
        <section className="section cta-band cta-band-static">
          <div className="wrap cta-inner reveal">
            <h2>Wherever you are, we can run it.</h2>
            <p>Tell us what you are trying to build and we will show you how we deliver.</p>
            <div className="hero-cta">
              <Link className="btn btn-primary" href="/contact">
                Book a discovery call <Arrow size={15} />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollReveal />
    </>
  );
}
