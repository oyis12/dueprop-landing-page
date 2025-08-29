import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import partner1 from '../assets/partner-1.png';
import partner2 from '../assets/partner-2.png';
import partner3 from '../assets/partner-3.png';
const faqs = [
  {
    question: "What exactly does Dueprop verify?",
    answer: (
      <div className="space-y-2 text-gray-600 text-sm md:text-base">
        <p>
          Dueprop verifies key aspects of a residential or commercial land or
          property, including:
        </p>
        <ul className="list-disc list-inside">
          <li>Survey plans and beacons</li>
          <li>Family ownership claims</li>
          <li>Excision and gazette records</li>
          <li>Government acquisition and consent</li>
          <li>Registered title (C of O, Deed of Assignment, Gazette,Letter of Consent, or Register)</li>
          <li>Planning/land use approvals</li>
          <li>Whether land is under government use or subject to disputes</li>
        </ul>
        <p>
          We ensure you get a comprehensive view of the property’s legal and
          structural status before making any financial commitment.
        </p>
      </div>
    ),
  },
  {
    question: "How long does the verification process take?",
    answer:
      "Most verifications report are ready within 5–10 working days, but complex cases may take a little longer.",
  },
  {
    question: "What documents do I need to upload for verification?",
    answer:
      "To verify a property, you only need one key document—like a survey plan, C of O, excision, deed of assignment, letter of consent, or gazette. If you don’t have all of them (for example, when buying from a real estate developer), no problem. With just one, we can help you get the others and guide you through the process.",
  },
  {
    question: "Who performs the verification?",
    answer:(
      <div className="space-y-2 text-gray-600 text-sm md:text-base">
        <p>
         Our verifications are carried out by a team of professionals who work directly with the right authorities and offices responsible for land matters. This includes:
        </p>
        <ul className="list-disc list-inside">
          <li> <b>The Land Registry (e.g Ages, Nagis)</b> – to confirm ownership records and check for encumbrances, validate Certificates of Occupancy (C of O), Gazette records, and other approvals.</li>
          <li><b>Surveyor-General’s Office</b> – to verify survey plans, boundaries, and whether the land falls under government acquisition.</li>
          <li><b>Licensed Surveyors & Property Lawyers</b> – who double-check documents and confirm compliance.</li>
        </ul>
        <p>
         Finally, you will receive a comprehensive Lawyer’s Report summarizing all findings, risks, and recommendations, so you can make your property decision with full confidence.
        </p>
      </div>
    )
  },
  {
    question: "Is Dueprop affiliated with the government?",
    answer:
      "No, Dueprop is independent but works with official government registries and sources.",
  },
  {
    question: "How secure is my document and personal data?",
    answer:
      "We use bank-grade encryption and industry best practices to keep your data safe and secure.",
  },
  {
    question: "Can I use Dueprop if I’m not in Nigeria?",
    answer:
      "Yes, you can initiate verifications from anywhere in the world as long as the property is located in Nigeria.",
  },
  {
    question: "What happens if the land fails verification?",
    answer:
      "You will receive a detailed report outlining the issues, enabling you to make an informed decision.",
  },
  {
    question: "How much does it cost to verify a property?",
    answer:
      "Costs vary depending on the location and scope of verification. Pricing is shared upfront.",
  },
  {
    question:
      "Can Dueprop help me with legal documentation after verification?",
    answer:
      "Yes, Dueprop connects you with vetted legal professionals to assist with post-verification documentation.",
  },
];

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full px-4 md:px-16 py-12 md:py-16">
      <div className="w-11/12 mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg overflow-hidden"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center px-4 py-3 text-left font-medium text-gray-800 hover:bg-gray-50"
            >
              <span>{faq.question}</span>
              {openIndex === index ? (
                <FiMinus className="text-gray-500" />
              ) : (
                <FiPlus className="text-gray-500" />
              )}
            </button>

            {/* Accordion animation */}
            <div
              className={`transition-all duration-500 ease-in-out overflow-hidden ${
                openIndex === index ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="px-4 pb-4 bg-white text-sm md:text-base">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>

       <section class='bg-white py-12'>
        <div class='container mx-auto px-6'>
          <h2 class='text-2xl md:text-3xl font-bold text-center mb-8'>
            Our Partners
          </h2>

          <div class='grid grid-cols-2 md:grid-cols-3 gap-8 items-center justify-items-center'>
            <div class='flex justify-center'>
              <img
                src={partner1}
                alt='Partner 1 Logo'
                class='h-10 md:h-15 object-contain'
              />
            </div>

            <div class='flex justify-center'>
              <img
                src={partner2}
                alt='Partner 2 Logo'
                class='h-10 md:h-15 object-contain'
              />
            </div>

            <div class='flex justify-center'>
              <img
                src={partner3}
                alt='Partner 3 Logo'
                class='h-10 md:h-15 object-contain'
              />
            </div>
          </div>
        </div>
      </section>
      </div>
    </section>
  );
};

export default FAQAccordion;
