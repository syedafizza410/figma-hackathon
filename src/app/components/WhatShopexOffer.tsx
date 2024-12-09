import Image from "next/image";
import React from "react";

const ShopexOffer = () => {
  const offers = [
    {
      icon: "/free-delivery 1.png", 
      title: "Free Delivery",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
    },
    {
      icon: "/cashback 1.png",
      title: "Cashback Offer",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
    },
    {
      icon: "/premium-quality 1.png",
      title: "Premium Quality",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
    },
    {
      icon: "/24-hours-support 1.png",
      title: "24/7 Support",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-blue-800 mb-12">
          What Shopex Offer!
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {offers.map((offer, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white shadow-md rounded-lg p-6 text-center border border-gray-200 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-16 h-16 mb-4">
                <Image
                  src={offer.icon}
                  alt={offer.title}
                  height={65}
                  width={65}
                  className="object-contain w-full h-full"
                />
              </div>

              <h3 className="text-blue-800 font-semibold text-base sm:text-lg md:text-xl mb-2">
                {offer.title}
              </h3>

              <p className="text-gray-500 text-sm md:text-base">
                {offer.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopexOffer;