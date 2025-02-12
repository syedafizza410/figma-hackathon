"use client";

import React, { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, PaymentElement } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || "");

const CheckoutForm = ({ clientSecret, onSuccess }) => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    alert("✅ Payment Successful!");
    onSuccess();
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-blue-900 mb-4">Payment Details</h2>
      <PaymentElement />
      <button
        type="submit"
        className="w-full bg-pink-500 text-white py-3 rounded-md hover:bg-pink-600 mt-4"
      >
        Pay with Card
      </button>
    </form>
  );
};

const PaymentPage = () => {
  const router = useRouter();
  const [orderHistory, setOrderHistory] = useState([]);
  const [formDetails, setFormDetails] = useState(null);
  const [clientSecret, setClientSecret] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("stripe");
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedOrderHistory = JSON.parse(localStorage.getItem("orderHistory") || "[]");
      const savedFormDetails = JSON.parse(localStorage.getItem("formDetails") || "{}");

      setOrderHistory(savedOrderHistory);
      setFormDetails(savedFormDetails);
    }
  }, [])

  useEffect(() => {
    const total = orderHistory.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotalAmount(total);
  }, [orderHistory]);

  const fetchPaymentIntent = useCallback(async () => {
    if (paymentMethod === "cod") return;

    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          order: orderHistory,
          totalAmount: totalAmount, 
          paymentMethod,
        }),
      });

      const data = await response.json();
      if (data.clientSecret) setClientSecret(data.clientSecret);
    } catch (error) {
      console.error("Error fetching payment intent:", error);
    }
  }, [totalAmount, orderHistory, paymentMethod]);

  useEffect(() => {
    if (orderHistory.length > 0) {
      fetchPaymentIntent();
    }
  }, [fetchPaymentIntent, orderHistory]);

  const handlePaymentSuccess = () => {
    localStorage.removeItem("formDetails");
    localStorage.removeItem("orderHistory");
    router.push("/ordercomplete");
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-blue-900 mb-8 text-center">Payment Page</h1>

      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Select Payment Method:</label>
        <select
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-md"
        >
          <option value="stripe">Credit/Debit Card</option>
          <option value="cod">Cash on Delivery</option>
        </select>
      </div>

      {paymentMethod === "stripe" && clientSecret && (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <CheckoutForm clientSecret={clientSecret} onSuccess={handlePaymentSuccess} />
        </Elements>
      )}

      {paymentMethod === "cod" && (
        <div className="text-center text-green-600">
          <p>Cash on Delivery Selected</p>
          <button
            onClick={handlePaymentSuccess}
            className="w-full bg-green-500 text-white py-3 rounded-md hover:bg-green-600 mt-4"
          >
            Place Order
          </button>
        </div>
      )}

      <div className="bg-purple-50 p-6 rounded-lg shadow-md mt-8">
        <h2 className="text-xl font-semibold text-blue-900 mb-4">Order Summary</h2>
        {orderHistory.length > 0 ? (
          <ul className="divide-y divide-gray-300">
            {orderHistory.map((item) => (
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
        ) : (
          <p className="text-gray-500 text-center py-4">No items in cart.</p>
        )}

        <div className="mt-4">
          <p className="flex justify-between text-blue-900">
            <span>Total:</span>
            <span>${totalAmount.toFixed(2)}</span>
          </p>
        </div>

        <h2 className="text-xl font-semibold text-blue-900 mt-6">Shipping Details</h2>
        <div className="mt-4 text-gray-700">
          <p>
            <strong>Name:</strong> {formDetails?.firstName} {formDetails?.lastName}
          </p>
          <p>
            <strong>Email:</strong> {formDetails?.email}
          </p>
          <p>
            <strong>Address:</strong> {formDetails?.address}, {formDetails?.city},{" "}
            {formDetails?.country}
          </p>
          <p>
            <strong>Postal Code:</strong> {formDetails?.postalCode}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
