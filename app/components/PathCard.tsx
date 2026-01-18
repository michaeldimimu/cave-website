import Image from "next/image";

const PathCard = ({
  number,
  title,
  description,
  image,
  order,
  subtitle,
  header,
}: {
  number?: string;
  title: string;
  description: string;
  image: string;
  order?: number;
  subtitle: string;
  header: string;
}) => {
  return (
    <section
      className={`${order === 2 ? "bg-[#404040] text-white" : "bg-white text-black"} rounded-xl p-8 mx-4 mt-12`}
    >
      <span
        className={`flex gap-4 items-center ${order === 2 && "text-[#EFC738]"}`}
      >
        <p className="font-bold">{number}</p>
        <p>{title}</p>
      </span>

      <div
        className={`flex flex-col md:flex-row gap-6 mt-8 items-center ${
          order === 2 ? "md:flex-row-reverse" : ""
        }`}
      >
        <div className="flex-1 flex flex-col gap-2 text-center md:text-left">
          <p className="font-semibold">{header}</p>
          <h2 className="text-3xl md:text-5xl font-bold">{description}</h2>
          <p>{subtitle}</p>
          <button className="bg-[#EFC738] w-fit hover:opacity-80 transition-all duration-300 ease-in-out cursor-pointer text-black px-8 md:px-16 rounded-lg py-2 mt-2 md:mt-4">
            Begin
          </button>
        </div>

        <div className="flex-1 relative w-full h-64 md:h-96 rounded-lg overflow-hidden shadow-lg">
          <Image
            src={image}
            alt="Pathway Image"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default PathCard;
