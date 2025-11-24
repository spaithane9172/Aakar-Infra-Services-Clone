import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

const Contact = () => {
  return (
    <div id="contact" className="px-4 md:px-40 py-20">
      <h1 className="font-bold text-3xl md:text-4xl text-center mb-3 md:mb-10">
        Connect with Aakar Infra Services
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div>
          <ContactForm />
        </div>
        <div>
          <ContactInfo />
        </div>
      </div>
    </div>
  );
};

export default Contact;
