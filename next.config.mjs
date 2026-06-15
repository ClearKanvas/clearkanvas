/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      // People & Compliance folded into HR & Talent Solutions.
      { source: "/services/people-and-compliance", destination: "/services/hr-talent", permanent: true },
      // Standalone Managed Services folded into Global Capability Centers.
      { source: "/services/managed-services", destination: "/services/global-capability-centers", permanent: true },
    ];
  },
};

export default nextConfig;
