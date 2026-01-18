import React from "react";
import { FaImage } from "react-icons/fa6";

interface WritingCardProps {
  title: string;
  excerpt: string;
  author: string;
  role: string;
  isFeatured?: boolean;
}

const WritingCard: React.FC<WritingCardProps> = ({
  title,
  excerpt,
  author,
  role,
  isFeatured = false,
}) => {
  return (
    <div
      className={`bg-white rounded-xl p-6 border transition-all duration-300 flex flex-col h-full ${
        isFeatured
          ? "border-[#EBCB4B] shadow-[0_0_15px_rgba(235,203,75,0.15)]"
          : "border-gray-200 hover:border-[#EBCB4B] hover:shadow-lg"
      }`}
    >
      {/* Image Placeholder */}
      <div className="w-full aspect-4/3 bg-gray-200 rounded-lg mb-6 flex items-center justify-center text-gray-400">
        <FaImage className="text-4xl opacity-50" />
      </div>

      <div className="flex-1">
        <h3 className="text-xl font-bold text-black mb-3 leading-tight">
          {title}
        </h3>
        <p className="text-sm text-gray-600 line-clamp-3 mb-8 leading-relaxed">
          {excerpt}
        </p>
      </div>

      <div className="mt-auto pt-4 border-t border-gray-100">
        <h4 className="text-base font-bold text-black">{author}</h4>
        <p className="text-xs text-gray-500 uppercase tracking-wide">{role}</p>
      </div>
    </div>
  );
};

export default WritingCard;
