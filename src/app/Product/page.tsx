import React from 'react';

const Product = () => {
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
      }, {
        id: 8,
        title: 'Ultrices mauris sit',
        image: '/image8.png',
        price: 26.0,
        discountedPrice: 42.0,
      }, {
        id: 9,
        title: 'Pellentesque condimentum ac',
        image: '/image9.png',
        price: 26.0,
        discountedPrice: 42.0,
      }, {
        id: 10,
        title: 'Cras sceleris velit',
        image: '/image10.png',
        price: 80.0,
        discountedPrice: 70.0,
      }, {
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
    <div className="bg-gray-100">
      <div className="bg-white py-6">
        <div className="bg-purple-50 py-11 px-11">
          <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-3xl font-bold text-indigo-900">Shop Grid Default</h1>
            <p className="text-sm text-gray-600">
              Home . Pages . <span className="text-pink-500">Shop Grid Default</span>
            </p>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between mt-6">
          <div>
            <h2 className="text-xl font-bold text-indigo-900">
              Ecommerce Accessories & Fashion item
            </h2>
            <p className="text-sm text-gray-500">About 9,620 results (0.62 seconds)</p>
          </div>

          <div className="flex items-center space-x-6">
            <div>
              <label htmlFor="perPage" className="text-sm text-gray-700 mr-2">
                Per Page:
              </label>
              <input
                id="perPage"
                type="text"
                className="border border-gray-300 rounded px-2 py-1 text-sm"
              />
            </div>

            <div>
              <label htmlFor="sortBy" className="text-sm text-gray-700 mr-2">
                Sort By:
              </label>
              <select
                id="sortBy"
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
              <input
                id="view"
                type="text"
                className="border border-gray-300 rounded px-2 py-1 text-sm"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="py-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-gray-200 border border-gray-200 rounded-lg shadow-sm p-4 text-center"
              >
                <div className="mb-4">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-32 object-contain rounded-md"
                  />
                </div>

                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {product.title}
                </h3>

                <div className="flex justify-center items-center space-x-2 mb-2">
                  <span className="w-3 h-3 bg-orange-400 rounded-full"></span>
                  <span className="w-3 h-3 bg-purple-500 rounded-full"></span>
                  <span className="w-3 h-3 bg-pink-500 rounded-full"></span>
                </div>

                <div className="text-sm">
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
  );
};

export default Product;
