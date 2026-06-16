import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Use | ClearKanvas Global",
  description: "The terms that govern your use of the ClearKanvas Global website.",
};

export default function TermsOfUsePage() {
  return (
    <LegalPage
      title="Terms of Use"
      updated="June 2026"
      intro="These terms govern your use of the ClearKanvas Global website. By using the site, you agree to them."
      sections={[
        {
          h: "Using this website",
          body: [
            "You may use this website for lawful purposes and in line with these terms. You agree not to use the site in any way that could damage it, disrupt access for others, or break any applicable law.",
          ],
        },
        {
          h: "Our content",
          body: [
            "The content on this website, including text, graphics, logos, and design, belongs to ClearKanvas Global or its licensors and is protected by intellectual-property laws. You may view and share it for personal, non-commercial reference, but you may not copy, republish, or use it commercially without our permission.",
          ],
        },
        {
          h: "No professional advice",
          body: [
            "The information on this site is provided for general information only. It is not financial, legal, tax, or other professional advice, and you should not rely on it as such. For advice specific to your situation, please get in touch.",
          ],
        },
        {
          h: "Links to other sites",
          body: [
            "Our site may link to third-party websites we do not control. We are not responsible for their content or practices, and a link does not imply our endorsement.",
          ],
        },
        {
          h: "Limitation of liability",
          body: [
            "We aim to keep the site accurate and available, but we provide it on an \"as is\" basis without warranties of any kind. To the extent permitted by law, ClearKanvas Global is not liable for any loss arising from your use of, or inability to use, this website.",
          ],
        },
        {
          h: "Changes to these terms",
          body: [
            "We may update these terms from time to time. The version posted here is the current one, and continued use of the site means you accept any changes.",
          ],
        },
      ]}
    />
  );
}
