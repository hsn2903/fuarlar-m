"use client";
import { FaArrowUp } from "react-icons/fa";

const GoUpButton = () => {
  const handleGoUpClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      className="fixed bottom-4 right-4 bg-gray-500 text-white p-4 rounded-full shadow-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
      onClick={handleGoUpClick}
    >
      <FaArrowUp className="text-xl" />
    </button>
  );
};

export default GoUpButton;
