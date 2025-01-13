import React from 'react';
import Image from "next/image";
import Link from "next/link"; // Import Link from next/link
import { FaChartBar, FaCogs, FaFilePrescription, FaPills, FaTruck, FaUsers } from "react-icons/fa";
import Featuresdata from '../Featuresdata/Featuresdata';

const features = [
  {
    icon: <FaPills size={70} className="text-white bg-gradient-to-r from-blue-500 to-blue-700 p-4 rounded-full shadow-md" />,
    title: "Inventory Management",
    description: "Track and manage stock levels effortlessly.",
  },
  {
    icon: <FaFilePrescription size={70} className="text-white bg-gradient-to-r from-green-500 to-green-700 p-4 rounded-full shadow-md" />,
    title: "Prescription Tracking",
    description: "Easily manage and track prescriptions.",
  },
  {
    icon: <FaUsers size={70} className="text-white bg-gradient-to-r from-purple-500 to-purple-700 p-4 rounded-full shadow-md" />,
    title: "Team Collaboration",
    description: "Improve communication among pharmacy staff.",
  },
  {
    icon: <FaChartBar size={70} className="text-white bg-gradient-to-r from-yellow-500 to-yellow-600 p-4 rounded-full shadow-md" />,
    title: "Sales Reports",
    description: "Analyze and generate detailed sales reports.",
  },
  {
    icon: <FaCogs size={70} className="text-white bg-gradient-to-r from-pink-500 to-pink-700 p-4 rounded-full shadow-md" />,
    title: "Customizable Dashboard",
    description: "Personalize your workflow for better productivity.",
  },
  {
    icon: <FaTruck size={70} className="text-white bg-gradient-to-r from-red-500 to-red-700 p-4 rounded-full shadow-md" />,
    title: "Supplier Management",
    description: "Efficiently manage and track suppliers.",
  },
  {
    icon: <FaPills size={70} className="text-white bg-gradient-to-r from-blue-500 to-blue-700 p-4 rounded-full shadow-md" />,
    title: "Inventory Management",
    description: "Track and manage stock levels effortlessly.",
  },
  {
    icon: <FaFilePrescription size={70} className="text-white bg-gradient-to-r from-green-500 to-green-700 p-4 rounded-full shadow-md" />,
    title: "Prescription Tracking",
    description: "Easily manage and track prescriptions.",
  },
  {
    icon: <FaUsers size={70} className="text-white bg-gradient-to-r from-purple-500 to-purple-700 p-4 rounded-full shadow-md" />,
    title: "Team Collaboration",
    description: "Improve communication among pharmacy staff.",
  },
  {
    icon: <FaChartBar size={70} className="text-white bg-gradient-to-r from-yellow-500 to-yellow-600 p-4 rounded-full shadow-md" />,
    title: "Sales Reports",
    description: "Analyze and generate detailed sales reports.",
  },
];

const Features = () => {
  return (
    <div className=''>``
      <div
        className="py-16"
        style={{
          backgroundImage: "url('/pattern2.jpg')",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">
          {/* Left Section */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-5xl font-bold text-gray-800 leading-tight">
              Discover Our Pharmacy Management Software
            </h1>
            <p className="mt-4 text-xl text-gray-600 leading-relaxed">
              Our comprehensive pharmacy management software helps streamline
              inventory, manage prescriptions, track sales, and enhance customer
              satisfaction. Simplify your pharmacy operations and focus on what
              matters most—providing quality care.
            </p>
            <ul className="mt-6 space-y-3 text-left">
              <li className="flex items-center">
                <span className="w-3 h-3 bg-blue-500 rounded-full mr-3"></span>
                Track inventory with real-time updates
              </li>
              <li className="flex items-center">
                <span className="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
                Manage prescriptions and automate refills
              </li>
              <li className="flex items-center">
                <span className="w-3 h-3 bg-purple-500 rounded-full mr-3"></span>
                Generate detailed sales and business reports
              </li>
              <li className="flex items-center">
                <span className="w-3 h-3 bg-yellow-500 rounded-full mr-3"></span>
                Provide seamless customer service
              </li>
            </ul>
            <Link href="/Contactpage">
              <button className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition">
                Contact Us
              </button>
            </Link>
          </div>

          {/* Right Section */}
          <div className="mt-12 lg:mt-0 lg:w-1/2 flex justify-center">
            <div className="relative w-full max-w-xl">
              <Image
                src="/features.png"
                alt="Pharmacy Management Features"
                width={800}
                height={600}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Key Features Section */}
      <div className="bg-gradient-to-l from-white to-green-100 py-20">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-center text-gray-800 mb-6 sm:mb-10 w-4/5 sm:w-3/5 mx-auto leading-tight">
          Key Features of Our Pharmacy Management Software
        </h1>
        <p className="text-center text-gray-600 text-base sm:text-lg mb-12 sm:mb-16 w-4/5 sm:w-3/6 mx-auto leading-relaxed">
          Discover how our software can streamline your pharmacy operations with advanced tools and features.
        </p>
        <Featuresdata features={features} showheader={false} />
      </div>
    </div>
  );
};

export default Features;
