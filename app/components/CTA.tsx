import Image from "next/image";
import React from "react";

const CTA = ({
  title,
  desc,
  btnText,
  btnText2,
}: {
  title: string;
  desc: string;
  btnText: string;
  btnText2?: string;
}) => {
  return (
    <section className="bg-white">
      <div className="relative bg-[#0D0D0D] overflow-hidden py-32 px-6 flex items-center justify-center">
        <div className="absolute inset-0 flex items-center justify-center z-0">
          <Image
            src="/cave-logo.png"
            alt="Logo"
            width={400}
            height={400}
            className="object-contain blur-sm opacity-50 brightness-200"
          />
        </div>

        <div className="relative z-10 flex flex-col gap-5 items-center text-white">
          <h2 className="font-bold text-2xl md:text-4xl text-center">
            {title}
          </h2>

          <p className="text-center max-w-prose">{desc}</p>
          <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
            <a
              href="https://wa.link/4jae4p"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto"
            >
              <button className="bg-[#EFC738] text-black py-3 px-10 rounded-[10px] font-bold hover:bg-[#d4b132] transition-colors cursor-pointer whitespace-nowrap w-full">
                {btnText}
              </button>
            </a>
            {btnText2 && (
              <a
                href="https://wa.link/4jae4p"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-auto"
              >
                <button className="bg-transparent border border-white text-white py-3 px-10 rounded-[10px] font-bold hover:border-[#EFC738] hover:text-[#EFC738] transition-colors cursor-pointer whitespace-nowrap w-full">
                  {btnText2}
                </button>
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
