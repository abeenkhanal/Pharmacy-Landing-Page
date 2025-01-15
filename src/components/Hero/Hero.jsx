import Link from 'next/link';
import React from 'react';
const Hero = () => {
  return (
    <div
      className="bg-gray-50 bg-cover bg-center"
      style={{
        backgroundImage: "url('/pattern2.jpg')",
        backgroundAttachment: "fixed", 
      }}
    >
      <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen gap-10 w-11/12 mx-auto">
    
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-snug">
            Optimize Your <br /> Pharmacy Operations
          </h1>
          <p className="text-sm sm:text-lg text-gray-600 mb-8">
            Welcome to PharmaEase, where we simplify pharmacy management with
            cutting-edge solutions.
          </p>
          <div className="flex flex-wrap justify-center lg:justify-start space-x-4">
          <Link href="/Featurespage">
            <button className="px-6 py-3 sm:px-8 sm:py-4 bg-[#01A9E0] text-white rounded-md shadow-md hover:bg-sky-300 transition text-sm sm:text-base">
              Explore Features
            </button>
            </Link>
            <Link href="/Aboutpage">
            <button
              href="#"
              className="px-6 py-3 sm:px-8 sm:py-4 text-blue-600 border border-blue-600 rounded-md hover:bg-blue-100 transition text-sm sm:text-base"
            >
              Learn About Us →
            </button>
            </Link>
          </div>
        </div>


        <div className="lg:w-1/2 w-full">
          <img
            src="background.jpg"
            alt="Pharmacy Operations"
            className="rounded-lg shadow-lg w-full h-auto max-h-[500px] lg:max-h-[735px] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;




