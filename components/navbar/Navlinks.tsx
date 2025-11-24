import { navLinks } from "@/data/navLink.data";
import Link from "next/link";
import React from "react";

const Navlinks = () => {
  return (
    <div className="hidden md:flex h-fit">
      <ul className="flex justify-center items-center">
        {navLinks.map((data) => (
          <li key={data.name}>
            <Link href={"#" + data.href}>
              <div className="font-semibold w-25 h-5">{data.name}</div>
            </Link>
          </li>
        ))}
      </ul>
      <Link
        href={"/#contact"}
        className="bg-sky-300 hover:bg-sky-600 text-black hover:text-white font-semibold px-6 py-2 rounded-lg"
      >
        Get In Touch
      </Link>
    </div>
  );
};

export default Navlinks;
