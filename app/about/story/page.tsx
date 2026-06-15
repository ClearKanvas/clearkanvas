import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import PageHero from "@/components/PageHero";
import Arrow from "@/components/Arrow";

export const metadata: Metadata = {
  title: "Our Story | ClearKanvas",
  description:
    "ClearKanvas was founded to give growing companies a third option: senior operators who advise, build, and run.",
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
                ClearKanvas was founded on a simple frustration: growing companies are forced
                to choose between operations they cannot afford to staff well and providers who
                deliver thin work at arm&apos;s length.
              </p>
              <p>
                We built a third option. A partner run by senior operators who have led finance
                and people functions at scale, combined with a delivery base that changes the
                economics.
              </p>
              <p>
                We advise, we build, and we run. That is what turns complexity into clarity, and
                it is the standard we hold on every engagement.
              </p>
            </div>
          </div>
        </section>
        <section className="section cta-band cta-band-static">
          <div className="wrap cta-inner reveal">
            <h2>Build with a partner that owns the outcome.</h2>
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
