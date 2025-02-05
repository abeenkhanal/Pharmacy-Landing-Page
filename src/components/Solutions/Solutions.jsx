import React from "react";
import { FaClipboardList, FaPrescriptionBottle, FaFileInvoiceDollar } from "react-icons/fa";

const Solutions = () => {
  const features = [
    {
      icon: <FaClipboardList className="text-blue-300 text-3xl" />,
      title: "Real-Time Inventory Management",
      description: "Keep track of stock levels and reorder seamlessly.",
    },
    {
      icon: <FaPrescriptionBottle className="text-blue-300 text-3xl" />,
      title: "Secure Prescription Tracking",
      description: "Ensure accuracy and confidentiality with our system.",
    },
    {
      icon: <FaFileInvoiceDollar className="text-blue-300 text-3xl" />,
      title: "Efficient Billing Systems",
      description: "Streamline your billing process with automated solutions.",
    },
  ];

  return (
    <section className="bg-gradient-to-r from-blue-900 to-blue-600 text-white py-16 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        <div className="lg:w-1/2">
          <h2 className="text-4xl font-bold mb-4">Pharmacy Solutions</h2>
          <p className="text-lg mb-8">
            Explore features designed to meet the unique needs of your pharmacy, from inventory management to prescription tracking.
          </p>
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-4">
                {feature.icon}
                <div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-gray-200">{feature.description}</p>
                </div>
              </div>
            ))}
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