import React from "react";
import { FiBox, FiFileText, FiDollarSign } from "react-icons/fi";

const Revolutionize = () => {
  return (
    <div className="bg-gradient-to-r from-white to-green-100 py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center w-11/12 gap-16 lg:gap-32">
        {/* Image Section */}
        <div className="flex justify-center lg:justify-end">
          <img
            src="/nurse.png"
            alt="nurse"
            className="w-full max-w-sm sm:max-w-md lg:max-w-lg rounded-lg shadow-lg"
          />
        </div>

        {/* Content Section */}
        <div>
          <h3 className="text-blue-600 font-semibold text-lg mb-2 uppercase tracking-wide">
            Streamline Processes
          </h3>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-800 leading-snug mb-6">
            Revolutionize Your Pharmacy
          </h2>
          <p className="text-gray-600 text-base sm:text-lg mb-8 leading-relaxed">
            PharmaEase is committed to transforming pharmacy management through
            innovative technology and user-friendly solutions.
          </p>

          {/* Features Section */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-2 rounded-full">
                <FiBox className="text-blue-600 text-3xl" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 text-lg">
                  Inventory Management
                </h4>
                <p className="text-gray-600">
                  Keep track of stock levels and streamline order processes with
                  ease.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-2 rounded-full">
                <FiFileText className="text-blue-600 text-3xl" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 text-lg">
                  Prescription Tracking
                </h4>
                <p className="text-gray-600">
                  Efficiently manage prescriptions and ensure timely refills for
                  your customers.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-2 rounded-full">
                <FiDollarSign className="text-blue-600 text-3xl" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 text-lg">
                  Billing Solutions
                </h4>
                <p className="text-gray-600">
                  Automate billing processes to reduce errors and save time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Revolutionize;
