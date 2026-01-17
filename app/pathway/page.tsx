import Image from "next/image";
import PathCard from "../components/PathCard";
import paths from "../data/paths";

const Pathway = () => {
  return (
    <section className="w-full bg-white  mt-20 ">
      <div className="bg-[linear-gradient(339.36deg,#D7C102_-25.31%,#060606_27.69%,#D7C102_107.88%)] pb-10">
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

      <section className="py-16 bg-white">
        <div className="flex flex-col gap-3 items-center mb-12">
          <p className="text-gray-500">What next?</p>
          <h2 className="font-bold text-3xl">Built for growth</h2>
          <p className="text-center max-w-prose text-gray-600">Each stage serves a purpose in your development.</p>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Main Card (Mastery) */}
          <div className="md:col-span-2 relative h-[400px] rounded-lg overflow-hidden group">
            <Image 
              src="/placeholder-img.png"
              alt="Mastery"
              fill
              className="object-cover" 
            />
            <div className="absolute inset-0 bg-black/40 p-10 flex flex-col justify-between text-white z-10">
              <span className="text-sm font-semibold uppercase">Mastery</span>
              <h3 className="text-3xl md:text-4xl font-bold max-w-sm">Digital Alchemy sharpens your skills</h3>
              <p className="text-sm max-w-md">Advanced training meets practical application in real time</p>
              <button className="w-fit border border-white px-8 py-3 hover:bg-white hover:text-black transition-all">Enroll</button>
            </div>
          </div>

          {/* Side Card 1 (Citadel) */}
          <div className="relative h-[400px] rounded-lg overflow-hidden group">
            <Image
              src="/placeholder-img.png"
              alt="Citadel"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/40 p-8 flex flex-col justify-center gap-4 text-white z-10 text-center">
              <h3 className="text-2xl font-bold">Citadel stands as your final destination</h3>
              <p className="text-sm opacity-90">You emerge as a guide for others seeking the path</p>
            </div>
          </div>

          {/* Side Card 2 (Tribes) */}
          <div className="relative h-[400px] rounded-lg overflow-hidden group">
            <Image
              src="/placeholder-img.png"
              alt="Tribes"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/40 p-8 flex flex-col justify-center gap-4 text-white z-10 text-center">
              <h3 className="text-2xl font-bold">Tribes unite those who share the same calling</h3>
              <p className="text-sm opacity-90">Identity forms through shared values and vision</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black py-24 text-white">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-24">
        
          <div className="flex flex-col items-center gap-12 ">
            <div className="text-center">
              <h2 className="font-bold text-3xl text-[#EFC738] px-6 md:px-0">Hear from the Cavemen themselves</h2>
            </div>
            <div className="flex items-center gap-8 px-6 md:gap-20">
              <Image
                src="/back-button.png"
                alt="Back"
                width={84}
                height={84}
                className="shrink-0 cursor-pointer"
              />
              <div className="bg-white rounded-[10px] p-8 text-black w-full max-w-[576px] min-h-[192px] flex flex-col gap-4 shadow-[6px_4px_20px_10px_rgba(239,199,56,0.24)]">
                <div>
                  <p className="font-semibold">Marcus Reid</p>
                  <p className="text-sm text-gray-600">Founder, Reid Studios</p>
                </div>
                <p className="leading-relaxed">"Lorem ipsum dolor sit amet, consectetur adipiscing elit..."</p>
              </div>
              <Image
                src="/forward-button.png"
                alt="Forward"
                width={84}
                height={84}
                className="shrink-0 cursor-pointer"
              />
            </div>
          </div>

          <div className="flex flex-col items-center gap-3 px-6 md:px-0">
            <div className="text-center">
              <h2 className="font-bold text-3xl">Questions</h2>
              <p className="text-white/80 mt-3">Everything you need to know about beginning your journey</p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-6 px-6 md:px-0">
            <div className="text-center">
              <h2 className="font-bold text-3xl">Need more clarity?</h2>
              <p className="text-white/80 mt-3">Reach out and we will walk you through the details</p>
            </div>
            <button className="bg-[#EFC738] text-black py-3 px-10 rounded-[10px] font-bold hover:bg-[#d4b132] transition-all">
              Contact
            </button>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="relative bg-neutral-500 rounded-xl overflow-hidden py-24 px-6 flex items-center justify-center">
          <div className="absolute inset-0 flex items-center justify-center z-0">
            <Image
              src="/cave-logo.png"
              alt="Logo"
              width={350}
              height={350}
              className="object-contain blur-xs"
            />
          </div>
          
          <div className="relative z-10 flex flex-col gap-5 items-center text-white">
            <h2 className="font-bold text-3xl text-center">The path awaits your first step</h2>
            <p className="text-center max-w-prose">Explore the Pathways and discover where you belong in this journey</p>
            <button className="bg-[#EFC738] text-black py-3 px-10 rounded-[10px] font-bold hover:bg-[#d4b132] transition-colors">
              Join
            </button>
          </div>
        </div>
      </section>
    </section>
  );
};


export default Pathway;
