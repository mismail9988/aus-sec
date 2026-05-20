import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Licences, Certifications & Compliance | Security Guard Company Melbourne",
  description: "Security Guard Company Melbourne's licences, certifications, insurance coverage, and compliance obligations under Victorian and Federal law. Verify our credentials.",
  alternates: { canonical: "/certifications/" },
  openGraph: {
    title: "Licences & Certifications | Security Guard Company Melbourne",
    description: "Our Victorian security licences, public liability insurance, National Police Check policy, and compliance obligations — transparent credentials you can verify.",
    url: "https://securityguardcompanymelbourne.com/certifications/",
    siteName: "Security Guard Company Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

const licences = [
  {
    title: "Security Business Licence",
    body: "Security Guard Company Melbourne holds a current Security Business Licence issued by the Victorian Security Agents Authority (VSAA) under the Private Security Act 2004 (Vic). This licence authorises us to provide security services commercially in Victoria and is a mandatory requirement for any legitimate security company operating in this state.",
    verify: "Verify via the VSAA public register at vsaa.vic.gov.au",
  },
  {
    title: "Individual Officer Licences",
    body: "Every security officer we deploy holds a current individual security licence issued by the VSAA. Officer licences are category-specific — a crowd controller licence authorises work at licensed premises; a security guard licence authorises static and mobile guarding. We verify every officer's licence before deployment and maintain records of all licence renewal dates.",
    verify: "Ask for an officer's licence number — you can verify it directly on the VSAA public register",
  },
  {
    title: "Working with Children Checks",
    body: "All officers deployed to environments where they may have direct contact with children — schools, TAFEs, aged care facilities with younger staff, and similar environments — hold a current Working with Children Check issued by the Department of Justice and Community Safety (Victoria).",
    verify: "You may request sight of WWC card numbers for officers deployed to child-related environments",
  },
  {
    title: "National Police Checks",
    body: "Every officer in our employment has undergone a National Police Check (NPC) prior to deployment. NPCs are renewed on a regular cycle. Officers who receive a relevant criminal finding after initial screening are not deployed to client sites pending assessment.",
    verify: "We can provide written confirmation of NPC completion for any officer upon client request",
  },
];

const insurance = [
  {
    title: "Public Liability Insurance",
    amount: "$20 million",
    desc: "Cover for third-party bodily injury and property damage arising from our security operations. Applies to all deployments across all service types.",
  },
  {
    title: "Professional Indemnity Insurance",
    amount: "$5 million",
    desc: "Cover for claims arising from professional advice, security assessments, and security management recommendations.",
  },
  {
    title: "Workers Compensation Insurance",
    amount: "Statutory",
    desc: "Full WorkCover Victoria coverage for all employees. Clients are not exposed to liability for officer injuries sustained during our deployments.",
  },
];

const compliance = [
  {
    title: "Private Security Act 2004 (Vic)",
    desc: "The primary legislation governing security companies and individual guards in Victoria. We operate in full compliance with all licensing, conduct, and reporting obligations under this Act.",
  },
  {
    title: "Security Industry Award 2020",
    desc: "The Modern Award setting minimum pay rates, penalty rates, and conditions for security industry employees. All of our officers are paid at or above Award rates — we do not undercut Award minimums.",
  },
  {
    title: "Privacy Act 1988 (Cth)",
    desc: "Our handling of personal information — including CCTV footage, incident reports, and client data — complies with the Australian Privacy Principles under the Privacy Act.",
  },
  {
    title: "Occupational Health & Safety Act 2004 (Vic)",
    desc: "We meet all OHS obligations as an employer and take active responsibility for the safety of our officers in the field, including site risk assessments and incident reporting.",
  },
  {
    title: "Equal Opportunity Act 2010 (Vic)",
    desc: "Our officers are trained in lawful entry refusal and non-discriminatory conduct. We do not permit refusal of service on protected attribute grounds.",
  },
];

export default function CertificationsPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-[#1a1a2e] py-20 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "repeating-linear-gradient(45deg,#ffffff08 0,#ffffff08 1px,transparent 0,transparent 50%)",
            backgroundSize: "20px 20px",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#c8102e] text-xs uppercase tracking-widest font-bold mb-4">Credentials</p>
          <h1 className="text-4xl md:text-5xl font-black text-white uppercase leading-tight mb-4">
            Licences & Certifications
          </h1>
          <div className="w-12 h-1 bg-[#c8102e] mb-6" />
          <p className="text-gray-300 text-lg max-w-2xl leading-relaxed font-light">
            Our licences, certifications, insurance coverage, and compliance obligations — transparent credentials that any client can verify independently.
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-[#f4f4f4] border-b border-gray-200 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-xs text-gray-500">
          <Link href="/" className="hover:text-[#c8102e] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[#2d2d2d] font-semibold">Licences & Certifications</span>
        </div>
      </div>

      {/* Licences */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#c8102e] text-xs uppercase tracking-widest font-bold mb-3">Licensing</p>
            <h2 className="text-4xl font-black text-[#1a1a2e] uppercase mb-4">Our Licences</h2>
            <div className="w-12 h-1 bg-[#c8102e] mx-auto mb-6" />
            <p className="text-[#767676] max-w-xl mx-auto font-light">
              Every licence we hold is publicly verifiable. We encourage clients to independently confirm our credentials before engaging our services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-200">
            {licences.map((lic, i) => (
              <div key={i} className="bg-white p-8">
                <div className="w-10 h-10 bg-[#c8102e] flex items-center justify-center mb-5">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-[#1a1a2e] font-black uppercase text-lg mb-3">{lic.title}</h3>
                <p className="text-[#4a4a4a] text-sm leading-relaxed mb-4">{lic.body}</p>
                <p className="text-[#c8102e] text-xs font-bold uppercase tracking-widest">{lic.verify}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance */}
      <section className="py-20 bg-[#f4f4f4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#c8102e] text-xs uppercase tracking-widest font-bold mb-3">Protection</p>
            <h2 className="text-4xl font-black text-[#1a1a2e] uppercase mb-4">Insurance Coverage</h2>
            <div className="w-12 h-1 bg-[#c8102e] mx-auto mb-6" />
            <p className="text-[#767676] max-w-xl mx-auto font-light">
              Comprehensive insurance coverage for every deployment. Certificates of currency available to clients on request.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-200">
            {insurance.map((ins, i) => (
              <div key={i} className="bg-white p-8 text-center">
                <div className="text-5xl font-black text-[#c8102e] mb-3">{ins.amount}</div>
                <h3 className="text-[#1a1a2e] font-black uppercase mb-4 tracking-tight">{ins.title}</h3>
                <p className="text-[#767676] text-sm leading-relaxed">{ins.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="py-20 bg-[#1a1a2e] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "repeating-linear-gradient(45deg,#ffffff08 0,#ffffff08 1px,transparent 0,transparent 50%)", backgroundSize: "20px 20px" }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#c8102e] text-xs uppercase tracking-widest font-bold mb-3">Legal Framework</p>
            <h2 className="text-4xl font-black text-white uppercase mb-4">Our Compliance Obligations</h2>
            <div className="w-12 h-1 bg-[#c8102e] mx-auto mb-6" />
            <p className="text-gray-400 max-w-2xl mx-auto font-light">
              We operate in full compliance with all Victorian and Federal legislation governing the private security industry. Here is the framework we operate within.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-700">
            {compliance.map((item, i) => (
              <div key={i} className="bg-[#12122080] p-8 backdrop-blur-sm">
                <div className="w-8 h-0.5 bg-[#c8102e] mb-5" />
                <h3 className="text-white font-black uppercase mb-3 tracking-tight text-sm">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Verify / Request CoC CTA */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl font-black text-[#1a1a2e] uppercase mb-2">
              Request Our Insurance Certificates
            </h2>
            <p className="text-[#767676]">
              Certificates of currency for our public liability and professional indemnity insurance are available to any prospective or current client on request.
            </p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 bg-[#c8102e] text-white font-bold px-8 py-4 text-sm uppercase tracking-widest hover:bg-[#a00d25] transition-colors"
          >
            Request Certificates
          </Link>
        </div>
      </section>
    </>
  );
}
