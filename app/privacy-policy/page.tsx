import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Security Guard Company Melbourne",
  description: "Privacy Policy for Security Guard Company Melbourne. How we collect, use, and protect your personal information.",
  alternates: { canonical: "/privacy-policy/" },
  robots: { index: false },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="bg-[#1a1a2e] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-black text-white uppercase">Privacy Policy</h1>
          <p className="text-gray-400 mt-3 text-sm">Last updated: May 2026</p>
        </div>
      </section>

      <div className="bg-[#f4f4f4] border-b border-gray-200 py-3">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-xs text-gray-500">
          <Link href="/" className="hover:text-[#c8102e]">Home</Link>
          <span>/</span>
          <span className="text-[#2d2d2d] font-semibold">Privacy Policy</span>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose-content space-y-8 text-[#4a4a4a] text-sm leading-relaxed">

          <div>
            <h2 className="text-lg font-black text-[#1a1a2e] uppercase mb-3">1. Introduction</h2>
            <p>Security Guard Company Melbourne (&ldquo;we&rdquo;, &ldquo;our&rdquo;, &ldquo;us&rdquo;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you visit our website at securityguardcompanymelbourne.com or engage our services.</p>
            <p className="mt-3">We comply with the Privacy Act 1988 (Cth) and the Australian Privacy Principles (APPs).</p>
          </div>

          <div>
            <h2 className="text-lg font-black text-[#1a1a2e] uppercase mb-3">2. Information We Collect</h2>
            <p>We collect personal information that you provide directly to us, including:</p>
            <ul className="mt-3 space-y-2 list-none">
              {["Name, email address, and phone number submitted via contact or booking forms", "Company name and business address for service enquiries", "Details of the security services you are requesting", "Job application information including employment history and qualifications", "Any other information you voluntarily provide in correspondence with us"].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-[#c8102e] rounded-full mt-1.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-4">We may also collect non-personal information automatically when you visit our website, including IP addresses, browser type, pages visited, and time spent on pages, via cookies and analytics tools.</p>
          </div>

          <div>
            <h2 className="text-lg font-black text-[#1a1a2e] uppercase mb-3">3. How We Use Your Information</h2>
            <p>We use your personal information to:</p>
            <ul className="mt-3 space-y-2 list-none">
              {["Respond to your enquiries and provide security services", "Process booking requests and service agreements", "Send you quotes, invoices, and service-related communications", "Assess job applications and conduct recruitment", "Improve our website and services", "Comply with legal and regulatory obligations"].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-[#c8102e] rounded-full mt-1.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-black text-[#1a1a2e] uppercase mb-3">4. Disclosure of Your Information</h2>
            <p>We do not sell, trade, or otherwise transfer your personal information to third parties, except:</p>
            <ul className="mt-3 space-y-2 list-none">
              {["To trusted service providers who assist in operating our website and services (e.g. email delivery, database hosting), under strict confidentiality obligations", "When required by law, court order, or government authority", "To protect the rights, property, or safety of our business, clients, or the public"].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-[#c8102e] rounded-full mt-1.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-4">Our website and data may be hosted or processed by service providers located outside Australia. We take reasonable steps to ensure overseas recipients handle your information in accordance with Australian privacy law.</p>
          </div>

          <div>
            <h2 className="text-lg font-black text-[#1a1a2e] uppercase mb-3">5. Data Security</h2>
            <p>We take reasonable steps to protect your personal information from misuse, interference, loss, unauthorised access, modification, or disclosure. Our systems use industry-standard security measures including encrypted data transmission (HTTPS) and access controls.</p>
            <p className="mt-3">While we take data security seriously, no method of transmission over the internet is 100% secure. We cannot guarantee absolute security of your information.</p>
          </div>

          <div>
            <h2 className="text-lg font-black text-[#1a1a2e] uppercase mb-3">6. Cookies</h2>
            <p>Our website may use cookies to enhance your experience. Cookies are small files stored on your device that help us understand how you use our site. You can set your browser to refuse cookies, though some website features may not function correctly as a result.</p>
          </div>

          <div>
            <h2 className="text-lg font-black text-[#1a1a2e] uppercase mb-3">7. Your Rights</h2>
            <p>Under the Australian Privacy Principles, you have the right to:</p>
            <ul className="mt-3 space-y-2 list-none">
              {["Request access to the personal information we hold about you", "Request correction of inaccurate or incomplete information", "Request that we delete your information (subject to legal retention requirements)", "Complain about how we have handled your personal information"].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-[#c8102e] rounded-full mt-1.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-4">To exercise these rights, contact us at <a href="mailto:info@securityguardcompanymelbourne.com" className="text-[#c8102e] hover:underline">info@securityguardcompanymelbourne.com</a>. We will respond within 30 days.</p>
          </div>

          <div>
            <h2 className="text-lg font-black text-[#1a1a2e] uppercase mb-3">8. Retention</h2>
            <p>We retain your personal information for as long as necessary to fulfil the purposes for which it was collected, or as required by law. Enquiry and booking data is generally retained for 7 years for business and legal compliance purposes.</p>
          </div>

          <div>
            <h2 className="text-lg font-black text-[#1a1a2e] uppercase mb-3">9. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. The current version will always be posted on this page with the date of last update. Continued use of our website after changes constitutes acceptance of the updated policy.</p>
          </div>

          <div>
            <h2 className="text-lg font-black text-[#1a1a2e] uppercase mb-3">10. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy or how we handle your personal information, please contact us:</p>
            <div className="mt-4 bg-[#f4f4f4] p-5 border-l-4 border-[#c8102e]">
              <p className="font-bold text-[#1a1a2e]">Security Guard Company Melbourne</p>
              <p className="mt-1">Email: <a href="mailto:info@securityguardcompanymelbourne.com" className="text-[#c8102e] hover:underline">info@securityguardcompanymelbourne.com</a></p>
              <p>Website: <Link href="/" className="text-[#c8102e] hover:underline">securityguardcompanymelbourne.com</Link></p>
              <p className="mt-3 text-xs text-gray-500">If you believe we have not adequately addressed your privacy concern, you may also contact the Office of the Australian Information Commissioner (OAIC) at <a href="https://www.oaic.gov.au" className="text-[#c8102e] hover:underline" target="_blank" rel="noopener noreferrer">oaic.gov.au</a>.</p>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
