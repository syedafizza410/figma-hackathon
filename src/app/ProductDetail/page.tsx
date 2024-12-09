import Image from 'next/image';

export default function ProductDetails() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-sm text-gray-500 mb-4">
        <span>Home</span> &gt; <span>Pages</span> &gt; <span>Product Details</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="grid grid-cols-2 gap-4">
          <Image
            src="/Rectangle 138.png"
            alt="Main Product"
            width={375}
            height={487}
            className="rounded-lg"
          />
          <div className="grid grid-cols-1 gap-2">
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

        <div>
          <h1 className="text-2xl font-semibold">Playwood Arm Chair</h1>
          <div className="text-gray-500 mt-2">
            <span className="line-through">$200</span>{' '}
            <span className="text-red-500">$150</span>
          </div>
          <p className="text-gray-600 mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            nihil pariatur quas id voluptatem.
          </p>
          <div className="mt-4">

            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg">
           <a href='/Cart'>Add to Cart</a> 
            </button>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <div className="border-b flex space-x-8">
          <button className="pb-2 border-b-2 border-blue-600">Description</button>
          <button className="pb-2">Additional Info</button>
          <button className="pb-2">Reviews</button>
          <button className="pb-2">Video</button>
        </div>
        <div className="mt-4 text-gray-600">
          <h2 className="text-lg font-semibold">Various Tempers</h2>
          <p className="mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            debitis error iusto ex ducimus maiores.
          </p>
          <ul className="mt-4 space-y-2">
            <li>✔ Lorem ipsum dolor sit amet consectetur.</li>
            <li>✔ Ex ducimus maiores iusto ex facilis debitis.</li>
            <li>✔ Facilis debitis error iusto ex ducimus.</li>
          </ul>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-lg font-semibold mb-4">Related Products</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          <div className="text-center">
            <Image
              src="/Rectangle 128.png"
              alt="Related Product 1"
              width={270}
              height={340}
              className="rounded-lg"
            />
            <h3 className="text-gray-800 mt-2">Mens Fashion</h3>
            <p className="text-gray-500">$40</p>
          </div>
          <div className="text-center">
            <Image
              src="/Group 233.png"
              alt="Related Product 2"
              width={270}
              height={340}
              className="rounded-lg"
            />
            <h3 className="text-gray-800 mt-2">Womens Fashion</h3>
            <p className="text-gray-500">$30</p>
          </div>
          <div className="text-center">
            <Image
              src="/Rectangle 130.png"
              alt="Related Product 3"
              width={270}
              height={340}
              className="rounded-lg"
            />
            <h3 className="text-gray-800 mt-2">Kids Disney Fashion</h3>
            <p className="text-gray-500">$50</p>
          </div>
          <div className="text-center">
            <Image
              src="/Rectangle 131.png"
              alt="Related Product 4"
              width={270}
              height={340}
              className="rounded-lg"
            />
            <h3 className="text-gray-800 mt-2">Top Wall Digital Clock</h3>
            <p className="text-gray-500">$60</p>
          </div>
        </div>
      </div>
    </div>
  );
}