import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp,
  FaFacebook,
} from "react-icons/fa";

const ContactInfo = () => {
  return (
    <div className="rounded-xl shadow-2xl p-8">
      <h2 className="text-2xl font-bold mb-8 border-b  pb-4">
        Contact Information
      </h2>

      {/* Contact Details */}
      <div className="space-y-6 mb-8">
        <div className="flex items-start gap-4 p-3 rounded-lg  transition-colors">
          <FaMapMarkerAlt className="text-green-400 text-2xl mt-1 flex-shrink-0" />
          <div>
            <h3 className="font-semibold mb-1">Our Location</h3>
            <p className="">
              Essence Tours and Travels & Treks and Expedition Pvt. LTD.
            </p>
            <p className="">Lakeside, Pokhara, Nepal</p>
          </div>
        </div>

        <div className="flex items-start gap-4 p-3 rounded-lg transition-colors">
          <FaPhoneAlt className=" text-2xl mt-1 flex-shrink-0" />
          <div>
            <h3 className=" font-semibold mb-1">Phone Numbers</h3>
            <a href="tel:+9779804148802" className="block transition-colors">
              +977-9804148802
            </a>
            <a href="tel:+97761452788" className="block  transition-colors">
              +061-452788
            </a>
            <a href="tel:+97761452677" className="block  transition-colors">
              +061-452677
            </a>
          </div>
        </div>

        <div className="flex items-start gap-4 p-3 rounded-lg  transition-colors">
          <FaEnvelope className="text-2xl mt-1 flex-shrink-0" />
          <div>
            <h3 className=" font-semibold mb-1">Email Address</h3>
            <a
              href="mailto:info@essencetreks.com"
              className="block   transition-colors"
            >
              info@essencetreks.com
            </a>
          </div>
        </div>

        <div className="flex items-start gap-4 p-3 rounded-lg hover:bg-primary/20  transition-colors">
          <FaWhatsapp className="text-primary text-2xl mt-1 flex-shrink-0" />
          <div>
            <p className=" font-semibold mb-1">WhatsApp</p>
            <a
              href="https://wa.me/9779804148802"
              target="_blank"
              rel="noopener noreferrer"
              className=" hover:text-primary transition-colors"
            >
              +977-9804148802
            </a>
          </div>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
        <div className="flex flex-wrap gap-4">
          <a
            href="https://www.facebook.com/essencetreksinnepal/#"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg  hover:bg-opacity-90 transition-colors"
          >
            <FaFacebook className="text-xl" />
            <span>Facebook</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
