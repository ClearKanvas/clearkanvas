import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy | ClearKanvas Global",
  description: "How ClearKanvas Global collects, uses, and protects your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="June 2026"
      intro="This policy explains what information ClearKanvas Global collects, how we use it, and the choices you have."
      sections={[
        {
          h: "Who we are",
          body: [
            "ClearKanvas Global provides finance, talent, technology, and operations services to clients in the USA, Pakistan, and Bahrain, and is growing into new markets, delivered from our operations base in Pakistan. In this policy, \"ClearKanvas Global\", \"we\", \"us\", and \"our\" refer to ClearKanvas Global.",
          ],
        },
        {
          h: "Information we collect",
          body: [
            "We collect information you give us directly, such as your name, work email, company, country, and the details you include when you contact us through our website or by email.",
            "We also collect limited technical information automatically when you visit our site, such as your browser type, device, and pages viewed, to help us understand how the site is used and to keep it secure.",
          ],
        },
        {
          h: "How we use your information",
          body: [
            "We use the information you provide to respond to your enquiry, to discuss how we might work together, and to deliver and improve our services.",
            "We do not sell your personal information. We will only use your details for the purposes described here or as required by law.",
          ],
        },
        {
          h: "How we share information",
          body: [
            "We may share information with trusted service providers who help us operate our business and website, under appropriate confidentiality and data-protection obligations. We may also disclose information where required by law.",
          ],
        },
        {
          h: "Data retention and security",
          body: [
            "We keep personal information only for as long as needed for the purposes described here, then delete or anonymize it. We use reasonable technical and organizational measures to protect your information.",
          ],
        },
        {
          h: "Your rights",
          body: [
            "Depending on where you are, you may have rights to access, correct, or delete your personal information, or to object to certain processing. To make a request, contact us using the details below.",
          ],
        },
      ]}
    />
  );
}
