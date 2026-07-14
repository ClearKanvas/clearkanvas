import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import PageHero from "@/components/PageHero";
import Arrow from "@/components/Arrow";

export const metadata: Metadata = {
  title: "Our Story | ClearKanvas Global",
  description:
    "ClearKanvas Global helps companies hire the right people anywhere in the world, through recruitment, Employer of Record, and staff offshoring.",
};

export default function StoryPage() {
  return (
    <>
      <Nav />
      <main id="top">
        <PageHero
          eyebrow="Our Story"
          title="Our story"
          crumbs={[{ href: "/about", label: "About" }, { label: "Our Story" }]}
        />
        <section className="section">
          <div className="wrap wrap-narrow">
            <div className="prose reveal">
              <p className="prose-lead">
                Every company grows on the strength of its people. We exist to make sure the
                right ones are never out of reach, wherever in the world they happen to be.
              </p>
              <p>
                ClearKanvas Global was founded on a simple belief: hiring the right person should
                not depend on where you are registered or where they live. So we built a firm
                that finds talent, employs it compliantly, and runs the day to day, so companies
                can grow into any market without setting up in one.
              </p>
              <p>
                Recruitment is where we started and where our deepest experience lives: over 25
                years, across our founding team, placing technical and non-technical people, with
                a sharp edge in fintech and compliance hiring that most agencies cannot match. As
                clients asked us to do more, we added Employer of Record and staff offshoring, so
                a company can hire, employ, and scale a team through one accountable partner.
              </p>
              <p>
                We are deliberately honest about our footprint. Our offices are in Pakistan, our
                delivery hub, and the United States, our commercial entity in Virginia. Our reach
                is far wider: we recruit, employ, and deploy talent across the GCC, MENA, Europe,
                North America, APAC, and LATAM. Real entities, a named team, and a defined process
                behind every engagement.
              </p>
              <p>
                That is what ClearKanvas Global is here to do: connect companies to the people who
                will move them forward, and give those people meaningful, lasting work. The right
                people, anywhere in the world.
              </p>
            </div>
          </div>
        </section>
        <section className="section cta-band cta-band-static">
          <div className="wrap cta-inner reveal">
            <h2>Tell us who you need.</h2>
            <p>We will find them, employ them, and run it for you. A real person replies within one business day.</p>
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
