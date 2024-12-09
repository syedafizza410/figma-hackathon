'use client'
import React, { useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [perPage, setPerPage] = useState<number>(10);
  const [sortBy, setSortBy] = useState<string>('bestMatch');
  const [view, setView] = useState<string>('grid');

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
      rating: 5,
    },
    {
      id: 3,
      name: "Nibh Varius",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: 26.0,
      oldPrice: 52.0,
      image: "/shop3.png",
      rating: 3,
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
      rating: 5,
    },
    {
      id: 6,
      name: "Mauris Quis",
      description: "Magna in est adipiscing in phasellus non in justo.",
      price: 26.0,
      oldPrice: 52.0,
      image: "/shop6.png",
      rating: 2,
    },
  ];

  const sortedProducts = [...products].sort((a, b) => {
    if (sortBy === 'lowToHigh') return a.price - b.price;
    if (sortBy === 'highToLow') return b.price - a.price;
    return 0; 
  });

  const displayedProducts = sortedProducts.slice(0, perPage);

  return (
    <div className="bg-white py-6">
    <div className="bg-purple-50 py-11 px-11">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-indigo-900">Shop Left Sidebar</h1>
        <p className="text-sm text-gray-600">
          Home . Pages . <span className="text-pink-500">Shop Left Sidebar</span>
        </p>
      </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between mt-6 space-y-4 md:space-y-0">
        <div>
          <h2 className="text-xl font-bold text-indigo-900">
            Ecommerce Accessories & Fashion Items
          </h2>
          <p className="text-sm text-gray-500">About {products.length} results (0.62 seconds)</p>
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
        <aside className="w-full md:w-1/4 p-4 border-r bg-gray-100">
          <div className="mb-6">
            <h2 className="text-lg font-bold mb-2">Product Brand</h2>
            {["Coaster Furniture", "Fusion Dot High Fashion", "Unique Furniture Restor"].map(
              (brand) => (
                <label key={brand} className="block mb-2">
                  <input type="checkbox" className="mr-2" />
                  {brand}
                </label>
              )
            )}
          </div>

          <div className="mb-6">
            <h2 className="text-lg font-bold mb-2">Discount Offer</h2>
            {["20% Cashback", "5% Cashback Offer", "25% Discount Offer"].map((offer) => (
              <label key={offer} className="block mb-2">
                <input type="checkbox" className="mr-2" />
                {offer}
              </label>
            ))}
          </div>

          <div className="mb-6">
            <h2 className="text-lg font-bold mb-2">Rating Item</h2>
            {[5, 4, 3].map((stars) => (
              <label key={stars} className="flex items-center mb-2">
                <input type="checkbox" className="mr-2" />
                <span className="flex items-center">
                  {"★".repeat(stars)}
                  {"☆".repeat(5 - stars)}
                </span>
              </label>
            ))}
          </div>

          <div>
            <h2 className="text-lg font-bold mb-2">Categories</h2>
            {["Prestashop", "Magento", "Bigcommerce", "osCommerce", "3dcart"].map((category) => (
              <label key={category} className="block mb-2">
                <input type="checkbox" className="mr-2" />
                {category}
              </label>
            ))}
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
                    <span className="text-lg font-bold text-indigo-600">
                      ${product.price.toFixed(2)}
                    </span>
                    <span className="ml-2 line-through text-gray-500">
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
                      🔍
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
    </div>
  );
}
