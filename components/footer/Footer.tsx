import Image from "next/image";
import logo from "@/public/aakarlogo.webp";
import { navLinks } from "@/data/navLink.data";
import Link from "next/link";
import { LuPhone } from "react-icons/lu";
import { contact } from "@/data/contactDetails.data";
import { MdOutlineEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="w-full bg-linear-to-b from-white to-gray-50 border border-t-gray-600">
      <div className="w-full px-4 md:px-40 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="flex flex-col justify-center items-center md:items-start px-3">
          <Image
            src={logo}
            alt="Aakar Infra services Logo"
            width={200}
            height={300}
            className="mb-6"
          />
          <p className="text-center md:text-start">
            AAKAR Infra Services is your one-stop solution for real estate
            mandates, construction, interiors, and more.
          </p>
        </div>
        <div className="px-30 flex flex-col items-center md:items-start mt-10 md:mt-0">
          <h1 className="font-bold text-xl mb-3">Quick Links</h1>
          <ul>
            {navLinks.map((data) => (
              <li key={data.name}>
                <Link href={"#" + data.href}>
                  <button className="font-medium py-1 w-full text-center md:text-start cursor-pointer">
                    {data.name}
                  </button>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-10 md:mt-0 flex flex-col items-center md:items-start px-30">
          <h1 className="font-bold text-xl mb-3">Contact Us</h1>
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center py-1">
              <div>
                <LuPhone className="text-sky-600 mr-2" size={22} />
              </div>
              <div>
                <h1 className="font-medium">{contact.mobileNumber}</h1>
              </div>
            </div>

            <div className="flex items-center py-1">
              <div>
                <MdOutlineEmail className="text-sky-600 mr-2" size={22} />
              </div>
              <div>
                <h1 className="font-medium">{contact.email}</h1>
              </div>
            </div>

            <div className="flex items-center py-1">
              <div>
                <IoLocationOutline className="text-sky-600 mr-2" size={22} />
              </div>
              <div>
                <h1 className="font-medium">{contact.location}</h1>
              </div>
            </div>

            <div className="flex items-center py-1 mt-6">
              {contact.socialIcons.map((Icon, indx) => {
                return (
                  <div key={indx}>
                    <Icon size={22} className="mx-1 cursor-pointer" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white text-center py-5 border-t border-gray-300 text-[0.8rem] md:text-sm">
        <h1>© 2025 AAKAR Infra Services |All rights reserved. Built with ❤️</h1>
      </div>
    </div>
  );
};

export default Footer;
