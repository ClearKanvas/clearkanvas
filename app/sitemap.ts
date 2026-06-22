import type { MetadataRoute } from "next";
import { SERVICES } from "@/lib/services";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.clearkanvas.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPaths: { path: string; priority: number }[] = [
    { path: "/", priority: 1.0 },
    { path: "/services", priority: 0.9 },
    { path: "/industries", priority: 0.8 },
    { path: "/how-we-work", priority: 0.8 },
    { path: "/how-we-work/engagement-models", priority: 0.6 },
    { path: "/how-we-work/process", priority: 0.6 },
    { path: "/how-we-work/why-clearkanvas", priority: 0.6 },
    { path: "/how-we-work/why-pakistan", priority: 0.6 },
    { path: "/about", priority: 0.8 },
    { path: "/about/story", priority: 0.6 },
    { path: "/about/mission-vision-values", priority: 0.6 },
    { path: "/about/leadership", priority: 0.6 },
    { path: "/about/global-presence", priority: 0.6 },
    { path: "/contact", priority: 0.9 },
    { path: "/privacy-policy", priority: 0.3 },
    { path: "/terms-of-use", priority: 0.3 },
    { path: "/cookie-policy", priority: 0.3 },
  ];

  const staticEntries: MetadataRoute.Sitemap = staticPaths.map(({ path, priority }) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority,
  }));

  const serviceEntries: MetadataRoute.Sitemap = SERVICES.map((s) => ({
    url: `${SITE_URL}/services/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticEntries, ...serviceEntries];
}
