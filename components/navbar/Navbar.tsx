"use client";
import Navlogo from "./Navlogo";
import Navlinks from "./Navlinks";
import Hamburger from "./Hamburger";
import { useState } from "react";
import MobileNavllinks from "./MobileNavllinks";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const path = usePathname();
  console.log(path);
  const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false);
  return (
    <div className="flex justify-between items-center px-4 md:px-40 w-full bg-white h-[10vh] md:h-[15vh] shadow-xl fixed z-50">
      <Navlogo />
      <Navlinks />
      <MobileNavllinks
        isHamburgerMenuOpen={isHamburgerMenuOpen}
        setIsHamburgerMenuOpen={setIsHamburgerMenuOpen}
      />
      <Hamburger
        isHamburgerMenuOpen={isHamburgerMenuOpen}
        setIsHamburgerMenuOpen={setIsHamburgerMenuOpen}
      />
    </div>
  );
};

export default Navbar;
