import React from 'react'
import { FileText } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const COMPANY = {
  name: 'DUEPROP',
  email: 'info@dueprop.com',
  address:
    'House C5, Aknaton estate, Gospel light avenue, off dunamis road, Durumi, Area 1, Abuja.',
  effectiveDate: 'January 2025',
  lastUpdated: 'July 2025'
}

export default function TermsOfUse () {
  return (
    <>
       
      <Navbar />
          
    <div className="max-w-6xl mx-auto px-4 py-8 bg-white rounded-lg shadow-sm">
      <div className="flex items-center mb-8">
        <FileText className="w-8 h-8 text-emerald-600 mr-3" />
        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
          Terms of Use
        </h1>
      </div>
      <h1>Terms of Use</h1>
      <p>
        <strong>Effective Date:</strong> {COMPANY.effectiveDate} <br />
        <strong>Last Updated:</strong> {COMPANY.lastUpdated}
      </p>

      <p className='mt-4'>
        Welcome to {COMPANY.name}. By accessing or using our property
        verification platform, you agree to comply with and be bound by these
        Terms of Use. Please read them carefully, as they outline your rights,
        responsibilities, and limitations when using our services.
      </p>

      <h3 className='text-lg font-semibold mt-6'>1. Acceptance of Terms</h3>
      <p>
        By using {COMPANY.name}, you confirm that you are at least 18 years old
        and legally capable of entering into binding contracts. If you do not
        agree with these terms, you should not use our services.
      </p>

      <h3 className='text-lg font-semibold mt-6'>2. Services Provided</h3>
      <p>
        {COMPANY.name} offers document verification services for property
        ownership and related land documents. We act as an independent
        verification service and do not guarantee property ownership rights
        beyond the authenticity of submitted documents.
      </p>

      <h3 className='text-lg font-semibold mt-6'>3. User Responsibilities</h3>
      <ul className='list-disc list-inside space-y-1'>
        <li>
          Provide accurate, complete, and lawful information and documents.
        </li>
        <li>Maintain confidentiality of your login credentials.</li>
        <li>Use the platform only for lawful purposes and not for fraud.</li>
        <li>
          Ensure that uploaded documents belong to you or that you have the
          legal right to submit them.
        </li>
      </ul>

      <h3 className='text-lg font-semibold mt-6'>4. Prohibited Activities</h3>
      <p>You agree not to:</p>
      <ul className='list-disc list-inside space-y-1'>
        <li>Use the platform to misrepresent property ownership.</li>
        <li>Upload malicious software, code, or files.</li>
        <li>Engage in unauthorized access, scraping, or interference.</li>
        <li>Violate intellectual property rights or others’ privacy.</li>
      </ul>

      <h3 className='text-lg font-semibold mt-6'>5. Verification Disclaimer</h3>
      <p>
        While {COMPANY.name} strives for accuracy, we rely on external sources
        (such as government registries and professional surveyors). We do not
        guarantee the absolute completeness or accuracy of verification results
        and shall not be held liable for reliance placed on them.
      </p>

      <h3 className='text-lg font-semibold mt-6'>6. Payments & Refunds</h3>
      <ul className='list-disc list-inside space-y-1'>
        <li>
          Fees for verification services must be paid in advance through our
          authorized channels.
        </li>
        <li>
          Payments are generally non-refundable once verification has started,
          except in cases of system error or duplicate charges.
        </li>
      </ul>

      <h3 className='text-lg font-semibold mt-6'>7. Intellectual Property</h3>
      <p>
        All trademarks, logos, software, and content on {COMPANY.name} are the
        property of the company or its licensors. You may not copy, modify,
        distribute, or exploit any part of the platform without prior written
        consent.
      </p>

      <h3 className='text-lg font-semibold mt-6'>8. Limitation of Liability</h3>
      <p>
        {COMPANY.name} shall not be held responsible for any damages, losses, or
        disputes arising from reliance on verification results or use of our
        services, except where required by law. Your use of the platform is at
        your own risk.
      </p>

      <h3 className='text-lg font-semibold mt-6'>9. Indemnification</h3>
      <p>
        You agree to indemnify and hold harmless {COMPANY.name}, its employees,
        and partners from any claims, liabilities, damages, or expenses arising
        from your misuse of the platform or breach of these Terms of Use.
      </p>

      <h3 className='text-lg font-semibold mt-6'>10. Termination</h3>
      <p>
        We reserve the right to suspend or terminate your account if you violate
        these terms, engage in fraudulent activities, or misuse our services.
      </p>

      <h3 className='text-lg font-semibold mt-6'>11. Changes to Terms</h3>
      <p>
        We may revise these Terms of Use from time to time. Updates will be
        posted on this page with a new “Last Updated” date. Continued use of the
        platform constitutes acceptance of the revised terms.
      </p>

      <h3 className='text-lg font-semibold mt-6'>12. Governing Law</h3>
      <p>
        These Terms of Use shall be governed by and construed under the laws of
        the Federal Republic of Nigeria. Any disputes shall be resolved in
        Nigerian courts.
      </p>

      <h3 className='text-lg font-semibold mt-6'>13. Contact Us</h3>
      <p>If you have questions about these Terms, please contact us at:</p>
      <p>
        📧 Email: {COMPANY.email} <br />
        📍 Address: {COMPANY.address}
      </p>
      
      </div>
      <Footer />
    </>
  )
}
