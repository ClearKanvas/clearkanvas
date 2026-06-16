import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import PageHero from "@/components/PageHero";
import Arrow from "@/components/Arrow";

export const metadata: Metadata = {
  title: "Leadership | ClearKanvas Global",
  description:
    "ClearKanvas Global is led by its founding partners, with leadership across global finance, HR, and operations.",
};

// PLACEHOLDER leadership , names, titles, bios, and photos to be filled in by Taimur.
// Monogram avatars and "Bio coming soon" stand in until real details are confirmed.
const LEADERS = [
  { initials: "CK", name: "Founding Partner", title: "Finance & Operations" },
  { initials: "CK", name: "Founding Partner", title: "People & Talent" },
];

export default function LeadershipPage() {
  return (
    <>
      <Nav />
      <main id="top">
        <PageHero
          eyebrow="Leadership"
          title="Leadership"
          intro="ClearKanvas Global is led by its founding partners, who bring deep experience across global finance, HR, and operations leadership."
          crumbs={[{ href: "/about", label: "About" }, { label: "Leadership" }]}
        />
        <section className="section">
          <div className="wrap">
            <div className="leader-grid" data-stagger>
              {LEADERS.map((l, i) => (
                <article className="leader-card" key={i}>
                  <span className="leader-avatar" aria-hidden="true">{l.initials}</span>
                  <h2>{l.name}</h2>
                  <p className="leader-title">{l.title}</p>
                  <p className="leader-bio">Bio coming soon.</p>
                  <span className="leader-li" aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="18" height="18">
                      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM10 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21H18.6v-5.4c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.08 1.4-2.08 2.85V21H10z" />
                    </svg>
                  </span>
                </article>
              ))}
            </div>
            <p className="leader-note reveal">
              Full leadership profiles, with names, titles, and bios, are coming soon.
            </p>
          </div>
        </section>
        <section className="section cta-band cta-band-static">
          <div className="wrap cta-inner reveal">
            <h2>Talk to the people who will run it.</h2>
            <p>With ClearKanvas Global, the expert team you meet is the team accountable for the work.</p>
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
