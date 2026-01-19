import Image from "next/image";
import React from "react";

const Testimonials = () => {
  return (
    <section className="p-8 text-black w-full ">
      <div className="flex flex-col md:flex-row w-full justify-center gap-6">
        <div className="bg-white p-6 space-y-4">
          <div className="">
            <h2 className="font-bold text-xl">Larix</h2>
            <p>Selling School Graduate</p>
          </div>
          <div>
            <Image
              src="/sales-1-img.jpg"
              alt="Sales 1"
              width={500}
              height={500}
            />
          </div>
          <p>
            He generated sales of almost 200 thousand naira without owning a
            business.
          </p>
        </div>

        <div className="bg-white p-6 space-y-6">
          <div>
            <h2 className="font-bold text-xl">Nwaeke Goodness</h2>
            <p>Selling School Graduate</p>
          </div>
          <div>
            <Image
              src="/sales-2-img.jpg"
              alt="Sales 1"
              width={500}
              height={500}
            />
          </div>
          <p>She went from debt to making her first sale.</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
