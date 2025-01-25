import React from 'react'
import { FaBoxes, FaPrescriptionBottle, FaChartLine, FaUserMd, FaLock, FaHeadset } from "react-icons/fa";

const Servicesfeatures = () => {
    const features = [
        {
            icon: <FaBoxes className="text-blue-600 text-5xl sm:text-4xl mr-4" />,
            title: "Inventory Management",
            description: "Easily track and manage medicine stocks with real-time updates and low-stock alerts.",
        },
        {
            icon: <FaPrescriptionBottle className="text-blue-600 text-5xl sm:text-4xl mr-4" />,
            title: "Prescription Tracking",
            description: "Ensure seamless prescription fulfillment with automated tracking and reminders.",
        },
        {
            icon: <FaChartLine className="text-blue-600 text-5xl sm:text-4xl mr-4" />,
            title: "Analytics Dashboard",
            description: "Gain insights into your pharmacy’s performance with detailed sales and inventory reports.",
        },
        {
            icon: <FaUserMd className="text-blue-600 text-5xl sm:text-4xl mr-4" />,
            title: "Patient Management",
            description: "Keep track of patient profiles, prescriptions, and medical history in one place.",
        },
        {
            icon: <FaLock className="text-blue-600 text-5xl sm:text-4xl mr-4" />,
            title: "Secure Data Storage",
            description: "Protect sensitive information with our secure and compliant data storage solutions.",
        },
        {
            icon: <FaHeadset className="text-blue-600 text-5xl sm:text-4xl mr-4" />,
            title: "24/7 Support",
            description: "Get round-the-clock technical support for uninterrupted operations.",
        },
    ];

  return (
    <div>
        <section className="py-16 bg-gradient-to-l from-white to-green-100">
            <div className="max-w-7xl mx-auto px-8">
                <h2 className="text-3xl font-bold text-center mb-12">
                    Why Choose Our Pharmacy Management Software?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="p-6 border rounded-lg shadow hover:shadow-lg flex items-start">
                            {feature.icon}
                            <div>
                                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    </div>
  )
}

export default Servicesfeatures
