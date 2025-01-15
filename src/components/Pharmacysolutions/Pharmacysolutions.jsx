import React from 'react';
import { FaClipboardList, FaLock, FaFileInvoice, FaChartLine, FaHeadset, FaShieldAlt } from 'react-icons/fa';

const PharmacySolutions = () => {
  return (
    <div className="bg-gradient-to-l from-white to-green-100 text-white flex flex-col p-8  ">
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
          <div className="bg-white text-blue-800 p-6 rounded-lg shadow-lg flex gap-4 items-center">
            <div className="bg-blue-500 p-4 rounded-full">
              <FaClipboardList className="text-2xl text-white" />
            </div>
            <div>
              <h3 className="text-xl font-semibold">Real-Time Inventory Management</h3>
              <p className="text-gray-600">
                Keep track of stock levels and reorder seamlessly.
              </p>
            </div>
          </div>
          <div className="bg-white text-blue-800 p-6 rounded-lg shadow-lg flex gap-4 items-center">
            <div className="bg-blue-500 p-4 rounded-full">
              <FaLock className="text-2xl text-white" />
            </div>
            <div>
              <h3 className="text-xl font-semibold">Secure Prescription Tracking</h3>
              <p className="text-gray-600">
                Ensure accuracy and confidentiality with our system.
              </p>
            </div>
          </div>
          <div className="bg-white text-blue-800 p-6 rounded-lg shadow-lg flex gap-4 items-center">
            <div className="bg-blue-500 p-4 rounded-full">
              <FaFileInvoice className="text-2xl text-white" />
            </div>
            <div>
              <h3 className="text-xl font-semibold">Efficient Billing Systems</h3>
              <p className="text-gray-600">
                Streamline your billing process with automated solutions.
              </p>
            </div>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <img
            src="/about.jpg"
            alt="Pharmacy"
            className="rounded-lg shadow-lg w-full max-w-md md:max-w-lg object-cover"
          />
        </div>

        <div className="flex-1 space-y-6">
          {/* Feature 4 */}
          <div className="bg-white text-blue-800 p-6 rounded-lg shadow-lg flex gap-4 items-center">
            <div className="bg-blue-500 p-4 rounded-full">
              <FaChartLine className="text-2xl text-white" />
            </div>
            <div>
              <h3 className="text-xl font-semibold">Data Analytics</h3>
              <p className="text-gray-600">
                Get insights on sales trends, inventory usage, and more.
              </p>
            </div>
          </div>
          <div className="bg-white text-blue-800 p-6 rounded-lg shadow-lg flex gap-4 items-center">
            <div className="bg-blue-500 p-4 rounded-full">
              <FaHeadset className="text-2xl text-white" />
            </div>
            <div>
              <h3 className="text-xl font-semibold">24/7 Customer Support</h3>
              <p className="text-gray-600">
                Our dedicated support team is here to assist you anytime.
              </p>
            </div>
          </div>
          <div className="bg-white text-blue-800 p-6 rounded-lg shadow-lg flex gap-4 items-center">
            <div className="bg-blue-500 p-4 rounded-full">
              <FaShieldAlt className="text-2xl text-white" />
            </div>
            <div>
              <h3 className="text-xl font-semibold">Enhanced Security</h3>
              <p className="text-gray-600">
                Protect sensitive data with state-of-the-art encryption.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PharmacySolutions;
