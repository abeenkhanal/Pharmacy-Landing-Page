import React from "react";
import { FaClipboardList, FaPrescriptionBottle, FaFileInvoiceDollar } from "react-icons/fa";

const Solutions = () => {
  return (
    <section className="bg-gradient-to-r from-blue-900 to-blue-600 text-white py-16 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        <div className="lg:w-1/2">
          <h2 className="text-4xl font-bold mb-4">Pharmacy Solutions</h2>
          <p className="text-lg mb-8">
            Explore features designed to meet the unique needs of your pharmacy, from inventory management to prescription tracking.
          </p>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <FaClipboardList className="text-blue-300 text-3xl" />
              <div>
                <h3 className="text-xl font-semibold">Real-Time Inventory Management</h3>
                <p className="text-gray-200">
                  Keep track of stock levels and reorder seamlessly.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <FaPrescriptionBottle className="text-blue-300 text-3xl" />
              <div>
                <h3 className="text-xl font-semibold">Secure Prescription Tracking</h3>
                <p className="text-gray-200">
                  Ensure accuracy and confidentiality with our system.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <FaFileInvoiceDollar className="text-blue-300 text-3xl" />
              <div>
                <h3 className="text-xl font-semibold">Efficient Billing Systems</h3>
                <p className="text-gray-200">
                  Streamline your billing process with automated solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2">
          <img
            src="Services.jpg"
            alt="Pharmacy Technology"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Solutions;
