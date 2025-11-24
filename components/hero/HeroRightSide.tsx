"use client";
import Image from "next/image";
import heroImg from "@/public/hero.webp";
import { motion } from "framer-motion";

const HeroRightSide = () => {
  return (
    <motion.div
      animate={{ y: [0, -5, 0] }}
      transition={{
        duration: 1,
        repeat: Infinity,
        ease: "easeInOut",
        repeatDelay: 1,
      }}
      className="flex justify-center md:justify-end"
    >
      <Image
        src={heroImg}
        alt="Hero Img"
        width={400}
        height={300}
        className="hidden md:block"
      />
      <Image
        src={heroImg}
        alt="Hero Img"
        width={200}
        height={300}
        className="md:hidden"
      />
    </motion.div>
  );
};

export default HeroRightSide;
