import React from "react";
import Image from "next/image";

const UniqueFeatures = () => {
  return (
    <section className="bg-purple-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-8">
        <div className="flex-1 order-1 lg:order-1">
          <Image
            src="/Group 153.png"
            alt="Sofa"
            width={500}
            height={500}
            className="mx-auto lg:mx-0 object-contain"
          />
        </div>

        <div className="flex-1 text-center lg:text-left order-2 space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-900">
            Unique Features Of Latest & Trending Products
          </h2>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-center justify-center lg:justify-start">
              <span className="w-3 h-3 bg-pink-500 rounded-full mr-3"></span>
              All frames constructed with hardwood solids and laminates
            </li>
            <li className="flex items-center justify-center lg:justify-start">
              <span className="w-3 h-3 bg-blue-500 rounded-full mr-3"></span>
              Reinforced with double wood dowels, glue, screw-nails, corner
              blocks, and machine nails
            </li>
            <li className="flex items-center justify-center lg:justify-start">
              <span className="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
              Arms, backs, and seats are structurally reinforced
            </li>
          </ul>
          <div className="mt-6 flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 justify-center lg:justify-start">
            <button className="bg-pink-500 text-white py-3 px-6 rounded-md shadow-md text-sm hover:bg-pink-600 transition">
              Add To Cart
            </button>
            <span className="text-blue-900 font-semibold">
              B&B Italian Sofa <br />
              <span className="text-blue-900">$32.00</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UniqueFeatures;