import { NGO_INFO } from '../data/ngoData';

export function PrivacyPolicy() {
  return (
    <div className="space-y-12 pb-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
      <div className="space-y-3 text-center border-b border-stone-200 pb-8">
        <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-900 text-xs font-bold uppercase tracking-wider">
          Legal Compliance
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-stone-900">Privacy Policy</h1>
        <p className="text-stone-500 text-xs">World Help Foundation • Reg. No.: {NGO_INFO.registrationNo}</p>
      </div>

      <div className="prose prose-stone max-w-none space-y-6 text-stone-700 text-sm sm:text-base leading-relaxed">
        <h3 className="text-xl font-bold text-stone-900">1. Introduction</h3>
        <p>
          World Help Foundation ("we," "our," or "us") respects your privacy and is committed to protecting any personal information you share with us through our website. This Privacy Policy outlines how we collect, use, and safeguard your information.
        </p>

        <h3 className="text-xl font-bold text-stone-900">2. Information We Collect</h3>
        <p>
          When you register as a volunteer, make a donation, partner with us, or contact our team, we may collect personal details such as your name, email address, phone number, city, and message content.
        </p>

        <h3 className="text-xl font-bold text-stone-900">3. Use of Information</h3>
        <p>
          The information collected is used solely for the purpose of fulfilling your requests, coordinating volunteer activities, processing donations transparently, and keeping you informed about our social impact initiatives. We do not sell or rent personal data to third parties.
        </p>

        <h3 className="text-xl font-bold text-stone-900">4. Security</h3>
        <p>
          We implement appropriate technical and organizational measures to secure your personal data against unauthorized access, alteration, or disclosure.
        </p>

        <h3 className="text-xl font-bold text-stone-900">5. Contact Us</h3>
        <p>
          If you have any questions or concerns regarding our Privacy Policy, please contact us at {NGO_INFO.emails[0]} or call {NGO_INFO.phones[0]}.
        </p>
      </div>
    </div>
  );
}
