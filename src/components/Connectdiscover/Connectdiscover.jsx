import React from 'react';
import { FaPills, FaPrescriptionBottle, FaUsers } from "react-icons/fa";

const Connectdiscover = () => {
  const features = [
    {
      id: 1,
      icon: <FaPills className="text-blue-300 text-3xl" />,
      title: "Advanced Inventory Management",
      description: "Monitor stock levels in real-time and streamline restocking with automated alerts.",
    },
    {
      id: 2,
      icon: <FaPrescriptionBottle className="text-blue-300 text-3xl" />,
      title: "Accurate Prescription Tracking",
      description: "Manage and track prescriptions efficiently to ensure patient satisfaction.",
    },
    {
      id: 3,
      icon: <FaUsers className="text-blue-300 text-3xl" />,
      title: "Team Collaboration",
      description: "Enhance teamwork with tools designed for seamless communication among staff.",
    },
  ];

  return (
    <section className="bg-gradient-to-r from-blue-900 to-blue-600 text-white py-16 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Left Content Section */}
        <div className="lg:w-1/2">
          <h2 className="text-4xl font-bold mb-4">Connect & Discover</h2>
          <p className="text-lg mb-8">
            Access additional resources and stay updated with PharmaEase through our social media channels.
          </p>
          <div className="space-y-6">
            {/* Map through features array */}
            {features.map((feature) => (
              <div key={feature.id} className="flex items-start gap-4">
                {feature.icon}
                <div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-gray-200">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Image Section */}
        <div className="lg:w-1/2">
          <img
            src="staff.jpg"
            alt="Pharmacy Technology"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Connectdiscover;
