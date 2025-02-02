"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function CartPage() {
  const [cartItems, setCartItems] = useState<any[]>([]);
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");
      setCartItems(existingCart);
    }
  }, []);

  function handleQuantityChange(index: number, newQty: number) {
    const updatedCart = [...cartItems];
    updatedCart[index].quantity = newQty;
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart))
  }

  function handleUpdateCart() {
    if (typeof window !== "undefined") {
      localStorage.setItem("cart", JSON.stringify(cartItems));
      alert("Cart updated!");
    }
  }

  function handleClearCart() {
    setCartItems([]);
    if (typeof window !== "undefined") {
      localStorage.setItem("cart", "[]");
      alert("Cart cleared!");
    }
  }

  function handleProceedToCheckout() {
    if (typeof window !== "undefined") {
      localStorage.setItem("cart", JSON.stringify(cartItems)); 
    }
    router.push("/HektoDemo"); 
  }

  const subTotal = cartItems.reduce(
    (acc, item) => acc + (Number(item.price) || 0) * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-gray-50 py-6">
      <div className="w-full bg-gray-100 py-6">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-indigo-900">Shopping Cart</h1>
          <p className="text-sm text-gray-600">
            Home . Pages . <span className="text-pink-500">Shopping Cart</span>
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse border border-gray-200 bg-white rounded-lg">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-gray-200 p-4 text-left text-indigo-900 font-semibold text-sm md:text-base">
                    Product
                  </th>
                  <th className="border border-gray-200 p-4 text-indigo-900 font-semibold text-sm md:text-base">
                    Price
                  </th>
                  <th className="border border-gray-200 p-4 text-indigo-900 font-semibold text-sm md:text-base">
                    Quantity
                  </th>
                  <th className="border border-gray-200 p-4 text-indigo-900 font-semibold text-sm md:text-base">
                    Total
                  </th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item, index) => {
                  const price = Number(item.price) || 0;
                  return (
                    <tr key={item._id}>
                      <td className="border border-gray-200 p-4 flex items-center space-x-4">
                        <div className="flex-shrink-0">
                          <Image
                            src={item.image}
                            alt={item.name}
                            width={80}
                            height={80}
                            className="w-12 h-12 rounded object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-gray-800 md:text-base">
                            {item.name}
                          </p>
                        </div>
                      </td>
                      <td className="border border-gray-200 p-4 text-gray-800 text-sm md:text-base">
                        ${price.toFixed(2)}
                      </td>
                      <td className="border border-gray-200 p-4 text-gray-800">
                        <input
                          type="number"
                          className="w-16 border rounded-md p-1 text-sm focus:outline-none focus:ring-pink-500"
                          min={1}
                          value={item.quantity}
                          onChange={(e) =>
                            handleQuantityChange(index, Number(e.target.value))
                          }
                        />
                      </td>
                      <td className="border border-gray-200 p-4 text-gray-800 text-sm md:text-base">
                        ${(price * item.quantity).toFixed(2)}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="mt-4 flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0">
            <button
              className="px-4 py-2 bg-pink-500 text-white font-medium rounded-md hover:bg-pink-600 transition duration-200"
              onClick={handleUpdateCart}
            >
              Update Cart
            </button>
            <button
              className="px-4 py-2 bg-pink-500 text-white font-medium rounded-md hover:bg-pink-600 transition duration-200"
              onClick={handleClearCart}
            >
              Clear Cart
            </button>
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-lg font-semibold text-gray-800">Cart Totals</h2>
            <div className="mt-4">
              <p className="flex justify-between text-gray-600">
                <span>Subtotals:</span>
                <span>£{subTotal.toFixed(2)}</span>
              </p>
              <p className="flex justify-between text-gray-800 font-bold mt-2">
                <span>Totals:</span>
                <span>£{subTotal.toFixed(2)}</span>
              </p>
              <p className="text-sm text-gray-500 mt-2">
                Shipping &amp; taxes calculated at checkout
              </p>
              <button
                onClick={handleProceedToCheckout}
                className="mt-4 w-full bg-green-500 text-white font-medium py-2 rounded-md hover:bg-green-600 transition duration-200"
              >
                Proceed To Checkout
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-lg font-semibold text-gray-800">
              Calculate Shipping
            </h2>
            <form className="mt-4 space-y-4">
              <input
                type="text"
                className="w-full border rounded-md p-2 text-sm focus:outline-none focus:ring-pink-500"
                placeholder="Country"
              />
              <input
                type="text"
                className="w-full border rounded-md p-2 text-sm focus:outline-none focus:ring-pink-500"
                placeholder="City/State"
              />
              <input
                type="text"
                className="w-full border rounded-md p-2 text-sm focus:outline-none focus:ring-pink-500"
                placeholder="Postal Code"
              />
              <button className="w-full bg-pink-500 text-white font-medium py-2 rounded-md hover:bg-pink-600 transition duration-200">
                Calculate Shipping
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
