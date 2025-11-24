import React, { SetStateAction } from "react";

const Hamburger = ({
  isHamburgerMenuOpen,
  setIsHamburgerMenuOpen,
}: {
  isHamburgerMenuOpen: boolean;
  setIsHamburgerMenuOpen: React.Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <button
      onClick={() => setIsHamburgerMenuOpen(!isHamburgerMenuOpen)}
      className={`flex justify-center items-center flex-col md:hidden w-fit h-fit sticky `}
    >
      <div
        className={`w-7 h-1 bg-black mb-1 rounded-full ${
          isHamburgerMenuOpen
            ? "absolute rotate-45 transition duration-300"
            : "relative rotate-0 transition duration-300"
        }`}
      ></div>
      <div
        className={`w-7 h-1 bg-black mb-1 rounded-full ${
          isHamburgerMenuOpen ? "hidden" : "block"
        }`}
      ></div>
      <div
        className={`w-7 h-1 bg-black mb-1 rounded-full ${
          isHamburgerMenuOpen
            ? "-rotate-45 transition duration-300"
            : "relative rotate-0 transition duration-300"
        }`}
      ></div>
    </button>
  );
};

export default Hamburger;
