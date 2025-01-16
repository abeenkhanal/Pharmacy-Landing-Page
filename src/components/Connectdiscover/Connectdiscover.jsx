import React from 'react';
import { FaLightbulb, FaUsers, FaShieldAlt } from 'react-icons/fa';

const Connectdiscover = () => {
  return (
    <section className="bg-gradient-to-r from-blue-900 to-blue-600 text-white py-16 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Left Content Section */}
        <div className="lg:w-1/2">
          <h2 className="text-4xl font-bold mb-4">Connect & Discover</h2>
          <p className="text-lg mb-8">
            Access additional resources and stay updated with PharmaEase through our social media channels.
          </p>
          <div className="space-y-6">
            {/* Item 1 */}
            <div className="flex items-start gap-4">
              <FaLightbulb className="text-blue-300 text-3xl" />
              <div>
                <h3 className="text-xl font-semibold">Pharmacy Innovations</h3>
                <p className="text-gray-200">
                  Stay ahead with the latest in pharmacy technology and management solutions.
                </p>
              </div>
            </div>
            {/* Item 2 */}
            <div className="flex items-start gap-4">
              <FaUsers className="text-blue-300 text-3xl" />
              <div>
                <h3 className="text-xl font-semibold">Community Support</h3>
                <p className="text-gray-200">
                  Join our community to connect with other pharmacy professionals and share insights.
                </p>
              </div>
            </div>
            {/* Item 3 */}
            <div className="flex items-start gap-4">
              <FaShieldAlt className="text-blue-300 text-3xl" />
              <div>
                <h3 className="text-xl font-semibold">Secure Solutions</h3>
                <p className="text-gray-200">
                  Trust in our secure and reliable software to manage your pharmacy operations efficiently.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="lg:w-1/2">
          <img
            src="staff.jpg"
            alt="Pharmacy Technology"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Connectdiscover;
