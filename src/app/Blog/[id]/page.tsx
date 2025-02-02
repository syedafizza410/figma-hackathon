import React from "react";
import Link from "next/link";

const SingleBolg = () => {
    return (
            <div className="bg-white text-gray-800 ">
              <div className="py-12 px-8 bg-purple-50 h-44">
                <h1 className="max-w-6xl mx-auto text-4xl font-bold text-blue-900">Single Blog</h1>
                <div className="max-w-6xl mx-auto flex items-center gap-2">
                  <Link href={"/"} className="text-blue-900">Home</Link>
                  <p className="text-blue-900">Pages</p>
                  <p className="text-[#FB2E86]">Single Blog</p>
                </div>
              </div>
              </div>
    )
}

export default SingleBolg;