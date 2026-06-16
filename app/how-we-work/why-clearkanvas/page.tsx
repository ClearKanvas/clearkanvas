import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import PageHero from "@/components/PageHero";
import Arrow from "@/components/Arrow";

export const metadata: Metadata = {
  title: "Why ClearKanvas Global | ClearKanvas Global",
  description:
    "Senior by default, operators not just advisors, a real cost advantage, and a partner rather than a vendor.",
};

const PILLARS = [
  {
    title: "Senior by default",
    desc: "You work with people who have led finance and HR functions at scale, not a junior pool with a senior nameplate. The people who scope your engagement are the people accountable for it, so you get judgment from the first call, not just throughput once the contract is signed.",
  },
  {
    title: "Operators, not just advisors",
    desc: "We do not hand you a deck and leave. We design the solution, then run it. Because the same team advises and operates, nothing gets lost in translation between the plan and the day-to-day reality of doing the work.",
  },
  {
    title: "A real cost advantage",
    desc: "Pakistan gives you high-quality talent at a fraction of in-house cost, with strong English and useful time-zone overlap for the UK and the Gulf. We turn that structural advantage into a managed, reliable capability, not a race to the cheapest seat.",
  },
  {
    title: "A partner, not a vendor",
    desc: "We build around your business, stay close, and measure ourselves on your outcomes. The engagement is designed to last because it works, with clear reporting and a named lead you can always reach.",
  },
];

export default function WhyClearKanvasPage() {
  return (
    <>
      <Nav />
      <main id="top">
        <PageHero
          eyebrow="Why ClearKanvas Global"
          title="Why companies choose ClearKanvas Global"
          tagline="Real expertise at the table, and a partner who owns the result."
          crumbs={[{ href: "/how-we-work", label: "How We Work" }, { label: "Why ClearKanvas Global" }]}
        />
        <section className="section">
          <div className="wrap wrap-narrow">
            <ol className="pillar-list" data-stagger>
              {PILLARS.map((p, i) => (
                <li className="pillar-row" key={p.title}>
                  <span className="pillar-num">{String(i + 1).padStart(2, "0")}</span>
                  <div className="pillar-body">
                    <h2>{p.title}</h2>
                    <p>{p.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>
        <section className="section cta-band cta-band-static">
          <div className="wrap cta-inner reveal">
            <h2>See what that looks like for you.</h2>
            <p>Tell us what you are trying to build and we will show you how we would run it.</p>
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
