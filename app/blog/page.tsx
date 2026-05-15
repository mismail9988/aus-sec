import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Security Insights & Blog | Security Guard Company Melbourne",
  description: "Expert security insights, tips, and industry news from Security Guard Company Melbourne. Stay informed about the latest in security technology and best practices.",
  alternates: { canonical: "/blog/" },
  openGraph: {
    title: "Security Insights & Blog | Security Guard Company Melbourne",
    description: "Expert security insights, tips, and industry news from Security Guard Company Melbourne. Stay informed about the latest in security technology and best practices.",
    url: "https://securityguardcompanymelbourne.com/blog/",
    siteName: "Security Guard Company Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

const posts = [
  {
    slug: "do-i-need-static-guards-or-mobile-patrols",
    title: "Do I Need Static Security Guards or Mobile Patrols?",
    excerpt: "Understanding the difference between static guarding and mobile patrol services — and which is right for your business situation.",
    category: "Security Advice",
    date: "15 May 2025",
    readTime: "5 min read",
  },
  {
    slug: "how-many-security-guards-do-i-need-for-my-event",
    title: "How Many Security Guards Do I Need for My Event?",
    excerpt: "A practical guide to calculating the right number of security guards for your event — industry ratios, risk factors, and what affects staffing numbers.",
    category: "Event Security",
    date: "12 May 2025",
    readTime: "7 min read",
  },
  {
    slug: "event-security-planning-guide",
    title: "Event Security Planning Guide for Melbourne Events",
    excerpt: "How to plan event security properly — from risk assessment and security management plans to briefing your team on the night.",
    category: "Event Security",
    date: "5 May 2025",
    readTime: "9 min read",
  },
  {
    slug: "cctv-for-small-business-melbourne",
    title: "CCTV for Small Business Melbourne: What You Need to Know",
    excerpt: "A practical, no-nonsense guide to CCTV — what works, what doesn't, privacy rules, and how to actually use footage when you need it.",
    category: "Electronic Security",
    date: "28 April 2025",
    readTime: "8 min read",
  },
  {
    slug: "alarm-system-guide-melbourne-business",
    title: "Alarm System Guide for Melbourne Businesses",
    excerpt: "What type of alarm system do you need, and what should you actually pay for monitoring? A complete guide for Melbourne businesses.",
    category: "Electronic Security",
    date: "20 April 2025",
    readTime: "7 min read",
  },
  {
    slug: "security-guard-licence-victoria",
    title: "Security Guard Licensing in Victoria Explained",
    excerpt: "What licences security guards and companies need, how to verify them, and why it matters when hiring a security provider.",
    category: "Industry",
    date: "15 April 2025",
    readTime: "6 min read",
  },
  {
    slug: "access-control-systems-melbourne-offices",
    title: "Access Control Systems for Melbourne Offices",
    excerpt: "Cards, biometrics, cloud platforms — what type of access control does your office actually need and how do you implement it properly?",
    category: "Electronic Security",
    date: "8 April 2025",
    readTime: "7 min read",
  },
  {
    slug: "security-guard-cost-australia",
    title: "Security Guard Cost Australia 2025: What You Should Expect to Pay",
    excerpt: "What security guards actually cost in Australia, why Award compliance matters, and how to evaluate a quote properly — including common red flags.",
    category: "Security Advice",
    date: "10 May 2025",
    readTime: "8 min read",
  },
  {
    slug: "retail-security-self-checkout-era",
    title: "Retail Security in the Self-Checkout Era",
    excerpt: "How self-checkout has changed retail theft patterns and what loss prevention strategies actually work — AI monitoring, receipt checking, and staff training.",
    category: "Retail",
    date: "2 May 2025",
    readTime: "6 min read",
  },
  {
    slug: "construction-security-victoria",
    title: "Construction Site Security in Victoria: What Actually Works",
    excerpt: "The real theft risks on Victorian construction sites and the combination of measures that actually delivers cost-effective protection.",
    category: "Construction",
    date: "25 April 2025",
    readTime: "7 min read",
  },
  {
    slug: "healthcare-security-aggression-management",
    title: "Managing Patient Aggression in Healthcare Security",
    excerpt: "How healthcare security teams manage aggression — de-escalation, environment design, when physical intervention is appropriate, and the clinical dimension.",
    category: "Healthcare",
    date: "18 April 2025",
    readTime: "7 min read",
  },
  {
    slug: "mobile-patrol-vs-static-guard-cost",
    title: "Mobile Patrol vs Static Guard: Which Is More Cost-Effective?",
    excerpt: "The real cost difference between mobile patrols and static guards — when each is appropriate and how to get the right solution for your budget.",
    category: "Security Advice",
    date: "14 April 2025",
    readTime: "6 min read",
  },
  {
    slug: "corporate-security-office-buildings",
    title: "Building a Corporate Security Program for Melbourne Office Buildings",
    excerpt: "How to build an effective, layered corporate security program — concierge roles, access control, visitor management, and after-hours protection.",
    category: "Security Advice",
    date: "8 April 2025",
    readTime: "7 min read",
  },
  {
    slug: "crowd-control-licensed-venues-victoria",
    title: "Crowd Control for Licensed Venues in Victoria: What the Law Requires",
    excerpt: "What Victorian law requires for security at licensed premises — licensing obligations, RSA, the Exclusion Register, use of force, and incident reporting.",
    category: "Industry",
    date: "1 April 2025",
    readTime: "6 min read",
  },
  {
    slug: "what-to-look-for-in-a-security-provider",
    title: "What to Look for in a Commercial Security Provider",
    excerpt: "Choosing the right security company is one of the most important decisions you'll make for your business. Here's what to look for.",
    category: "Security Advice",
    date: "2 May 2025",
    readTime: "6 min read",
  },
  {
    slug: "retail-security-loss-prevention",
    title: "Using Innovative Security to Improve Retail Performance",
    excerpt: "How modern retail security goes beyond loss prevention to actively improve the customer experience and operational efficiency.",
    category: "Retail",
    date: "20 April 2025",
    readTime: "4 min read",
  },
  {
    slug: "mobile-patrols-protect-business",
    title: "How Mobile Patrols Can Protect Your Business Quickly and Effectively",
    excerpt: "Mobile patrol security offers flexibility, visibility, and cost-effectiveness that static guarding cannot always match.",
    category: "Mobile Patrols",
    date: "10 April 2025",
    readTime: "5 min read",
  },
  {
    slug: "healthcare-security-challenges",
    title: "The Biggest Challenges in Healthcare Security — and How to Address Them",
    excerpt: "Healthcare environments face unique security demands. We explore the key challenges and proven strategies to manage them effectively.",
    category: "Healthcare",
    date: "28 March 2025",
    readTime: "7 min read",
  },
  {
    slug: "construction-site-security-tips",
    title: "3 Ways to Protect Your Construction Site from Theft and Vandalism",
    excerpt: "Construction sites lose millions to theft each year. These three strategies can dramatically reduce your exposure.",
    category: "Construction",
    date: "15 March 2025",
    readTime: "4 min read",
  },
  {
    slug: "access-control-best-practices",
    title: "Access Control Best Practices for Melbourne Businesses",
    excerpt: "Credential audits, least privilege, time restrictions, visitor management — the eight practices that actually close access control gaps.",
    category: "Electronic Security",
    date: "2 May 2025",
    readTime: "6 min read",
  },
  {
    slug: "security-budget-guide",
    title: "How to Budget for Business Security in Melbourne",
    excerpt: "A practical framework for building a security budget — what things cost, what to prioritise, and how to get maximum impact from your spend.",
    category: "Security Advice",
    date: "10 May 2025",
    readTime: "8 min read",
  },
];

const categories = ["All", "Security Advice", "Event Security", "Electronic Security", "Industry", "Retail", "Healthcare", "Mobile Patrols", "Construction"];

export default function BlogPage() {
  return (
    <>
      <section className="bg-[#1a1a2e] py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "repeating-linear-gradient(45deg,#ffffff08 0,#ffffff08 1px,transparent 0,transparent 50%)", backgroundSize: "20px 20px" }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#c8102e] text-xs uppercase tracking-widest font-bold mb-4">Knowledge Hub</p>
          <h1 className="text-4xl md:text-5xl font-black text-white uppercase leading-tight mb-4">Security Insights</h1>
          <div className="w-12 h-1 bg-[#c8102e] mb-6" />
          <p className="text-gray-300 text-lg max-w-2xl leading-relaxed font-light">
            Expert advice, industry news, and security best practices from Melbourne&apos;s trusted security specialists.
          </p>
        </div>
      </section>

      <div className="bg-[#f4f4f4] border-b border-gray-200 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-xs text-gray-500">
          <Link href="/" className="hover:text-[#c8102e] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[#2d2d2d] font-semibold">Insights</span>
        </div>
      </div>

      {/* Categories */}
      <div className="bg-white border-b border-gray-100 sticky top-[120px] z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-0 overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-5 py-4 text-xs font-bold uppercase tracking-wide whitespace-nowrap border-b-2 transition-colors ${
                  cat === "All"
                    ? "border-[#c8102e] text-[#c8102e]"
                    : "border-transparent text-[#767676] hover:text-[#2d2d2d]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured post */}
          <div className="mb-10">
            <Link href={`/blog/${posts[0].slug}`} className="group block bg-[#1a1a2e] p-10 hover:shadow-xl transition-shadow">
              <div className="flex flex-col lg:flex-row gap-8 items-start">
                <div className="flex-1">
                  <span className="inline-block bg-[#c8102e] text-white text-xs font-bold uppercase tracking-widest px-3 py-1 mb-5">
                    {posts[0].category}
                  </span>
                  <h2 className="text-3xl font-black text-white uppercase leading-tight mb-4 group-hover:text-[#c8102e] transition-colors">
                    {posts[0].title}
                  </h2>
                  <p className="text-gray-400 leading-relaxed mb-6">{posts[0].excerpt}</p>
                  <div className="flex items-center gap-4 text-gray-500 text-xs">
                    <span>{posts[0].date}</span>
                    <span>•</span>
                    <span>{posts[0].readTime}</span>
                  </div>
                </div>
                <div className="text-[#c8102e] shrink-0">
                  <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
              </div>
            </Link>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200">
            {posts.slice(1).map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group bg-white p-8 hover:shadow-md transition-shadow flex flex-col">
                <span className="inline-block text-[#c8102e] text-xs font-bold uppercase tracking-widest mb-4">
                  {post.category}
                </span>
                <h2 className="text-[#1a1a2e] font-black text-lg uppercase leading-tight mb-3 group-hover:text-[#c8102e] transition-colors flex-1">
                  {post.title}
                </h2>
                <p className="text-[#767676] text-sm leading-relaxed mb-5 line-clamp-3">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="text-gray-400 text-xs">{post.date} · {post.readTime}</div>
                  <svg className="w-4 h-4 text-[#c8102e] group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
