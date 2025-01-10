import React from 'react'

const Banner = () => {
  return (
    <div className="bg-gradient-to-b from-blue-800 to-blue-900 text-white py-16 text-center">
      <h1 className="text-3xl font-bold mb-4">Experience PharmaEase in Action</h1>
      <p className="text-lg mb-8">
        Discover how PharmaEase can transform your pharmacy operations.
        <br />
        Click below to view a demo and see the benefits firsthand.
      </p>
      <div className="flex justify-center gap-4">
        <button className="bg-white text-blue-800 px-6 py-3 rounded-lg font-medium hover:bg-gray-100">
          View Demo
        </button>
        <button className="bg-transparent border border-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-800">
          Learn More →
        </button>
      </div>
    </div>
  )
}

export default Banner

