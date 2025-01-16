import React from 'react';

const Mission = () => {
  return (
    <section className="bg-gray-50 py-16 px-4 lg:px-16">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Vision Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <img
            src="https://images.pexels.com/photos/18809/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Vision"
            className="rounded-lg shadow-md w-full h-auto"
          />
          <div>
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Our Vision</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              To revolutionize the pharmacy industry by delivering seamless,
              secure, and scalable solutions that enhance inventory management,
              prescription tracking, and patient care. Our vision is to empower
              pharmacies to operate efficiently, improve customer experiences,
              and meet the evolving demands of modern healthcare.
            </p>
          </div>
        </div>

        {/* Mission Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="order-last lg:order-first">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Our Mission</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Our mission is to streamline pharmacy operations with advanced CRM
              tools, enabling real-time inventory updates, automated prescription
              fulfillment, and robust analytics. By optimizing workflows and
              providing secure, data-driven solutions, we aim to make pharmacy
              management intuitive, efficient, and accessible for every pharmacy
              and their customers.
            </p>
          </div>
          <img
            src="https://images.pexels.com/photos/6147381/pexels-photo-6147381.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Mission"
            className="rounded-lg shadow-md w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Mission;
