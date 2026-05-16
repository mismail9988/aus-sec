import type { MetadataRoute } from "next";

const BASE_URL = "https://securityguardcompanymelbourne.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const static_pages = [
    "/",
    "/about",
    "/contact",
    "/careers",
    "/sustainability",
    "/security-guard-cost",
    "/security-company-melbourne",
    "/hire-security-guard-melbourne",
    "/reviews",
    "/case-studies",
    "/free-security-audit",
    "/emergency-security",
    "/faqs",
    "/book",
  ];

  const service_pages = [
    "/services",
    "/services/security-guards",
    "/services/mobile-patrols",
    "/services/event-security",
    "/services/retail-security",
    "/services/corporate-security",
    "/services/crowd-control",
    "/services/loss-prevention",
    "/services/concierge-security",
    "/services/canine-security",
    "/services/armed-security",
    "/services/electronic-security",
    "/services/electronic-security/cctv",
    "/services/electronic-security/access-control",
    "/services/electronic-security/alarms",
    "/services/construction-security",
  ];

  const booking_pages = [
    "/book/event-security",
    "/book/mobile-patrols",
    "/book/corporate-security",
    "/book/retail-security",
    "/book/construction-security",
    "/book/crowd-control",
    "/book/canine-security",
    "/book/concierge-security",
    "/book/armed-security",
    "/book/loss-prevention",
    "/book/emergency-security",
    "/book/contract-security",
    "/book/security-audit",
  ];

  const sector_pages = [
    "/sectors",
    "/sectors/healthcare",
    "/sectors/retail",
    "/sectors/corporate",
    "/sectors/government",
    "/sectors/education",
    "/sectors/commercial-real-estate",
    "/sectors/aviation",
    "/sectors/construction",
    "/sectors/hospitality",
    "/sectors/events",
    "/sectors/aged-care",
    "/sectors/warehousing",
    "/sectors/transport",
    "/sectors/industrial",
  ];

  const location_pages = [
    "/locations",
    "/locations/melbourne-cbd",
    "/locations/south-melbourne",
    "/locations/docklands",
    "/locations/fitzroy",
    "/locations/richmond",
    "/locations/st-kilda",
    "/locations/collingwood",
    "/locations/port-melbourne",
    "/locations/box-hill",
    "/locations/ringwood",
    "/locations/croydon",
    "/locations/mooroolbark",
    "/locations/glen-waverley",
    "/locations/mitcham",
    "/locations/dandenong",
    "/locations/frankston",
    "/locations/pakenham",
    "/locations/berwick",
    "/locations/cranbourne",
    "/locations/narre-warren",
    "/locations/broadmeadows",
    "/locations/epping",
    "/locations/thomastown",
    "/locations/reservoir",
    "/locations/coburg",
    "/locations/footscray",
    "/locations/sunshine",
    "/locations/werribee",
    "/locations/hoppers-crossing",
    "/locations/point-cook",
    "/locations/geelong",
    "/locations/ballarat",
    "/locations/bendigo",
    "/locations/shepparton",
    "/locations/wodonga",
  ];

  const blog_pages = [
    "/blog",
    "/blog/do-i-need-static-guards-or-mobile-patrols",
    "/blog/what-to-look-for-in-a-security-provider",
    "/blog/mobile-patrols-protect-business",
    "/blog/healthcare-security-challenges",
    "/blog/retail-security-loss-prevention",
    "/blog/construction-site-security-tips",
    "/blog/how-many-security-guards-do-i-need-for-my-event",
    "/blog/event-security-planning-guide",
    "/blog/cctv-for-small-business-melbourne",
    "/blog/alarm-system-guide-melbourne-business",
    "/blog/security-guard-licence-victoria",
    "/blog/access-control-systems-melbourne-offices",
    "/blog/security-guard-cost-australia",
    "/blog/retail-security-self-checkout-era",
    "/blog/construction-security-victoria",
    "/blog/healthcare-security-aggression-management",
    "/blog/mobile-patrol-vs-static-guard-cost",
    "/blog/corporate-security-office-buildings",
    "/blog/crowd-control-licensed-venues-victoria",
    "/blog/access-control-best-practices",
    "/blog/security-budget-guide",
  ];

  const all_pages = [
    ...static_pages,
    ...service_pages,
    ...booking_pages,
    ...sector_pages,
    ...location_pages,
    ...blog_pages,
  ];

  return all_pages.map((path) => ({
    url: `${BASE_URL}${path === "/" ? "/" : path.endsWith("/") ? path : path + "/"}`,
    lastModified: now,
    changeFrequency: path === "/" ? "weekly" : path.startsWith("/blog/") ? "monthly" : "monthly",
    priority:
      path === "/" ? 1.0
      : path.startsWith("/services/") && path.split("/").length === 3 ? 0.9
      : path.startsWith("/book/") && path !== "/book" ? 0.85
      : path.startsWith("/locations/") && path !== "/locations" ? 0.85
      : path.startsWith("/sectors/") && path !== "/sectors" ? 0.8
      : path.startsWith("/blog/") && path !== "/blog" ? 0.7
      : 0.8,
  }));
}
