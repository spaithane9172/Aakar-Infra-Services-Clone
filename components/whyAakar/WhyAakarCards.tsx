import { whyAakarFeatureType } from "@/data/whyAakar.data";
import React from "react";

const WhyAakarCards = ({ data }: { data: whyAakarFeatureType }) => {
  return (
    <div className="flex justify-center items-center flex-col hover:scale-105 transition duration-300">
      <div className="rounded-full w-15 h-15 flex justify-center items-center bg-cyan-200 mb-6">
        <data.icons size={32} className="text-blue-900" />
      </div>
      <div>
        <h1 className="text-center font-semibold text-lg">{data.title}</h1>
        <h2 className="text-center text-gray-500">{data.subTitle}</h2>
      </div>
    </div>
  );
};

export default WhyAakarCards;
