import React from "react";
import Image from "next/image";
import Head from "next/head";

const HeroSection = () => {
  return (
      
      <section className="bg-purple-50 relative py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between relative gap-8">

            {/* Lamp Section */}
            {/* Keep your original classes for xs and sm */}
            {/* On lg: position statically for horizontal alignment */}
            <div className="flex justify-center lg:absolute justify-start lg:static">
              <Image
                src="/lamp.png" 
                alt="Lamp"
                width={150}
                height={150}
                className="w-60 h-60 mb-72 ml-12" 
              />
            </div>

            {/* Text Content */}
            {/* Retain xs/sm classes, override positioning at lg */}
            <div className="flex-1 space-y-4 xs:absolute xs:top-96 sm:space-y-6 sm:text-xl sm:absolute sm:top-80 lg:static lg:mt-0 lg:text-left lg:ml-64">
              <h4 className="text-pink-500 text-sm uppercase font-semibold sm:text-lg">
                Best Furniture For Your Castle...
              </h4>
              <h1 className="text-gray-800 text-3xl sm:text-4xl lg:text-4xl font-bold leading-tight">
                New Furniture Collection <br /> Trends in 2020
              </h1>
              <p className="text-gray-600 lg:text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est 
                <br /> adipiscing in phasellus non in justo.
              </p>
              <button className="bg-pink-500 text-white py-3 px-6 rounded-md shadow-md text-sm hover:bg-pink-600 transition">
                Shop Now
              </button>
            </div>

            {/* Sofa Section */}
            {/* At lg, this flows to the right as we've used lg:flex-row and lg:justify-between */}
            <div className="flex justify-center lg:justify-end sm:mt-32 xs:mt-60 lg:static lg:m-0">
              <Image
                src="/sofa.png" // Update with your sofa image path
                alt="Sofa"
                width={500}
                height={500}
                className="w-full max-w-md h-auto"
              />
            </div>
          </div>

          {/* Decorative Dots - unchanged */}
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-pink-500"></div>
            <div className="w-3 h-3 rounded-full bg-gray-300"></div>
            <div className="w-3 h-3 rounded-full bg-gray-300"></div>
          </div>
        </div>
      </section>
  );
};

export default HeroSection;
