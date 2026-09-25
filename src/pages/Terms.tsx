import { NGO_INFO } from '../data/ngoData';

export function Terms() {
  return (
    <div className="space-y-12 pb-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
      <div className="space-y-3 text-center border-b border-stone-200 pb-8">
        <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-900 text-xs font-bold uppercase tracking-wider">
          Legal Compliance
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-stone-900">Terms & Conditions</h1>
        <p className="text-stone-500 text-xs">World Help Foundation • Registered under Indian Trust Act 1882 ({NGO_INFO.registrationNo})</p>
      </div>

      <div className="prose prose-stone max-w-none space-y-6 text-stone-700 text-sm sm:text-base leading-relaxed">
        <h3 className="text-xl font-bold text-stone-900">1. Acceptance of Terms</h3>
        <p>
          By accessing and using the World Help Foundation website, you agree to comply with and be bound by these Terms and Conditions. If you do not agree with any part of these terms, please refrain from using our website.
        </p>

        <h3 className="text-xl font-bold text-stone-900">2. Charitable Contributions & Donation Policy</h3>
        <p>
          All donations made to World Help Foundation are voluntary and utilized strictly toward our declared social welfare programs, including education support, health camps, winter relief, and community assistance. Donations are non-refundable except under verified erroneous transaction circumstances.
        </p>

        <h3 className="text-xl font-bold text-stone-900">3. Intellectual Property</h3>
        <p>
          All content, text, logos, photographs, and design elements on this website are the property of World Help Foundation and protected under applicable copyright laws. Unauthorized reproduction is prohibited.
        </p>

        <h3 className="text-xl font-bold text-stone-900">4. Limitation of Liability</h3>
        <p>
          World Help Foundation endeavors to ensure all published information is accurate. However, we assume no liability for temporary website unavailability or technical inaccuracies.
        </p>

        <h3 className="text-xl font-bold text-stone-900">5. Governing Law</h3>
        <p>
          These terms are governed by the laws of India, and any disputes shall be subject to the exclusive jurisdiction of the courts in Dhanbad, Jharkhand.
        </p>
      </div>
    </div>
  );
}
