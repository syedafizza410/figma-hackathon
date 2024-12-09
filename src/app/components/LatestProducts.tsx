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
      sale: false,
      image: "/image 1166.png",
    },
    {
      name: "Comfort Handy Craft",
      price: 42.0,
      originalPrice: 65.0,
      sale: true,
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
      image: "/image 3.png",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-800 text-center mb-6">
          Latest Products
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-10">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-lg p-4 text-center group ${
                product.sale && index === 1 ? "sale-product" : ""
              }`}
            >
              <div className="w-full h-60 sm:h-64 md:h-72 lg:h-80 overflow-hidden rounded-lg bg-gray-100 flex items-center justify-center">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={360}
                  height={306}
                  className="object-contain h-full"
                />
              </div>

              {product.sale && index === 1 && (
                <div className="absolute top-4 left-4">
                  <Image src="/Group 27.png" alt="Sale Badge" width={65} height={65} />
                  <div className="absolute top-5 left-4 w-16 h-6 text-white text-xs font-semibold flex items-center justify-center transform -rotate-12">
                    Sale
                  </div>
                </div>
              )}

              <div className="mt-4">
                <h3 className="text-base md:text-lg font-semibold text-blue-800">
                  {product.name}
                </h3>
                <div className="flex items-center justify-center space-x-2 mt-2">
                  <span className="text-blue-800 text-sm md:text-base font-bold">
                    ${product.price.toFixed(2)}
                  </span>
                  <span className="text-red-500 text-sm md:text-base line-through">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                </div>
              </div>

              {index === 1 && (
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <div className="flex space-x-2">
                    <button className="bg-gray-200 p-2 rounded-full text-blue-700">
                      <ShoppingCartIcon className="h-5 w-5" />
                    </button>
                    <button className="bg-gray-200 p-2 rounded-full text-blue-700">
                      <HeartIcon className="h-5 w-5" />
                    </button>
                    <button className="bg-gray-200 p-2 rounded-full text-blue-700">
                      <SearchIcon className="h-5 w-5" />
                    </button>
                  </div>
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