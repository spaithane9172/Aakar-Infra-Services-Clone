import React from "react";

const OurStory = () => {
  return (
    <div id="about" className="px-4 md:px-40 md:py-10">
      <div className="bg-linear-to-b from-violet-950 to-violet-900 text-white px-10 py-10 rounded-lg shadow hover:shadow-xl">
        <h1 className="text-center font-bold text-3xl md:text-4xl mb-6">
          Legacy That Leads
        </h1>
        <div className="w-full flex justify-center items-center">
          <p className="w-full md:w-3/4 text-center">
            Since 2013, Aakar Infra Services has delivered 390+ successful
            transactions across Pune and PCMC. With a core team of real estate
            experts, ex-bankers, construction managers, and creative designers —
            we’re your full-service real estate growth partner.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
