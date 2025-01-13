import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Aboutus = () => {
  return (
    <div
      className="flex flex-col md:flex-row items-center justify-between min-h-screen  md:px-16 "
      style={{
        backgroundImage: "url('/pattern2.jpg')",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Text Content Section */}
      <div className="md:w-1/2 text-center md:text-left w-11/12 mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight mb-6">
          Revolutionize Your Pharmacy Management
        </h1>
        <div className="text-base md:text-lg font-medium">
          <p className="text-gray-600 mb-6">
            At PharmaPro-CRM, we specialize in helping pharmacies streamline their operations, improve efficiency, and deliver exceptional customer service. From inventory tracking to prescription management and customer communications, we provide an all-in-one solution tailored to meet your business needs.
          </p>
          <p className="text-gray-600 mb-6">
            Our platform simplifies day-to-day operations, providing you with real-time insights into inventory levels, sales trends, and staff performance. Whether you run a single pharmacy or a chain, PharmaPro-CRM is your trusted partner for growth and success.
          </p>
          <p className="text-gray-600 mb-8">
            Join thousands of pharmacists who have transformed their workflow, reduced errors, and built stronger relationships with their customers through our cutting-edge software.
          </p>
        </div>
        <Link href="/Featurespage">
          <button className="px-6 h-14 w-full md:w-56 py-3 bg-teal-600 text-white font-semibold rounded-lg shadow-lg hover:bg-teal-700 transition duration-300">
            Explore Features
          </button>
        </Link>
      </div>

      {/* Image Section */}
      <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
        <Image
          src="/about.jpg"
          alt="Pharmacy Management"
          width={800}
          height={500}
          className="rounded-lg shadow-lg"
          priority
        />
      </div>
    </div>
  );
};

export default Aboutus;
