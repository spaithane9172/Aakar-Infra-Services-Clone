import { contact } from "@/data/contactDetails.data";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
const ContactInfo = () => {
  return (
    <div className="flex flex-col px-6 py-3 w-full mt-10 md:mt-0">
      <h1 className="font-semibold text-lg mb-5">Contact Details</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full">
        <div className="flex items-center mb-3">
          <FaLocationDot className="mr-2 text-sky-600" size={22} />
          <h1>{contact.location}</h1>
        </div>
        <div className="flex items-center mb-3">
          <MdEmail className="mr-2 text-sky-600" size={22} />
          <h1>{contact.email}</h1>
        </div>
        <div className="flex items-center mb-3">
          <FaPhoneAlt className="mr-2 text-sky-600" size={22} />
          <h1>{contact.mobileNumber}</h1>
        </div>
        <div className="flex items-center mb-3">
          <IoLogoWhatsapp className="mr-2 text-sky-600" size={22} />
          <h1>{contact.whatsappNumber}</h1>
        </div>
      </div>
      <div className="flex items-center justify-center space-x-3 w-full mt-5">
        {contact.socialIcons.map((Icon, indx) => (
          <div className="px-3 py-2 hover:scale-105 cursor-pointer" key={indx}>
            <Icon size={25} />
          </div>
        ))}
      </div>
      <div>
        <iframe
          src={contact.mapUrl}
          className="w-full rounded-lg shadow-lg h-65 mt-10"
        />
      </div>
    </div>
  );
};

export default ContactInfo;
