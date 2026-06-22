import type { MetadataRoute } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.clearkanvas.com";

// Search + AI/answer-engine crawlers we explicitly welcome (so the site can be
// indexed by Google/Bing and cited by ChatGPT, Gemini, Copilot, Perplexity,
// Claude, Grok, etc.). The wildcard rule already allows all; these make intent
// explicit and ensure AI-specific bots (e.g. Google-Extended) are opted in.
const AI_AND_SEARCH_BOTS = [
  "Googlebot",
  "Google-Extended",
  "Bingbot",
  "DuckDuckBot",
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "anthropic-ai",
  "ClaudeBot",
  "Claude-Web",
  "PerplexityBot",
  "Perplexity-User",
  "Google-CloudVertexBot",
  "Applebot",
  "Applebot-Extended",
  "Amazonbot",
  "CCBot",
  "cohere-ai",
  "Meta-ExternalAgent",
  "Bytespider",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/api/"] },
      { userAgent: AI_AND_SEARCH_BOTS, allow: "/", disallow: ["/api/"] },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
