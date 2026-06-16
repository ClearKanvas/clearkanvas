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
    "ClearKanvas Global was founded to give growing companies a third option: senior operators who advise, build, and run.",
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
                Every business begins with a vision and a clear canvas to build it on. We make
                sure the work of running it never slows that vision down.
              </p>
              <p>
                ClearKanvas Global was founded on a simple belief: growing companies deserve
                world-class operations, run by people who own the outcome. So we built exactly
                that.
              </p>
              <p>
                We are a business services partner led by senior operators who have run finance,
                HR, and operations at scale, paired with a delivery base that changes the
                economics. We do not just advise. We build, and we run. That is how complexity
                becomes clarity, and it is the standard we hold on every engagement.
              </p>
              <p>
                We also believe great work should create opportunity. By connecting our clients
                with Pakistan&apos;s exceptional talent, we deliver world-class results for
                businesses and meaningful, lasting work for the people who power them. Investing
                in people is how we build value that lasts.
              </p>
              <p>
                That is what ClearKanvas Global is here to do: give companies stronger
                foundations, unlock new possibilities, and help them build a future defined by
                clarity, excellence, and growth.
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
