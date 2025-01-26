"use client";

import React from "react";
import Image from "next/image";
import AddToCartButton from "../components/Addtocartbutton";

const UniqueFeatures = () => {
  const product = {
    _id: 1,
    name: "B&B Italian Sofa",
    price: 32.0,
    image: "/Group 153.png",
  };

  return (
    <section className="bg-purple-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-8">
        <div className="flex-1 order-1 lg:order-1">
          <Image
            src={product.image}
            alt={product.name}
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
            <div className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-pink-500 hover:text-white transition duration-200 transform hover:scale-105">
              <AddToCartButton product={product} />
            </div>
            <span className="text-blue-900 font-semibold">
              {product.name} <br />
              <span className="text-blue-900">${product.price.toFixed(2)}</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UniqueFeatures;
