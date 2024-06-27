"use client";

import RetroGrid from "../Grid";
import RotateText from "../RotateBetween";
const GridSlide = () => {
  return (
    <div className="relative font-geist mb-10 flex md:h-full lg:h-[500px]  w-screen  items-center justify-center overflow-hidden bg-transparent p-20 md:shadow-xl">
      <span className="font-normal font-display uppercase text-5xl md:text-6xl lg:text-8xl text-center">
        Direct, long-term access to brain dath with our CORTICAL MODULE
        <br />
        <span className=" ">
          <RotateText
            rotatedString={[
              "Proven materials",
              "Low-power/Low-noise",
              "Reliable",
              "Tissue-friendly",
            ]}
            className="bg-gradient-to-tr from-purple-600 via-purple-500/90 to-pink-600 border-input rounded-xl bg-clip-text text-transparent font-extralight font-geist"
          />
        </span>
      </span>
      <RetroGrid />
    </div>
  );
};

export default GridSlide;
