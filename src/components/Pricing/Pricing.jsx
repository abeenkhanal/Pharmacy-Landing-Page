"use client";
import React, { useState } from 'react';

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "Basic Plan",
      monthlyPrice: 99,
      yearlyPrice: 999,
      features: [
        "Inventory Management",
        "Prescription Tracking",
        "Billing",
      ],
    },
    {
      name: "Business Plan",
      monthlyPrice: 199,
      yearlyPrice: 1999,
      features: [
        "Inventory Management",
        "Prescription Tracking",
        "Billing",
        "Automated Stock Notifications",
      ],
    },
    {
      name: "Enterprise Plan",
      monthlyPrice: 299,
      yearlyPrice: 2999,
      features: [
        "Inventory Management",
        "Prescription Tracking",
        "Billing",
        "Automated Stock Notifications",
        "Custom Integrations",
        "Priority Support",
      ],
    },
  ];

  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 sm:text-4xl">Pricing Plan</h2>
        <p className="text-gray-500 mt-2 sm:text-lg">
          Choose a plan that fits your pharmacy's needs.
        </p>
        <div className="flex justify-center items-center mt-4">
          <button
            className={`px-4 py-2 rounded-l-full border ${
              !isYearly ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-800'
            }`}
            onClick={() => setIsYearly(false)}
          >
            Monthly
          </button>
          <button
            className={`px-4 py-2 rounded-r-full border ${
              isYearly ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-800'
            }`}
            onClick={() => setIsYearly(true)}
          >
            Yearly
          </button>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`w-full sm:w-80 md:w-1/3 lg:w-1/4 border rounded-lg p-6 shadow-md flex flex-col ${
              index === 2 ? 'bg-orange-100' : 'bg-white'
            }`}
          >
            <h3 className="text-lg font-semibold text-gray-800">{plan.name}</h3>
            <p className="mt-4 text-2xl font-bold text-gray-900">
              ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
              <span className="text-sm font-medium">/{isYearly ? 'year' : 'month'}</span>
            </p>
            <p className="mt-2 text-gray-500">
              ${isYearly ? plan.yearlyPrice : plan.monthlyPrice * 12}/
              {isYearly ? 'year' : 'month'}
            </p>
            <ul className="mt-6 space-y-2 flex-grow">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center text-gray-700">
                  <span className="mr-2 text-green-500">✔</span>
                  {feature}
                </li>
              ))}
            </ul>
            <button
              className={`mt-6 w-full py-2 text-white font-medium rounded-lg ${
                index === 2 ? 'bg-orange-500' : 'bg-gray-800'
              } hover:opacity-90`}
            >
              Sign up now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
