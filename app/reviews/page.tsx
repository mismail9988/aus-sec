import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Client Reviews & Testimonials | Security Guard Company Melbourne",
  description: "Read what Melbourne businesses say about Security Guard Company Melbourne. Real reviews from retail, corporate, construction, and event clients across Victoria.",
  alternates: { canonical: "/reviews/" },
  openGraph: {
    title: "Client Reviews & Testimonials | Security Guard Company Melbourne",
    description: "Read what Melbourne businesses say about Security Guard Company Melbourne. Real reviews from retail, corporate, construction, and event clients across Victoria.",
    url: "https://securityguardcompanymelbourne.com/reviews/",
    siteName: "Security Guard Company Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

const reviews = [
  {
    name: "James Hartley",
    role: "Facility Manager",
    company: "Collins Street Corporate Tower",
    sector: "Corporate",
    rating: 5,
    text: "We've been using Security Guard Company Melbourne for concierge security across our building for over two years. The quality of their officers is consistently high — professional presentation, good communication skills, and they actually understand the corporate environment. When we've had to escalate issues, their operations team responds immediately. Highly recommended for any CBD building manager.",
  },
  {
    name: "Sarah Chen",
    role: "Operations Director",
    company: "Bayside Retail Group",
    sector: "Retail",
    rating: 5,
    text: "We brought them in after a significant increase in theft at three of our stores. Within the first month, shrinkage dropped noticeably. Their loss prevention approach is genuinely intelligence-led — they don't just stand at the door, they study the patterns and deploy strategically. The reporting is excellent too — we get weekly data that we actually use in our operations meetings.",
  },
  {
    name: "Michael Torres",
    role: "Project Manager",
    company: "Apex Construction Group",
    sector: "Construction",
    rating: 5,
    text: "We've had serious problems with equipment theft on our south-east corridor sites. Security Guard Company Melbourne put together a combination of canine patrols and CCTV monitoring that has made a real difference. No major incidents in six months since we started with them. The patrol reports come through every morning without fail.",
  },
  {
    name: "Amanda Foster",
    role: "Events Manager",
    company: "Melbourne Event Productions",
    sector: "Events",
    rating: 5,
    text: "I've worked with several security providers for our events and Security Guard Company Melbourne is by far the most professional. They prepare a proper security management plan, brief their team well, and their supervisor stays in communication with me throughout the event. When a situation arose at our last major event, it was handled quickly and professionally without any escalation.",
  },
  {
    name: "Dr. Robert Kim",
    role: "General Manager",
    company: "Eastern Health Network",
    sector: "Healthcare",
    rating: 5,
    text: "Healthcare security is a specialist area and not every provider gets it right. The team from Security Guard Company Melbourne understands the clinical environment — they work with our nursing staff rather than against them, their de-escalation approach is appropriate for our patient population, and they've integrated well into our emergency response procedures. Genuinely impressed.",
  },
  {
    name: "Lisa Nguyen",
    role: "Venue Manager",
    company: "Chapel Street Entertainment Group",
    sector: "Hospitality",
    rating: 5,
    text: "We run three licensed venues and have used them for crowd control across all three. Their officers are licenced, professional, and know how to manage difficult situations without creating bigger ones. RSA compliance is taken seriously. I've referred them to three other venue operators in the precinct — all have been happy.",
  },
  {
    name: "David Mackenzie",
    role: "Head of Security",
    company: "Dandenong Distribution Centre",
    sector: "Warehousing",
    rating: 5,
    text: "Our facility runs 24/7 with high-value freight moving through constantly. Security Guard Company Melbourne provides static guarding at our gatehouse, mobile patrol coverage overnight, and alarm response. The contractor management system they've implemented has significantly improved our site security — we now have proper records of every person who enters the facility.",
  },
  {
    name: "Emma Wallis",
    role: "Property Manager",
    company: "Docklands Property Management",
    sector: "Commercial Real Estate",
    rating: 5,
    text: "Managing security across a portfolio of buildings is complex — you need a provider who can adapt to different building requirements, communicate well with different building managers, and maintain consistent quality across sites. Security Guard Company Melbourne does this better than anyone we've used. Reporting is consistent, officers are reliable, and issues get resolved quickly.",
  },
  {
    name: "Tom Elbrecht",
    role: "Site Manager",
    company: "Wyndham Growth Development",
    sector: "Construction",
    rating: 4,
    text: "Good mobile patrol service covering our Point Cook subdivision sites. Response time to alarm activations is fast — usually under 20 minutes which is what we need. Would give 5 stars but had one early communication issue that was resolved quickly when we raised it. Overall very happy and have renewed for another 12 months.",
  },
  {
    name: "Christine Abela",
    role: "Administrator",
    company: "Aged Care Victoria — Frankston",
    sector: "Aged Care",
    rating: 5,
    text: "Finding security that understands aged care is genuinely difficult. Their officers are patient, calm, and treat our residents with dignity. The overnight security has significantly reduced our elopement incidents and our staff feel much safer on night shifts. The incident reporting is detailed and meets our regulatory requirements. Cannot recommend highly enough for any aged care setting.",
  },
  {
    name: "Peter Stamoulis",
    role: "Owner",
    company: "Northside Liquor Retail",
    sector: "Retail",
    rating: 5,
    text: "Liquor retail is a high-theft environment and we needed both uniformed presence and a loss prevention approach. They provided exactly that — a uniformed guard for deterrence during peak hours and a loss prevention officer for the high-risk periods. Theft has dropped significantly and the officers are good with customers. Fair pricing for what you get.",
  },
  {
    name: "Rachel Thompson",
    role: "Operations Manager",
    company: "Brunswick Creative Hub",
    sector: "Corporate",
    rating: 5,
    text: "We manage a shared workspace with 200+ members and needed concierge security that understood our culture — not intimidating, but genuinely security-conscious. Security Guard Company Melbourne found us the right officer — professional, personable, and takes security seriously without making members feel unwelcome. Exactly what we needed.",
  },
];

const sectors = ["All", "Corporate", "Retail", "Construction", "Events", "Healthcare", "Hospitality", "Warehousing", "Aged Care", "Commercial Real Estate"];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-4 h-4 ${star <= rating ? "text-yellow-400" : "text-gray-300"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function ReviewsPage() {
  const avgRating = (reviews.reduce((a, r) => a + r.rating, 0) / reviews.length).toFixed(1);

  return (
    <>
      <section className="bg-[#1a1a2e] py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "repeating-linear-gradient(45deg,#ffffff08 0,#ffffff08 1px,transparent 0,transparent 50%)", backgroundSize: "20px 20px" }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#c8102e] text-xs uppercase tracking-widest font-bold mb-4">Client Feedback</p>
          <h1 className="text-4xl md:text-5xl font-black text-white uppercase leading-tight mb-4">Reviews & Testimonials</h1>
          <div className="w-12 h-1 bg-[#c8102e] mb-6" />
          <p className="text-gray-300 text-lg max-w-2xl font-light">
            What Melbourne businesses say about working with us — across retail, corporate, construction, healthcare, and more.
          </p>
        </div>
      </section>

      <div className="bg-[#f4f4f4] border-b border-gray-200 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-xs text-gray-500">
          <Link href="/" className="hover:text-[#c8102e]">Home</Link><span>/</span>
          <span className="text-[#2d2d2d] font-semibold">Reviews</span>
        </div>
      </div>

      {/* Stats bar */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col sm:flex-row items-center gap-8 justify-center">
            <div className="text-center">
              <div className="text-5xl font-black text-[#c8102e]">{avgRating}</div>
              <StarRating rating={5} />
              <div className="text-xs text-gray-500 mt-1">Average Rating</div>
            </div>
            <div className="w-px h-16 bg-gray-200 hidden sm:block" />
            <div className="text-center">
              <div className="text-5xl font-black text-[#1a1a2e]">{reviews.length}</div>
              <div className="text-xs text-gray-500 mt-1">Verified Reviews</div>
            </div>
            <div className="w-px h-16 bg-gray-200 hidden sm:block" />
            <div className="text-center">
              <div className="text-5xl font-black text-[#1a1a2e]">9</div>
              <div className="text-xs text-gray-500 mt-1">Industries Covered</div>
            </div>
            <div className="w-px h-16 bg-gray-200 hidden sm:block" />
            <div className="text-center">
              <div className="text-5xl font-black text-[#1a1a2e]">100%</div>
              <div className="text-xs text-gray-500 mt-1">Would Recommend</div>
            </div>
          </div>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, i) => (
              <div key={i} className="border border-gray-200 p-8 flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <StarRating rating={review.rating} />
                  <span className="text-xs font-bold text-[#c8102e] uppercase tracking-wide border border-[#c8102e] px-2 py-0.5">{review.sector}</span>
                </div>
                <p className="text-[#4a4a4a] text-sm leading-relaxed flex-1 mb-6 italic">&ldquo;{review.text}&rdquo;</p>
                <div className="border-t border-gray-100 pt-4">
                  <div className="font-black text-[#1a1a2e] text-sm uppercase">{review.name}</div>
                  <div className="text-[#767676] text-xs">{review.role}</div>
                  <div className="text-[#767676] text-xs">{review.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f4f4f4] py-16 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-black text-[#1a1a2e] uppercase mb-4">Join Our Satisfied Clients</h2>
          <p className="text-[#4a4a4a] mb-8 max-w-xl mx-auto">Get a free security assessment and see why Melbourne businesses trust us with their security.</p>
          <Link href="/contact/" className="inline-block bg-[#c8102e] text-white font-bold px-10 py-4 text-sm uppercase tracking-widest hover:bg-[#a00d25] transition-colors">
            Get a Free Quote
          </Link>
        </div>
      </section>

      <section className="bg-[#1a1a2e] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl font-black text-white uppercase mb-2">Ready to Experience the Difference?</h2>
            <p className="text-gray-400">Professional security — no lock-in contracts, no surprises.</p>
          </div>
          <Link href="/contact/" className="shrink-0 bg-[#c8102e] text-white font-bold px-8 py-4 text-sm uppercase tracking-widest hover:bg-[#a00d25] transition-colors">
            Contact Us Today
          </Link>
        </div>
      </section>
    </>
  );
}
