import Image from "next/image";
import React from "react";

interface BuilderProps {
  name: string;
  role: string[];
  metric: string;
  metricLabel: string;
  image: string;
  description: string[];
}

const BuilderCard: React.FC<BuilderProps> = ({
  name,
  role,
  metric,
  metricLabel,
  image,
  description,
}) => {
  const renderBoldText = (text: string) =>
    text.split("**").map((part, i) =>
      i % 2 === 1 ? (
        <span key={i} className="font-bold text-black">
          {part}
        </span>
      ) : (
        part
      ),
    );

  return (
    <div className="bg-white rounded-xl p-8 md:px-12 md:py-6 w-[85vw] md:w-[800px] shrink-0 shadow-xl snap-center flex flex-col gap-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <h3 className="text-2xl md:text-4xl font-black text-black mb-2">
            {name}
          </h3>
          <div className="text-gray-600 text-sm md:text-base font-medium">
            {role.map((role) => (
              <p key={role}>{role}</p>
            ))}
          </div>
        </div>
        <div className="text-left md:text-right">
          <h4 className="text-5xl md:text-7xl font-medium tracking-tighter text-black">
            {metric}
          </h4>
          <p className="text-gray-500 text-sm uppercase tracking-wider font-semibold mt-1">
            {metricLabel}
          </p>
        </div>
      </div>

      {/* Content Body */}
      <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
        <div className="w-full border-2 border-b-6  border-r-6 border-black md:w-5/12 aspect-4/5 relative rounded-lg overflow-hidden">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover w-full h-full"
          />
        </div>
        <div className="w-full md:w-7/12 space-y-6">
          {description.map((paragraph, index) => (
            <p
              key={index}
              className="text-black/80 text-base md:text-lg leading-relaxed font-medium"
            >
              {renderBoldText(paragraph)}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BuilderCard;
