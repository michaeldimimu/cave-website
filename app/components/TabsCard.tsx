import Image from "next/image";

const TabsCard = ({
  number,
  title,
  description,
  image,
  subtitle,
  header,
  bgColor,
}: {
  number?: string;
  title?: string;
  description: string;
  image: string;
  bgColor: string;
  subtitle: string;
  header: string;
}) => {
  return (
    <section
      className={`rounded-xl w-full mx-auto mb-5 md:mx-10 mt-12 bg-[#E7D32A]`}
    >
      <span className={`flex gap-4 items-center`}>
        <p className="font-bold">{number}</p>
        <p>{title}</p>
      </span>

      <div className={`flex flex-col md:flex-row gap-6 items-center`}>
        <div className="flex-1 p-10 flex flex-col gap-2 text-center md:text-left">
          <p className="font-semibold text-black">{header}</p>
          <h2 className="text-3xl text-black md:text-5xl font-bold">
            {description}
          </h2>
          <p className="text-black">{subtitle}</p>
          <button
            className={`bg-[#EFC738] border border-black w-fit hover:opacity-80 transition-all duration-300 ease-in-out cursor-pointer mx-auto md:mx-0 text-black px-8 md:px-16 rounded-lg py-2 mt-2 md:mt-4`}
          >
            Begin
          </button>
        </div>

        <div className="flex-1 relative w-full h-64 md:h-96 overflow-hidden shadow-lg">
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

export default TabsCard;
