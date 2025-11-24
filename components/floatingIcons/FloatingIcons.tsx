"use client";

import { BsWhatsapp } from "react-icons/bs";
import { LuPhone } from "react-icons/lu";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { FaArrowUp } from "react-icons/fa";
import Link from "next/link";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoCloseSharp } from "react-icons/io5";
import { useState } from "react";
import { AnimatePresence, easeInOut, motion } from "framer-motion";

const FloatingIcons = () => {
  const [showButtons, setShowButtons] = useState(false);
  return (
    <div className="mb-3 mr-3 z-50">
      <AnimatePresence>
        {showButtons && (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.3, ease: easeInOut }}
          >
            <div className="bg-green-500 rounded-full w-12 h-12 flex justify-center items-center mb-3 shadow-lg hover:scale-105 cursor-pointer">
              <BsWhatsapp size={24} className="text-white" />
            </div>
            <div className="bg-blue-500 rounded-full w-12 h-12 flex justify-center items-center mb-3 shadow-lg hover:scale-105 cursor-pointer">
              <LuPhone size={24} className="text-white" />
            </div>
            <div className="bg-violet-500 rounded-full w-12 h-12 flex justify-center items-center mb-3 shadow-lg hover:scale-105 cursor-pointer">
              <IoChatbubbleEllipsesOutline size={24} className="text-white" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setShowButtons(!showButtons)}
        className="bg-gray-500 rounded-full w-12 h-12 flex justify-center items-center mb-3 shadow-lg hover:scale-105 cursor-pointer"
      >
        {showButtons ? (
          <IoCloseSharp size={24} className="text-white" />
        ) : (
          <BsThreeDotsVertical size={24} className="text-white" />
        )}
      </button>

      <Link
        href={"#home"}
        className="bg-yellow-500 rounded-full w-12 h-12 flex justify-center items-center shadow-lg hover:scale-105 cursor-pointer"
      >
        <FaArrowUp size={24} className="text-white" />
      </Link>
    </div>
  );
};

export default FloatingIcons;
