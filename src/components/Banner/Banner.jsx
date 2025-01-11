import React from 'react';

const Banner = () => {
  return (
    <div className="bg-gradient-to-r from-blue-800 to-blue-100 text-white py-16 text-center">
      <div className="w-11/12 max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-5xl font-bold mb-4">
          Experience PharmaEase in Action
        </h1>
        <p className="text-sm sm:text-lg mb-8">
          Discover how PharmaEase can transform your pharmacy operations.
          <br />
          Click below to view a demo and see the benefits firsthand.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="px-6 py-3 bg-white text-blue-800 border border-blue-800 rounded-lg font-medium shadow-lg hover:shadow-xl transition-transform duration-300 transform hover:scale-105">
            View Demo
          </button>
          <button className="px-6 py-3 bg-white text-blue-800 border border-blue-800 rounded-lg font-medium shadow-lg hover:shadow-xl transition-transform duration-300 transform hover:scale-105">
            Learn More →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
