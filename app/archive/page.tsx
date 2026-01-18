import ArchiveHero from "@/app/components/ArchiveHero";
import React from "react";
import heroSlides from "../data/hero-slides";
import writings from "../data/writings";
import WritingCard from "@/app/components/WritingCard";

const Page = () => {
  return (
    <main className="w-full mt-20">
      <ArchiveHero slides={heroSlides} />

      <section className="bg-[#F8F8F8] py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-black">
              Writing from the community
            </h2>
            <p className="text-gray-600 text-sm md:text-base">
              Thoughts, lessons, and observations shared by those inside The
              Cave
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {writings.map((writing) => (
              <WritingCard key={writing.id} {...writing} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Page;
