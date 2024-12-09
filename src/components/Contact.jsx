import {
  RiGithubFill,
  RiLinkedinBoxFill,
  RiMailFill,
  RiMapPin2Fill,
  RiPhoneFill,
} from "@remixicon/react";
import { useRef } from "react";

const Contact = () => {
  const contactRef = useRef(null);

  return (
    <section className="py-16" id="contact" ref={contactRef}>
      <div className="max-w-6xl mx-auto px-4 lg:flex lg:justify-between lg:items-start">
        {/* Address, Phone, Email with Icons */}
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <h2 className="mb-8 text-3xl font-medium lg:text-4xl">Contact Us</h2>
          <div className="mb-6 flex items-start space-x-4">
            <RiMapPin2Fill className="text-2xl text-blue-600" />
            <div>
              <p>Pepsicola,</p>
              <p>Kathmandu, Nepal</p>
            </div>
          </div>
          <div className="mb-6 flex items-start space-x-4">
            <RiPhoneFill className="text-2xl text-blue-600" />
            <div>
              <p>9866577254</p>
            </div>
          </div>
          <div className="mb-6 flex items-start space-x-4">
            <RiMailFill className="text-2xl text-blue-600" />
            <div>
              <p>
                <a className="text-white hover:underline">
                  purnimakarki44@gmail.com
                </a>
              </p>
            </div>
          </div>
          <div className="mt-8 flex space-x-6">
            <a
              href="https://www.linkedin.com/in/purnima-karki-210578324/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-icon"
              aria-label="Visit my LinkedIn Profile"
            >
              <RiLinkedinBoxFill className="text-3xl text-blue-600" />
            </a>
            <a
              href="https://github.com/purnimakarki"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-icon"
              aria-label="Visit my GitHub Profile"
            >
              <RiGithubFill className="text-3xl text-blue-600" />
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:w-1/2 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-medium mb-4">Send Message</h3>
          <form
            action="https://formcarry.com/s/or-GklrvQzm"
            method="POST"
            accept-charset="UTF-8"
          >
            <div className="mb-4">
              <label
                htmlFor="fullName"
                className="block text-sm font-medium mb-2 text-b"
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                placeholder="Your Full Name"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                placeholder="Your Email Address"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2"
              >
                Type Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
