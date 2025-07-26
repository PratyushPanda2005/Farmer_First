import React from "react";

const FarmerFirst = () => {
  return (
    <section className="px-20 bg-[#918E6C] relative">
      <div className="w-full relative">
        <img src="/assets/Farmer_First.png" alt="" className="w-full" />
        <div className="absolute top-0 left-0 w-full h-full py-[8vw] flex flex-col items-center justify-between">
          <div className="flex gap-[16vw] justify-center">
            <h1 className="uppercase font-nelphim text-[6vw] text-[#DDDB00] tracking-[0.01em]">
              farmer
            </h1>
            <h1 className="uppercase font-nelphim text-[6vw] text-[#DDDB00] tracking-[0.01em]">
              first
            </h1>
          </div>
          <div className="absolute left-0 top-[40%] text-white text-[0.8vw] font-light font-raleway">
            <p>
              ROOTED IN THE SOIL OF COLLECTIVE HOPE, FARMER FIRST SPROUTED FROM
            </p>
            <p>
              A SIMPLE YET PROFOUND RESPECT FOR THE GUARDIANS OF THE GRAIN. WE
            </p>
            <p>ARE A COMMUNITY WHERE FARMERS’ DREAMS TAKE ROOT, AND OUR</p>
            <p>SHARED MISSION BLOSSOMS INTO THE FOOD THAT GRACES YOUR TABLE.</p>
          </div>
          <button className="uppercase text-[1vw] text-[#DDDB00] bg-[#B2B2B2] py-4 w-full max-w-[16vw]">
            explore now
          </button>
        </div>
      </div>
    </section>
  );
};

export default FarmerFirst;
