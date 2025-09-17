// ===== PrivacyPolicy.js =====
import React from "react";
import { Shield } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
 

const COMPANY = {
  name: "DUEPROP",
  email: "info@dueprop.com",
  address:
    "House C5, Aknaton estate, Gospel light avenue, off dunamis road, Durumi, Area 1, Abuja.",
  effectiveDate: "January 2025",
  lastUpdated: "July 2025",
};

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-8 bg-white rounded-lg shadow-sm">
        <div className="flex items-center mb-8">
          <Shield className="w-8 h-8 text-emerald-600 mr-3" />
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
            Privacy Policy
          </h1>
        </div>
        <p className="mb-6">
          <strong>Effective Date:</strong> {COMPANY.effectiveDate} <br />
          <strong>Last Updated:</strong> {COMPANY.lastUpdated}
        </p>

        <p className="mb-8">
          At {COMPANY.name}, we are committed to protecting your privacy and ensuring that your
          personal information is handled responsibly. This Privacy Policy explains how we collect,
          use, store, and protect your data when you use our property verification services.
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-2">1. Information We Collect</h3>
        <ul className="list-disc list-inside mb-8 space-y-1">
          <li><strong>Personal Details:</strong> Name, contact information (email, phone number), and identification documents (if required for KYC).</li>
          <li><strong>Property Documentation:</strong> Title deeds, survey plans, receipts, and related land documents submitted for verification.</li>
          <li><strong>Technical Information:</strong> Device information, IP address, browser type, and activity logs.</li>
          <li><strong>Payment Data:</strong> If you use paid services, we may collect transaction details via our secure payment partners.</li>
        </ul>

        <h3 className="text-lg font-semibold mt-6 mb-2">2. How We Use Your Information</h3>
        <p className="mb-2">We process your data to:</p>
        <ul className="list-disc list-inside mb-8 space-y-1">
          <li>Verify property ownership and document authenticity.</li>
          <li>Provide you with reports and verification outcomes.</li>
          <li>Improve the accuracy, security, and functionality of our platform.</li>
          <li>Send important notifications, policy updates, or customer support responses.</li>
          <li>Comply with regulatory and legal obligations.</li>
        </ul>

        <h3 className="text-lg font-semibold mt-6 mb-2">3. Sharing of Information</h3>
        <p className="mb-2">We do not sell your data. However, we may share it in the following circumstances:</p>
        <ul className="list-disc list-inside mb-8 space-y-1">
          <li><strong>Verification Partners:</strong> Government land registries or professional surveyors, when required to confirm ownership or authenticity.</li>
          <li><strong>Service Providers:</strong> Third parties that assist with hosting, payments, security, and analytics, bound by confidentiality agreements.</li>
          <li><strong>Legal Compliance:</strong> When disclosure is necessary to comply with applicable laws, regulations, or legal processes.</li>
          <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be part of the transferred assets.</li>
        </ul>

        <h3 className="text-lg font-semibold mt-6 mb-2">4. Data Retention</h3>
        <p className="mb-8">
          We retain your personal data only for as long as necessary to provide services, fulfill legal
          obligations, and resolve disputes. When data is no longer needed, it is securely deleted or
          anonymized.
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-2">5. Data Security</h3>
        <p className="mb-8">
          We implement strict safeguards including encryption, secure servers, restricted access, and
          routine monitoring to protect your data against unauthorized access, alteration, disclosure,
          or destruction.
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-2">6. International Data Transfers</h3>
        <p className="mb-8">
          If your data is transferred outside Nigeria, we ensure that appropriate protections are in
          place, such as standard contractual clauses or equivalent safeguards.
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-2">7. Your Rights</h3>
        <p className="mb-2">You have the right to:</p>
        <ul className="list-disc list-inside mb-8 space-y-1">
          <li>Access and request a copy of your personal data.</li>
          <li>Request corrections or updates to inaccurate information.</li>
          <li>Request deletion of your personal data, subject to legal obligations.</li>
          <li>Withdraw consent for optional processing activities.</li>
          <li>Object to or restrict certain types of processing.</li>
        </ul>
        <p className="mb-8">To exercise these rights, contact us at {COMPANY.email}.</p>

        <h3 className="text-lg font-semibold mt-6 mb-2">8. Cookies & Tracking</h3>
        <p className="mb-8">
          We use cookies and similar technologies to improve your browsing experience, remember
          preferences, and analyze site traffic. You can adjust cookie settings in your browser to
          control or block these features.
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-2">9. Third-Party Links</h3>
        <p className="mb-8">
          Our platform may include links to third-party websites. We are not responsible for the
          privacy practices or content of those sites and encourage you to review their privacy
          policies.
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-2">10. Children’s Privacy</h3>
        <p className="mb-8">
          Our services are not designed for individuals under 18. We do not knowingly collect
          information from minors. If you believe a child has provided us with data, please contact us
          and we will promptly delete it.
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-2">11. Changes to This Policy</h3>
        <p className="mb-8">
          We may update this Privacy Policy from time to time. Updates will be posted here with a new
          “Last Updated” date. For significant changes, we may notify you via email or through the app.
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-2">12. Contact Us</h3>
        <p className="mb-2">
          If you have questions, concerns, or requests regarding this Privacy Policy, you can contact
          us:
        </p>
        <p className="mb-8">
          📧 Email: {COMPANY.email} <br />
          📍 Address: {COMPANY.address}
        </p>
       
      </div>
       <Footer />
    </>
  );
}
