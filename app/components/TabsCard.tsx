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
      className={`rounded-2xl w-full mx-auto mb-10 mt-12 overflow-hidden shadow-lg ${bgColor}`}
    >
      <div className={`flex flex-col-reverse md:flex-row items-stretch`}>
        <div className="flex-1 p-8 md:p-12 lg:p-16 flex flex-col justify-center gap-4 text-center md:text-left">
          <div className="flex gap-4 items-center mb-2 justify-center md:justify-start">
            <span className="font-mono text-xs opacity-60">{number}</span>
          </div>

          <div className="space-y-2">
            <p className="font-bold text-black/60 uppercase text-xs tracking-widest">
              {header}
            </p>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-black leading-tight">
              {description}
            </h2>
          </div>

          <p className="text-black/80 font-medium leading-relaxed max-w-lg mx-auto md:mx-0">
            {subtitle}
          </p>

          <div className="mt-4">
            <button className="bg-black hover:bg-black/80 text-white font-bold w-full md:w-fit px-10 py-4 rounded-full transition-all duration-300 uppercase tracking-tighter text-xs">
              Begin Journey
            </button>
          </div>
        </div>

        <div className="flex-1 relative w-full h-[300px] md:h-auto min-h-[300px] overflow-hidden">
          <Image
            src={image}
            alt={description}
            fill
            className="object-cover transition-transform duration-700 hover:scale-105"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default TabsCard;
