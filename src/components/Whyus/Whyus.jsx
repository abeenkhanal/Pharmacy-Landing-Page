import React from 'react'

const Whyus = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
      {/* Illustration Section */}
      <div className="flex justify-center items-center">
        <div className="relative w-full max-w-sm">
          {/* Placeholder for illustration */}
          <div className="bg-blue-100 p-8 rounded-lg shadow-lg">
            <div className="text-center font-bold text-lg text-blue-600">
              <p>Pharmacy Management Illustration</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="space-y-4">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800">
          Transform Your Pharmacy Management
        </h1>
        <p className="text-gray-600">
          Explore the unmatched advantages of our Pharmacy Management System,
          designed to streamline operations with precision and flexibility.
        </p>

        {/* Feature List */}
        <div className="space-y-6">
          {/* Feature 1 */}
          <div className="flex items-start space-x-4">
            <div className="bg-blue-100 p-2 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 10h11M9 21V7m0 0L5 11m4-4l4 4"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                Comprehensive Inventory Management
              </h3>
              <p className="text-gray-600">
                Efficiently track medicine stocks, expiry dates, and
                reorder levels to avoid shortages or excesses.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex items-start space-x-4">
            <div className="bg-green-100 p-2 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-green-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                Prescription Processing
              </h3>
              <p className="text-gray-600">
                Digitally manage and process prescriptions for faster and
                error-free fulfillment.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex items-start space-x-4">
            <div className="bg-yellow-100 p-2 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-yellow-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                Sales Reporting and Analytics
              </h3>
              <p className="text-gray-600">
                Access detailed sales reports and analytics to track revenue
                and optimize operations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Whyus
