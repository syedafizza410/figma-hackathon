"use client"; 

import React from "react";

export default function AddToCartButton({ product }: { product: any }) {
  const handleAddToCart = () => {
    if (typeof window === "undefined") return; 

    const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");

    const index = existingCart.findIndex((item: any) => item._id === product._id);

    if (index >= 0) {
      existingCart[index].quantity += 1;
    } else {
      existingCart.push({
        _id: product._id,
        name: product.name,
        price: product.price,
        image: product.image ? product.image : "/placeholder.png",
        quantity: 1,
      });
    }

    localStorage.setItem("cart", JSON.stringify(existingCart));

    alert(`${product.name} has been added to the cart!`);
  };

  return (
    <button
      onClick={handleAddToCart}
      style={{ marginRight: "10px", padding: "5px 10px", cursor: "pointer" }}
    >
      Add to Cart
    </button>
  );
}