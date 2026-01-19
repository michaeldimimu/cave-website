"use client";

import React, { useRef } from "react";
import { Pixelify_Sans } from "next/font/google";
import { builders } from "../data/builders";
import BuilderCard from "./BuilderCard";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const pixelify = Pixelify_Sans({ subsets: ["latin"] });

const BuildersSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 500;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="bg-[#D7C102] py-24 md:py-32 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <h2
          className={`text-4xl md:text-6xl font-black text-black uppercase mb-4 tracking-tighter ${pixelify.className}`}
        >
          Hall of Builders
        </h2>
        <p className="text-black/80 text-lg md:text-xl font-medium">
          Real stories from those who stayed and did the work
        </p>
      </div>

      {/* Carousel */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto gap-8 px-6 md:px-[max(2rem,calc(50vw-400px))] pb-12 snap-x snap-mandatory scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {builders.map((builder) => (
          <BuilderCard key={builder.id} {...builder} />
        ))}
      </div>

      {/* Navigation */}
      <div className="flex justify-center gap-4 mt-8 md:absolute md:bottom-24 md:right-24 z-10">
        <button
          onClick={() => scroll("left")}
          className="w-14 h-14 rounded-full bg-black/10 hover:bg-black/20 text-black flex items-center justify-center transition-all backdrop-blur-sm"
        >
          <FaChevronLeft size={20} />
        </button>
        <button
          onClick={() => scroll("right")}
          className="w-14 h-14 rounded-full bg-black/10 hover:bg-black/20 text-black flex items-center justify-center transition-all backdrop-blur-sm"
        >
          <FaChevronRight size={20} />
        </button>
      </div>
    </section>
  );
};

export default BuildersSection;
