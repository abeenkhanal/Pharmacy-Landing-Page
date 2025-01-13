"use client";

import React, { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Dr. Ayesha Khan",
    role: "Pharmacist, HealthCare Pharmacy",
    image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    feedback: "This pharmacy management system has streamlined our inventory and prescription handling. It's a must-have for every pharmacy.",
  },
  {
    name: "John Peterson",
    role: "Owner, Peterson's Pharmacy",
    image: "https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    feedback: "Managing my business has never been easier. The automated reporting and reminders save me hours of work every day.",
  },
  {
    name: "Sarah Lopez",
    role: "Pharmacy Technician, LifeCare Pharmacy",
    image: "https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    feedback: "The user-friendly interface and accurate tracking of medication stock have significantly reduced errors in our pharmacy.",
  },
  {
    name: "David Brown",
    role: "Pharmacist, MedPlus",
    image: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    feedback: "The billing system is seamless and integrates well with insurance claims. Highly recommend this software!",
  },
  {
    name: "Emily Carter",
    role: "Pharmacy Manager, WellCare Pharmacy",
    image: "https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    feedback: "Real-time inventory updates and reports have helped us avoid stockouts and overstocking. Amazing software!",
  },
  {
    name: "James Wilson",
    role: "Owner, Wilson’s Pharmacy",
    image: "https://images.pexels.com/photos/1499327/pexels-photo-1499327.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    feedback: "This software makes compliance with regulations so much easier. It’s reliable and secure.",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalSlides = Math.ceil(testimonials.length / 3);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, 5000);
    return () => clearInterval(interval);
  }, [totalSlides]);

  return (
    <div className="bg-gradient-to-r from-white to-green-100"> 
      <div className="max-w-7xl mx-auto px-6 py-10 ">
        <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-8">
          What Our Clients Say
        </h2>
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {Array.from({ length: totalSlides }).map((_, groupIndex) => (
              <div key={groupIndex} className="flex min-w-full space-x-6">
                {testimonials.slice(groupIndex * 3, groupIndex * 3 + 3).map((testimonial, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg border shadow-lg p-6 flex-1 hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="flex flex-col items-center">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-20 h-20 rounded-full mb-4 object-cover border-2 border-orange-400"
                      />
                      <blockquote className="text-gray-600 italic text-center mb-4">
                        "{testimonial.feedback}"
                      </blockquote>
                      <p className="text-lg font-semibold text-gray-800">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-6 space-x-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              className={`h-3 w-3 rounded-full ${
                index === currentIndex ? "bg-orange-500" : "bg-gray-300"
              }`}
              onClick={() => setCurrentIndex(index)}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
