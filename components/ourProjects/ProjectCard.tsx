"use client";
import { projectType } from "@/data/ourProjects.data";
import { IoLocation } from "react-icons/io5";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ProjectCard = ({ data }: { data: projectType }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={
        isInView
          ? { opacity: 1, y: 0, transition: { delay: data.id * 0.1 } }
          : {}
      }
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="px-6 p-4 bg-white rounded-lg shadow hover:shadow-lg"
    >
      <h1 className="text-lg font-semibold">{data.title}</h1>

      <h2 className="text-gray-500 flex items-center mb-3">
        <IoLocation className="mr-1 text-sky-600" />
        {data.location}
      </h2>

      <h3
        className={`${data.bg} ${data.textColor} text-sm font-semibold w-fit px-6 py-1 rounded-full`}
      >
        {data.status}
      </h3>
    </motion.div>
  );
};

export default ProjectCard;
