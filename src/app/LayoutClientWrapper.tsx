"use client";

import { SessionProvider } from "next-auth/react";
import { CartProvider } from "../contexts/CartContext";
import { WishlistProvider } from "../context/WishlistContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; 

export default function LayoutClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SessionProvider>
      <WishlistProvider>
        <CartProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </CartProvider>
      </WishlistProvider>
    </SessionProvider>
  );
}
