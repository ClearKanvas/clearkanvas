import type { Metadata } from "next";
import Nav from "@/components/Nav";
import ContactMain from "@/components/ContactMain";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Contact ClearKanvas Global: Where complexity becomes clarity",
  description:
    "Tell us where the complexity is and we will show you how we can help. The right person on our team will get back to you within two business days.",
};

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main id="top">
        <ContactMain />
      </main>
      <Footer />
      <ScrollReveal />
    </>
  );
}
