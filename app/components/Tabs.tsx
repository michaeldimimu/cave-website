"use client";
import TabsCard from "./TabsCard";
import { useState } from "react";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <section>
      <ul className="flex text-black justify-center gap-5">
        <li
          onClick={() => setActiveTab(0)}
          className={` ${activeTab === 0 ? "underline  underline-offset-4" : ""} cursor-pointer hover:opacity-50 transition-all duration-300 ease-in-out`}
        >
          For Innovators
        </li>
        <li
          onClick={() => setActiveTab(1)}
          className={` ${activeTab === 1 ? "underline  underline-offset-4" : ""} cursor-pointer hover:opacity-50 transition-all duration-300 ease-in-out`}
        >
          For Builders
        </li>
        <li
          onClick={() => setActiveTab(2)}
          className={` ${activeTab === 2 ? "underline  underline-offset-4" : ""} cursor-pointer hover:opacity-50 transition-all duration-300 ease-in-out`}
        >
          For Creatives
        </li>
      </ul>
      {activeTab === 0 && (
        <TabsCard
          header="Innovators"
          description="Those who question and examine"
          subtitle="The thinker arrives seeking clarity. The Cave provides structure for deep inquiry, not quick answers. You will confront ideas that challenge your assumptions."
          image="/innovators-img.jpg"
          bgColor="bg-[#EFC738]"
        />
      )}
      {activeTab === 1 && (
        <TabsCard
          header="Builders"
          description="Those who create and construct"
          subtitle="The builder knows that intention precedes action. The Cave teaches the discipline required to move from vision to reality with purpose and precision."
          image="/builders-img.jpg"
          bgColor="bg-white"
        />
      )}
      {activeTab === 2 && (
        <TabsCard
          header="Creatives"
          description="Those who make and express"
          subtitle="The creative seeks depth in their work. The Cave cultivates the conditions where craft becomes philosophy and expression becomes truth."
          image="/creatives-img.jpg"
          bgColor="bg-[#EFC738]"
        />
      )}
    </section>
  );
};

export default Tabs;
