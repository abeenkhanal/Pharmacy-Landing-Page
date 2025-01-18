import React from 'react'
import Image from "next/image";
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
const Features = () => {
  
  return (
    <div
    className="bg-gray-50 bg-cover bg-center"
    style={{
      backgroundImage: "url('/pattern2.jpg')",
      backgroundAttachment: "fixed",
    }}
  >
    <div className="py-16">
    <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">

      <div className="lg:w-1/2 text-center lg:text-left ">
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
        <button className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition">
          Contact Us
        </button>
      </div>
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

  <Featuresdata features={features} showheader={false} />
  </div>
  )
}

export default Features
