import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          { key: "Content-Security-Policy", value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https://uciyowykrthlvezhdpjq.supabase.co https://api.resend.com; frame-ancestors 'none';" },
        ],
      },
    ];
  },

  async redirects() {
    return [
      // Old blog slugs that may have been shared without trailing slash — covered by trailingSlash
      // Common URL variants people might try
      { source: "/services/electronic-security/cctv-surveillance", destination: "/services/electronic-security/cctv/", permanent: true },
      { source: "/services/alarm-systems", destination: "/services/electronic-security/alarms/", permanent: true },
      { source: "/services/alarms", destination: "/services/electronic-security/alarms/", permanent: true },
      { source: "/services/cctv", destination: "/services/electronic-security/cctv/", permanent: true },
      { source: "/services/access-control", destination: "/services/electronic-security/access-control/", permanent: true },
      { source: "/services/guards", destination: "/services/security-guards/", permanent: true },
      { source: "/services/guard", destination: "/services/security-guards/", permanent: true },
      { source: "/services/events", destination: "/services/event-security/", permanent: true },
      { source: "/services/retail", destination: "/services/retail-security/", permanent: true },
      { source: "/services/corporate", destination: "/services/corporate-security/", permanent: true },
      { source: "/services/crowd", destination: "/services/crowd-control/", permanent: true },
      { source: "/services/dogs", destination: "/services/canine-security/", permanent: true },
      { source: "/services/dog-security", destination: "/services/canine-security/", permanent: true },
      { source: "/services/concierge", destination: "/services/concierge-security/", permanent: true },
      { source: "/services/loss", destination: "/services/loss-prevention/", permanent: true },
      { source: "/services/armed", destination: "/services/armed-security/", permanent: true },
      { source: "/services/patrol", destination: "/services/mobile-patrols/", permanent: true },
      { source: "/services/patrols", destination: "/services/mobile-patrols/", permanent: true },

      // Sector variants
      { source: "/sectors/aged", destination: "/sectors/aged-care/", permanent: true },
      { source: "/sectors/hotel", destination: "/sectors/hospitality/", permanent: true },
      { source: "/sectors/hotels", destination: "/sectors/hospitality/", permanent: true },
      { source: "/sectors/event", destination: "/sectors/events/", permanent: true },
      { source: "/sectors/warehouse", destination: "/sectors/warehousing/", permanent: true },
      { source: "/sectors/logistics", destination: "/sectors/warehousing/", permanent: true },
      { source: "/sectors/real-estate", destination: "/sectors/commercial-real-estate/", permanent: true },
      { source: "/sectors/airport", destination: "/sectors/aviation/", permanent: true },
      { source: "/sectors/industrial-security", destination: "/sectors/industrial/", permanent: true },

      // Location variants
      { source: "/locations/cbd", destination: "/locations/melbourne-cbd/", permanent: true },
      { source: "/locations/south-yarra", destination: "/locations/south-melbourne/", permanent: true },
      { source: "/locations/hopperscrossing", destination: "/locations/hoppers-crossing/", permanent: true },
      { source: "/locations/glenwaverley", destination: "/locations/glen-waverley/", permanent: true },
      { source: "/locations/pointcook", destination: "/locations/point-cook/", permanent: true },
      { source: "/locations/narrewarren", destination: "/locations/narre-warren/", permanent: true },
      { source: "/locations/boxhill", destination: "/locations/box-hill/", permanent: true },
      { source: "/locations/stkilda", destination: "/locations/st-kilda/", permanent: true },

      // Generic top-level redirects
      { source: "/pricing", destination: "/security-guard-cost/", permanent: true },
      { source: "/cost", destination: "/security-guard-cost/", permanent: true },
      { source: "/rates", destination: "/security-guard-cost/", permanent: true },
      { source: "/price", destination: "/security-guard-cost/", permanent: true },
      { source: "/hire", destination: "/hire-security-guard-melbourne/", permanent: true },
      { source: "/get-a-quote", destination: "/contact/", permanent: true },
      { source: "/quote", destination: "/contact/", permanent: true },
      { source: "/free-quote", destination: "/contact/", permanent: true },
      { source: "/enquiry", destination: "/contact/", permanent: true },
      { source: "/enquire", destination: "/contact/", permanent: true },
      { source: "/industries", destination: "/sectors/", permanent: true },
      { source: "/industry", destination: "/sectors/", permanent: true },
      { source: "/blog/event-security-planning", destination: "/blog/event-security-planning-guide/", permanent: true },
      { source: "/insights", destination: "/blog/", permanent: true },
      { source: "/news", destination: "/blog/", permanent: true },
      { source: "/articles", destination: "/blog/", permanent: true },
      { source: "/area", destination: "/locations/", permanent: true },
      { source: "/areas", destination: "/locations/", permanent: true },
      { source: "/coverage", destination: "/locations/", permanent: true },
      { source: "/where-we-operate", destination: "/locations/", permanent: true },
      { source: "/jobs", destination: "/careers/", permanent: true },
      { source: "/work-with-us", destination: "/careers/", permanent: true },
      { source: "/join", destination: "/careers/", permanent: true },
      { source: "/team", destination: "/about/", permanent: true },
      { source: "/who-we-are", destination: "/about/", permanent: true },
      { source: "/company", destination: "/about/", permanent: true },
    ];
  },
};

export default nextConfig;
