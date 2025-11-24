import Link from "next/link";
import { LuPhone } from "react-icons/lu";

const HeroLeftSide = () => {
  return (
    <div className="flex flex-col items-center md:items-start">
      <h1 className="text-3xl md:text-5xl font-bold leading-10 md:leading-13 mb-4 md:mb-6 text-center md:text-start">
        <span className="text-4xl md:text-6xl">Building Dreams with</span>{" "}
        <span className="text-sky-600">Aakar Infra Services</span>
      </h1>
      <p className="text-md md:text-lg font-semibold text-gray-500 text-center md:text-start">
        Experts in Real Estate Mandates, Construction, and More Since 2013
      </p>
      <Link
        href={"/contact"}
        className="flex justify-center items-center bg-sky-400 hover:bg-sky-600 hover:text-white font-semibold px-8 py-2 rounded-full mt-8 md:mt-6 hover:shadow-2xl w-fit"
      >
        <LuPhone className="mr-2" />
        Contact Us
      </Link>
    </div>
  );
};

export default HeroLeftSide;
