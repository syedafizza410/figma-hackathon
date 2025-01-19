import Link from 'next/link';
import Image from 'next/image';

const infopage = () => {
    return (
        <div className="bg-gray-50 py-10">
        <div className="py-12 px-8 bg-purple-50 h-44">
          <h1 className="max-w-6xl mx-auto text-4xl font-bold text-blue-900">
            404 Not Found
          </h1>
          <div className="max-w-6xl mx-auto flex items-center gap-2">
            <Link href={"/"} className="text-blue-900">
              Home
            </Link>
            <p className="text-blue-900">Pages</p>
            <p className="text-[#FB2E86]">404 Not Found</p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center py-20">
        <img
          src="/404custom.png"
          alt="404 Illustration"
          className="max-w-md"
        />
        <h2 className="text-center text-xl font-bold text-blue-900 mt-6">
          oops! The page you requested was not found!
        </h2>
        <Link href="/">
          <button className="mt-6 bg-[#FB2E86] text-white px-6 py-3 rounded-md shadow-md hover:bg-red-600">
            Back To Home
          </button>
        </Link>
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
    )
}
export default infopage;