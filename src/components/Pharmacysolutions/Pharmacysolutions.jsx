import React from 'react';
import {
  FaClipboardList,
  FaLock,
  FaFileInvoice,
  FaChartLine,
  FaHeadset,
  FaShieldAlt,
} from 'react-icons/fa';

const features = [
  {
    id: 1,
    icon: <FaClipboardList className="text-2xl text-white" />,
    title: 'Real-Time Inventory Management',
    description: 'Keep track of stock levels and reorder seamlessly.',
  },
  {
    id: 2,
    icon: <FaLock className="text-2xl text-white" />,
    title: 'Secure Prescription Tracking',
    description: 'Ensure accuracy and confidentiality with our system.',
  },
  {
    id: 3,
    icon: <FaFileInvoice className="text-2xl text-white" />,
    title: 'Efficient Billing Systems',
    description: 'Streamline your billing process with automated solutions.',
  },
  {
    id: 4,
    icon: <FaChartLine className="text-2xl text-white" />,
    title: 'Data Analytics',
    description: 'Get insights on sales trends, inventory usage, and more.',
  },
  {
    id: 5,
    icon: <FaHeadset className="text-2xl text-white" />,
    title: '24/7 Customer Support',
    description: 'Our dedicated support team is here to assist you anytime.',
  },
  {
    id: 6,
    icon: <FaShieldAlt className="text-2xl text-white" />,
    title: 'Enhanced Security',
    description: 'Protect sensitive data with state-of-the-art encryption.',
  },
];

const PharmacySolutions = () => {
  return (
    <div className="bg-gradient-to-l from-white to-green-100 text-white flex flex-col p-8">
      <div className="flex flex-col items-center py-12 px-6 text-center bg-gradient-to-r from-blue-800 to-blue-600">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Tailored Pharmacy Solutions
        </h1>
        <p className="text-lg md:text-xl max-w-3xl">
          Explore features designed to meet the unique needs of your pharmacy,
          from inventory management to prescription tracking.
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-center md:items-stretch justify-between max-w-7xl mx-auto mt-10 px-6 gap-8">
        <div className="flex-1 space-y-6">
          {features.slice(0, 3).map((feature) => (
            <div
              key={feature.id}
              className="bg-white text-blue-800 p-6 rounded-lg shadow-lg flex gap-4 items-center"
            >
              <div className="bg-blue-500 p-4 rounded-full">{feature.icon}</div>
              <div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex-1 flex items-center justify-center">
          <img
            src="/about.jpg"
            alt="Pharmacy"
            className="rounded-lg shadow-lg w-full max-w-md md:max-w-lg object-cover"
          />
        </div>
        <div className="flex-1 space-y-6">
          {features.slice(3).map((feature) => (
            <div
              key={feature.id}
              className="bg-white text-blue-800 p-6 rounded-lg shadow-lg flex gap-4 items-center"
            >
              <div className="bg-blue-500 p-4 rounded-full">{feature.icon}</div>
              <div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PharmacySolutions;
