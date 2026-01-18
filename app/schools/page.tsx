import React from "react";

const Schools = () => {
  return (
    <main className="w-full">
      <section className="bg-[#0A0A0A] text-white py-32 px-6 text-center relative overflow-hidden">
        <div className="max-w-5xl mx-auto mt-16 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] md:w-[600px] h-[200px] bg-[#EBCB4B] opacity-25 blur-[90px] pointer-events-none z-0"></div>
          <div className="relative z-10">
            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-[1.1] tracking-tighter uppercase">
              3 Schools. 3 Months. <br />
              <span className="text-white">
                A Lifetime Impact.
              </span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed">
              Learn Skills that actually change your life. Selling School helps you earn.
              Healing School helps you stay stable. Impact School helps you grow with
              integrity.
            </p>
            <button className="bg-[#EBCB4B] text-black font-bold py-4 px-16 rounded-sm uppercase hover:bg-yellow-500 transition-all shadow-[0_0_20px_rgba(235,203,75,0.2)]">
              Enroll
            </button>
          </div>
        </div>
      </section>

      <section className="bg-[#F8F8F8] text-black py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter">
              Three disciplines for serious <br /> practitioners
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Each school teaches what matters. Each demands rigor. Each builds capacity that compounds over time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 p-10 rounded-lg text-center hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-6 flex justify-center">
                <div className="text-4xl mb-6">🏷️</div>
              </div>
              <h3 className="text-2xl font-bold mb-4">Selling school</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Master the art of moving ideas and building sustainable influence.
              </p>
            </div>

            <div className="bg-white border border-[#EBCB4B] p-10 rounded-lg text-center shadow-[0_0_30px_rgba(235,203,75,0.15)] relative overflow-hidden">
              <div className="text-4xl mb-6 flex justify-center">
                <div className="text-4xl mb-6">🛠️</div>
              </div>
              <h3 className="text-2xl font-bold mb-4">Healing school</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Learn to restore what has been broken and find clarity.
              </p>
            </div>

            <div className="bg-white border border-gray-200 p-10 rounded-lg text-center hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-6 flex justify-center">
                <div className="text-4xl mb-6">⚙️</div>
              </div>
              <h3 className="text-2xl font-bold mb-4">Impact school</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Create systems that matter and leave something real behind.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0A0A0A] text-white py-32 px-6 overflow-hidden">
        <style dangerouslySetInnerHTML={{
          __html: `
          @keyframes slideLeft {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-slide-left {
            display: flex;
            width: max-content;
            animation: slideLeft 25s linear infinite;
          }
          .animate-slide-left:hover {
            animation-play-state: paused;
          }
        `}} />

        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter text-[#EBCB4B] drop-shadow-[0_0_25px_rgba(235,203,75,0.4)]">
              The Selling School
            </h2>
            <p className="text-xl md:text-2xl font-medium text-gray-200">
              Learn how to make your work sell without selling your soul.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-16 mb-40">
            <div className="w-full md:w-1/2 space-y-8">
              <p className="text-gray-300 leading-relaxed text-lg">
                Selling School helps you turn what you know into income. Not with hype. Not with manipulation. With clarity, structure, and real-world selling skills. <br />
                <span className="font-bold text-white">In House Cave, Money is child's play for The Caveman.</span>
              </p>

              <div>
                <h4 className="text-[#EBCB4B] font-bold text-xl mb-6">What you will actually gain:</h4>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start"><span className="mr-3 text-[#EBCB4B]">•</span> How to price your work confidently</li>
                  <li className="flex items-start"><span className="mr-3 text-[#EBCB4B]">•</span> How to explain your value so people understand it</li>
                  <li className="flex items-start"><span className="mr-3 text-[#EBCB4B]">•</span> How to attract the right customers</li>
                  <li className="flex items-start"><span className="mr-3 text-[#EBCB4B]">•</span> How to close sales without feeling fake</li>
                  <li className="flex items-start"><span className="mr-3 text-[#EBCB4B]">•</span> How to build income that doesn't collapse under pressure</li>
                </ul>
              </div>
              <button className="bg-[#EBCB4B] text-black font-bold py-4 px-24 rounded-sm uppercase hover:bg-yellow-500 transition-all w-full md:w-max mt-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                Begin
              </button>
            </div>

            <div className="w-full md:w-1/2">
              <img
                src="/sticky-man.jpeg"
                alt="Selling School"
                className="w-full rounded-sm grayscale contrast-125 border border-gray-800"
              />
            </div>
          </div>

          <div className="relative">
            <div className="flex overflow-hidden group relative">
              <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#0A0A0A] to-transparent z-10 pointer-events-none"></div>
              <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#0A0A0A] to-transparent z-10 pointer-events-none"></div>

              <div className="animate-slide-left flex space-x-8 py-4">
                {[1, 2, 3, 4].map((item, idx) => (
                  <div key={`set1-${item}`} className={`w-[350px] md:w-[450px] flex-shrink-0 bg-white text-black p-8 rounded-lg shadow-xl whitespace-normal ${idx === 1 ? 'border-2 border-[#EBCB4B] shadow-[0_0_30px_rgba(235,203,75,0.2)]' : ''}`}>
                    <div className="mb-6">
                      <h4 className="font-bold text-lg">Dubem, the Great</h4>
                      <p className="text-xs uppercase text-gray-500 tracking-widest">Founder, Orthodox Gadgets</p>
                    </div>
                    <div className="w-full h-32 bg-gray-100 mb-6 rounded-md border border-gray-200 flex items-center justify-center text-gray-400">
                      Image
                    </div>
                    <p className="text-sm leading-relaxed text-gray-800">
                      He made 100 million naira in revenue by 2025 just by following rules and principles taught in the selling school.
                    </p>
                  </div>
                ))}

                {[1, 2, 3, 4].map((item, idx) => (
                  <div key={`set2-${item}`} className={`w-[350px] md:w-[450px] flex-shrink-0 bg-white text-black p-8 rounded-lg shadow-xl whitespace-normal ${idx === 1 ? 'border-2 border-[#EBCB4B] shadow-[0_0_30px_rgba(235,203,75,0.2)]' : ''}`}>
                    <div className="mb-6">
                      <h4 className="font-bold text-lg">Dubem, the Great</h4>
                      <p className="text-xs uppercase text-gray-500 tracking-widest">Founder, Orthodox Gadgets</p>
                    </div>
                    <div className="w-full h-32 bg-gray-100 mb-6 rounded-md border border-gray-200 flex items-center justify-center text-gray-400">
                      Image
                    </div>
                    <p className="text-sm leading-relaxed text-gray-800">
                      He made 100 million naira in revenue by 2025 just by following rules and principles taught in the selling school.
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="bg-[#F8F8F8] text-black py-32 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-24 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[100px] bg-[#EBCB4B] opacity-30 blur-[60px] pointer-events-none"></div>
            <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter relative z-10">
              The Healing School
            </h2>
            <p className="text-xl md:text-2xl font-medium text-gray-800 relative z-10">
              Learn how to stay consistent without breaking yourself.
            </p>
          </div>

          <div className="flex flex-col md:flex-row-reverse items-center gap-16">
            <div className="w-full md:w-1/2 space-y-8">
              <p className="text-gray-700 leading-relaxed text-lg">
                Healing School helps you fix the inner patterns that quietly sabotage your progress. Because when your inner life is chaotic, your results will be too.
              </p>

              <div>
                <h4 className="text-[#D4AF37] font-bold text-xl mb-6">What you will actually gain:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start"><span className="mr-3 text-black font-bold">•</span> How to stop self-sabotage and procrastination</li>
                  <li className="flex items-start"><span className="mr-3 text-black font-bold">•</span> How to manage overwhelm and mental pressure</li>
                  <li className="flex items-start"><span className="mr-3 text-black font-bold">•</span> How to rebuild confidence in yourself</li>
                  <li className="flex items-start"><span className="mr-3 text-black font-bold">•</span> How to stay disciplined without hating your life</li>
                  <li className="flex items-start"><span className="mr-3 text-black font-bold">•</span> How to become emotionally steady under responsibility</li>
                </ul>
              </div>

              <button className="bg-[#EBCB4B] text-black font-bold py-4 px-24 rounded-sm uppercase hover:bg-yellow-500 transition-all w-full md:w-max mt-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                Begin
              </button>
            </div>
            <div className="w-full md:w-1/2">
              <img
                src="/sticky-man.jpeg"
                alt="Healing School"
                className="w-full rounded-sm grayscale contrast-125 border border-gray-300"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0A0A0A] text-white py-32 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter text-[#EBCB4B] drop-shadow-[0_0_25px_rgba(235,203,75,0.4)]">
              The Impact School
            </h2>
            <p className="text-xl md:text-2xl font-medium">
              Learn how to carry power responsibly.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-1/2 space-y-8">
              <p className="text-gray-300 leading-relaxed text-lg">
                Impact School is for people who are growing in skill, money, or influence, and want to do it with integrity. It teaches you how to carry power responsibly.
              </p>

              <div>
                <h4 className="text-[#EBCB4B] font-bold text-xl mb-6">What you will actually gain:</h4>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start"><span className="mr-3 text-[#EBCB4B]">•</span> How to lead without ego</li>
                  <li className="flex items-start"><span className="mr-3 text-[#EBCB4B]">•</span> How to build without exploiting people</li>
                  <li className="flex items-start"><span className="mr-3 text-[#EBCB4B]">•</span> How to communicate with emotional intelligence</li>
                  <li className="flex items-start"><span className="mr-3 text-[#EBCB4B]">•</span> How to handle influence without becoming careless</li>
                  <li className="flex items-start"><span className="mr-3 text-[#EBCB4B]">•</span> How to grow while staying grounded</li>
                </ul>
              </div>

              <button className="bg-[#EBCB4B] text-black font-bold py-4 px-24 rounded-sm uppercase hover:bg-yellow-500 transition-all w-full md:w-max mt-4">
                Begin
              </button>
            </div>
            <div className="w-full md:w-1/2">
              <img
                src="/sticky-man.jpeg"
                alt="Impact School"
                className="w-full rounded-sm grayscale contrast-125 border border-gray-800"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0A0A0A] text-white py-40 px-6 relative overflow-hidden">

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
          <div className="relative">
            <img
              src="/cave-logo.png"
              alt="Background Logo"
              className="w-[400px] md:w-[600px] grayscale brightness-50 blur-sm"
            />
            <div className="absolute inset-0 bg-[#EBCB4B] opacity-20 blur-[130px] rounded-full"></div>
          </div>
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight tracking-tight uppercase">
            Ready to Join the Next Wave Of <br /> Builders?
          </h2>

          <p className="text-gray-300 text-lg mb-10 max-w-xl mx-auto">
            Build the foundations that outlast everything else here.
          </p>

          <button className="bg-[#EBCB4B] text-black font-bold py-4 px-12 rounded-lg text-sm uppercase hover:bg-yellow-500 transition-all shadow-[0_0_30px_rgba(235,203,75,0.2)]">
            Join the Waitlist
          </button>
        </div>
      </section>

    </main>
  );
};

export default Schools;
