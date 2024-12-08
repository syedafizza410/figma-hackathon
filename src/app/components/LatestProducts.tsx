import React from "react";
import Image from "next/image";
import { ShoppingCartIcon, HeartIcon, SearchIcon } from "@heroicons/react/outline";

const LatestProducts: React.FC = () => {
  const categories = ["New Arrival", "Best Seller", "Featured", "Special Offer"];
  const products = [
    {
      name: "Comfort Handy Craft",
      price: 42.0,
      originalPrice: 65.0,
      sale: false, // No sale tag for the first product
      image: "/image 1166.png", // Replace with actual image paths
    },
    {
      name: "Comfort Handy Craft",
      price: 42.0,
      originalPrice: 65.0,
      sale: true, // Sale tag and hover icons for the second product
      image: "/image 15.png",
    },
    {
      name: "Comfort Handy Craft",
      price: 42.0,
      originalPrice: 65.0,
      sale: false,
      image: "/image 1168.png",
    },
    {
      name: "Comfort Handy Craft",
      price: 42.0,
      originalPrice: 65.0,
      sale: false,
      image: "/image 23.png",
    },
    {
      name: "Comfort Handy Craft",
      price: 42.0,
      originalPrice: 65.0,
      sale: false,
      image: "/image 32.png",
    },
    {
      name: "Comfort Handy Craft",
      price: 42.0,
      originalPrice: 65.0,
      sale: false,
      image: "/Component 4.png",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-blue-800 text-center mb-6">
          Latest Products
        </h2>

        {/* Categories */}
        <div className="flex justify-center space-x-6 mb-10">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`text-sm font-medium ${
                index === 0
                  ? "text-pink-500 border-b-2 border-pink-500"
                  : "text-gray-500"
              } hover:text-pink-500`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-lg p-4 text-center group  ${
                product.sale && index === 1 ? "sale-product" : ""
              }`}
            >
              {/* Product Image */}
              <div className="w-96 h-72 mb-4 overflow-hidden rounded-lg bg-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  width={250}
                  height={100}
                  className="ml-12 mt-7"
                />
              </div>

              {/* Sale Badge */}
              {product.sale && index === 1 && (
                <div className="absolute top-4 left-4 text-white text-xs px-2 py-1 rounded">
                <img src="/Vector 1.png"/>
                <div className="absolute top-5 left-4 w-16 h-6 text-white text-xs font-semibold flex items-center justify-center transform -rotate-12">
                Sale
                </div>
                </div>
              )}

              {/* Product Info */}
              <div className="text-gray-500 flex items-start justify-start space-x-2">
              <h3 className="text-blue-800 font-semibold">
                {product.name}
              </h3>
              <h2 className="absolute text-blue-800 text-sm font-bold left-64">
                  ${product.price.toFixed(2)}
              </h2>
                <h2 className="absolute text-red-500 text-sm line-through left-80">
                  ${product.originalPrice.toFixed(2)}
                </h2>
              </div>

              {/* Hover Icons */}
              {index === 1 && (
                <div className="absolute top-44 lg:right-80 flex flex-col items-center space-y-2">
                  <button className="bg-gray-200 p-2 rounded-full text-blue-700">
                    <ShoppingCartIcon className="h-4 w-4" />
                  </button>
                  <button className="p-2 rounded-full text-blue-700">
                    <HeartIcon className="h-4 w-4" />
                  </button>
                  <button className="p-2 rounded-full text-blue-700">
                    <SearchIcon className="h-4 w-4" />
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestProducts;
