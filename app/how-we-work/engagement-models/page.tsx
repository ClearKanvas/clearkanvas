import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import PageHero from "@/components/PageHero";
import Arrow from "@/components/Arrow";

export const metadata: Metadata = {
  title: "Engagement Models | ClearKanvas",
  description:
    "Four ways to engage ClearKanvas: Dedicated Offshore Team, Managed Services, Fractional & Advisory, and Projects & Transformation.",
};

const MODELS = [
  {
    name: "Dedicated Offshore Team",
    desc: "A team built for you, managed by us, working as an extension of yours. Optional Build-Operate-Transfer when you want to take ownership.",
  },
  {
    name: "Managed Services",
    desc: "We own a function or process end to end and deliver to agreed outcomes and service levels. You stop managing the work and start managing the result.",
  },
  {
    name: "Fractional & Advisory",
    desc: "Senior finance or HR leadership on demand, for companies that need the expertise without the full-time cost.",
  },
  {
    name: "Projects & Transformation",
    desc: "A defined piece of work with a clear scope, from a finance clean-up to an operating-model redesign.",
  },
];

export default function EngagementModelsPage() {
  return (
    <>
      <Nav />
      <main id="top">
        <PageHero
          eyebrow="Engagement Models"
          title="How we work with you"
          tagline="Four ways to engage. One standard of quality."
          crumbs={[{ href: "/how-we-work", label: "How We Work" }, { label: "Engagement Models" }]}
        />
        <section className="section">
          <div className="wrap">
            <div className="model-grid" data-stagger>
              {MODELS.map((m, i) => (
                <article className="model-card" key={m.name} data-tilt>
                  <span className="model-num">{String(i + 1).padStart(2, "0")}</span>
                  <h2>{m.name}</h2>
                  <p>{m.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="section cta-band cta-band-static">
          <div className="wrap cta-inner reveal">
            <h2>Not sure which model fits?</h2>
            <p>Tell us where the complexity is and we will recommend the cleanest way to engage.</p>
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
