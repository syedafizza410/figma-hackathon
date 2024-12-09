'use client'
import React from "react";
import { ShoppingCartIcon, HeartIcon, SearchIcon } from "@heroicons/react/outline";

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: "Cantilever chair",
      code: "Code - Y523201",
      price: "$42.00",
      image: "/image 1168.png", // Replace with actual image paths
    },
    {
      id: 2,
      name: "Cantilever chair",
      code: "Code - Y523201",
      price: "$42.00",
      image: "/product.png",
    },
    {
      id: 3,
      name: "Cantilever chair",
      code: "Code - Y523201",
      price: "$42.00",
      image: "/Component 3.png",
    },
    {
      id: 4,
      name: "Cantilever chair",
      code: "Code - Y523201",
      price: "$42.00",
      image: "/Component 4.png",
    },
  ];

  return (
    <section className=" py-10 px-6">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
          Featured Products
        </h2>
        </div>
        {/* Responsive grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="relative border rounded-xl p-4 bg-white shadow-md hover:shadow-lg transition duration-300"
              style={{ height: "361px" }} // Optional height for consistent card size
            >
              {index === 1 && (
                <>
                <div className="flex justify-left top-4 right-4 flex gap-2 text-blue-500">
                  <ShoppingCartIcon className="h-5 w-5 cursor-pointer hover:text-blue-700" />
                  <HeartIcon className="h-5 w-5 cursor-pointer hover:text-blue-700" />
                  <SearchIcon className="h-5 w-5 cursor-pointer hover:text-blue-700" />
                </div>
              <div className="w-full h-40 flex items-center justify-center overflow-hidden rounded-lg">
                <img
                  src={product.image}
                  alt={product.name}
                  className="object-contain w-full h-full"
                />
              </div>
              <button className="w-32 py-2 text-sm font-medium text-white bg-green-500 rounded-md hover:bg-green-600">
                  View Details
                </button>
                
              <div className="mt-2 text-center bg-blue-700">
                <h3 className="text-lg font-semibold text-white">
                  {product.name}
                </h3>


                <div className="flex justify-center gap-1 my-2">
                    <div className="w-4 h-1 bg-green-500 rounded"></div>
                    <div className="w-4 h-1 bg-pink-500 rounded"></div>
                    <div className="w-4 h-1 bg-blue-500 rounded"></div>
                  </div>

                <p className="text-sm text-white">{product.code}</p>
                <p className="text-lg font-bold text-white mt-2">
                  {product.price}
                </p>
              </div>
              </>
          )}

{index !== 1 && (
              <>
               <div className="w-full h-40 flex items-center justify-center overflow-hidden rounded-lg">
                <img
                  src={product.image}
                  alt={product.name}
                  className="object-contain w-full h-full"
                />
              </div>
              
              <div className="mt-5 text-center space-y-2">
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