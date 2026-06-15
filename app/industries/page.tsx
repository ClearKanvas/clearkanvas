import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import IndustriesMain from "@/components/IndustriesMain";

export const metadata: Metadata = {
  title: "Industries | ClearKanvas",
  description:
    "Sector context for the way we run your finance, support, and back office. From technology and professional services to healthcare, real estate, and logistics.",
};

export default function IndustriesPage() {
  return (
    <>
      <Nav />
      <main id="top">
        <IndustriesMain />
      </main>
      <Footer />
      <ScrollReveal />
    </>
  );
}
