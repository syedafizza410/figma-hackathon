"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const PaymentPage = () => {
  const router = useRouter();

  const [orderHistory, setOrderHistory] = useState([]);
  const [formDetails, setFormDetails] = useState(null);

  const [cardDetails, setCardDetails] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    nameOnCard: "",
  });

  const [paymentMethod, setPaymentMethod] = useState("card"); // Default to card
  const [error, setError] = useState("");

  useEffect(() => {
    // Retrieve form details and order history from localStorage
    const savedOrderHistory = localStorage.getItem("orderHistory");
    const savedFormDetails = localStorage.getItem("formDetails");

    if (savedOrderHistory) setOrderHistory(JSON.parse(savedOrderHistory));
    if (savedFormDetails) setFormDetails(JSON.parse(savedFormDetails));
  }, []);

  const calculateTotal = () =>
    orderHistory.reduce((total, item) => total + item.price * item.quantity, 0);

    
  const validateCard = () => {
    const { cardNumber, expiryDate, cvv, nameOnCard } = cardDetails;

    // Ensure all fields are filled
    if (!cardNumber || !expiryDate || !cvv || !nameOnCard) {
      setError("Please fill all card details.");
      return false;
    }

    // Validate card number for HBL, Meezan, and Alfalah
    const hblPrefixes = [
      "4000", "4001", "4002", "4003", "4004", "4005", "4006", "4007", "4008", "4009",
      "5100", "5200", "5300", "5400", "5500"
    ];
    
    const meezanPrefixes = [
      "5100", "5101", "5102", "5103", "5104", "5105", "5106", "5107", "5108", "5109",
      "4011", "4012", "4013", "4014", "4015", "4016", "4017", "4018", "4019", "4020"
    ];
    
    const alfalahPrefixes = [
      "6011", "6012", "6013", "6014", "6015", "6016", "6017", "6018", "6019",
      "6211", "6212", "6213", "6214", "6215", "6216", "6217", "6218", "6219"
    ];

    const cardPrefix = cardNumber.slice(0, 4);

    if (
      !(
        hblPrefixes.includes(cardPrefix) ||
        meezanPrefixes.includes(cardPrefix) ||
        alfalahPrefixes.includes(cardPrefix)
      )
    ) {
      setError("Invalid card. Please use HBL, Meezan, or Alfalah card.");
      return false;
    }

    // Clear error if validation passes
    setError("");
    return true;
  };

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();

    if (paymentMethod === "card") {
      // Validate card details for card payment
      if (!validateCard()) return;

      // Simulate card payment processing
      alert("Payment Successful via Card!");
    } else {
      // Simulate COD
      alert("Order placed successfully. Pay on delivery.");
    }

    // Clear form details and order history
    localStorage.removeItem("formDetails");
    localStorage.removeItem("orderHistory");

    // Redirect to order complete page
    router.push("/ordercomplete");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setCardDetails({ ...cardDetails, [id]: value });
  };

  if (!formDetails) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <p className="text-center text-red-500">
          No order or form details found. Please return to the checkout page.
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

        {error && (
          <div className="text-red-500 mb-4">
            <p>{error}</p>
          </div>
        )}

        {/* Payment Method Selection */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Payment Method</label>
          <select
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md"
          >
            <option value="card">Credit/Debit Card</option>
            <option value="cod">Cash on Delivery</option>
          </select>
        </div>

        {/* Card Details */}
        {paymentMethod === "card" && (
          <>
            <div className="mb-4">
              <label htmlFor="cardNumber" className="block text-gray-700 mb-2">
                Card Number
              </label>
              <input
                type="text"
                id="cardNumber"
                value={cardDetails.cardNumber}
                onChange={handleInputChange}
                placeholder="1234 5678 9012 3456"
                className="w-full p-3 border border-gray-300 rounded-md"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label
                  htmlFor="expiryDate"
                  className="block text-gray-700 mb-2"
                >
                  Expiry Date
                </label>
                <input
                  type="text"
                  id="expiryDate"
                  value={cardDetails.expiryDate}
                  onChange={handleInputChange}
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
                  value={cardDetails.cvv}
                  onChange={handleInputChange}
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
                value={cardDetails.nameOnCard}
                onChange={handleInputChange}
                placeholder="John Doe"
                className="w-full p-3 border border-gray-300 rounded-md"
                required
              />
            </div>
          </>
        )}

        <button
          type="submit"
          className="w-full bg-pink-500 text-white py-3 rounded-md hover:bg-pink-600"
        >
          {paymentMethod === "card"
            ? `Pay ${calculateTotal().toFixed(2)}`
            : "Place Order"}
        </button>
      </form>

      {/* Order Summary */}
      <div className="bg-purple-50 p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-blue-900 mb-4">
          Order Summary
        </h2>
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
        <div className="mt-4">
          <p className="flex justify-between text-blue-900">
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
