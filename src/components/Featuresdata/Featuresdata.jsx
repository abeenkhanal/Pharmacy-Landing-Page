import React from 'react';
import { FaPills, FaFilePrescription, FaUsers, FaChartBar, FaCogs, FaTruck } from "react-icons/fa";

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
];
const Featuresdata = () => {
  return (
    <div className="bg-gradient-to-l from-white to-green-100 min-h-screen p-8 sm:p-14">
      <h1 className="text-4xl sm:text-4xl font-extrabold text-center text-gray-800 mb-6 sm:mb-10 w-4/5 sm:w-3/5 mx-auto leading-tight">
        Key Features of Our Pharmacy Management Software
      </h1>
      <p className="text-center text-gray-600 text-base sm:text-lg mb-12 sm:mb-16 w-4/5 sm:w-3/6 mx-auto leading-relaxed">
        Discover how our software can streamline your pharmacy operations with advanced tools and features.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white h-auto shadow-lg rounded-xl p-6 sm:p-10 flex flex-col items-center text-center transform hover:scale-105 hover:shadow-2xl transition-transform duration-300"
          >
            <div className="mb-6">{feature.icon}</div>
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">{feature.title}</h2>
            <p className="text-gray-600 text-sm sm:text-base">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featuresdata;
