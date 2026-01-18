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
    <div className="flex flex-col items-center justify-center">
      <Image src={image} alt={name} width={200} height={200} />
      <h3 className="text-xl font-bold mt-4">{name}</h3>
      <p className="text-gray-600 mt-2">{role}</p>
    </div>
  );
};

export default MastermindCard;
