import Link from "next/link";
import Image from "next/image";

export default function ProductDetails() {
  return (
    <div className="mx-auto">
      <div className="bg-purple-50 py-6 px-4 sm:py-8 sm:px-8 h-44">
        <div className="max-w-6xl mx-auto mt-7">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-indigo-900">
            Product Details
          </h1>
          <p className="text-xs sm:text-sm text-gray-600">
          <Link href={"/"}>Home</Link> . Pages .{" "}
            <span className="text-pink-500">Product Details</span>
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <div className="container px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12 p-4 shadow-xl bg-white rounded-lg">
            <div className="grid grid-cols-3 gap-4">
              <Image
                src="/Rectangle 138.png"
                alt="Main Product"
                width={375}
                height={487}
                className="rounded-lg col-span-2"
              />
              <div className="grid grid-rows-3 gap-4">
                <Image
                  src="/Rectangle 134.png"
                  alt="Thumbnail 1"
                  width={151}
                  height={155}
                  className="rounded-lg"
                />
                <Image
                  src="/Rectangle 136.png"
                  alt="Thumbnail 2"
                  width={151}
                  height={155}
                  className="rounded-lg"
                />
                <Image
                  src="/Rectangle 137.png"
                  alt="Thumbnail 3"
                  width={151}
                  height={155}
                  className="rounded-lg"
                />
              </div>
            </div>

            {/* Product Information */}
            <div className="mt-12">
              <h1 className="text-4xl font-bold text-blue-900">
                Playwood Arm Chair
              </h1>
              <div className="flex items-center mt-2 text-yellow-500">
                <span className="text-lg">★★★★★</span>
                <span className="ml-2 text-sm text-blue-900">(22)</span>
              </div>
              <div className="mt-3 flex items-center">
                <span className="text-2xl font-bold text-blue-900">$32.00</span>
                <span className="ml-4 text-lg line-through text-red-500">
                  $39.00
                </span>
              </div>
              <div className="mt-4">
                <h3 className="text-sm font-semibold text-blue-900">Color</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris tellus porttitor purus, et volutpat sit.
                </p>
              </div>
              <div className="mt-6 flex items-center space-x-4">
                <button className="px-6 py-2 text-blue-900 rounded-lg">
                  Add To Cart
                </button>
                <button className="w-50 h-50 text-blue-900 font-bold flex items-center justify-center rounded-lg">
                  ♡
                </button>
              </div>
              <div className="mt-8">
                <div className="text-sm text-gray-600">
                  <span className="font-bold text-blue-900">Categories:</span>{" "}
                  Hand bags
                </div>
                <div className="text-sm text-gray-600 mt-2">
                  <span className="font-bold text-blue-900">Tags:</span> Modern,
                  Stylish
                </div>
                <div className="text-sm text-gray-600 mt-2 flex items-center">
                  <span className="font-bold mr-2 text-blue-900">Share:</span>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white"
                    >
                      F
                    </a>
                    <a
                      href="#"
                      className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white"
                    >
                      T
                    </a>
                    <a
                      href="#"
                      className="w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center text-white"
                    >
                      I
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Description Section */}
      <div className="bg-purple-50">
        <div className="mt-12 container mx-auto px-4 text-center">
          <div className="border-b flex justify-left space-x-8 text-sm font-medium text-blue-900">
            <button className="pb-2 border-b-2 text-blue-900 border-blue-900">
              Description
            </button>
            <button className="pb-2 hover:text-blue-900">
              Additional Info
            </button>
            <button className="pb-2 hover:text-blue-900">Reviews</button>
            <button className="pb-2 hover:text-blue-900">Video</button>
          </div>

          <div className="mt-6 text-gray-700 text-left">
            <h2 className="text-lg font-semibold text-blue-900">
              Various Tempers
            </h2>
            <p className="mt-4 text-sm leading-relaxed">
              Aliquam duis vulputate vulputate integer sagittis. Faucibus dolor
              ornare faucibus vel sed et adipiscing habitasse amet. Montes,
              mauris varius eu est bibendum. Sollicitudin et risus erat arcu.
              Volutpat consectetur neque, elit, aliquet. Non varius pretium et
              urna, egestas consequat laoreet idiam tincidunt. Magna eget
              faucibus eros justo, tortor sed donec tempus. Impedit
              consequuntur, quis diam arcu, nulla lobortis justo netus dui.
              Etiam fringilla vulputate nunc nec. Duis massa viverra.
            </p>
            <h3 className="mt-6 text-sm font-medium text-blue-900">
              More Details
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-left px-8 sm:px-32">
              <li>
                <span className="mr-2 text-blue-900 font-bold"> ➜ </span>
                Aliquam duis vulputate vulputate integer sagittis. Faucibus duis
                diam arcu, nulla lobortis.
              </li>
              <li>
                <span className="mr-2 text-blue-900 font-bold"> ➜ </span>
                Aliquam duis vulputate integer sagittis. Faucibus dolor netus
                mauris et.
              </li>
              <li>
                <span className="mr-2 text-blue-900 font-bold"> ➜ </span>
                Impedit consequuntur, quis diam arcu. Etiam fringilla vulputate
                nunc nec.
              </li>
              <li>
                <span className="mr-2 text-blue-900 font-bold"> ➜ </span>
                Lobortis justo netus dui. Etiam fringilla vulputate nunc nec.
                Duis massa viverra.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-12 container mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-2xl font-bold text-blue-900 mb-6 text-center">
          Related Products
        </h2>

        {/* Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Product 1 */}
          <div className="text-center">
            <Image
              src="/Rectangle 128.png"
              alt="Mens Fashion Wear"
              width={270}
              height={340}
              className="rounded-lg shadow-md"
            />
            <h3 className="text-lg font-semibold text-gray-800 mt-3">
              Mens Fashion Wear
            </h3>
            <div className="flex justify-center items-center mt-1">
              <span className="text-yellow-500 text-sm">★★★★★</span>
            </div>
            <p className="text-gray-600 text-sm mt-2">$43.00</p>
          </div>

          {/* Product 2 */}
          <div className="text-center">
            <Image
              src="/Group 233.png"
              alt="Womens Fashion"
              width={270}
              height={340}
              className="rounded-lg shadow-md"
            />
            <h3 className="text-lg font-semibold text-gray-800 mt-3">
              Womens Fashion
            </h3>
            <div className="flex justify-center items-center mt-1">
              <span className="text-yellow-500 text-sm">★★★★★</span>
            </div>
            <p className="text-gray-600 text-sm mt-2">$67.00</p>
          </div>

          {/* Product 3 */}
          <div className="text-center">
            <Image
              src="/Rectangle 130.png"
              alt="Wok Dummy Fashion"
              width={270}
              height={340}
              className="rounded-lg shadow-md"
            />
            <h3 className="text-lg font-semibold text-gray-800 mt-3">
              Wok Dummy Fashion
            </h3>
            <div className="flex justify-center items-center mt-1">
              <span className="text-yellow-500 text-sm">★★★★★</span>
            </div>
            <p className="text-gray-600 text-sm mt-2">$67.00</p>
          </div>

          {/* Product 4 */}
          <div className="text-center">
            <Image
              src="/Rectangle 131.png"
              alt="Top Wall Digital Clock"
              width={270}
              height={340}
              className="rounded-lg shadow-md"
            />
            <h3 className="text-lg font-semibold text-gray-800 mt-3">
              Top Wall Digital Clock
            </h3>
            <div className="flex justify-center items-center mt-1">
              <span className="text-yellow-500 text-sm">★★★★★</span>
            </div>
            <p className="text-gray-600 text-sm mt-2">$51.00</p>
          </div>
        </div>
      </div>
      <div className="py-8 flex justify-center items-center mt-7 mb-12">
        <div className="flex flex-wrap justify-center sm:justify-between items-center sm:gap-6 md:gap-8 w-full max-w-6xl px-4">
          <Image
            src="/text1.png"
            alt="Partner 1"
            width={100}
            height={10}
            className="sm:h-10 md:h-12"
          />
          <Image
            src="/text2.png"
            alt="Partner 2"
            width={100}
            height={10}
            className="sm:h-10 md:h-12 grayscale hover:grayscale-0 transition duration-300"
          />
          <Image
            src="/text3.png"
            alt="Partner 3"
            height={10}
            width={100}
            className="sm:h-10 md:h-12 grayscale hover:grayscale-0 transition duration-300"
          />
          <Image
            src="/text4.png"
            alt="Partner 4"
            height={10}
            width={100}
            className="sm:h-10 md:h-12 grayscale hover:grayscale-0 transition duration-300"
          />
          <Image
            src="/text5.png"
            alt="Partner 5"
            width={100}
            height={10}
            className="sm:h-10 md:h-12 grayscale hover:grayscale-0 transition duration-300"
          />
        </div>
      </div>
    </div>
  );
}
