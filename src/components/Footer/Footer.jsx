"use client";
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { MdPhone, MdEmail, MdLocationOn } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
       
        <div>
          <h3 className="text-xl font-semibold mb-4">Pharmacymgmt</h3>
          <p className="text-sm mb-4">
            Streamlining pharmacy operations with innovative solutions.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-400">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="hover:text-gray-400">
              <FaFacebookF size={20} />
            </a>
            <a href="#" className="hover:text-gray-400">
              <FaLinkedinIn size={20} />
            </a>
            <a href="#" className="hover:text-gray-400">
              <FaInstagram size={20} />
            </a>
          </div>
        </div>

        {/* Quick Links Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-400">
                Privacy Policy
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-400">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                FAQ
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Us Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <p className="flex items-center mb-2">
            <MdPhone className="mr-2" /> 98067287822
          </p>
          <p className="flex items-center mb-2">
            <MdEmail className="mr-2" /> support@abeen.com
          </p>
          <p className="flex items-center">
            <MdLocationOn className="mr-2" /> Butwal 13 Belbas, Nepal
          </p>
        </div>

        {/* Stay Updated Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Stay Updated</h3>
          <p className="text-sm mb-4">
            Subscribe to our newsletter for the latest updates and offers.
          </p>
          <form className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-l-md focus:outline-none text-black"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r-md">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm">
        <div className="flex flex-col md:flex-row justify-center space-y-2 md:space-y-0 md:space-x-6 mb-4">
          <a href="" className="hover:text-gray-400">
            About Pharmacy Management
          </a>
          <a href="" className="hover:text-gray-400">
            Our Services
          </a>
          <a href="" className="hover:text-gray-400">
            Contact Us
          </a>
          <a href="" className="hover:text-gray-400">
            Explore Features
          </a>
        </div>
        <p>© Abeen Khanal 2024. Streamlining Pharmacy Operations</p>
      </div>
    </footer>
  );
};

export default Footer;
