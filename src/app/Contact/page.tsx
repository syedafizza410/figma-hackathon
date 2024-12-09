export default function ContactUs() {
    return (
      <div className="min-h-screen bg-gray-50 py-10">
        <div className="bg-indigo-50 py-10">
          <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-4xl font-bold text-indigo-900 mb-2">Contact Us</h1>
            <p className="text-sm text-gray-600">
              Home . Pages . <span className="text-pink-500">Contact us</span>
            </p>
          </div>
        </div>
  
        <div className="max-w-6xl mx-auto px-4 mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-indigo-900">Information About Us</h2>
            <p className="text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque
              ultrices mattis aliquam, malesuada diam est. malesuada sem tristique
              amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis
              quis bibendum quam.
            </p>
            <div className="flex space-x-3">
              <div className="w-6 h-6 bg-purple-500 rounded-full"></div>
              <div className="w-6 h-6 bg-pink-500 rounded-full"></div>
              <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
            </div>
          </div>
  
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-indigo-900">Contact Way</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-purple-500 rounded-full"></div>
                <p className="text-gray-600">Tel: 877-67-88-99</p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-pink-500 rounded-full"></div>
                <p className="text-gray-600">E-Mail: shop@store.com</p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-orange-500 rounded-full"></div>
                <p className="text-gray-600">
                  20 Margaret St, London <br /> Great Britain, 3NM98-LK
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-green-500 rounded-full"></div>
                <p className="text-gray-600">
                  Free standard shipping <br /> on all orders.
                </p>
              </div>
            </div>
          </div>
        </div>
  
        <div className="max-w-6xl mx-auto px-4 mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold text-indigo-900">Get In Touch</h2>
            <p className="text-gray-600 mt-4 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque
              ultrices tristique amet erat vitae eget dolor los vitae lobortis quis
              bibendum quam.
            </p>
  
            <form className="mt-8 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Your Name*"
                  className="w-full border rounded-md p-4 text-sm focus:outline-none focus:ring-pink-500"
                />
                <input
                  type="email"
                  placeholder="Your E-mail"
                  className="w-full border rounded-md p-4 text-sm focus:outline-none focus:ring-pink-500"
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="w-full border rounded-md p-4 text-sm focus:outline-none focus:ring-pink-500"
              />
              <textarea
                placeholder="Type Your Message*"
                className="w-full border rounded-md p-4 text-sm focus:outline-none focus:ring-pink-500"
              ></textarea>
              <button className="px-6 py-3 bg-pink-500 text-white font-medium rounded-md hover:bg-pink-600">
                Send Mail
              </button>
            </form>
          </div>
  
          <div className="flex justify-center items-center">
            <img
              src="/contact.png" 
              alt="Contact Us Illustration"
              className="w-full max-w-md rounded-full shadow-lg"
            />
          </div>
        </div>
      </div>
);
}
