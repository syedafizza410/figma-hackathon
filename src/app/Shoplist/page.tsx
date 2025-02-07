"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";

const ShopList = () => {
  const [shoplist, setShoplist] = useState([]);

  useEffect(() => {
    fetch("/api/shoplist")
      .then((res) => res.json())
      .then(setShoplist)
      .catch((err) => console.error("Error fetching Shop List:", err));
  }, []);

  return (
    <div className="font-sans text-[#151875]">
      <div className="py-12 px-8 bg-purple-50 h-44">
        <h1 className="max-w-6xl mx-auto text-4xl font-bold">Shop List</h1>
        <div className="max-w-6xl mx-auto flex items-center gap-2">
          <Link href={"/"}>Home</Link>
          <p>Pages</p>
          <p className="text-[#FB2E86]">Shopping List</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto py-4 flex flex-col lg:flex-row justify-between px-8">
        <div>
          <h1 className="text-2xl font-semibold font-[Josefin Sans] mb-2">
            Ecommerce Accessories & Fashion Items
          </h1>
          <p className="text-sm text-gray-500 mb-4">
            About 9,620 results (0.62 seconds)
          </p>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <div className="flex items-center gap-2">
            <label
              htmlFor="perPage"
              className="text-sm font-medium text-gray-700"
            >
              Per Page:
            </label>
            <input
              type="text"
              id="perPage"
              className="w-16 p-1 border rounded text-sm focus:outline-none focus:ring-1 focus:ring-[#FB2E86]"
            />
          </div>

          <div className="flex items-center gap-2">
            <label
              htmlFor="sortBy"
              className="text-sm font-medium text-gray-700"
            >
              Sort By:
            </label>
            <select
              id="sortBy"
              className="p-1 border rounded text-sm focus:outline-none focus:ring-1 focus:ring-[#FB2E86]"
            >
              <option value="bestMatch">Best Match</option>
              <option value="priceLowHigh">Price: Low to High</option>
              <option value="priceHighLow">Price: High to Low</option>
            </select>
          </div>

          <div className="flex items-center gap-2">
            <label
              htmlFor="view"
              className="text-sm font-medium focus:outline-none focus:ring-1 focus:ring-[#FB2E86]"
            >
              View:
            </label>
            <input
              type="text"
              id="view"
              className="w-16 p-1 border rounded text-sm focus:outline-none focus:ring-1 focus:ring-[#FB2E86]"
            />
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-8">
        <div className="space-y-6">
          {shoplist.map((product) => (
            <div key={product.id} className="flex flex-col lg:flex-row bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="lg:w-1/3 flex-shrink-0">
                <Image src={product.image} alt={product.name} width={500} height={400} className="w-full h-48 object-cover rounded-lg" />
              </div>

              <div className="lg:w-2/3 lg:ml-6 mt-4 lg:mt-0">
                <div className="w-full flex justify-between items-center">
                  <h3 className="text-xl font-semibold">
                    <Link href={`/Shoplist/${product.id}`} className="text-blue-900 hover:underline">
                      {product.name}
                    </Link>
                  </h3>
                  <div className="mt-2 flex gap-2">
                    {product.colors.map((color, index) => (
                      <span key={index} className={`w-3 h-3 ${color} rounded-full`}></span>
                    ))}
                  </div>
                </div>

                <div className="mt-4 flex items-center space-x-2">
                  <span className="text-lg font-bold">${product.price}</span>
                  <span className="text-red-500 line-through">${product.oldPrice}</span>
                </div>
                <p className="mt-2 text-gray-600 w-96">{product.description}</p>

                <div className="mt-2 flex items-center">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <span key={index} className={`${index < product.rating ? "text-yellow-400" : "text-gray-300"} text-lg`}>★</span>
                  ))}
                </div>

                <div className="mt-4 flex space-x-4">
                  <button className="flex items-center justify-center w-10 h-10 rounded-full shadow-lg">
                    <AiOutlineShoppingCart size={24} />
                  </button>
                  <Link href="/cart">
                    <button className="flex items-center justify-center w-10 h-10 rounded-full shadow-lg">
                      <AiOutlineHeart size={24} />
                    </button>
                  </Link>
                  <button className="flex items-center justify-center w-10 h-10 rounded-full shadow-lg">
                    <FaSearch size={24} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="py-8 flex justify-center items-center mt-7 mb-12">
        <div className="flex flex-wrap justify-center sm:justify-between items-center sm:gap-6 md:gap-8 w-full max-w-6xl px-4">
          <Image src="/text1.png" alt="Partner 1" width={100} height={10} className="sm:h-10 md:h-12" />
          <Image src="/text2.png" alt="Partner 2" width={100} height={10} className="sm:h-10 md:h-12 grayscale hover:grayscale-0 transition duration-300" />
          <Image src="/text3.png" alt="Partner 3" width={100} height={10} className="sm:h-10 md:h-12 grayscale hover:grayscale-0 transition duration-300" />
          <Image src="/text4.png" alt="Partner 4" width={100} height={10} className="sm:h-10 md:h-12 grayscale hover:grayscale-0 transition duration-300" />
          <Image src="/text5.png" alt="Partner 5" width={100} height={10} className="sm:h-10 md:h-12 grayscale hover:grayscale-0 transition duration-300" />
        </div>
      </div>
    </div>
  );
};

export default ShopList;
