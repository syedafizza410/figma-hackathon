"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [perPage, setPerPage] = useState<number>(10);
  const [sortBy, setSortBy] = useState<string>("bestMatch");
  const [view, setView] = useState<string>("grid");

  const products = [
    {
      id: 1,
      name: "Dictum Morbi",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: 26.0,
      oldPrice: 52.0,
      image: "/shop1.png",
      rating: 4,
    },
    {
      id: 2,
      name: "Sodales Sit",
      description: "Magna in est adipiscing in phasellus non in justo.",
      price: 26.0,
      oldPrice: 52.0,
      image: "/shop2.png",
      rating: 4,
    },
    {
      id: 3,
      name: "Nibh Varius",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: 26.0,
      oldPrice: 52.0,
      image: "/shop3.png",
      rating: 4,
    },
    {
      id: 4,
      name: "Mauris Quis",
      description: "Magna in est adipiscing in phasellus non in justo.",
      price: 26.0,
      oldPrice: 52.0,
      image: "/shop4.png",
      rating: 4,
    },
    {
      id: 5,
      name: "Mauris Quis",
      description: "Magna in est adipiscing in phasellus non in justo.",
      price: 26.0,
      oldPrice: 52.0,
      image: "/shop5.png",
      rating: 4,
    },
    {
      id: 6,
      name: "Mauris Quis",
      description: "Magna in est adipiscing in phasellus non in justo.",
      price: 26.0,
      oldPrice: 52.0,
      image: "/shop6.png",
      rating: 4,
    },
    {
      id: 7,
      name: "Mauris Quis",
      description: "Magna in est adipiscing in phasellus non in justo.",
      price: 26.0,
      oldPrice: 52.0,
      image: "/shop7.png",
      rating: 4,
    },
  ];

  const sortedProducts = [...products].sort((a, b) => {
    if (sortBy === "lowToHigh") return a.price - b.price;
    if (sortBy === "highToLow") return b.price - a.price;
    return 0;
  });

  const displayedProducts = sortedProducts.slice(0, perPage);

  return (
    <div className="bg-white py-6">
      <div className="bg-purple-50 py-11 px-11">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-indigo-900">
            Shop Left Sidebar
          </h1>
          <p className="text-sm text-gray-600">
            <Link href={"/"}>Home</Link> . Pages .{" "}
            <span className="text-pink-500">Shop Left Sidebar</span>
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between mt-6 space-y-4 md:space-y-0">
        <div>
          <h2 className="text-xl font-bold text-indigo-900">
            Ecommerce Accessories & Fashion Items
          </h2>
          <p className="text-sm text-gray-500">
            About {products.length} results (0.62 seconds)
          </p>
        </div>

        <div className="flex items-center space-x-6">
          <div>
            <label htmlFor="perPage" className="text-sm text-gray-700 mr-2">
              Per Page:
            </label>
            <input
              id="perPage"
              type="number"
              min="1"
              value={perPage}
              onChange={(e) => setPerPage(Number(e.target.value))}
              className="border border-gray-300 rounded px-2 py-1 text-sm w-20"
            />
          </div>

          <div>
            <label htmlFor="sortBy" className="text-sm text-gray-700 mr-2">
              Sort By:
            </label>
            <select
              id="sortBy"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border border-gray-300 rounded px-2 py-1 text-sm"
            >
              <option value="bestMatch">Best Match</option>
              <option value="lowToHigh">Price: Low to High</option>
              <option value="highToLow">Price: High to Low</option>
            </select>
          </div>

          <div>
            <label htmlFor="view" className="text-sm text-gray-700 mr-2">
              View:
            </label>
            <select
              id="view"
              value={view}
              onChange={(e) => setView(e.target.value)}
              className="border border-gray-300 rounded px-2 py-1 text-sm"
            >
              <option value="grid">Grid</option>
              <option value="list">List</option>
            </select>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row mt-6">
        <aside className="w-full md:w-1/4 p-4 border-r text-sm">
          <div className="mb-6">
            <h2 className="text-[#2C2E83] font-bold text-lg mb-3 border-b-2 border-[#2C2E83] pb-1">
              Product Brand
            </h2>
            {[
              { name: "Coaster Furniture", checked: false },
              { name: "Fusion Dot High Fashion", checked: false },
              { name: "Unique Furniture Restor", checked: true },
              { name: "Dream Furniture Flipping", checked: false },
              { name: "Young Repurposed", checked: false },
              { name: "Green DIY furniture", checked: false },
            ].map((brand, idx) => {
              const isChecked = brand.checked;
              const bgColor = isChecked ? "#8A5FC3" : "#ECEAF7"; 
              const textColor = isChecked ? "#8A5FC3" : "#696EA8"; 

              return (
                <label
                  key={idx}
                  className="flex items-center mb-2 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    readOnly
                    checked={true}
                    className={`
            mr-2 w-4 h-4 rounded 
            appearance-none
            cursor-pointer
            border border-transparent
            flex items-center justify-center
            bg-[${bgColor}]
            after:content-['✔']
            after:text-white
            after:text-[10px]
            after:font-bold
            after:flex
            after:justify-center
            after:items-center
          `}
                  />
                  <span
                    className={`font-medium ${isChecked ? "font-bold" : ""}`}
                    style={{ color: textColor }}
                  >
                    {brand.name}
                  </span>
                </label>
              );
            })}
          </div>
          <div className="mb-6">
            <h2 className="text-[#2C2E83] font-bold text-lg mb-3 border-b-2 border-[#2C2E83] pb-1">
              Discount Offer
            </h2>
            {["20% Cashback", "5% Cashback Offer", "25% Discount Offer"].map(
              (offer, idx) => (
                <label
                  key={idx}
                  className="flex items-center mb-2 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    readOnly
                    checked
                    className={`
          mr-2 w-4 h-4 rounded 
          appearance-none
          cursor-pointer
          border border-transparent
          bg-[#FF80AB]
          after:content-['✔']
          after:text-white
          after:text-[10px]
          after:font-bold
          after:flex
          after:justify-center
          after:items-center
        `}
                  />
                  <span className="font-medium" style={{ color: "#696EA8" }}>
                    {offer}
                  </span>
                </label>
              )
            )}
          </div>
          <div className="mb-6">
            <h2 className="text-[#2C2E83] font-bold text-lg mb-3 border-b-2 border-[#2C2E83] pb-1">
              Rating Item
            </h2>
            {[
              { count: 2341, bgColor: "#FFF4D9" },
              { count: 1726, bgColor: "#FFD54F" },
              { count: 258, bgColor: "#FFF4D9" },
              { count: 25, bgColor: "#FFF4D9" },
            ].map(({ count, bgColor }, idx) => (
              <label
                key={idx}
                className="flex items-center mb-2 cursor-pointer"
              >
                <input
                  type="checkbox"
                  readOnly
                  checked
                  className={`
          mr-2 w-4 h-4 rounded
          appearance-none
          cursor-pointer
          border border-transparent
          bg-yellow-100
          after:content-['✔']
          after:text-white
          after:text-[10px]
          after:font-bold
          after:flex
          after:justify-center
          after:items-center
        `}
                />
                <span className="flex items-center">
                  <span className="text-[#FFD54F] font-bold">
                    {"★".repeat(4)}
                  </span>
                  <span className="text-gray-300">★</span>
                  <span className="ml-2 text-[#333333]">({count})</span>
                </span>
              </label>
            ))}
          </div>
          <div className="mb-6">
            <h2 className="text-[#2C2E83] font-bold text-lg mb-3 border-b-2 border-black pb-1">
              Categories
            </h2>
            {[
              { name: "Prestashop", checked: true },
              { name: "Magento", checked: true },
              { name: "Bigcommerce", checked: true, highlight: true },
              { name: "osCommerce", checked: true },
              { name: "3dcart", checked: true },
              { name: "Bags", checked: true },
              { name: "Accessories", checked: false },
              { name: "Jewellery", checked: false },
              { name: "Watches", checked: true },
            ].map((category, idx) => {
              const bgColor = category.highlight ? "#E91E63" : "#FECFEF";
              const textColor = "#696EA8"; 
              return (
                <label
                  key={idx}
                  className="flex items-center mb-2 cursor-pointer"
                >
                  {category.checked ? (
                    <input
                      type="checkbox"
                      readOnly
                      checked
                      className={`
              mr-2 w-4 h-4 rounded 
              appearance-none
              cursor-pointer
              border border-transparent
              bg-pink-500
              after:content-['✔']
              after:text-white
              after:text-[10px]
              after:font-bold
              after:flex
              after:justify-center
              after:items-center
            `}
                    />
                  ) : (
                    <span className="mr-2 w-4 h-4 inline-block"></span>
                  )}
                  <span className="font-medium" style={{ color: textColor }}>
                    {category.name}
                  </span>
                </label>
              );
            })}
          </div>
          <div className="mb-6">
            <h2 className="text-[#2C2E83] font-bold text-lg mb-3 border-b-2 border-black pb-1">
              Price Filter
            </h2>
            {[
              { price: "$0.00 - $150.00", highlight: false },
              { price: "$150.00 - $350.00", highlight: false },
              { price: "$150.00 - $504.00", highlight: true },
              { price: "$450.00 +", highlight: false },
            ].map(({ price, highlight }, idx) => {
              const bgColor = highlight ? "#E91E63" : "#FECFEF";
              const textColor = "#696EA8";
              return (
                <label
                  key={idx}
                  className="flex items-center mb-2 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    readOnly
                    checked
                    className={`
            mr-2 w-4 h-4 rounded
            appearance-none
            cursor-pointer
            border border-transparent
            bg-[${bgColor}]
            after:content-['✔']
            after:text-white
            after:text-[10px]
            after:font-bold
            after:flex
            after:justify-center
            after:items-center
          `}
                  />
                  <span className="font-medium" style={{ color: textColor }}>
                    {price}
                  </span>
                </label>
              );
            })}

            <div className="relative mt-4">
              <input
                type="text"
                placeholder="$10.00 - 20000$"
                className="
        w-full 
        border 
        border-[#696EA8] 
        rounded 
        py-1.5 
        pl-2 
        pr-8 
        text-[#696EA8] 
        placeholder-gray-200
        focus:outline-none
        focus:ring-1
        focus:ring-[#696EA8]
      "
              />
              <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-[#696EA8]">
                🔍
              </span>
            </div>
          </div>
          <div className="mb-6">
            <h2 className="text-[#2C2E83] font-bold text-lg mb-3 border-b-2 border-black pb-1">
              Filter By Color
            </h2>

            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center">
                <span
                  className="w-4 h-4 rounded-full mr-2"
                  style={{ backgroundColor: "#673AB7" }}
                ></span>
                <span className="font-medium" style={{ color: "#696EA8" }}>
                  Blue
                </span>
              </div>

              <div className="flex items-center">
                <span
                  className="w-4 h-4 rounded-full mr-2"
                  style={{ backgroundColor: "#FFA726" }}
                ></span>
                <span className="font-medium" style={{ color: "#696EA8" }}>
                  Orange
                </span>
              </div>

              <div className="flex items-center">
                <span
                  className="w-4 h-4 rounded-full mr-2"
                  style={{ backgroundColor: "#FFCC80" }}
                ></span>
                <span className="font-medium" style={{ color: "#696EA8" }}>
                  Brown
                </span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 mt-2">
              <div className="flex items-center">
                <span
                  className="w-4 h-4 rounded-full mr-2"
                  style={{ backgroundColor: "#4CAF50" }}
                ></span>
                <span className="font-medium" style={{ color: "#696EA8" }}>
                  Green
                </span>
              </div>

              <div className="flex items-center">
                <span
                  className="w-4 h-4 rounded-full mr-2"
                  style={{ backgroundColor: "#9C27B0" }}
                ></span>
                <span className="font-medium" style={{ color: "#696EA8" }}>
                  Purple
                </span>
              </div>

              <div className="flex items-center">
                <span
                  className="w-4 h-4 rounded-full mr-2"
                  style={{ backgroundColor: "#29B6F6" }}
                ></span>
                <span className="font-medium" style={{ color: "#696EA8" }}>
                  Sky
                </span>
              </div>
            </div>
          </div>
        </aside>
        <main className="w-full md:w-3/4 p-4">
          <div
            className={`${
              view === "grid"
                ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6"
                : "flex flex-col space-y-4"
            }`}
          >
            {displayedProducts.map((product) => (
              <div
                key={product.id}
                className="flex flex-col sm:flex-row items-center border p-4 bg-white rounded-lg shadow-md"
              >
                <div className="w-full sm:w-1/3 h-40 relative">
                  <Image
                    src={product.image}
                    alt={product.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-md"
                  />
                </div>

                <div className="mt-4 sm:mt-0 sm:ml-4 flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold">{product.name}</h3>
                    <div className="flex space-x-2">
                      <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                      <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                      <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
                    </div>
                  </div>

                  <div className="flex items-center mt-1">
                    {Array(5)
                      .fill(0)
                      .map((_, index) => (
                        <span
                          key={index}
                          className={`${
                            index < product.rating
                              ? "text-yellow-500"
                              : "text-gray-300"
                          } text-lg`}
                        >
                          ★
                        </span>
                      ))}
                  </div>

                  <p className="text-sm text-gray-600 mt-2">
                    {product.description}
                  </p>

                  <div className="mt-2">
                    <span className="text-lg font-bold text-blue-900">
                      ${product.price.toFixed(2)}
                    </span>
                    <span className="ml-2 line-through text-red-500">
                      ${product.oldPrice.toFixed(2)}
                    </span>
                  </div>

                  <div className="mt-2 flex space-x-2">
                    <button
                      className="text-gray-500 hover:text-indigo-600"
                      aria-label="Add to Wishlist"
                    >
                      ❤
                    </button>
                    <button
                      className="text-gray-500 hover:text-indigo-600"
                      aria-label="View Details"
                    >
                      ⌕
                    </button>
                    <button
                      className="text-gray-500 hover:text-indigo-600"
                      aria-label="Add to Cart"
                    >
                      🛒
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
      <div className="py-8 flex justify-center items-center mt-7 mb-12">
        <div className="flex flex-wrap justify-center sm:justify-between items-center sm:gap-6 md:gap-8 w-full max-w-6xl px-4">
          <Image
            src="/text1.png"
            alt="Partner 1"
            width={100}
            height={10}
            className="sm:h-10 md:h-12"
          />
          <Image
            src="/text2.png"
            alt="Partner 2"
            width={100}
            height={10}
            className="sm:h-10 md:h-12 grayscale hover:grayscale-0 transition duration-300"
          />
          <Image
            src="/text3.png"
            alt="Partner 3"
            height={10}
            width={100}
            className="sm:h-10 md:h-12 grayscale hover:grayscale-0 transition duration-300"
          />
          <Image
            src="/text4.png"
            alt="Partner 4"
            height={10}
            width={100}
            className="sm:h-10 md:h-12 grayscale hover:grayscale-0 transition duration-300"
          />
          <Image
            src="/text5.png"
            alt="Partner 5"
            width={100}
            height={10}
            className="sm:h-10 md:h-12 grayscale hover:grayscale-0 transition duration-300"
          />
        </div>
      </div>
    </div>
  );
}
