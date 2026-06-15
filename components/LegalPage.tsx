import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import PageHero from "@/components/PageHero";
import Arrow from "@/components/Arrow";

export interface LegalSection {
  h: string;
  body: string[];
}

export default function LegalPage({
  title,
  updated,
  intro,
  sections,
}: {
  title: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
}) {
  return (
    <>
      <Nav />
      <main id="top">
        <PageHero eyebrow="Legal" title={title} intro={intro} />
        <section className="section">
          <div className="wrap wrap-narrow">
            <p className="legal-updated reveal">Last updated: {updated}</p>
            <div className="legal-body reveal">
              {sections.map((s) => (
                <div className="legal-section" key={s.h}>
                  <h2>{s.h}</h2>
                  {s.body.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              ))}
              <p className="legal-contact">
                Questions about this policy? Email us at{" "}
                <a className="v-link" href="mailto:hello@clearkanvas.com">
                  hello@clearkanvas.com
                </a>
                .
              </p>
            </div>
          </div>
        </section>
        <section className="section cta-band cta-band-static">
          <div className="wrap cta-inner reveal">
            <h2>Ready to talk?</h2>
            <p>Tell us what you are trying to build and we will show you how we can help.</p>
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
