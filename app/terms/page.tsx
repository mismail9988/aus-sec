import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | Security Guard Company Melbourne",
  description: "Terms of Service for Security Guard Company Melbourne. The terms governing use of our website and engagement of our security services.",
  alternates: { canonical: "/terms/" },
  robots: { index: false },
};

export default function TermsPage() {
  return (
    <>
      <section className="bg-[#1a1a2e] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-black text-white uppercase">Terms of Service</h1>
          <p className="text-gray-400 mt-3 text-sm">Last updated: May 2026</p>
        </div>
      </section>

      <div className="bg-[#f4f4f4] border-b border-gray-200 py-3">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-xs text-gray-500">
          <Link href="/" className="hover:text-[#c8102e]">Home</Link>
          <span>/</span>
          <span className="text-[#2d2d2d] font-semibold">Terms of Service</span>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-[#4a4a4a] text-sm leading-relaxed">

          <div>
            <h2 className="text-lg font-black text-[#1a1a2e] uppercase mb-3">1. Acceptance of Terms</h2>
            <p>By accessing or using the website at securityguardcompanymelbourne.com (&ldquo;the Site&rdquo;), or by engaging Security Guard Company Melbourne (&ldquo;we&rdquo;, &ldquo;our&rdquo;, &ldquo;us&rdquo;) for security services, you agree to be bound by these Terms of Service. If you do not agree, please do not use the Site or our services.</p>
          </div>

          <div>
            <h2 className="text-lg font-black text-[#1a1a2e] uppercase mb-3">2. Services</h2>
            <p>We provide professional security guard services in Melbourne and Victoria, including but not limited to corporate security, event security, retail loss prevention, mobile patrols, concierge security, and related services.</p>
            <p className="mt-3">All security services are subject to a separate written service agreement or booking confirmation. These Terms govern the use of our website and initial enquiry process. The specific terms of your security engagement will be outlined in the applicable service agreement.</p>
          </div>

          <div>
            <h2 className="text-lg font-black text-[#1a1a2e] uppercase mb-3">3. Booking Enquiries</h2>
            <p>Submitting a booking form or enquiry through this website does not constitute a binding contract or guarantee of service availability. All bookings are confirmed only upon receipt of a written confirmation from us.</p>
            <p className="mt-3">We reserve the right to decline any service request at our discretion.</p>
          </div>

          <div>
            <h2 className="text-lg font-black text-[#1a1a2e] uppercase mb-3">4. Licensing & Compliance</h2>
            <p>All security officers deployed by us hold valid Victoria security licences under the Private Security Act 2004. We maintain all required registrations and insurances as required by Victorian law.</p>
            <p className="mt-3">Clients are responsible for ensuring that the security services they engage comply with any applicable laws, regulations, or contractual obligations on their end.</p>
          </div>

          <div>
            <h2 className="text-lg font-black text-[#1a1a2e] uppercase mb-3">5. Payment Terms</h2>
            <p>Payment terms are specified in the relevant service agreement or invoice. Unless otherwise agreed in writing:</p>
            <ul className="mt-3 space-y-2 list-none">
              {["Invoices are due within 14 days of issue", "Late payments may attract interest at the rate of 10% per annum", "We reserve the right to suspend services for accounts more than 30 days overdue", "Disputed invoices must be raised in writing within 7 days of receipt"].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-[#c8102e] rounded-full mt-1.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-black text-[#1a1a2e] uppercase mb-3">6. Cancellation</h2>
            <p>Cancellation terms for security services are specified in the relevant service agreement. For event bookings, cancellations made within 48 hours of the event may incur a cancellation fee of up to 50% of the agreed fee. For ongoing contracts, the notice period specified in the service agreement applies.</p>
          </div>

          <div>
            <h2 className="text-lg font-black text-[#1a1a2e] uppercase mb-3">7. Limitation of Liability</h2>
            <p>To the maximum extent permitted by law, our liability to you for any loss or damage arising from our services is limited to the amount paid for the specific service giving rise to the claim.</p>
            <p className="mt-3">We are not liable for any indirect, consequential, incidental, or special loss or damage, including loss of profits, loss of business opportunity, or loss of data.</p>
            <p className="mt-3">Nothing in these Terms limits liability that cannot be excluded under the Australian Consumer Law (Schedule 2 of the Competition and Consumer Act 2010 (Cth)).</p>
          </div>

          <div>
            <h2 className="text-lg font-black text-[#1a1a2e] uppercase mb-3">8. Website Use</h2>
            <p>You may use this Site for lawful purposes only. You must not use the Site in any way that breaches applicable law, is fraudulent or harmful, or infringes any intellectual property rights.</p>
            <p className="mt-3">All content on this Site, including text, images, logos, and design, is owned by or licenced to Security Guard Company Melbourne and is protected by Australian and international copyright law.</p>
          </div>

          <div>
            <h2 className="text-lg font-black text-[#1a1a2e] uppercase mb-3">9. Privacy</h2>
            <p>Your use of this Site is also governed by our <Link href="/privacy-policy/" className="text-[#c8102e] hover:underline">Privacy Policy</Link>, which is incorporated into these Terms by reference.</p>
          </div>

          <div>
            <h2 className="text-lg font-black text-[#1a1a2e] uppercase mb-3">10. Governing Law</h2>
            <p>These Terms are governed by the laws of Victoria, Australia. Any disputes arising from these Terms or your use of our services will be subject to the exclusive jurisdiction of the courts of Victoria.</p>
          </div>

          <div>
            <h2 className="text-lg font-black text-[#1a1a2e] uppercase mb-3">11. Changes to Terms</h2>
            <p>We may update these Terms from time to time. Continued use of the Site or our services after any update constitutes acceptance of the revised Terms. The date of the last update is shown at the top of this page.</p>
          </div>

          <div>
            <h2 className="text-lg font-black text-[#1a1a2e] uppercase mb-3">12. Contact</h2>
            <div className="bg-[#f4f4f4] p-5 border-l-4 border-[#c8102e]">
              <p className="font-bold text-[#1a1a2e]">Security Guard Company Melbourne</p>
              <p className="mt-1">Email: <a href="mailto:info@securityguardcompanymelbourne.com" className="text-[#c8102e] hover:underline">info@securityguardcompanymelbourne.com</a></p>
              <p>Website: <Link href="/" className="text-[#c8102e] hover:underline">securityguardcompanymelbourne.com</Link></p>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
