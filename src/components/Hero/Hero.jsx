import React from 'react';

const Hero = () => {
  return (
    <div
      className=" bg-gray-50 bg-cover bg-center"
      style={{ backgroundImage: "url('/pattern2.jpg')" }} 
    > 
     <div className='flex flex-col lg:flex-row items-center justify-between min-h-screen gap-10 w-11/12 mx-auto'>
     <div className="lg:w-1/2 text-center lg:text-left bg-opacity-80 rounded-md ">
        <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-4">
          Optimize Your <br /> Pharmacy Operations
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Welcome to PharmaEase, where we simplify pharmacy management with
          cutting-edge solutions.
        </p>
        <div className="flex flex-wrap justify-center lg:justify-start space-x-4">
          <button className="px-6 py-3 bg-[#01A9E0] text-white rounded-md shadow-md hover:bg-sky-300 transition">
            Explore Our Features
          </button>
          <button
            href="#"
            className="px-6 py-3 text-blue-600 border border-blue-600 rounded-md hover:bg-blue-100 transition"
          >
            Learn About Us →
          </button>
        </div>
      </div>

      
      <div className="lg:w-1/2 mt-10 lg:mt-0">
        <img
          src="background.jpg"
          alt="Pharmacy Operations"
          className="rounded-lg shadow-lg h-[735px]"
        />
      </div>
     </div>
    </div>
  );
};

export default Hero;
