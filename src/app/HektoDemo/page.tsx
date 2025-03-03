"use client";

import React, { useState, useEffect } from "react";
import { useCart } from "../../contexts/CartContext";
import { useRouter } from "next/navigation";
import Image from "next/image";

const CheckoutPage = () => {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();
  const router = useRouter();

  const [checkoutCart, setCheckoutCart] = useState(() => {
    if (typeof window !== "undefined") {
      return JSON.parse(localStorage.getItem("cart") || "[]");
    }
    return [];
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
      setCheckoutCart(storedCart);
    }
  }, []);

  useEffect(() => {
    if (cart.length > 0) {
      setCheckoutCart(cart);
    }
  }, [cart]);

  const handleRemoveFromCart = (itemId) => {
    removeFromCart(itemId); 
    const updatedCart = checkoutCart.filter((item) => item.id !== itemId); 
    setCheckoutCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart)); 
  };

  const [formDetails, setFormDetails] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    apartment: "",
    city: "",
    country: "",
    postalCode: "",
  });

  const [isFormValid, setIsFormValid] = useState(false);

  const calculateTotal = () =>
    checkoutCart.reduce((total, item) => total + item.price * item.quantity, 0);
   

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormDetails({ ...formDetails, [name]: value });
  };   

  useEffect(() => {
    const { email, firstName, lastName, address, city, country, postalCode } = formDetails;
    setIsFormValid(
      !!(email && firstName && lastName && address && city && country && postalCode)
    );
  }, [formDetails]);

  const handleProceedToCheckout = () => {
    if (typeof window !== "undefined") {
      let cart = JSON.parse(localStorage.getItem("cart")) || [];
      localStorage.setItem("orderHistory", JSON.stringify(cart)); 
      localStorage.setItem("formDetails", JSON.stringify(formDetails));
    }
    clearCart();
    router.push("/payment");
  };  

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
              Cart Information / Shipping <a href="/payment">/ Payment</a>
            </p>
          </div>

          <div className="bg-purple-50 p-6 rounded-lg shadow-md mt-28">
            <div className="mb-8">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-lg font-semibold text-indigo-900">
                  Contact Information
                </h2>
                <p className="text-sm text-gray-400">
                  Already have an account?{" "}
                  <a href="/login" className="text-gray-400 underline">
                    Log in
                  </a>
                </p>
              </div>
              <input
                type="text"
                name="email"
                placeholder="Email or mobile phone number"
                value={formDetails.email}
                onChange={handleInputChange}
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
                  name="firstName"
                  placeholder="First name"
                  value={formDetails.firstName}
                  onChange={handleInputChange}
                  className="p-3 border border-gray-300 rounded-md"
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last name"
                  value={formDetails.lastName}
                  onChange={handleInputChange}
                  className="p-3 border border-gray-300 rounded-md"
                />
              </div>
              <input
                type="text"
                name="address"
                placeholder="Address"
                value={formDetails.address}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-md mb-4"
              />
              <input
                type="text"
                name="apartment"
                placeholder="Apartment, suite, etc. (optional)"
                value={formDetails.apartment}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-md mb-4"
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  value={formDetails.city}
                  onChange={handleInputChange}
                  className="p-3 border border-gray-300 rounded-md"
                />
                <input
                  type="text"
                  name="country"
                  placeholder="Bangladesh"
                  value={formDetails.country}
                  onChange={handleInputChange}
                  className="p-3 border border-gray-300 rounded-md"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <input
                  type="text"
                  name="postalCode"
                  placeholder="Postal Code"
                  value={formDetails.postalCode}
                  onChange={handleInputChange}
                  className="p-3 border border-gray-300 rounded-md"
                />
              </div>
              <button
                disabled={!isFormValid}
                className={`w-full md:w-auto px-6 py-2 rounded-md ${
                  isFormValid
                    ? "bg-pink-500 text-white hover:bg-pink-600"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
              >
                Continue Shipping
              </button>
            </div>
          </div>
        </div>
            
        <div className="lg:mt-28 bg-white p-6 rounded-lg shadow-md">
          {checkoutCart.length > 0 ? (
          <ul className="divide-y divide-gray-200">
             {checkoutCart.map((item) => (
              <li key={item.id} className="flex items-center py-4">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={64}
                  height={64}
                  className="object-cover rounded-md"
                />
                <div className="ml-4 flex-1">
                  <p className="text-sm font-semibold">{item.name}</p>
                  <p className="text-sm">Price: ${item.price}</p>
                  <p className="text-sm">Quantity:</p>
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                    className="w-16 border rounded"
                  />
                </div>
                <button
                  onClick={() => handleRemoveFromCart(item.id)}
                  className="text-red-500 ml-4"
                >
                  Remove
                </button>
              </li>
             )
          )}
          </ul>
          ) : (
            <p className="text-gray-500 text-center py-4">No items in cart</p>
          )}

          <div className="mt-4">
            <p className="text-blue-900 font-semibold">Total: ${calculateTotal()}</p>
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
              <button
                disabled={!isFormValid}
                onClick={isFormValid ? handleProceedToCheckout : undefined}
                className={`w-full mt-4 py-2 rounded-md ${
                  isFormValid
                    ? "bg-green-500 text-white hover:bg-green-600"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
              >
                Proceed to Payment
              </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;