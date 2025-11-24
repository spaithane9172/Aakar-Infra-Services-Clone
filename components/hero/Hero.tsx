import React from "react";
import HeroLeftSide from "./HeroLeftSide";
import HeroRightSide from "./HeroRightSide";

const Hero = () => {
  return (
    <div
      id="home"
      className="pt-[10vh] md:pt-[15vh] h-screen md:h-screen bg-linear-to-b from-sky-200 via-sky-50 to-sky-200 flex flex-col md:flex-row justify-center items-center px-4 md:px-40"
    >
      <div className="w-full md:w-1/2 mb-15 md:mb-0">
        <HeroLeftSide />
      </div>
      <div className="w-full md:w-1/2">
        <HeroRightSide />
      </div>
    </div>
  );
};

export default Hero;
