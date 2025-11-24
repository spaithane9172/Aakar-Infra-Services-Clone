import { navLinks } from "@/data/navLink.data";
import { AnimatePresence, easeInOut, motion } from "framer-motion";
import { div } from "framer-motion/client";
import Link from "next/link";
import { SetStateAction } from "react";

const MobileNavllinks = ({
  isHamburgerMenuOpen,
  setIsHamburgerMenuOpen,
}: {
  isHamburgerMenuOpen: boolean;
  setIsHamburgerMenuOpen: React.Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <AnimatePresence>
      {isHamburgerMenuOpen && (
        <div className="w-full h-screen absolute top-[10vh] right-0 md:hidden">
          <div className="bg-black/40 w-full h-full flex justify-end backdrop-blur-xl">
            <motion.ul
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ duration: 0.6, ease: easeInOut }}
              className="flex flex-col items-center w-3/4 bg-white py-6 h-full"
            >
              {navLinks.map((data) => (
                <li key={data.name}>
                  <Link href={"#" + data.href}>
                    <button
                      onClick={() => {
                        setIsHamburgerMenuOpen(!isHamburgerMenuOpen);
                      }}
                      className="py-2 font-semibold"
                    >
                      {data.name}
                    </button>
                  </Link>
                </li>
              ))}
              <li>
                <Link href={"#contact"}>
                  <button
                    onClick={() => {
                      setIsHamburgerMenuOpen(!isHamburgerMenuOpen);
                    }}
                    className="bg-sky-300 hover:bg-sky-600 text-black hover:text-white font-semibold px-6 py-2 rounded-lg mt-6"
                  >
                    Get In Touch
                  </button>
                </Link>
              </li>
            </motion.ul>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default MobileNavllinks;
