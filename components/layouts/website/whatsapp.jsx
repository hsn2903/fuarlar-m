"use client";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    // Replace 'your-number' with the actual WhatsApp number you want to direct to
    window.location.href = "https://wa.me/+905358888881";
  };

  return (
    <button
      className="fixed bottom-4 left-4 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 animate-pulse"
      onClick={handleWhatsAppClick}
    >
      <FaWhatsapp className="text-3xl" />
    </button>
  );
};

export default WhatsAppButton;
