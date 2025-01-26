"use client";
import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const Faq = () => {
    const [openFAQ, setOpenFAQ] = useState(null);

    const toggleFAQ = (index) => {
        setOpenFAQ(openFAQ === index ? null : index);
    };

    const thought = [
        {
            question: "How Can This System Help Manage Inventory?",
            answer: [
                "Track all medicines and supplies in stock, categorized by name, batch, and expiry dates.",
                "Get low-stock alerts to ensure timely restocking.",
                "Maintain detailed logs for purchases, returns, and damages.",
            ],
        },
        {
            question: "Can I Track Medicine Expiry Dates?",
            answer: [
                "Yes, the system provides detailed tracking of expiry dates for all stocked medicines.",
                "Receive automated notifications for upcoming expirations to ensure timely action.",
                "Generate reports to identify and remove expired medicines from inventory.",
            ],
        },
        {
            question: "What Reports Can I Generate?",
            answer: [
                "Daily, weekly, and monthly sales reports for better business insights.",
                "Inventory usage reports to track high-demand medicines.",
                "Profit and loss statements to analyze business performance over time.",
            ],
        },
        {
            question: "How Does This System Handle Customer Records?",
            answer: [
                "Maintain a database of customer details, including contact information and prescription history.",
                "Easily retrieve past purchase records for customer inquiries.",
                "Streamline customer loyalty programs with automated points tracking.",
            ],
        },
        {
            question: "Is This System User-Friendly for My Staff?",
            answer: [
                "Yes, the system is designed with an intuitive interface that is easy to learn and use.",
                "Provide role-based access to ensure security and data privacy.",
                "Includes training documentation and support for quick onboarding.",
            ],
        },
    ];

    return (
        <div className="bg-gradient-to-b from-white to-gray-50 py-12 px-6 lg:px-24">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-10 mb-12 relative">
                    <div className="relative lg:w-1/2">
                        <div className="relative w-full h-[450px]">
                            <img
                                src="https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt="Pharmacy Team at Work"
                                className="rounded-lg shadow-lg w-full h-full object-cover"
                            />
                            <img
                                src="https://images.pexels.com/photos/19471016/pexels-photo-19471016/free-photo-of-young-pharmacist-writing-notes.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt="Pharmacy Team Collaboration"
                                className="absolute -bottom-10 left-10 w-[20%] lg:w-[40%] rounded-lg shadow-xl border-4 border-white"
                            />
                            <img
                                src="https://images.pexels.com/photos/4031323/pexels-photo-4031323.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt="Pharmacy Team Collaboration"
                                className="absolute -bottom-10 right-8 w-[50%] lg:w-[40%] rounded-lg shadow-xl border-4 border-white"
                            />
                        </div>
                    </div>
                    <div className="lg:w-1/2">
                        <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed mb-8">
                            Our Pharmacy Management System simplifies inventory, tracks
                            expiries, and generates insightful reports. Below are answers to
                            common questions to help you understand how it can benefit your
                            pharmacy.
                        </p>
                        <div className="space-y-4">
                            {thought.map((ask, index) => (
                                <div
                                    key={index}
                                    className="bg-white shadow-md rounded-lg overflow-hidden"
                                >
                                    <button
                                        onClick={() => toggleFAQ(index)}
                                        className="w-full flex items-center justify-between px-6 py-4 text-left text-gray-800 hover:bg-gray-100 transition-colors duration-300"
                                    >
                                        <span className="text-lg font-medium">{ask.question}</span>
                                        {openFAQ === index ? (
                                            <FiChevronUp className="h-6 w-6 text-gray-500" />
                                        ) : (
                                            <FiChevronDown className="h-6 w-6 text-gray-500" />
                                        )}
                                    </button>
                                    <div
                                        className={`px-6 bg-gray-50 overflow-hidden transition-all duration-500 ease-in-out ${
                                            openFAQ === index ? "max-h-[500px] py-4" : "max-h-0"
                                        }`}
                                    >
                                        <ul className="list-disc pl-6 text-gray-600 space-y-2">
                                            {ask.answer.map((line, idx) => (
                                                <li key={idx}>{line}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;
