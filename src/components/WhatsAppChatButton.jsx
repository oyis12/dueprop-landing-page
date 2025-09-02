import { FaWhatsapp } from "react-icons/fa";

const WhatsAppChatButton = () => {
  const phoneNumber = "+2347036326018";
  const message = `👋 Hello, welcome to DueProp – Nigeria’s trusted property verification platform.
We help you verify land & property documents so you can buy safely and avoid scams.

Please select an option to get started:
⿡ Verify a property
⿢ Learn how DueProp works
⿣ Talk to a support agent`;

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 group">
      <span className="absolute bottom-16 right-0 bg-gray-800 text-white text-sm px-3 py-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
        Chat with us on WhatsApp
      </span>
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white rounded-full p-4 shadow-lg hover:bg-green-600 transition-all duration-300 flex items-center justify-center animate-pulse-custom"
      >
        <FaWhatsapp size={28} />
      </a>
      <style>
        {`
          @keyframes pulse-custom {
            0%, 100% { transform: scale(1); opacity: 1; }
            50% { transform: scale(1.15); opacity: 0.9; }
          }
          .animate-pulse-custom {
            animation: pulse-custom 1.5s infinite;
          }
        `}
      </style>
    </div>
  );
};

export default WhatsAppChatButton;
