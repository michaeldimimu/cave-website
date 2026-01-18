import React from "react";

const Homepage = () => {
  return (
    <section style={{ marginTop: '5rem' }}>
      {/* 1. HERO SECTION */}
      <div className="bg-[#0A0A0A] text-white py-24 px-8 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#EBCB4B] opacity-10 blur-[120px] pointer-events-none"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-black mb-6 leading-tight uppercase tracking-tighter">
            Discipline shapes what <br />
            <span className="text-[#EBCB4B]">matters most</span>
          </h1>
          <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
            The Cave is a philosophy-driven community for those who refuse scattered ambition. We build serious practitioners through structured paths, intellectual rigor, and real outcomes.
          </p>
          <button className="bg-[#EBCB4B] text-black font-bold py-4 px-12 rounded-sm uppercase hover:bg-yellow-500 transition-all">
            Begin
          </button>
        </div>
      </div>

      {/* 2. TICKER SECTION */}
      <div className="bg-[#8B7310] py-4 overflow-hidden whitespace-nowrap border-y border-black">
        <div className="flex space-x-12 animate-pulse uppercase font-bold text-sm text-black">
          <span>Building wealth and influence a step at a time.</span>
          <span>Building wealth and influence a step at a time.</span>
          <span>Building wealth and influence a step at a time.</span>
          <span>Building wealth and influence a step at a time.</span>
        </div>
      </div>

      {/* 3. CAPABLE MINDS SECTION */}
      <div className="bg-white text-black py-24 px-8 relative">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 relative">
            <h2 className="text-5xl font-black leading-none mb-8 tracking-tighter uppercase">
              Capable minds without <br /> direction collapse
            </h2>
            <p className="text-gray-700 text-lg mb-8 max-w-md">
              You have the capacity. You lack the structure. Ambition without framework becomes noise, and potential without discipline becomes regret. IF THAT'S YOU,
            </p>
            <button className="bg-[#EBCB4B] text-black font-bold py-3 px-8 rounded-sm uppercase border border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              Gain clarity
            </button>
          </div>
          <div className="flex-1 relative">
            <img src="/sticky-man.jpeg" alt="Scattered-man" className="w-full grayscale border border-gray-200" />
            <div className="absolute top-[-20px] left-[-30px] bg-white border border-black px-4 py-1 rotate-[-5deg] font-bold text-xs shadow-sm">Scattered across many paths</div>
            <div className="absolute top-[40px] right-[-10px] bg-white border border-black px-4 py-1 rotate-[3deg] font-bold text-xs shadow-sm">No clear direction</div>
            <div className="absolute bottom-[20px] left-[-10px] bg-white border border-black px-4 py-1 rotate-[-2deg] font-bold text-xs shadow-sm">Tired of the noise</div>
          </div>
        </div>
      </div>

      {/* 4. PATH/MASTERY SECTION */}
      <div className="bg-[#0A0A0A] text-white py-32 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-6xl font-black mb-4 tracking-tighter">
              Go from confused to <br />
              <span className="text-[#EBCB4B] drop-shadow-[0_0_15px_rgba(235,203,75,0.5)]">master builder</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              The path is deliberate. Each stage builds on the last. You move through chambers of increasing depth, earning clarity and capability with every step.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-16 md:gap-32 items-start">
            <div className="w-full md:w-1/3 relative pl-8 border-l-2 border-gray-800 space-y-24 py-4">
              <div className="relative">
                <div className="absolute -left-[41px] top-1 w-5 h-5 bg-[#EBCB4B] rounded-full shadow-[0_0_10px_#EBCB4B]"></div>
                <h3 className="text-2xl font-bold text-white leading-none">Begin</h3>
              </div>
              <div className="relative">
                <div className="absolute -left-[41px] top-1 w-5 h-5 bg-gray-600 rounded-full border-4 border-[#0A0A0A]"></div>
                <h3 className="text-2xl font-bold text-gray-500 leading-none">Onboarding</h3>
              </div>
              <div className="relative">
                <div className="absolute -left-[41px] top-1 w-5 h-5 bg-gray-600 rounded-full border-4 border-[#0A0A0A]"></div>
                <h3 className="text-2xl font-bold text-gray-500 leading-none">The Lounge</h3>
              </div>
              <div className="relative">
                <div className="absolute -left-[41px] top-1 w-5 h-5 bg-gray-600 rounded-full border-4 border-[#0A0A0A]"></div>
                <h3 className="text-2xl font-bold text-gray-500 leading-none">The Bridge</h3>
              </div>
            </div>

            <div className="w-full md:w-2/3 flex flex-col items-center text-center">
              <img src="/sticky-man.jpeg" alt="Mastery Path" className="max-w-md w-full rounded-sm grayscale opacity-80 mb-8" />

              <button className="bg-[#EBCB4B] text-black font-bold py-4 px-12 w-full md:w-auto rounded-sm uppercase hover:bg-yellow-500 transition-all">
                Begin
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 5. SCHOOLS SECTION */}
      <div className="bg-white text-black py-32 px-8 text-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black mb-16 tracking-tighter">Three disciplines for serious practitioners</h2>
          <p className="text-center text-gray-600 mt-4 mb-16 max-w-2xl mx-auto px-4">
            Each school teaches what matters. Each demands rigor. Each builds capacity that compounds over time.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="border border-gray-200 p-10 rounded-lg hover:shadow-lg transition-shadow text-center">
              <div className="text-4xl mb-6">🏷️</div>
              <h3 className="text-2xl font-bold mb-4">Selling school</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Master the art of moving ideas and building sustainable influence.</p>
            </div>
            <div className="border border-gray-200 p-10 rounded-lg hover:shadow-lg transition-shadow text-center">
              <div className="text-4xl mb-6">🛠️</div>
              <h3 className="text-2xl font-bold mb-4">Healing school</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Learn to restore what has been broken and find clarity.</p>
            </div>
            <div className="border border-gray-200 p-10 rounded-lg hover:shadow-lg transition-shadow text-center">
              <div className="text-4xl mb-6">⚙️</div>
              <h3 className="text-2xl font-bold mb-4">Impact school</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Create systems that matter and leave something real behind.</p>
            </div>
          </div>
          <button className="bg-[#EBCB4B] text-black font-bold py-3 px-12 rounded-sm uppercase hover:bg-yellow-500 transition-all">Explore</button>
        </div>
      </div>

      {/* 6. TESTIMONIALS SECTION */}
      <div className="bg-[#0A0A0A] text-white py-32 px-8 text-center border-t border-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tighter">700+ members. 5+ countries. <br /> One standard.</h2>
          <p className="text-gray-400 mb-16 text-lg">What happens when serious people commit to serious work</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Testimonial 1 */}
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="group relative block bg-[#111] aspect-square rounded-lg overflow-hidden border border-gray-800 transition-all duration-300 hover:border-[#EBCB4B] hover:shadow-[0_0_30px_rgba(235,203,75,0.15)]">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-[#EBCB4B] group-hover:scale-110 group-hover:shadow-[0_0_20px_#EBCB4B]">
                <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-black border-b-[10px] border-b-transparent ml-1"></div>
              </div>
              <div className="absolute bottom-6 left-0 w-full px-6">
                <p className="font-bold text-white mb-1 text-left">Marcus Reid</p>
                <p className="text-xs text-gray-400 text-left uppercase tracking-widest group-hover:text-[#EBCB4B]">Founder, Strategy</p>
              </div>
            </a>

            {/* Testimonial 2 */}
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="group relative block bg-[#111] aspect-square rounded-lg overflow-hidden border border-gray-800 transition-all duration-300 hover:border-[#EBCB4B] hover:shadow-[0_0_30px_rgba(235,203,75,0.15)]">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-[#EBCB4B] group-hover:scale-110 group-hover:shadow-[0_0_20px_#EBCB4B]">
                <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-black border-b-[10px] border-b-transparent ml-1"></div>
              </div>

              <div className="absolute bottom-6 left-0 w-full px-6">
                <p className="font-bold text-white mb-1 text-left">Marcus Reid</p>
                <p className="text-xs text-gray-400 text-left uppercase tracking-widest group-hover:text-[#EBCB4B] transition-colors">Founder, Strategy</p>
              </div>
            </a>

            {/* Testimonial 3 */}
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="group relative block bg-[#111] aspect-square rounded-lg overflow-hidden border border-gray-800 transition-all duration-300 hover:border-[#EBCB4B] hover:shadow-[0_0_30px_rgba(235,203,75,0.15)]">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-[#EBCB4B] group-hover:scale-110 group-hover:shadow-[0_0_20px_#EBCB4B]">
                <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-black border-b-[10px] border-b-transparent ml-1"></div>
              </div>
              <div className="absolute bottom-6 left-0 w-full px-6">
                <p className="font-bold text-white mb-1 text-left">Azeez Tomisin</p>
                <p className="text-xs text-gray-400 text-left uppercase tracking-widest group-hover:text-[#EBCB4B]">Founder, Push2Pull</p>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* 7. TRANSITION SECTION */}
      <div className="bg-[#111111] text-white py-24 px-8 text-center border-t border-gray-900">
        <h2 className="text-5xl font-black mb-6 tracking-tighter uppercase">The work begins now</h2>
        <p className="text-gray-400 mb-8 font-medium text-lg">Discipline is not punishment. It is freedom. Step into The Cave.</p>
        <button className="bg-[#EBCB4B] text-black font-bold py-3 px-12 rounded-sm uppercase hover:bg-yellow-500 transition-all">Begin</button>
      </div>
    </section>
  );
};

export default Homepage;