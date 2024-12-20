import HeroSection from "./components/Hero";
import Navbar from "./components/Navbar";
import FeaturedProducts from "./components/featuredProducts";
import LatestProducts from "./components/LatestProducts";
import ShopexOffer from "./components/WhatShopexOffer";
import UniqueFeatures from "./components/UniqueFeature";
import TrendingProducts from "./components/TreadingProducts";
import DiscountItem from "./components/DiscountItems";
import CategorySection from "./components/Topcategories";
import CustomDiv from "./components/Custom";
import LatestBlog from "./components/Blog";
import PartnersSection from "./components/PartnerSection";

export default function Home() {
  return (
    <div>
      <main>
        <HeroSection />
        <FeaturedProducts />
        <LatestProducts />
        <ShopexOffer />
        <UniqueFeatures />
        <TrendingProducts />
        <DiscountItem />
        <CategorySection />
        <CustomDiv />
        <PartnersSection />
        <LatestBlog />
      </main>
    </div>
  );
}
