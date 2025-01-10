import React from "react";
import { FiBox, FiFileText, FiDollarSign } from "react-icons/fi";

const Revolutionize = () => {
  return (
    <div className="bg-gradient-to-r from-white to-green-100 py-20 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center w-11/12  gap-32">
    
        <div className="flex justify-center lg:justify-end">
          <img
            src="/nurse.png"
            alt="nurse"
            className="w-full max-w-md lg:max-w-lg rounded-lg shadow-lg "
          />
        </div>

        <div>
          <h3 className="text-blue-600 font-semibold text-lg mb-2 uppercase tracking-widest">
            Streamline Processes
          </h3>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-800 leading-snug mb-6">
            Revolutionize Your Pharmacy
          </h2>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            PharmaEase is committed to transforming pharmacy management through
            innovative technology and user-friendly solutions.
          </p>

   
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <FiBox className="text-blue-600 text-4xl" />
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
              <FiFileText className="text-blue-600 text-4xl" />
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
              <FiDollarSign className="text-blue-600 text-4xl" />
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
