import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="container mx-auto p-6">
        <div className="grid md:grid-cols-2 gap-10 items-center bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-8">
            <h1 className="text-2xl font-bold mb-4">Get in touch</h1>
            <p className="text-gray-600 mb-6">
              Our friendly team would love to hear from you!
            </p>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First name"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
                <input
                  type="text"
                  placeholder="Last name"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>
              <input
                type="email"
                placeholder="you@company.com"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
              <input
                type="tel"
                placeholder="+977 00000-00000"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <textarea
                placeholder="Message"
                rows="4"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              ></textarea>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="privacyPolicy"
                  className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="privacyPolicy"
                  className="ml-2 text-gray-600 text-sm"
                >
                  You agree to our friendly{" "}
                  <a
                    href="#"
                    className="text-purple-500 underline hover:text-purple-700"
                  >
                    privacy policy
                  </a>
                  .
                </label>
              </div>
              <button
                type="submit"
                className="w-full bg-purple-600 text-white p-3 rounded-md hover:bg-purple-700 transition"
              >
                Send message
              </button>
            </form>
          </div>
          <div className="relative h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.6673558020444!2d83.4610641!3d27.6905394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399685bb45101c0b%3A0x6f093136e0e2cb10!2sAbhyam%20Robotics%20Institution%20of%20Business%20and%20Technology%20(ARIBT)!5e0!3m2!1sen!2snp!4v1612765127277!5m2!1sen!2snp"
              title="Google Map"
              allowFullScreen
              loading="lazy"
              className="absolute inset-0 w-full h-full border-0"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
