export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://securityguardcompanymelbourne.com",
    name: "Security Guard Company Melbourne",
    description:
      "Melbourne's trusted security guard company. Professional, licenced security services for corporate, retail, events, and residential clients across Melbourne and Victoria.",
    url: "https://securityguardcompanymelbourne.com",
    email: "info@securityguardcompanymelbourne.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Melbourne",
      addressRegion: "VIC",
      addressCountry: "AU",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -37.8136,
      longitude: 144.9631,
    },
    areaServed: [
      { "@type": "City", name: "Melbourne" },
      { "@type": "State", name: "Victoria" },
    ],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday", "Tuesday", "Wednesday", "Thursday",
        "Friday", "Saturday", "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Security Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Security Guards Melbourne" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Mobile Patrol Services" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Event Security" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Retail Loss Prevention" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Corporate Security" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Crowd Control" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "CCTV Installation & Monitoring" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Access Control Systems" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Alarm Systems & Monitoring" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Canine Security" } },
      ],
    },
    sameAs: [],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
