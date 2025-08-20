import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

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
          <li>Registered title (C of O, Deed of Assignment, Gazette, or Register)</li>
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
      "The verification process typically takes between 5 to 10 business days depending on complexity.",
  },
  {
    question: "What documents do I need to upload for verification?",
    answer:
      "You’ll need key property documents such as survey plan, C of O, excision, deed of assignment, or gazette.",
  },
  {
    question: "Who performs the verification?",
    answer:
      "Our verifications are performed by licensed professionals and verified experts in land and property law.",
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
    <section className="w-full max-w-4xl mx-auto px-4 py-12">
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
    </section>
  );
};

export default FAQAccordion;
