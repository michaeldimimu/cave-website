"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const ArchiveHero = ({ slides, interval = 5000 }: any) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [isMouseDown, setIsMouseDown] = useState(false);

  const minSwipeDistance = 50;

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, interval);

    return () => clearInterval(timer);
  }, [activeIndex, slides.length, interval]);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) handleNext();
    if (isRightSwipe) handlePrev();
  };

  const onMouseDown = (e: React.MouseEvent) => {
    setIsMouseDown(true);
    setTouchEnd(null);
    setTouchStart(e.clientX);
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isMouseDown) return;
    setTouchEnd(e.clientX);
  };

  const onMouseUp = () => {
    if (!isMouseDown) return;
    setIsMouseDown(false);
    onTouchEnd(); // Reuse swipe logic
  };

  const onMouseLeave = () => {
    setIsMouseDown(false);
  };

  return (
    <section
      className={`relative w-full h-[55vh] md:h-[90vh] overflow-hidden touch-pan-y ${isMouseDown ? "cursor-grabbing" : "cursor-grab"}`}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseLeave}
    >
      {slides.map((slide: any, index: number) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-all duration-700 ease-in-out ${
            index === activeIndex
              ? "opacity-100 z-10 translate-x-0"
              : index < activeIndex
                ? "opacity-0 z-0 -translate-x-full"
                : "opacity-0 z-0 translate-x-full"
          }`}
        >
          <Image
            src={slide.image}
            alt={`${slide.name}`}
            fill
            priority={index === 0}
            sizes="100vw"
            className="object-cover"
          />

          <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent" />

          <div className="absolute bottom-10 left-6 right-6 md:left-auto md:right-20 md:bottom-20">
            <div className="bg-linear-to-r from-[#EBCB4B] to-[#FFFDF5] px-6 py-4 md:px-8 md:py-5 rounded-xl shadow-xl max-w-sm md:max-w-none">
              <h1 className="text-lg md:text-2xl font-black text-black uppercase">
                {slide.name}
              </h1>
              <p className="text-xs md:text-base font-semibold text-black/80">
                {slide.subtitle}
              </p>
            </div>
          </div>
        </div>
      ))}

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_: any, i: number) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              i === activeIndex
                ? "bg-[#EBCB4B] w-8"
                : "bg-white/30 hover:bg-white/50"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={handlePrev}
        className="hidden md:flex absolute left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/20 hover:bg-black/40 text-white items-center justify-center z-30 transition-all cursor-pointer"
      >
        <FaChevronLeft size={24} />
      </button>
      <button
        onClick={handleNext}
        className="hidden md:flex absolute right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/20 hover:bg-black/40 text-white items-center justify-center z-30 transition-all cursor-pointer"
      >
        <FaChevronRight size={24} />
      </button>
    </section>
  );
};

export default ArchiveHero;
