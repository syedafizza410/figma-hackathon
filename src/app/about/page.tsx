'use client';

import React, { useState } from "react";
import Link from "next/link";

const About = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      image: "/client(3).png",
      name: "Selina Gomez",
      feedback:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam venenatis arcu eu diam tincidunt, ac gravida neque convallis.",
    },
    {
      image: "/client(2).png",
      name: "John Doe",
      feedback:
        "Nam vitae a enim nunc, sed sapien egestas ac nam. Tristique ultrices dolor aliquam lacus volutpat praesent.",
    },
    {
      image: "/client(1).png",
      name: "Emily Clarke",
      feedback:
        "Sed eget varius lacus. Proin ultricies sapien a nibh dictum, id sollicitudin turpis efficitur.",
    },
  ];

  return (
    <div className="bg-gray-50 py-10">
      <div className="py-12 px-8 bg-purple-50 h-44">
        <h1 className="max-w-6xl mx-auto text-4xl font-bold text-blue-900">
          About Us
        </h1>
        <div className="max-w-6xl mx-auto flex items-center gap-2">
          <Link href={"/"} className="text-blue-900">
            Home
          </Link>
          <p className="text-blue-900">Pages</p>
          <p className="text-[#FB2E86]">About Us</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-6 items-center py-12">
        <div>
          <img
            src="/Group 73.png"
            alt="Business"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-gray-800">
            Know About Our Ecommerce Business, History
          </h2>
          <p className="text-gray-600 mt-4">
            Learn about our mission, journey, and commitment to excellence. We
            provide top-notch products and services for all your needs. Our
            history reflects years of dedication to our customers.
          </p>
          <button className="mt-6 bg-[#FB2E86] text-white px-6 py-3 rounded-md shadow-md hover:bg-[#FB2E86]">
          <a href='/Contact'>Contact Us</a> 
          </button>
        </div>
      </div>

      <div className="py-12 bg-white">
        <h2 className="text-center text-3xl font-bold text-gray-800">
          Our Features
        </h2>
        <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
          {[
            {
              title: "Free Delivery",
              image: "/free-delivery 1.png",
              description: "Fast and reliable delivery for all your purchases.",
            },
            {
              title: "100% Cash Back",
              image: "/cashback 1.png",
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
            },
            {
              title: "Quality Product",
              image: "/premium-quality 1.png",
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
            },
            {
              title: "24/7 Support",
              image: "/24-hours-support 1.png",
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
            },
          ].map((feature, idx) => (
            <div
              key={idx}
              className="bg-gray-50 p-6 rounded-lg text-center shadow-md hover:shadow-lg transition-transform transform hover:scale-105 relative group"
            >
              <div className="w-20 h-20 mx-auto">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-lg font-bold mt-4">{feature.title}</h3>
              <p className="text-gray-600 mt-2">{feature.description}</p>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 w-0 bg-orange-500 group-hover:w-3/4 transition-all"></div>
            </div>
          ))}
        </div>
      </div>

      <div className="py-12 bg-gray-50">
        <h2 className="text-center text-3xl font-bold text-gray-800">
          Our Client Say!
        </h2>
        <div className="max-w-4xl mx-auto px-6 mt-8 text-center">
          <div className="p-6 transition">
            <img
              src={testimonials[activeTestimonial].image}
              alt={testimonials[activeTestimonial].name}
              className="mx-auto rounded-full"
            />
            <h3 className="text-lg font-bold mt-4">
              {testimonials[activeTestimonial].name}
            </h3>
            <p className="text-gray-600 mt-2">
              {testimonials[activeTestimonial].feedback}
            </p>
          </div>
          <div className="flex justify-center mt-6 space-x-4">
            {testimonials.map((_, idx) => (
              <span
                key={idx}
                onClick={() => setActiveTestimonial(idx)}
                className={`cursor-pointer text-2xl font-bold ${
                  activeTestimonial === idx
                    ? "text-[#FB2E86]"
                    : "text-pink-300 hover:text-[#FB2E86]"
                }`}
              >
                __
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
