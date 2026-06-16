import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Cookie Policy | ClearKanvas Global",
  description: "How ClearKanvas Global uses cookies and similar technologies on its website.",
};

export default function CookiePolicyPage() {
  return (
    <LegalPage
      title="Cookie Policy"
      updated="June 2026"
      intro="This policy explains how ClearKanvas Global uses cookies and similar technologies on our website."
      sections={[
        {
          h: "What cookies are",
          body: [
            "Cookies are small text files stored on your device when you visit a website. They help the site work, remember your preferences, and understand how it is used.",
          ],
        },
        {
          h: "How we use cookies",
          body: [
            "We use essential cookies that are needed for the site to function. Where applicable, we may also use analytics cookies to understand how visitors use the site so we can improve it. We do not use cookies to sell your personal information.",
          ],
        },
        {
          h: "Managing cookies",
          body: [
            "Most browsers let you control cookies through their settings, including blocking or deleting them. Note that disabling some cookies may affect how parts of the site work.",
          ],
        },
        {
          h: "Changes to this policy",
          body: [
            "We may update this policy as our use of cookies changes. The version posted here is the current one.",
          ],
        },
      ]}
    />
  );
}
