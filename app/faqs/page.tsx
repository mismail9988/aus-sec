import type { Metadata } from "next";
import Link from "next/link";
import { supabaseAdmin } from "@/lib/supabase";

export const metadata: Metadata = {
  title: "Security Guard FAQs Melbourne | Security Guard Company Melbourne",
  description: "Answers to the most common questions about hiring security guards in Melbourne — licensing, pricing, deployment, contracts, and more.",
  alternates: { canonical: "/faqs/" },
  openGraph: {
    title: "Security Guard FAQs Melbourne | Security Guard Company Melbourne",
    description: "Answers to the most common questions about hiring security guards in Melbourne.",
    url: "https://securityguardcompanymelbourne.com/faqs/",
    siteName: "Security Guard Company Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

const fallbackFaqs: Record<string, { question: string; answer: string }[]> = {
  General: [
    {
      question: "How quickly can you deploy security guards?",
      answer: "We can typically deploy security guards within 24–48 hours for standard requirements. For urgent or emergency security needs, we often provide same-day deployment. Contact us directly for urgent requests.",
    },
    {
      question: "Do your security guards carry weapons?",
      answer: "Standard security guards are unarmed. We do offer licenced armed security officers for high-risk environments such as cash-in-transit operations and high-value asset protection — these are deployed on a case-by-case basis based on your risk assessment.",
    },
    {
      question: "Are your security guards covered by insurance?",
      answer: "Yes. All our guards are covered by comprehensive public liability insurance and professional indemnity insurance. We can provide certificates of currency on request.",
    },
  ],
  Licensing: [
    {
      question: "Are your security guards licenced in Victoria?",
      answer: "Yes. Every security guard we deploy holds a valid Victoria security licence issued under the Private Security Act 2004. We verify all licences prior to deployment and maintain ongoing compliance checks.",
    },
    {
      question: "How can I verify a security guard's licence?",
      answer: "Victoria security licences can be verified through the Victoria Police Licensing & Regulation Division (LRD) online portal. You can search by licence number or name.",
    },
  ],
  Pricing: [
    {
      question: "How much does it cost to hire a security guard in Melbourne?",
      answer: "Security guard costs vary depending on the type of service, hours required, and specific risk factors. Generally, uniformed guards range from $35–$55 per hour. We provide detailed, transparent quotes — contact us for a free assessment.",
    },
    {
      question: "Do you charge a minimum number of hours?",
      answer: "Most engagements have a 4-hour minimum per shift, though this can vary by service type. Long-term contracts typically have more flexible arrangements.",
    },
  ],
  Deployment: [
    {
      question: "Can I hire security guards for a single event?",
      answer: "Absolutely. We regularly provide security for one-off events — from corporate functions and private parties to large festivals and sporting events. No long-term commitment required.",
    },
    {
      question: "What areas do you cover in Melbourne?",
      answer: "We cover all of Melbourne metropolitan area and regional Victoria including Geelong, Ballarat, Bendigo, and Shepparton. Contact us to confirm coverage for your specific location.",
    },
  ],
  Contracts: [
    {
      question: "Do I need to sign a long-term contract?",
      answer: "No lock-in contracts required. We offer flexible arrangements from single-event bookings to ongoing month-to-month contracts. Long-term clients benefit from preferential pricing.",
    },
    {
      question: "What notice period is required to cancel a security contract?",
      answer: "For ongoing contracts, we typically require 30 days' written notice. For event bookings, cancellation policies depend on proximity to the event date.",
    },
  ],
};

type FAQ = { question: string; answer: string; category: string; sort_order: number };

export default async function FAQsPage() {
  const { data } = await supabaseAdmin
    .from("faqs")
    .select("question, answer, category, sort_order")
    .order("sort_order", { ascending: true });

  let grouped: Record<string, { question: string; answer: string }[]>;

  if (data && data.length > 0) {
    grouped = (data as FAQ[]).reduce((acc, faq) => {
      const cat = faq.category || "General";
      if (!acc[cat]) acc[cat] = [];
      acc[cat].push({ question: faq.question, answer: faq.answer });
      return acc;
    }, {} as Record<string, { question: string; answer: string }[]>);
  } else {
    grouped = fallbackFaqs;
  }

  const allFaqs = Object.values(grouped).flat();

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: allFaqs.map(faq => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="bg-[#1a1a2e] py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "repeating-linear-gradient(45deg,#ffffff08 0,#ffffff08 1px,transparent 0,transparent 50%)", backgroundSize: "20px 20px" }} />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#c8102e] text-xs uppercase tracking-widest font-bold mb-4">Help Centre</p>
          <h1 className="text-4xl md:text-5xl font-black text-white uppercase leading-tight mb-4">Frequently Asked Questions</h1>
          <div className="w-12 h-1 bg-[#c8102e] mb-6" />
          <p className="text-gray-300 text-lg max-w-2xl leading-relaxed font-light">
            Common questions about hiring security guards in Melbourne — licensing, pricing, deployment, and contracts.
          </p>
        </div>
      </section>

      <div className="bg-[#f4f4f4] border-b border-gray-200 py-3">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-xs text-gray-500">
          <Link href="/" className="hover:text-[#c8102e] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[#2d2d2d] font-semibold">FAQs</span>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {Object.entries(grouped).map(([category, faqs]) => (
            <div key={category} className="mb-12">
              <h2 className="text-xs font-black text-gray-500 uppercase tracking-widest mb-6 flex items-center gap-3">
                {category} <span className="h-px flex-1 bg-gray-200" />
              </h2>
              <div className="space-y-0 border border-gray-200 divide-y divide-gray-200">
                {faqs.map((faq, i) => (
                  <details key={i} className="group">
                    <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none hover:bg-[#f4f4f4] transition-colors">
                      <span className="font-black text-[#1a1a2e] text-sm">{faq.question}</span>
                      <svg className="w-5 h-5 text-[#c8102e] shrink-0 transition-transform group-open:rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                      </svg>
                    </summary>
                    <div className="px-6 pb-5 pt-1 text-gray-600 text-sm leading-relaxed bg-[#fafafa]">
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          ))}

          <div className="bg-[#1a1a2e] p-10 mt-10">
            <h3 className="text-xl font-black text-white uppercase mb-3">Still Have Questions?</h3>
            <p className="text-gray-400 mb-6 text-sm leading-relaxed">
              Can&apos;t find what you&apos;re looking for? Our security specialists are available 24/7 to answer your questions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="bg-[#c8102e] text-white font-bold px-6 py-3 text-xs uppercase tracking-widest hover:bg-[#a00d25] transition-colors text-center">
                Contact Us
              </Link>
              <Link href="/free-security-audit" className="border border-white/30 text-white font-bold px-6 py-3 text-xs uppercase tracking-widest hover:bg-white/10 transition-colors text-center">
                Book a Free Security Audit
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
