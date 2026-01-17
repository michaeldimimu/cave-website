import Image from "next/image";
import PathCard from "../components/PathCard";
import paths from "../data/paths";

const Pathway = () => {
  return (
    <section className="w-full bg-white  mt-20 ">
      <div className="bg-[linear-gradient(339.36deg,#D7C102_-25.31%,#060606_27.69%,#D7C102_107.88%)]">
        <div className="relative max-w-7xl mx-auto aspect-video">
          <Image
            src="/pathway-hero.png"
            alt="Pathway Hero"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 1280px"
            className="object-cover"
          />
          <div className="absolute cursor-pointer hover:opacity-80 transition-all duration-300 ease-in-out top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Image
              src="/play-button.png"
              alt="Play Button"
              width={100}
              height={100}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="mt-6 flex flex-col w-full gap-4 justify-center items-center text-white">
          <h1 className="text-4xl font-bold">
            The journey begins in the depths
          </h1>
          <p className="text-center max-w-prose leading-relaxed">
            The Cave is a structured path of growth and intention. Each stage
            builds upon the last, moving you from beginning through mastery and
            beyond.
          </p>
        </div>
        {paths.map((path) => (
          <PathCard key={path.number} {...path} />
        ))}
      </div>
    </section>
  );
};

export default Pathway;
