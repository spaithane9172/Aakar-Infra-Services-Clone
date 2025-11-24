"use client";
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { FaChevronUp } from "react-icons/fa6";
const ContactForm = () => {
  const [isRequirementOpen, setIsRequirementOpen] = useState(false);
  const [requirement, setRequirement] = useState("");
  return (
    <form className="flex flex-col px-6 py-3">
      <input
        type="text"
        placeholder="Full Name"
        className="outline-none border border-gray-400 shadow-md hover:shadow-lg w-full h-12 mb-4 rounded-lg px-3 focus:border-sky-600"
      />
      <input
        type="email"
        placeholder="Email"
        className="outline-none border border-gray-400 shadow-md hover:shadow-lg w-full h-12 mb-4 rounded-lg px-3 focus:border-sky-600"
      />
      <input
        type="text"
        placeholder="Mobile Number"
        className="outline-none border border-gray-400 shadow-md hover:shadow-lg w-full h-12 mb-4 rounded-lg px-3 focus:border-sky-600"
      />
      <div>
        <button
          onClick={(e) => {
            e.preventDefault();
            setIsRequirementOpen(!isRequirementOpen);
          }}
          className="flex items-center font-medium border border-gray-400 shadow-md hover:shadow-lg w-full h-12 mb-4 rounded-lg px-3 focus:border-sky-600 justify-between"
        >
          {requirement ? requirement : "Select Your Requirement"}
          {isRequirementOpen ? <FaChevronUp /> : <FaAngleDown />}
        </button>
        {isRequirementOpen && (
          <div className="w-full relative -top-3">
            <ul className="absolute w-full bg-gray-100 rounded-lg">
              {[
                "Real Estate Mandate",
                "Construction Services",
                "Interior/Finance Services",
                "Loan Consultation",
                "Other",
              ].map((data) => (
                <li key={data}>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setRequirement(data);
                      setIsRequirementOpen(false);
                    }}
                    className="w-full text-start px-3 py-2 border-b border-gray-300 cursor-pointer hover:bg-sky-200"
                  >
                    {data}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <textarea
        name="message"
        placeholder="Message..."
        rows={5}
        className="outline-none border border-gray-400 shadow-md hover:shadow-lg w-full mb-4 rounded-lg p-3 focus:border-sky-600 resize-none"
      ></textarea>
      <button className="bg-sky-400 py-3 rounded-lg font-semibold shadow-md cursor-pointer hover:bg-sky-600 hover:text-white mt-5">
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
