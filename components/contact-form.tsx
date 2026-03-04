"use client";

import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { toast } from "react-toastify";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    // Basic validation
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.message
    ) {
      toast.error("Please fill in all fields");
      setLoading(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address");
      setLoading(false);
      return;
    }

    // Phone validation
    const phoneRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
    if (!phoneRegex.test(formData.phone)) {
      toast.error("Please enter a valid phone number");
      setLoading(false);
      return;
    }

    try {
      // Format the message for WhatsApp
      const whatsappMessage = `
*New Contact Form Submission*
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Message: ${formData.message}`;

      // Encode the message for URL
      const encodedMessage = encodeURIComponent(whatsappMessage);

      // WhatsApp number
      const whatsappNumber = "9779804148802";

      // Create WhatsApp URL
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

      // Open WhatsApp in a new tab
      window.open(whatsappUrl, "_blank");

      toast.success("Opening WhatsApp with your message...");
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      toast.error("Failed to open WhatsApp. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="rounded-xl shadow-2xl p-8">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium  mb-2">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg  border border-gray-600 focus:border-green-500 focus:ring-2 focus:ring-green-500 focus:outline-none transition"
            placeholder="Enter your full name"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium  mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border border-gray-600 focus:border-green-500 focus:ring-2 focus:ring-green-500 focus:outline-none transition"
            placeholder="Enter your email address"
            required
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium  mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg  border border-gray-600 focus:border-green-500 focus:ring-2 focus:ring-green-500 focus:outline-none transition"
            placeholder="Enter your phone number"
            required
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2">
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-2 rounded-lg  border border-gray-600 focus:border-green-500 focus:ring-2 focus:ring-green-500 focus:outline-none transition"
            placeholder="What information do you need?"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-3 px-6 rounded-lg  font-semibold transition flex items-center justify-center gap-2 ${
            loading
              ? "bg-gray-600 cursor-not-allowed "
              : "bg-green-600 hover:bg-green-700"
          }`}
        >
          <FaWhatsapp className="text-xl" />
          {loading ? "Preparing..." : "Send via WhatsApp"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
