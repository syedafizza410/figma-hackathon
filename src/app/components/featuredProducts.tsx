"use client";

import React from "react";
import Image from "next/image";
import { ShoppingCartIcon, HeartIcon, SearchIcon } from "@heroicons/react/outline";

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: "Cantilever chair",
      code: "Y523201",
      price: "$42.00",
      image: "/image 1168.png",
    },
    {
      id: 2,
      name: "Cantilever chair",
      code: "Y523202",
      price: "$42.00",
      image: "/product.png",
    },
    {
      id: 3,
      name: "Cantilever chair",
      code: "Y523203",
      price: "$42.00",
      image: "/Component 3.png",
    },
    {
      id: 4,
      name: "Cantilever chair",
      code: "Y523204",
      price: "$42.00",
      image: "/Component 4.png",
    },
  ];

  return (
    <section className="py-12 mt-12">
      <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>
      <div className="grid grid-cols-1 max-w-8xl mx-auto sm:grid-cols-2 md:grid-cols-4 gap-6 pl-40 pr-40">
        {products.map((product, index) => (
          <div
            key={product.id}
            className="p-4 rounded-lg shadow-md bg-white relative overflow-hidden"
          >
            {index === 1 && (
              <>
                <div className="flex justify-left top-4 right-4 flex gap-2 text-blue-500">
                  <ShoppingCartIcon className="h-5 w-5 cursor-pointer hover:text-blue-700" />
                  <HeartIcon className="h-5 w-5 cursor-pointer hover:text-blue-700" />
                  <SearchIcon className="h-5 w-5 cursor-pointer hover:text-blue-700" />
                </div>

                {/* Product Image */}
                <div className="relative w-full h-40 mb-4">
                  <Image
                    src={product.image}
                    alt={product.name}
                    layout="fill"
                    objectFit="contain"
                  />
                </div>

                {/* View Details Button */}
                <button className="w-32 py-2 text-sm font-medium text-white bg-green-500 rounded-md hover:bg-green-600">
                  View Details
                </button>

                {/* Product Details */}
                <div className="text-center mt-2 bg-blue-700 space-y-2">
                  <h3 className="text-lg font-semibold text-white">
                    {product.name}
                  </h3>

                  {/* Color Line */}
                  <div className="flex justify-center gap-1 my-2">
                    <div className="w-4 h-1 bg-green-500 rounded"></div>
                    <div className="w-4 h-1 bg-pink-500 rounded"></div>
                    <div className="w-4 h-1 bg-blue-500 rounded"></div>
                  </div>

                  <p className="text-sm text-white">Code - {product.code}</p>
                  <p className="text-lg font-bold text-white">{product.price}</p>
                </div>
              </>
            )}

            {/* Simple Design for All Other Product Cards */}
            {index !== 1 && (
              <>
                {/* Product Image */}
                <div className="relative w-full h-40 mb-4">
                  <Image
                    src={product.image}
                    alt={product.name}
                    layout="fill"
                    objectFit="contain"
                  />
                </div>

                {/* Product Details */}
                <div className="text-center space-y-2">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {product.name}
                  </h3>
                   {/* Color Line */}
                   <div className="flex justify-center gap-1 my-2">
                    <div className="w-4 h-1 bg-green-500 rounded"></div>
                    <div className="w-4 h-1 bg-pink-500 rounded"></div>
                    <div className="w-4 h-1 bg-blue-500 rounded"></div>
                  </div>
                  <p className="text-sm text-gray-500">Code - {product.code}</p>
                  <p className="text-lg font-bold text-gray-800">{product.price}</p>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
