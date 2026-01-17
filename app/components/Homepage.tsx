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

      <div className="bg-[#0A0A0A] text-white py-32 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-6xl font-black mb-4 tracking-tighter">
              Go from confused to <br />
              <span className="text-[#EBCB4B] drop-shadow-[0_0_15px_rgba(235,203,75,0.5)]">
                master builder
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              The path is deliberate. Each stage builds on the last. You move
              through chambers of increasing depth, earning clarity and
              capability with every step.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-16 md:gap-32 items-start">
            <div className="w-full md:w-1/3 relative pl-8 border-l-2 border-gray-800 space-y-24 py-4">
              <div className="relative">
                <div className="absolute -left-[41px] top-1 w-5 h-5 bg-[#EBCB4B] rounded-full shadow-[0_0_10px_#EBCB4B]"></div>
                <h3 className="text-2xl font-bold text-white leading-none">
                  Begin
                </h3>
              </div>

              <div className="relative">
                <div className="absolute -left-[41px] top-1 w-5 h-5 bg-gray-600 rounded-full border-4 border-[#0A0A0A]"></div>
                <h3 className="text-2xl font-bold text-gray-500 leading-none">
                  The Onboarding
                </h3>
              </div>

              <div className="relative">
                <div className="absolute -left-[41px] top-1 w-5 h-5 bg-gray-600 rounded-full border-4 border-[#0A0A0A]"></div>
                <h3 className="text-2xl font-bold text-gray-500 leading-none">
                  The Lounge
                </h3>
              </div>

              <div className="relative">
                <div className="absolute -left-[41px] top-1 w-5 h-5 bg-gray-600 rounded-full border-4 border-[#0A0A0A]"></div>
                <h3 className="text-2xl font-bold text-gray-500 leading-none">
                  The Bridge
                </h3>
              </div>

              <div className="relative">
                <div className="absolute -left-[41px] top-1 w-5 h-5 bg-gray-600 rounded-full border-4 border-[#0A0A0A]"></div>
                <h3 className="text-2xl font-bold text-gray-500 leading-none">
                  The Lighthouse
                </h3>
              </div>
            </div>

            <div className="w-full md:w-2/3">
              <img
                src="/sticky-man.jpeg"
                alt="Mastery Path"
                className="w-full rounded-sm grayscale opacity-80 mb-8"
              />
              <p className="text-gray-400 mb-8">
                The path is deliberate. Each stage builds on the last. You move
                through chambers of increasing depth, earning clarity and
                capability with every step.
              </p>
              <button className="bg-[#EBCB4B] text-black font-bold py-4 px-12 w-full md:w-auto rounded-sm uppercase">
                Begin
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white text-black py-32 px-8 text-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black mb-16 tracking-tighter">
            Three disciplines for serious <br /> practitioners
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="border border-gray-200 p-10 rounded-lg hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-6">🏷️</div>
              <h3 className="text-2xl font-bold mb-4">Selling school</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Master the art of moving ideas and building sustainable
                influence.
              </p>
            </div>

            <div className="border border-gray-200 p-10 rounded-lg hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-6">🏷️</div>
              <h3 className="text-2xl font-bold mb-4">Healing school</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Learn to restore what has been broken and find clarity.
              </p>
            </div>

            <div className="border border-gray-200 p-10 rounded-lg hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-6">🏷️</div>
              <h3 className="text-2xl font-bold mb-4">Impact school</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Create systems that matter and leave something real behind.
              </p>
            </div>
          </div>

          <button className="bg-[#EBCB4B] text-black font-bold py-3 px-12 rounded-sm uppercase hover:bg-yellow-500 transition-all">
            Explore
          </button>
        </div>
      </div>
    </section>
  );
};

export default Homepage;
