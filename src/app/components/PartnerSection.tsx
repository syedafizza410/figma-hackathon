import React from 'react';
import Image from 'next/image';

const PartnersSection = () => {
  return (
    <div className="py-8 flex justify-center items-center mt-7">
      <div className="flex flex-wrap justify-center sm:justify-between items-center gap-4 sm:gap-6 md:gap-8 w-full max-w-6xl px-4">
        <Image
          src="/text1.png"
          alt="Partner 1"
          width={100}
          height={10}
          className="sm:h-10 md:h-12 grayscale hover:grayscale-0 transition duration-300"
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
  );
};

export default PartnersSection;
