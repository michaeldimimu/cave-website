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
  subtitle: string | string[];
  header: string;
}) => {
  const renderText = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return (
          <strong key={i} className="font-bold">
            {part.slice(2, -2)}
          </strong>
        );
      }
      return part;
    });
  };

  return (
    <section
      className={`${order === 2 ? "bg-black text-white" : "bg-white text-black"} rounded-xl p-8 mx-4 mt-12`}
    >
      <span
        className={`flex gap-4 items-center ${order === 2 && "text-[#EFC738]"}`}
      >
        <p className="font-bold">{number}</p>
        <p>{title}</p>
      </span>

      <div
        className={`flex flex-col md:flex-row gap-8 mt-12 items-start ${
          order === 2 ? "md:flex-row-reverse" : ""
        }`}
      >
        <div className="flex-1 flex flex-col gap-4 text-left">
          <p className="font-bold text-[#EFC738] uppercase tracking-widest text-xs">
            {header}
          </p>
          <h2 className="text-3xl md:text-5xl font-black leading-tight">
            {description}
          </h2>
          <div className="space-y-4 mt-2">
            {Array.isArray(subtitle) ? (
              subtitle.map((line, idx) => (
                <p
                  key={idx}
                  className="text-sm md:text-base leading-relaxed opacity-90"
                >
                  {renderText(line)}
                </p>
              ))
            ) : (
              <p className="text-sm md:text-base leading-relaxed opacity-90">
                {renderText(subtitle)}
              </p>
            )}
          </div>
          <a
            href="https://wa.link/chewxp"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4"
          >
            <button className="bg-[#EFC738] w-full md:w-fit font-bold hover:opacity-80 transition-all duration-300 ease-in-out cursor-pointer text-black px-12 rounded-lg py-4">
              Begin Journey
            </button>
          </a>
        </div>

        <div className="flex-1 relative w-full aspect-square md:aspect-auto md:min-h-[500px] lg:min-h-[600px] rounded-xl overflow-hidden self-stretch">
          <Image src={image} alt={title} fill className="object-cover" />
        </div>
      </div>
    </section>
  );
};

export default PathCard;
