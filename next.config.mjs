/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      // Retired 8-service GBS model. Map old service URLs to the closest of the
      // 3 core services (or the services index), so indexed links do not 404.
      { source: "/services/hr-talent", destination: "/services/recruitment", permanent: true },
      { source: "/services/people-and-compliance", destination: "/services/recruitment", permanent: true },
      { source: "/services/global-capability-centers", destination: "/services/staff-offshoring", permanent: true },
      { source: "/services/managed-services", destination: "/services/staff-offshoring", permanent: true },
      { source: "/services/finance-accounting", destination: "/services", permanent: true },
      { source: "/services/fpa-reporting-bi", destination: "/services", permanent: true },
      { source: "/services/customer-experience", destination: "/services", permanent: true },
      { source: "/services/ai-automation", destination: "/services", permanent: true },
      { source: "/services/technology-digital", destination: "/services", permanent: true },
      { source: "/services/advisory-transformation", destination: "/services", permanent: true },
      // Retired sections.
      { source: "/industries", destination: "/services", permanent: true },
      { source: "/how-we-work", destination: "/about", permanent: true },
      { source: "/how-we-work/:path*", destination: "/about", permanent: true },
      { source: "/about/mission-vision-values", destination: "/about", permanent: true },
      { source: "/about/leadership", destination: "/about", permanent: true },
      { source: "/about/global-presence", destination: "/about", permanent: true },
    ];
  },
};

export default nextConfig;
