'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';

const Product = () => {
  const [perPage, setPerPage] = useState(10); 
  const [sortBy, setSortBy] = useState('bestMatch');
  const [view, setView] = useState('grid');

  const products = [
    {
      id: 1,
      title: 'Vel elit euismod',
      image: '/image5.png',
      price: 26.0,
      discountedPrice: 42.0,
    },
    {
      id: 2,
      title: 'Ultrices condimentum imperdiet',
      image: '/image2.png',
      price: 26.0,
      discountedPrice: 42.0,
    },
    {
      id: 3,
      title: 'Vitae suspendisse sed',
      image: '/image 1173.png',
      price: 26.0,
      discountedPrice: 42.0,
    },
    {
      id: 4,
      title: 'Sed at fermentum',
      image: '/image4.png',
      price: 26.0,
      discountedPrice: 42.0,
    },
    {
      id: 5,
      title: 'Fusce pellentesque at',
      image: '/image6.png',
      price: 26.0,
      discountedPrice: 42.0,
    },
    {
      id: 6,
      title: 'Vestibulum magna laoreet',
      image: '/image7.png',
      price: 26.0,
      discountedPrice: 42.0,
    },
    {
      id: 7,
      title: 'Sollicitudin amet orci',
      image: '/image13.png',
      price: 26.0,
      discountedPrice: 42.0,
    },
    {
      id: 8,
      title: 'Ultrices mauris sit',
      image: '/image8.png',
      price: 26.0,
      discountedPrice: 42.0,
    },
    {
      id: 9,
      title: 'Pellentesque condimentum ac',
      image: '/image9.png',
      price: 26.0,
      discountedPrice: 42.0,
    },
    {
      id: 10,
      title: 'Cras sceleris velit',
      image: '/image10.png',
      price: 80.0,
      discountedPrice: 70.0,
    },
    {
      id: 11,
      title: 'Lectus vulputate faucibus',
      image: '/image11.png',
      price: 80.0,
      discountedPrice: 70.0,
    },
    {
      id: 12,
      title: 'Purus risus, ut',
      image: '/image12.png',
      price: 26.0,
      discountedPrice: 42.0,
    },
  ];

  return (
    <div className="bg-gray-50">
      <div className="bg-white py-6">
      <div className="bg-purple-50 py-6 px-4 sm:py-8 sm:px-8 h-52">
          <div className="max-w-6xl mx-auto mt-10">
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-indigo-900">
              Shop Grid Default
            </h1>
            <p className="text-xs sm:text-sm text-gray-600">
              Home . Pages .{' '}
              <span className="text-pink-500">Shop Grid Default</span>
            </p>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-4 mt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between">
          <div className="mb-4 sm:mb-0">
            <h2 className="text-lg sm:text-xl font-bold text-indigo-900">
              Ecommerce Accessories & Fashion item
            </h2>
            <p className="text-xs sm:text-sm text-gray-500">
              About 9,620 results (0.62 seconds)
            </p>
          </div>

          <div className="flex items-center space-x-4">
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

        <div className="py-6 sm:py-10">
          <div className="max-w-6xl mx-auto px-4">
            <div
              className={`grid ${
                view === 'grid'
                  ? 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6'
                  : 'grid-cols-1'
              }`}
            >
              {products.map((product) => (
                <div
                  key={product.id}
                  className="bg-gray-200 border border-gray-200 rounded-lg shadow-sm p-4 text-center"
                >
                  <div className="mb-4">
                    <Image
                      src={product.image}
                      alt={product.title}
                      width={201}
                      height={201}
                      className="w-full h-32 object-contain rounded-md"
                    />
                  </div>

                  <h3 className="text-sm sm:text-base font-semibold text-gray-800 mb-2">
                    {product.title}
                  </h3>

                  <div className="flex justify-center items-center space-x-2 mb-2">
                    <span className="w-3 h-3 bg-orange-400 rounded-full"></span>
                    <span className="w-3 h-3 bg-purple-500 rounded-full"></span>
                    <span className="w-3 h-3 bg-pink-500 rounded-full"></span>
                  </div>

          
                  <div className="text-xs sm:text-sm">
                    <span className="text-indigo-600 font-bold mr-2">
                      ${product.price}
                    </span>
                    <span className="line-through text-gray-400">
                      ${product.discountedPrice}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
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
};

export default Product;
