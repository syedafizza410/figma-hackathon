import React from "react";

const CheckoutPage = () => {
  return (
    <div className="p-4 md:p-8">
      <div className="py-12 px-8 bg-purple-50 h-44">
        <h1 className="max-w-6xl mx-auto text-4xl font-bold text-blue-900">
          Hekto Demo
        </h1>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 mt-7">
        <div className="relative lg:col-span-2">
          <div className="absolute top-8 left-0">
            <h1 className="text-2xl font-bold text-indigo-900 mb-2">
              Hekto Demo
            </h1>
            <p className="text-sm text-blue-900 mb-6">
              Cart Information / Shipping / Payment
            </p>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg shadow-md mt-28">
            <div className="mb-8">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-lg font-semibold text-indigo-900">
                  Contact Information
                </h2>
                <p className="text-sm text-gray-400">
                  Already have an account?{" "}
                  <a href="#" className="text-gray-400 underline">
                    Log in
                  </a>
                </p>
              </div>
              <input
                type="text"
                placeholder="Email or mobile phone number"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-indigo-500"
              />
              <div className="flex items-center mt-2">
                <input
                  type="checkbox"
                  id="subscribe"
                  className="h-4 w-4 text-green-500"
                />
                <label
                  htmlFor="subscribe"
                  className="ml-2 text-sm text-gray-600"
                >
                  Keep me up to date on news and exclusive offers
                </label>
              </div>
            </div>

            <div className="mt-20">
              <h2 className="text-lg font-semibold text-indigo-900 mb-4">
                Shipping address
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  placeholder="First name (optional)"
                  className="p-3 border border-gray-300 rounded-md"
                />
                <input
                  type="text"
                  placeholder="Last name"
                  className="p-3 border border-gray-300 rounded-md"
                />
              </div>
              <input
                type="text"
                placeholder="Address"
                className="w-full p-3 border border-gray-300 rounded-md mb-4"
              />
              <input
                type="text"
                placeholder="Apartment, suite, etc. (optional)"
                className="w-full p-3 border border-gray-300 rounded-md mb-4"
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  placeholder="City"
                  className="p-3 border border-gray-300 rounded-md"
                />
                <input
                  type="text"
                  placeholder="Bangladesh"
                  className="p-3 border border-gray-300 rounded-md"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <input
                  type="text"
                  placeholder="Postal Code"
                  className="p-3 border border-gray-300 rounded-md"
                />
              </div>
              <button className="w-full md:w-auto bg-pink-500 text-white px-6 py-2 rounded-md hover:bg-pink-600">
                Continue Shipping
              </button>
            </div>
          </div>
        </div>

        <div>
          <div className="bg-white p-6 rounded-lg shadow-md mb-6 mt-24">
            <ul className="divide-y divide-gray-200">
              <li className="flex items-center py-4">
                <img
                  src="/cart5.png"
                  alt="Product 1"
                  className="w-16 h-16 object-cover rounded-md"
                />
                <div className="ml-4 flex-1">
                  <p className="text-sm font-semibold text-gray-700">
                    Ut diam consequat
                  </p>
                  <p className="text-xs text-gray-500">Color: Brown</p>
                  <p className="text-xs text-gray-500">Size: XL</p>
                </div>
                <p className="text-sm font-semibold text-blue-900">$32.00</p>
              </li>
              <li className="flex items-center py-4">
                <img
                  src="/Rectangle 144.png"
                  alt="Product 2"
                  className="w-16 h-16 object-cover rounded-md"
                />
                <div className="ml-4 flex-1">
                  <p className="text-sm font-semibold text-gray-700">
                    Ut diam consequat
                  </p>
                  <p className="text-xs text-gray-500">Color: Brown</p>
                  <p className="text-xs text-gray-500">Size: XL</p>
                </div>
                <p className="text-sm font-semibold text-blue-900">$32.00</p>
              </li>
              <li className="flex items-center py-4">
                <img
                  src="/Rectangle 145.png"
                  alt="Product 3"
                  className="w-16 h-16 object-cover rounded-md"
                />
                <div className="ml-4 flex-1">
                  <p className="text-sm font-semibold text-gray-700">
                    Ut diam consequat
                  </p>
                  <p className="text-xs text-gray-500">Color: Brown</p>
                  <p className="text-xs text-gray-500">Size: XL</p>
                </div>
                <p className="text-sm font-semibold text-blue-900">$32.00</p>
              </li>
              <li className="flex items-center py-4">
                <img
                  src="/Rectangle 146.png"
                  alt="Product 4"
                  className="w-16 h-16 object-cover rounded-md"
                />
                <div className="ml-4 flex-1">
                  <p className="text-sm font-semibold text-gray-700">
                    Ut diam consequat
                  </p>
                  <p className="text-xs text-gray-500">Color: Brown</p>
                  <p className="text-xs text-gray-500">Size: XL</p>
                </div>
                <p className="text-sm font-semibold text-blue-900">$32.00</p>
              </li>
              <li className="flex items-center py-4">
                <img
                  src="/Rectangle 147.png"
                  alt="Product 4"
                  className="w-16 h-16 object-cover rounded-md"
                />
                <div className="ml-4 flex-1">
                  <p className="text-sm font-semibold text-gray-700">
                    Ut diam consequat
                  </p>
                  <p className="text-xs text-gray-500">Color: Brown</p>
                  <p className="text-xs text-gray-500">Size: XL</p>
                </div>
                <p className="text-sm font-semibold text-blue-900">$32.00</p>
              </li>
            </ul>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <div className="flex justify-between mb-2">
              <p className="text-blue-900">Subtotals:</p>
              <p className="font-semibold text-blue-900">£219.00</p>
            </div>
            <div className="flex justify-between mb-4">
              <p className="text-blue-900">Totals:</p>
              <p className="font-semibold text-blue-900">£325.00</p>
            </div>
            <div className="flex items-center mt-2">
                <input
                  type="checkbox"
                  id="subscribe"
                  className="h-4 w-4 text-green-500"
                />
                <label
                  htmlFor="subscribe"
                  className="ml-2 text-sm text-gray-600"
                >
                  Shipping & taxes calculated at checkout
                </label>
              </div>
              <br />
            <button className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600">
              Proceed To Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
