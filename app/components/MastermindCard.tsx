import Image from "next/image";
import React from "react";

interface MastermindCardProps {
  name: string;
  role: string;
  image: string;
}

const MastermindCard: React.FC<MastermindCardProps> = ({
  name,
  role,
  image,
}) => {
  return (
    <div className="border border-[#EBCB4B] rounded-2xl overflow-hidden flex flex-col w-full aspect-4/5 hover:shadow-lg transition-shadow duration-300">
      <div className="relative flex-1 w-full bg-neutral-900">
        <Image src={image} alt={name} fill className="object-cover" />
      </div>
      <div className="bg-linear-to-b from-[#f3e3a5] to-[#EBCB4B] py-6 px-4 text-center border-t border-[#EBCB4B]/20">
        <h3 className="text-xl md:text-2xl font-black text-black mb-2 leading-tight">
          {name}
        </h3>
        <p className="text-black/80 text-xs md:text-sm font-medium uppercase tracking-wide">
          {role}
        </p>
      </div>
    </div>
  );
};

export default MastermindCard;
