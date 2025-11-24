"use client";
import { motion } from "framer-motion";
import { services } from "@/data/services.data";

const Services = () => {
  return (
    <div id="services" className="px-4 md:px-40 pt-20 pb-10">
      <h1 className="font-bold text-3xl md:text-4xl text-center mb-3 md:mb-6">
        {services.title}
      </h1>

      <div className="w-full flex justify-center items-center mb-10">
        <p className="text-center text-gray-500 md:w-3/4">{services.para}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 overflow-hidden">
        {services.servicesData.map((data, index) => (
          <motion.div
            key={data.title}
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }} // LEFT → RIGHT pattern
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="bg-white p-6 rounded-lg shadow hover:shadow-lg"
          >
            <h1 className="text-center font-bold text-xl md:text-2xl mb-6">
              {data.title}
            </h1>

            <div>
              {data.services.map((d) => (
                <div
                  key={d.title}
                  className="flex items-center bg-linear-to-r from-sky-200 to-sky-50 my-4 px-3 py-2 md:py-3 hover:shadow-lg hover:scale-102 transition-all duration-300 ease-in-out rounded-lg"
                >
                  <div className="rounded-full flex justify-center items-center w-10 h-10 bg-sky-600 mr-3 text-white">
                    <d.icon size={16} />
                  </div>

                  <div>
                    <h2 className="font-medium md:font-semibold text-sm md:text-lg">
                      {d.title}
                    </h2>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
