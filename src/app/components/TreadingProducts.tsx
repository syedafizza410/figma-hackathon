import React from "react";
import Image from "next/image";

const TrendingProducts = () => {
  const products = [
    { name: "Cantilever chair", price: "$26.00", originalPrice: "$42.00", image: "/box for image.png" },
    { name: "Cantilever chair", price: "$26.00", originalPrice: "$42.00", image: "/box 1.png" },
    { name: "Cantilever chair", price: "$26.00", originalPrice: "$42.00", image: "/box 2.png" },
    { name: "Cantilever chair", price: "$26.00", originalPrice: "$42.00", image: "/box 3.png" },
  ];

  const executiveProducts = [
    { name: "Executive Seat chair", price: "$19.00", image: "/img1.jpg" },
    { name: "Executive Seat chair", price: "$32.00", image: "/img2.jpg" },
    { name: "Executive Seat chair", price: "$49.00", image: "/img3.jpg" },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-blue-800 text-center mb-6">
          Trending Products
        </h2>

        {/* Product Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-4 text-center border border-gray-200"
            >
              <div className="relative w-full h-40 mb-4">
                <Image
                  src={product.image}
                  alt={product.name}
                  layout="fill"
                  objectFit="contain"
                  className="rounded-md"
                />
              </div>
              <h3 className="text-blue-800 font-semibold text-lg">{product.name}</h3>
              <div className="text-gray-500">
                <span className="text-red-500 line-through mr-2">{product.originalPrice}</span>
                <span>{product.price}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Pink and Blue Sections with Executive Products */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
          {/* Pink Section */}
          <div className="bg-pink-100 p-6 rounded-lg flex flex-col justify-between">
            <div>
              <h3 className="text-blue-800 font-semibold text-xl">
                23% off in all products
              </h3>
              <p className="text-pink-500 mt-2 text-sm cursor-pointer">Shop Now</p>
            </div>
            <div className="relative h-32 w-full mt-4">
              <Image
                src="/image 1162.png" // Replace with your actual image path
                alt="Clock"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>

          {/* Blue Section */}
          <div className="bg-blue-100 p-6 rounded-lg flex flex-col justify-between h-72">
            <div>
              <h3 className="text-blue-800 font-semibold text-xl">
                23% off in all products
              </h3>
              <p className="text-pink-500 mt-2 text-sm cursor-pointer">View Collection</p>
            </div>
            <div className="relative h-32 w-full">
              <Image
                src="/image 1161.png" // Replace with your actual image path
                alt="Table"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>

          {/* Executive Seat Cards */}
          <div className="space-y-4">
            {executiveProducts.map((product, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-md flex items-center p-2 border border-gray-200"
              >
                <div className="relative w-16 h-16 mr-4">
                  <Image
                    src={product.image}
                    alt={product.name}
                    layout="fill"
                    objectFit="contain"
                    className="rounded-md"
                  />
                </div>
                <div>
                  <h4 className="text-blue-800 font-medium text-sm">
                    {product.name}
                  </h4>
                  <p className="text-gray-600 text-xs">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendingProducts;
