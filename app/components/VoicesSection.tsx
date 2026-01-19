"use client";

import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaPlay } from "react-icons/fa6";
import voices from "../data/voices";

const VoicesSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const currentVoice = voices[activeIndex];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % voices.length);
    setIsPlaying(false);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + voices.length) % voices.length);
    setIsPlaying(false);
  };

  return (
    <section className="bg-[#0A0A0A] py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
            Voices from The Cave
          </h2>
          <p className="text-gray-400 text-lg">
            A window into the lived experiences of people walking the Cave path
          </p>
        </div>

        <div className="relative">
          <div className="flex gap-4 mb-8">
            <button
              onClick={handlePrev}
              className="w-12 h-12 cursor-pointer rounded-full bg-white/20 hover:bg-white/30 text-[#EBCB4B] flex items-center justify-center transition-all backdrop-blur-sm"
            >
              <FaChevronLeft size={16} />
            </button>
            <button
              onClick={handleNext}
              className="w-12 h-12 cursor-pointer rounded-full bg-white/20 hover:bg-white/30 text-[#EBCB4B] flex items-center justify-center transition-all backdrop-blur-sm"
            >
              <FaChevronRight size={16} />
            </button>
          </div>

          <div className="w-full h-[800px] md:h-0  flex mx-auto bg-[#1A1A1A] rounded-2xl overflow-hidden relative border border-white/10 shadow-2xl">
            {isPlaying ? (
              <iframe
                src={`https://www.youtube.com/embed/${currentVoice.videoId}?autoplay=1`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            ) : (
              <div
                className="w-full h-full relative group cursor-pointer"
                onClick={() => setIsPlaying(true)}
              >
                <div className="absolute inset-0 bg-[url('/video-placeholder.jpg')] bg-cover bg-center opacity-50"></div>

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform z-20">
                  <div className="w-16 h-16 rounded-full bg-[#EBCB4B] flex items-center justify-center shadow-[0_0_30px_rgba(235,203,75,0.4)]">
                    <FaPlay
                      className="text-black cursor-pointer ml-1"
                      size={24}
                    />
                  </div>
                </div>
              </div>
            )}

            {!isPlaying && (
              <div className="absolute bottom-8 left-6 md:bottom-12 md:left-12 max-w-[85%] md:max-w-[400px] bg-white p-6 md:p-8 rounded-xl z-20 shadow-lg">
                <p className="text-black text-xs md:text-base font-medium leading-relaxed mb-4 md:mb-6">
                  {currentVoice.quote}
                </p>
                <h4 className="text-lg md:text-xl font-bold text-black">
                  {currentVoice.author}
                </h4>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VoicesSection;
