import Image from "next/image";
import React from "react";
import { Poppins, Inter } from "next/font/google";
import TabsCard from "../components/TabsCard";
import Tabs from "../components/Tabs";
import ValueCard from "../components/ValueCard";
import valueCards from "../data/values";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

const TheCave = () => {
  return (
    <section className="max-w-7xl pt-20 text-white relative overflow-hidden">
      <div className="w-full h-[90vh] relative">
        <Image
          src="/the-cave-hero.jpg"
          alt="The Cave Hero"
          fill
          priority
          className="object-cover"
        />
        <div className="inset-0 absolute bg-[#0A0A0A]/80" />
        <div className="absolute w-full px-4 md:w-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
          <h1 className="font-black mb-6 whitespace-nowrap">
            <span className={`text-2xl md:text-5xl ${poppins.className}`}>
              WELCOME TO
            </span>{" "}
            <span
              className={`text-[#EBCB4B] italic text-4xl md:text-7xl ${inter.className}`}
            >
              Caveverse
            </span>
          </h1>
          <div
            className={`flex flex-col md:flex-row w-full gap-4 md:gap-3 items-center ${poppins.className}`}
          >
            <p className="text-xs md:text-sm tracking-wide leading-relaxed text-center md:text-left max-w-md mx-auto md:mx-0">
              A training ground, a culture, a community to the impact driven,
              the visionaries, and the change architects. This is home for those
              who are not here to merely exist, but to shape the world.
            </p>
            <h2 className="text-2xl md:text-4xl uppercase whitespace-nowrap font-bold">
              Home of the 1%
            </h2>
          </div>
        </div>
      </div>

      <div className="bg-black space-y-12 text-white py-7">
        <div className="px-8">
          <h2
            className={`uppercase text-3xl md:text-5xl font-bold ${poppins.className}`}
          >
            We saw the crack
          </h2>

          <div className="px-16 space-y-5 mt-10 tracking-wide leading-relaxed text-center md:text-left max-w-2xl">
            <p>
              Modern life pulled three things apart that were never meant to be
              separate:{" "}
              <span className="text-[#EBCB4B]">Identity, Skill, Impact</span>
            </p>
            <p>
              People consume. They save threads. They bookmark videos. They plan
              endlessly. They start and abandon. They feel busy but hollow.
            </p>
            <p>It is a design failure.</p>
            <p className="text-[#EBCB4B]">
              The Cave simply exists to repair that fracture.
            </p>
          </div>
        </div>
        <div className="flex justify-end">
          <div className="px-8">
            <h2
              className={`uppercase text-3xl md:text-5xl font-bold ${poppins.className}`}
            >
              We felt the pressure
            </h2>

            <div className="px-16 space-y-5 mt-10 tracking-wide leading-relaxed text-center md:text-left max-w-2xl">
              <p>
                We live in a time of unlimited information and expected
                confusion. You can learn anything yet most people don't know
                what to build.
              </p>
              <p>
                You can see thousands of role models yet few show the middle:
                the uncertainty, the discipline, the silent repetition. You can
                join endless communities yet still feel completely alone in
                execution.
              </p>

              <p className="text-[#EBCB4B]">
                The Cave exists because something broke.
              </p>
            </div>
          </div>
        </div>
        <div className="px-8">
          <h2
            className={`uppercase text-3xl md:text-5xl font-bold ${poppins.className}`}
          >
            We heard the noise
          </h2>

          <div className="px-16 space-y-5 mt-10 tracking-wide leading-relaxed text-center md:text-left max-w-2xl">
            <p>
              We are told visibility equals value.{" "}
              <span className="block">
                Post more. Speak more. Brand louder. Launch early.
              </span>
            </p>
            <p>But exposure without branding breaks people.</p>
            <p>It is a design failure.</p>
            <p className="">
              The Cave does not reward noise.{" "}
              <span className="text-[#EBCB4B]">
                It rewards depth coupled with ruthless execution.
              </span>
            </p>
          </div>
        </div>
        <h2
          className={`uppercase text-3xl text-center text-[#EBCB4B] md:text-5xl font-bold ${poppins.className}`}
        >
          We emerge to correct
        </h2>
      </div>
      <div className="bg-white text-black py-24 px-8 flex flex-col items-center justify-center text-center">
        <div className=" opacity-40 pointer-events-none rounded-full"></div>

        <div className="relative z-10 max-w-3xl space-y-6">
          <h2
            className={`text-4xl md:text-5xl font-bold tracking-tight ${poppins.className}`}
          >
            To build for serious growth
          </h2>
          <p className="text-gray-900 text-sm md:text-base leading-relaxed max-w-2xl mx-auto font-medium">
            The Cave operates as a philosophical institution, not a network. It
            demands rigor from those who enter and rewards discipline with
            transformation.
          </p>
        </div>
      </div>
      <Tabs />

      <div className="bg-black text-white py-24 px-8 mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
            <h2
              className={`text-4xl md:text-6xl font-bold tracking-tight text-[#EBCB4B] leading-[1.1] max-w-2xl ${poppins.className}`}
            >
              Built on first principles, not best practices.
            </h2>
            <p className="text-gray-300 text-sm md:text-lg max-w-md font-medium text-right md:text-right leading-relaxed">
              Every element of The Cave derives from fundamental truths about
              skill acquisition, knowledge transfer, and sustainable growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {valueCards.map(({ title, body, footer }) => (
              <ValueCard
                key={title}
                title={title}
                body={body}
                footer={footer}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white text-black py-24 px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2
            className={`text-5xl md:text-7xl font-bold text-[#EBCB4B] mb-20 ${poppins.className}`}
          >
            Meet the Master minds
          </h2>

          <div className="flex flex-col gap-8">
            {/* Top Row - 2 Cards */}
            <div className="flex flex-col md:flex-row justify-center gap-8">
              {[1, 2].map((i) => (
                <div
                  key={i}
                  className="border border-[#EBCB4B] rounded-lg overflow-hidden w-full md:w-[350px] aspect-square flex flex-col relative group"
                >
                  <div className="flex-1 bg-gray-200 flex items-center justify-center relative">
                    <div className="text-gray-400 text-6xl">🖼️</div>
                  </div>
                  <div className="bg-linear-to-t from-[#EBCB4B] from-60% via-[#EBCB4B]/90 to-transparent pt-16 pb-6 px-4 absolute bottom-0 w-full">
                    <h3 className="text-xl font-bold mb-1">Mezie the sage</h3>
                    <p className="text-sm font-medium opacity-90">
                      Co founded the Cave (Principal)
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Row - 3 Cards */}
            <div className="flex flex-col md:flex-row justify-center gap-8">
              {[3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="border border-[#EBCB4B] rounded-lg overflow-hidden w-full md:w-[350px] aspect-square flex flex-col relative group"
                >
                  <div className="flex-1 bg-gray-200 flex items-center justify-center relative">
                    <div className="text-gray-400 text-6xl">🖼️</div>
                  </div>
                  <div className="bg-linear-to-t from-[#EBCB4B] from-60% via-[#EBCB4B]/90 to-transparent pt-16 pb-6 px-4 absolute bottom-0 w-full">
                    <h3 className="text-xl font-bold mb-1">Mezie the sage</h3>
                    <p className="text-sm font-medium opacity-90">
                      Co founded the Cave (Principal)
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheCave;
