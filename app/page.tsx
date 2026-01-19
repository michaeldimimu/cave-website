import React from "react";

const Homepage = () => {
  return (
    <section style={{ marginTop: "5rem" }}>
      <div className="bg-[#0A0A0A] text-white py-16 md:py-24 px-6 md:px-8 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-[#EBCB4B] opacity-10 blur-[80px] md:blur-[120px] pointer-events-none"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-7xl font-black mb-6 leading-tight uppercase tracking-tighter">
            Discipline shapes what <br />
            <span className="text-[#EBCB4B]">matters most</span>
          </h1>
          <p className="text-gray-400 text-base md:text-lg mb-8 md:mb-10 max-w-2xl mx-auto">
            The Cave is a philosophy-driven community for those who refuse
            scattered ambition. We build serious practitioners through
            structured paths, intellectual rigor, and real outcomes.
          </p>
          <a
            href="https://wa.link/chewxp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-[#EBCB4B] text-black font-bold py-3 md:py-4 px-8 md:px-12 rounded-sm cursor-pointer hover:opacity-80 uppercase transition-all text-sm md:text-base">
              Begin
            </button>
          </a>
        </div>
      </div>

      <div className="bg-[#8B7310] py-3 md:py-4 overflow-hidden whitespace-nowrap border-y border-black flex">
        <div className="flex gap-8 md:gap-12 animate-scroll uppercase italic text-xs md:text-sm text-black shrink-0 p-4">
          <span>Building wealth and influence a step at a time.</span>
          <span>Building wealth and influence a step at a time.</span>
          <span>Building wealth and influence a step at a time.</span>
          <span>Building wealth and influence a step at a time.</span>
        </div>
        <div className="flex gap-8 italic md:gap-12 animate-scroll uppercase text-xs md:text-sm text-black shrink-0 p-4">
          <span>Building wealth and influence a step at a time.</span>
          <span>Building wealth and influence a step at a time.</span>
          <span>Building wealth and influence a step at a time.</span>
          <span>Building wealth and influence a step at a time.</span>
        </div>
      </div>

      <div className="bg-white text-black py-16 md:py-24 px-6 md:px-8 relative">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16">
          <div className="flex-1 relative text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-black leading-none mb-6 md:mb-8 tracking-tighter uppercase">
              Capable minds without <br /> direction collapse
            </h2>
            <p className="text-gray-700 text-base md:text-lg mb-8 max-w-md mx-auto md:mx-0">
              You have the capacity. You lack the structure. Ambition without
              framework becomes noise, and potential without discipline becomes
              regret. IF THAT'S YOU,
            </p>
            <a
              href="https://wa.link/chewxp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-[#EBCB4B] text-black font-bold py-3 px-8 rounded-sm uppercase border border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] cursor-pointer hover:opacity-80 transition-all text-sm md:text-base">
                Gain clarity
              </button>
            </a>
          </div>
          <div className="flex-1 relative w-full">
            <img
              src="/sticky-man.jpeg"
              alt="Scattered-man"
              className="w-full grayscale border border-gray-200"
            />
            <div className="absolute top-[-10px] left-0 md:top-[-20px] md:left-[-30px] bg-white border border-black px-3 py-1 -rotate-5 font-bold text-[10px] md:text-xs shadow-sm">
              Scattered across many paths
            </div>
            <div className="absolute top-[30px] right-0 md:top-[40px] md:right-[-10px] bg-white border border-black px-3 py-1 rotate-3 font-bold text-[10px] md:text-xs shadow-sm">
              No clear direction
            </div>
            <div className="absolute bottom-[20px] left-0 md:left-[-10px] bg-white border border-black px-3 py-1 -rotate-2 font-bold text-[10px] md:text-xs shadow-sm">
              Tired of the noise
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#0A0A0A] text-white py-20 md:py-32 px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-3xl md:text-6xl font-black mb-4 tracking-tighter">
              Go from confused to <br />
              <span className="text-[#EBCB4B] drop-shadow-[0_0_15px_rgba(235,203,75,0.5)]">
                Master Builder
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg">
              The path is deliberate. Each stage builds on the last. You move
              through chambers of increasing depth, earning clarity and
              capability with every step.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-12 md:gap-32 items-start">
            <div className="w-full md:w-1/3 relative pl-8 border-l-2 border-gray-800 space-y-16 md:space-y-24 py-4 ml-2 md:ml-0">
              <div className="relative">
                <div className="absolute -left-[41px] top-1 w-5 h-5 bg-[#EBCB4B] rounded-full shadow-[0_0_10px_#EBCB4B]"></div>
                <h3 className="text-xl md:text-2xl font-bold text-white leading-none">
                  Begin
                </h3>
              </div>
              <div className="relative">
                <div className="absolute -left-[41px] top-1 w-5 h-5 bg-gray-600 rounded-full border-4 border-[#0A0A0A]"></div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-500 leading-none">
                  Onboarding
                </h3>
              </div>
              <div className="relative">
                <div className="absolute -left-[41px] top-1 w-5 h-5 bg-gray-600 rounded-full border-4 border-[#0A0A0A]"></div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-500 leading-none">
                  The Lounge
                </h3>
              </div>
              <div className="relative">
                <div className="absolute -left-[41px] top-1 w-5 h-5 bg-gray-600 rounded-full border-4 border-[#0A0A0A]"></div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-500 leading-none">
                  The Bridge
                </h3>
              </div>
            </div>

            <div className="w-full md:w-2/3 flex flex-col items-center text-center">
              <img
                src="/sticky-man.jpeg"
                alt="Mastery Path"
                className="max-w-md w-full rounded-sm grayscale opacity-80 mb-8"
              />

              <a
                href="https://wa.link/chewxp"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-auto"
              >
                <button className="bg-[#EBCB4B] text-black font-bold py-4 px-12 w-full md:w-auto rounded-sm uppercase cursor-pointer hover:opacity-80 transition-all">
                  Begin
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white text-black py-20 md:py-32 px-6 md:px-8 text-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black mb-12 md:mb-16 tracking-tighter">
            Three disciplines for serious practitioners
          </h2>
          <p className="text-center text-gray-600 mt-4 mb-12 md:mb-16 max-w-2xl mx-auto">
            Each school teaches what matters. Each demands rigor. Each builds
            capacity that compounds over time.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
            <div className="border border-gray-200 p-8 md:p-10 rounded-lg hover:shadow-lg transition-shadow text-center">
              <div className="text-4xl mb-6">🏷️</div>
              <h3 className="text-2xl font-bold mb-4">Selling school</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Master the art of moving ideas and building sustainable
                influence.
              </p>
            </div>
            <div className="border border-gray-200 p-8 md:p-10 rounded-lg hover:shadow-lg transition-shadow text-center">
              <div className="text-4xl mb-6">🛠️</div>
              <h3 className="text-2xl font-bold mb-4">Healing school</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Learn to restore what has been broken and find clarity.
              </p>
            </div>
            <div className="border border-gray-200 p-8 md:p-10 rounded-lg hover:shadow-lg transition-shadow text-center">
              <div className="text-4xl mb-6">⚙️</div>
              <h3 className="text-2xl font-bold mb-4">Impact school</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Create systems that matter and leave something real behind.
              </p>
            </div>
          </div>
          <a
            href="https://wa.link/chewxp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-[#EBCB4B] text-black font-bold py-3 px-12 rounded-sm uppercase cursor-pointer hover:opacity-80 transition-all">
              Explore
            </button>
          </a>
        </div>
      </div>

      <div className="bg-[#0A0A0A] text-white py-20 md:py-32 px-6 md:px-8 text-center border-t border-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tighter">
            700+ members. 10+ countries. <br /> One standard.
          </h2>
          <p className="text-gray-400 mb-12 md:mb-16 text-base md:text-lg">
            What happens when serious people commit to serious work
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-[#1A1A1A] rounded-xl p-8 flex flex-col justify-between text-center min-h-[300px]">
              <p className="text-gray-200 text-lg leading-relaxed font-medium">
                "I loved selling, but I struggled to do it confidently. The Cave
                helped me level up fast — my life and business went from 0 to
                100."
              </p>
              <div>
                <div className="w-full h-px bg-white/10 my-6"></div>
                <h4 className="font-bold text-white mb-1">Coach Uwa</h4>
                <p className="text-sm text-gray-500">Financial Coach</p>
              </div>
            </div>

            <div className="bg-[#1A1A1A] rounded-xl p-8 flex flex-col justify-between text-center min-h-[300px] border border-[#EBCB4B] shadow-[0_0_30px_rgba(235,203,75,0.15)] relative">
              <p className="text-gray-200 text-lg leading-relaxed font-medium text-balance">
                "The Cave helped me identify the gaps in my financial discipline
                and the clarity I was missing. I'm grateful for the shift."
              </p>
              <div>
                <div className="w-full h-px bg-white/10 my-6"></div>
                <h4 className="font-bold text-white mb-1">Richard</h4>
                <p className="text-sm text-gray-500">Business Owner</p>
              </div>
            </div>

            <div className="bg-[#1A1A1A] rounded-xl p-8 flex flex-col justify-between text-center min-h-[300px]">
              <p className="text-gray-200 text-lg leading-relaxed font-medium">
                "Being a Caveman has helped me evolve and step into the best
                version of myself."
              </p>
              <div>
                <div className="w-full h-px bg-white/10 my-6"></div>
                <h4 className="font-bold text-white mb-1">Sadiq Folarin</h4>
                <p className="text-sm text-gray-500">Digital Creator</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#111111] text-white py-16 md:py-24 px-6 md:px-8 text-center border-t border-gray-900">
        <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tighter uppercase">
          The work begins now
        </h2>
        <p className="text-gray-400 mb-8 font-medium text-base md:text-lg">
          Discipline is not punishment. It is freedom. Step into The Cave.
        </p>
        <a
          href="https://wa.link/chewxp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-[#EBCB4B] text-black font-bold py-3 px-12 rounded-sm uppercase cursor-pointer hover:opacity-80 transition-all">
            Begin
          </button>
        </a>
      </div>
    </section>
  );
};

export default Homepage;
