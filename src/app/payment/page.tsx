"use client";

import { useEffect, useState } from "react";
import { useCart } from "../../contexts/CartContext";
import { useRouter } from "next/navigation";

const PaymentPage = () => {
  const { cart, clearCart } = useCart();
  const router = useRouter();

  const [formDetails, setFormDetails] = useState(() => {
    const savedFormDetails = localStorage.getItem("formDetails");
    return savedFormDetails ? JSON.parse(savedFormDetails) : null;
  });

  const calculateTotal = () =>
    cart.reduce((total, item) => total + item.price * item.quantity, 0);

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();

    // Simulate payment processing
    alert("Payment successful!");

    // Clear form and cart details
    localStorage.removeItem("formDetails");
    localStorage.removeItem("cartDetails");
    clearCart();

    // Redirect to order confirmation or home page
    router.push("/order-confirmation");
  };

  useEffect(() => {
    // Load cart details from localStorage if needed (e.g., for page refresh scenarios)
    const savedCart = localStorage.getItem("cartDetails");
    if (savedCart) {
      const parsedCart = JSON.parse(savedCart);
      parsedCart.forEach((item) => {
        const existingItem = cart.find((cartItem) => cartItem.id === item.id);
        if (!existingItem) {
          // Ensure cart state is consistent if the localStorage cart is not in sync
        }
      });
    }
  }, [cart]);

  if (!formDetails) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold text-blue-900 mb-8 text-center">
          Payment Page
        </h1>
        <p className="text-center text-red-500">
          No form details found. Please go back to the checkout page.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-blue-900 mb-8 text-center">
        Payment Page
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Payment Form */}
        <form
          onSubmit={handlePayment}
          className="bg-white p-6 rounded-lg shadow-md"
        >
          <h2 className="text-xl font-semibold text-blue-900 mb-4">
            Payment Details
          </h2>

          <div className="mb-4">
            <label htmlFor="cardNumber" className="block text-gray-700 mb-2">
              Card Number
            </label>
            <input
              type="text"
              id="cardNumber"
              placeholder="1234 5678 9012 3456"
              className="w-full p-3 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="expiryDate" className="block text-gray-700 mb-2">
                Expiry Date
              </label>
              <input
                type="text"
                id="expiryDate"
                placeholder="MM/YY"
                className="w-full p-3 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label htmlFor="cvv" className="block text-gray-700 mb-2">
                CVV
              </label>
              <input
                type="text"
                id="cvv"
                placeholder="123"
                className="w-full p-3 border border-gray-300 rounded-md"
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="nameOnCard" className="block text-gray-700 mb-2">
              Name on Card
            </label>
            <input
              type="text"
              id="nameOnCard"
              placeholder="John Doe"
              className="w-full p-3 border border-gray-300 rounded-md"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-pink-500 text-white py-3 rounded-md hover:bg-pink-600"
          >
            Pay ${calculateTotal().toFixed(2)}
          </button>
        </form>

        {/* Order Summary */}
        <div className="bg-purple-50 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-blue-900 mb-4">
            Order Summary
          </h2>
          <ul className="divide-y divide-gray-300">
            {cart.map((item) => (
              <li key={item.id} className="flex justify-between py-4">
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-gray-500">
                    ${Number(item.price).toFixed(2)} x {item.quantity}
                  </p>
                </div>
                <p className="font-medium text-blue-900">
                  ${Number(item.price * item.quantity).toFixed(2)}
                </p>
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <p className="flex justify-between text-blue-900">
              <span>Subtotal:</span>
              <span>${calculateTotal().toFixed(2)}</span>
            </p>
            <p className="flex justify-between text-gray-600">
              <span>Shipping:</span>
              <span>Free</span>
            </p>
            <p className="flex justify-between font-semibold text-blue-900">
              <span>Total:</span>
              <span>${calculateTotal().toFixed(2)}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
