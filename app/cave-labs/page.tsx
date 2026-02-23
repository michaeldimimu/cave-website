import Image from "next/image";
import CaveLabsContactForm from "../components/CaveLabsContactForm";

const CaveLabsPage = () => {
  return (
    <>
      <section className="cave-labs-hero-bg flex flex-col justify-between h-screen px-6 py-16 md:py-24 pt-32 md:pt-40 text-white">
        <p className="font-bold text-xl md:text-2xl text-center lg:text-left">
          This is Cave Labs
        </p>
        <h1 className="text-3xl md:text-5xl text-center lg:text-left font-bold uppercase tracking-tight leading-[1.1] max-w-4xl">
          This is where
          <br />
          <span className="text-5xl md:text-7xl text-yellow-500">ideas</span>
          <br />
          are stress-tested
        </h1>
      </section>

      <section className="px-6 md:px-8 py-16 md:py-24 bg-black text-white">
        <p className="text-center mb-10 leading-normal font-bold text-2xl md:text-4xl lg:text-5xl max-w-[40ch] mx-auto">
          Cave Labs is a{" "}
          <span className="border-3 border-dashed border-yellow-500 px-2 text-yellow-500">
            strategic
          </span>{" "}
          systems lab designing products that{" "}
          <span className="border border-yellow-500 px-2">structure</span>{" "}
          intelligence, activate communities, and turn{" "}
          <span className="text-yellow-500">culture</span> into{" "}
          <span className="border-3 border-dashed border-black bg-yellow-500 px-2">
            operational
          </span>{" "}
          systems.
        </p>
        <p className="text-center max-w-[60ch] mx-auto font-semibold text-lg md:text-xl text-white/80">
          We build ideas into tools, systems and frameworks, that can be used,
          tested, taught and improved.
        </p>
      </section>

      <section className="px-6 md:px-8 py-16 bg-black/95 text-white">
        <div className="min-h-[60vh] md:h-[70vh] lg:h-[80vh] flex flex-col md:flex-row gap-3 md:gap-4 text-black mb-8">
          <div className="flex-1 bg-white flex flex-col justify-between p-4 md:p-6 min-h-37.5">
            <p className="font-bold text-4xl md:text-5xl lg:text-6xl">01</p>
            <p className="text-sm md:text-base">
              90%+ of learning remains theoretical and never becomes applied
              systems or tools.
            </p>
          </div>
          <div className="flex-1 bg-white flex flex-col justify-between p-4 md:p-6 min-h-37.5">
            <p className="text-sm md:text-base">
              0 → 1 Most ideas never make the transition from concept to working
              prototype.
            </p>
            <p className="font-bold text-4xl md:text-5xl lg:text-6xl">02</p>
          </div>
          <div className="flex-1 bg-transparent text-yellow-500 text-center flex flex-col justify-between p-4 overflow-hidden min-h-37.5">
            <div>
              <p className="text-5xl md:text-4xl lg:text-7xl font-bold whitespace-nowrap">
                OUR WHY
              </p>
              <p className="text-5xl md:text-4xl lg:text-7xl font-bold whitespace-nowrap">
                OUR WHY
              </p>
            </div>
            <div>
              <p className="text-5xl md:text-4xl lg:text-7xl -translate-x-20 font-bold whitespace-nowrap">
                OUR WHY
              </p>
              <p className="text-5xl md:text-4xl lg:text-7xl -translate-x-20 font-bold whitespace-nowrap">
                OUR WHY
              </p>
            </div>
          </div>
          <div className="flex-1 bg-white flex flex-col justify-between p-4 md:p-6 min-h-37.5">
            <p className="font-bold text-4xl md:text-5xl lg:text-6xl">03</p>
            <p className="text-sm md:text-base">
              1 Standard If it doesn&apos;t teach and it doesn&apos;t build
              capability, it doesn&apos;t ship.
            </p>
          </div>
          <div className="flex-1 bg-white flex flex-col justify-between p-4 md:p-6 min-h-37.5">
            <p className="text-sm md:text-base">
              0 → 1 Most ideas never make the transition from concept to working
              prototype.
            </p>
            <p className="font-bold text-4xl md:text-5xl lg:text-6xl">04</p>
          </div>
        </div>

        <p className="text-yellow-500 text-center max-w-[100ch] mx-auto text-sm md:text-base lg:text-lg">
          CaveLabs exists to address the gaps in applied learning and idea
          execution by converting intelligence into functional, scalable tools
          and educational artifacts.
        </p>
      </section>

      <section className="px-6 md:px-8 py-16 md:py-24">
        <h2 className="mb-8 font-bold text-2xl md:text-4xl lg:text-5xl">
          What we do
        </h2>

        <div className="border border-black p-6 md:p-8 lg:p-12">
          <div className="flex flex-col md:flex-row md:justify-between gap-6 md:gap-8">
            <div className="flex-1">
              <h3 className="font-bold text-xl md:text-2xl lg:text-3xl mb-2">
                Research
              </h3>
              <p className="text-black/80 text-sm md:text-base">
                We synthesize insights across disciplines and translate
                complexity into clarity through: Intelligence briefs, Analytical
                frameworks and Structured research document
              </p>
            </div>
            <div className="flex-1 md:text-right">
              <h3 className="font-bold text-xl md:text-2xl lg:text-3xl mb-2">
                Product Development
              </h3>
              <p className="text-black/80 text-sm md:text-base">
                We convert ideas into working systems. Outputs include:
                GPT-based tools, Dashboards and internal platforms, Simulators
                and structured workflows
              </p>
            </div>
          </div>
          <Image
            src="/atom.svg"
            height={64}
            width={64}
            alt="Atom"
            className="w-12 md:w-16 mx-auto opacity-80 my-8 md:my-12"
          />
          <div className="flex flex-col md:flex-row md:justify-between gap-6 md:gap-8">
            <div className="flex-1">
              <h3 className="font-bold text-xl md:text-2xl lg:text-3xl mb-2">
                Innovate
              </h3>
              <p className="text-black/80 text-sm md:text-base">
                We test, prototype, iterate without fear and obsessively
              </p>
            </div>
            <div className="flex-1 md:text-right">
              <h3 className="font-bold text-xl md:text-2xl lg:text-3xl mb-2">
                Educate
              </h3>
              <p className="text-black/80 text-sm md:text-base">
                Every product is built to teach. Our standard is simple: every
                artifact must elevate capability.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-8 py-16 md:py-24 bg-black bg-obsessed-text">
        <div className="bg-black/90 w-full md:w-3/5 lg:w-2/5 backdrop-blur-sm rounded-xl text-white p-6 md:p-12 lg:p-16 mx-auto">
          <h2 className="mb-8 md:mb-12 text-center font-bold text-xl md:text-3xl text-yellow-500">
            Products
          </h2>
          <div className="relative h-64 md:h-80 lg:h-96 w-full group cursor-pointer">
            <Image
              src="/product-3.jpg"
              height={640}
              width={640}
              alt="Product card 3"
              className="absolute top-0 left-0 rounded-lg border border-yellow-400 w-full rotate-12 shadow-xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-18 group-hover:-translate-x-12 group-hover:-translate-y-8"
            />
            <Image
              src="/product-2.jpg"
              height={640}
              width={640}
              alt="Product card 2"
              className="absolute top-0 left-0 rounded-lg border border-yellow-400 w-full rotate-6 shadow-xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-[8deg]"
            />
            <Image
              src="/product-1.jpg"
              height={640}
              width={640}
              alt="Product card 1"
              className="absolute top-0 left-0 rounded-lg border border-yellow-400 w-full shadow-xl transition-all duration-500 group-hover:scale-110 group-hover:translate-x-12 group-hover:translate-y-8"
            />
          </div>
        </div>
      </section>

      <section className="px-6 md:px-8 py-16">
        <h2 className="font-bold text-xl md:text-3xl mb-4">
          Ready to Build Something Real?
        </h2>
        <p className="text-black/80 mb-4">
          We collaborate with founders, thinkers, and builders.
        </p>
        <div className="flex flex-col md:flex-row gap-8">
          <Image
            src="/labs-form-image.jpg"
            height={640}
            width={640}
            alt="Person looking at screens"
            className="flex-1"
          />
          <CaveLabsContactForm />
        </div>
      </section>
    </>
  );
};

export default CaveLabsPage;
