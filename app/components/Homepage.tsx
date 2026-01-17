import React from "react";

const Homepage = () => {
  return (
    <section style={{ marginTop: "5rem" }}>
      <div className="bg-[#0A0A0A] text-white py-24 px-8 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#EBCB4B] opacity-10 blur-[120px] pointer-events-none"></div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-black mb-6 leading-tight uppercase tracking-tighter">
            Discipline shapes what <br />
            <span className="text-[#EBCB4B]">matters most</span>
          </h1>
          <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
            The Cave is a philosophy-driven community for those who refuse
            scattered ambition. We build serious practitioners through
            structured paths, intellectual rigor, and real outcomes.
          </p>
          <button className="bg-[#EBCB4B] text-black font-bold py-4 px-12 rounded-sm uppercase hover:bg-yellow-500 transition-all">
            Begin
          </button>
        </div>
      </div>

      <div className="bg-[#8B7310] py-4 overflow-hidden whitespace-nowrap border-y border-black">
        <div className="flex space-x-12 animate-pulse uppercase font-bold text-sm">
          <span>Building wealth and influence a step at a time.</span>
          <span>Building wealth and influence a step at a time.</span>
          <span>Building wealth and influence a step at a time.</span>
          <span>Building wealth and influence a step at a time.</span>
        </div>
      </div>

      <div className="bg-white text-black py-24 px-8 relative">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 relative">
            <h2 className="text-5xl font-black leading-none mb-8 tracking-tighter uppercase">
              Capable minds without <br /> direction collapse
            </h2>
            <p className="text-gray-700 text-lg mb-8 max-w-md">
              You have the capacity. You lack the structure. Ambition without
              framework becomes noise, and potential without discipline becomes
              regret. IF THAT'S YOU,
            </p>
            <button className="bg-[#EBCB4B] text-black font-bold py-3 px-8 rounded-sm uppercase border border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              Gain clarity
            </button>
          </div>

          <div className="flex-1 relative">
            <img
              src="/sticky-man.jpeg"
              alt="Scattered-man"
              className="w-full grayscale border border-gray-200"
            />
            <div className="absolute top-[-20px] left-[-30px] bg-white border border-black px-4 py-1 -rotate-5 font-bold text-xs shadow-sm">
              Scattered across many paths
            </div>
            <div className="absolute top-[40px] right-[-10px] bg-white border border-black px-4 py-1 rotate-3 font-bold text-xs shadow-sm">
              No clear direction
            </div>
            <div className="absolute bottom-[20px] left-[-10px] bg-white border border-black px-4 py-1 -rotate-2 font-bold text-xs shadow-sm">
              Tired of the noise
            </div>
          </div>
        </div>
      </div>
    </div>

  </section >;
};

export default Homepage;
