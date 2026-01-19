"use client";

import Image from "next/image";
import React, { useRef } from "react";
import PathCard from "../components/PathCard";
import paths from "../data/paths";
import CTA from "../components/CTA";
import InstagramLazyEmbed from "../components/InstagramEmbed";

const Pathway = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="w-full bg-white  mt-20 ">
      <div className="bg-[linear-gradient(339.36deg,#D7C102_-25.31%,#060606_27.69%,#D7C102_107.88%)] pb-10">
        <InstagramLazyEmbed />
        <div className="mt-8 px-6 md:px-0 flex flex-col w-full gap-4 justify-center items-center text-white text-center">
          <h1 className="text-3xl md:text-6xl font-black tracking-tighter leading-tight">
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
          <p className="text-center max-w-prose text-gray-600">
            Each stage serves a purpose in your development.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Full Carousel for Mastery, Citadel, and Tribes */}
          <div className="md:col-span-4 relative">
            <div
              ref={scrollRef}
              className="flex overflow-x-auto gap-6 snap-x snap-mandatory pb-4 no-scrollbar scrollbar-hide"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {/* Card 1 (Mastery) */}
              <div className="relative h-[400px] min-w-[300px] md:min-w-full rounded-lg overflow-hidden group snap-center shrink-0">
                <Image
                  src="/alchemy-img.jpg"
                  alt="Mastery"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40 p-10 flex flex-col justify-between text-white z-10">
                  <span className="text-sm font-semibold uppercase">
                    Mastery
                  </span>
                  <h3 className="text-3xl md:text-4xl font-bold max-w-sm">
                    Digital Alchemy sharpens your skills
                  </h3>
                  <p className="text-sm max-w-md">
                    Advanced training meets practical application in real time
                  </p>
                  <a
                    href="https://wa.link/chewxp"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="w-fit border border-white px-8 py-3 hover:bg-white cursor-pointer hover:text-black transition-all">
                      Enroll
                    </button>
                  </a>
                </div>
              </div>

              {/* Card 2 (Citadel) */}
              <div className="relative h-[400px] min-w-[300px] md:min-w-full rounded-lg overflow-hidden group snap-center shrink-0">
                <Image
                  src="/citadel-img.jpg"
                  alt="Citadel"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40 p-8 flex flex-col justify-center gap-4 text-white z-10 text-center">
                  <h3 className="text-2xl font-bold">
                    Citadel stands as your final destination
                  </h3>
                  <p className="text-sm opacity-90">
                    You emerge as a guide for others seeking the path
                  </p>
                </div>
              </div>

              {/* Card 3 (Tribes) */}
              <div className="relative h-[400px] min-w-[300px] md:min-w-full rounded-lg overflow-hidden group snap-center shrink-0">
                <Image
                  src="/tribe-img.jpg"
                  alt="Tribes"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40 p-8 flex flex-col justify-center gap-4 text-white z-10 text-center">
                  <h3 className="text-2xl font-bold">
                    Tribes unite those who share the same calling
                  </h3>
                  <p className="text-sm opacity-90">
                    Identity forms through shared values and vision
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation arrows */}
            <div className="flex justify-center md:justify-end gap-3 mt-4">
              <button
                onClick={() => scroll("left")}
                className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-[#EBCB4B] hover:border-[#EBCB4B] hover:text-black transition-all cursor-pointer"
                aria-label="Previous"
              >
                ←
              </button>
              <button
                onClick={() => scroll("right")}
                className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-[#EBCB4B] hover:border-[#EBCB4B] hover:text-black transition-all cursor-pointer"
                aria-label="Next"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </section>

      <CTA
        title="The path awaits your first step"
        desc="Explore the Pathways and discover where you belong in this journey"
        btnText="Join"
      />
    </section>
  );
};

export default Pathway;
