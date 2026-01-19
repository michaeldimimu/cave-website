import ArchiveHero from "@/app/components/ArchiveHero";
import React from "react";
import heroSlides from "../data/hero-slides";
import writings from "../data/writings";
import WritingCard from "@/app/components/WritingCard";
import BuildersSection from "../components/BuildersSection";
import VoicesSection from "../components/VoicesSection";
import CTA from "../components/CTA";

const Page = () => {
  return (
    <main className="w-full mt-20">
      <ArchiveHero slides={heroSlides} />

      <section className="bg-[#F8F8F8] py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-black">
              Writings from the community
            </h2>
            <p className="text-gray-600 text-sm md:text-base">
              Thoughts, lessons, and observations shared by those inside The
              Cave
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {writings.map((writing) => (
              <WritingCard
                key={writing.id}
                id={writing.id}
                title={writing.title}
                excerpt={writing.excerpt}
                author={writing.author}
                role={writing.role}
                substackUrl={writing.url}
              />
            ))}
          </div>
        </div>
      </section>

      <BuildersSection />
      <VoicesSection />
      <CTA
        title="Ready to join the 1%?"
        desc="You will take your growth seriously without making it everyone else's problem."
        btnText="Begin"
        btnText2="Book a Call"
      />
    </main>
  );
};

export default Page;
