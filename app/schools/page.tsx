import React from "react";
import CTA from "../components/CTA";
import Image from "next/image";
import schools from "../data/schools";
import SchoolSection from "../components/SchoolSection";

const Schools = () => {
  return (
    <main className="w-full">
      <section className="bg-[#0A0A0A] text-white py-32 px-6 text-center relative overflow-hidden">
        <div className="max-w-5xl mx-auto mt-16 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] md:w-[600px] h-[200px] bg-[#EBCB4B] opacity-25 blur-[90px] pointer-events-none z-0"></div>
          <div className="relative z-10">
            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-[1.1] tracking-tighter uppercase">
              3 Schools. 3 Months. <br />
              <span className="text-white">A Lifetime Impact.</span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed">
              Learn Skills that actually change your life. Selling School helps
              you earn. Healing School helps you stay stable. Impact School
              helps you grow with integrity.
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
              Each school teaches what matters. Each demands rigor. Each builds
              capacity that compounds over time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 p-10 rounded-lg text-center hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-6 flex justify-center">
                <div className="text-4xl mb-6">🏷️</div>
              </div>
              <h3 className="text-2xl font-bold mb-4">Selling school</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Master the art of moving ideas and building sustainable
                influence.
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

      {schools.map((school) => (
        <SchoolSection key={school.id} {...school} />
      ))}

      <CTA
        title="Ready to join the 1%?"
        desc="You will take your growth seriously without making it everyone else's problem."
        btnText="Begin"
      />
    </main>
  );
};

export default Schools;
