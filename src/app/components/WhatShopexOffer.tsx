import React from "react";

const ShopexOffer = () => {
  const offers = [
    {
      icon: "/free-delivery 1.png", // Replace with the actual image path
      title: "24/7 Support",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
    },
    {
      icon: "/cashback 1.png",
      title: "24/7 Support",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
    },
    {
      icon: "/premium-quality 1.png",
      title: "24/7 Support",
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
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">
          What Shopex Offer!
        </h2>

        {/* Responsive Offer Cards */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-6 space-y-6 lg:space-y-0">
          {offers.map((offer, index) => (
            <div
              key={index}
              className="flex-1 min-h-[200px] bg-white shadow-lg rounded-lg p-6 text-center border border-gray-200"
            >
              {/* Icon */}
              <div className="w-16 h-16 mx-auto mb-4">
                <img
                  src={offer.icon}
                  alt={offer.title}
                  className="object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="text-blue-800 font-semibold text-lg mb-2">
                {offer.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-sm">{offer.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopexOffer;
