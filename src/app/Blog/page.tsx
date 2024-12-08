import React from "react";

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-purple-50">
      <header className=" p-5 bg-white shadow">
        <h1 className=" text-2xl font-bold">Blog Page</h1>
        <p className="text-sm text-gray-500 my-2">
          Home . Pages . <span className="text-pink-600">Blog Page</span>
        </p>
      </header>

      <main className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 p-6">
        {/* Blog Section */}
        <section className="md:col-span-3">
          <article className="bg-white shadow rounded-lg overflow-hidden">
            <img src="/blog1.png" alt="Blog" className="w-full" />
            <div className="p-4">
              <div className="flex justify-between items-center text-xs text-gray-500 mb-2">
                <span className="flex items-center gap-1">
                  <i className="fa fa-pen"></i> Surf Aviation
                </span>
                <span>Aug 09 2020</span>
              </div>
              <h2 className="text-lg font-bold text-gray-700">
                Mauris at orci non vulputate diam tincidunt nec.
              </h2>
              <p className="text-sm text-gray-600 mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
                facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu
                malesuada vitae ultrices in in neque, porta dignissim.
              </p>
              <a
                href="/page1"
                className="text-purple-600 font-medium hover:underline mt-4 block"
              >
                Read More
              </a>
            </div>
          </article>
        </section>

        {/* Sidebar Section */}
        <aside className="space-y-6">
          <div>
            <input
              type="text"
              placeholder="Search for posts"
              className="w-full p-2 rounded border border-gray-300"
            />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-700">Categories</h3>
            <ul className="text-sm text-gray-600 space-y-1 grid grid-cols-2">
              <li className="hover:text-purple-600 cursor-pointer bg-pink-500">
                Hobbies (14)
              </li>
              <li className="hover:text-purple-600 cursor-pointer">
                Women (21)
              </li>
              <li className="hover:text-purple-600 cursor-pointer">
                Women (14)
              </li>
              <li className="hover:text-purple-600 cursor-pointer">
                Women (21)
              </li>
              <li className="hover:text-purple-600 cursor-pointer">
                Women (14)
              </li>
              <li className="hover:text-purple-600 cursor-pointer">
                Women (21)
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-700">Recent Post</h3>
            <ul className="space-y-3">
                
              <li className="flex items-center space-x-2 text-sm text-gray-600">
                
                <img
                  src="/blog4.png"
                  alt="Recent"
                  className="w-10 h-10 rounded object-cover"
                />
                <h1>Its is a long established fact<br/>Aug 09 2022</h1>
               
              </li>
              <li className="flex items-center space-x-2 text-sm text-gray-600">
                <img
                  src="/blog5.png"
                  alt="Recent"
                  className="w-10 h-10 rounded object-cover"
                />
                    <h1>Its is a long established fact<br/>Aug 09 2022</h1>
              </li>
              
              <li className="flex items-center space-x-2 text-sm text-gray-600">
                <img
                  src="/blog6.png"
                  alt="Recent"
                  className="w-10 h-10 rounded object-cover"
                />
                    <h1>Its is a long established fact<br/>Aug 09 2022</h1>
              </li>
              <li className="flex items-center space-x-2 text-sm text-gray-600">
                <img
                  src="/blog7.png"
                  alt="Recent"
                  className="w-10 h-10 rounded object-cover"
                />
                    <h1>Its is a long established fact<br/>Aug 09 2022</h1>
              </li>
            </ul>
          </div>
          
        </aside>
        {/* Blog Section */}
        <section className="md:col-span-3">
          <article className="bg-white shadow rounded-lg overflow-hidden">
            <img src="blog2.png" alt="Blog" className="w-full" />
            <div className="p-4">
              <div className="flex justify-between items-center text-xs text-gray-500 mb-2">
                <span className="flex items-center gap-1">
                  <i className="fa fa-pen"></i> Surf Aviation
                </span>
                <span>Aug 09 2020</span>
              </div>
              <h2 className="text-lg font-bold text-gray-700">
                Mauris at orci non vulputate diam tincidunt nec.
              </h2>
              <p className="text-sm text-gray-600 mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
                facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu
                malesuada vitae ultrices in in neque, porta dignissim.
              </p>
              <a
                href="#"
                className="text-purple-600 font-medium hover:underline mt-4 block"
              >
                Read More
              </a>
            </div>
            
          </article>
        </section>
        <div>
            <h3 className="text-lg font-semibold text-gray-700">
              Sale products
            </h3>
            <ul className="space-y-3">
                
                <li className="flex items-center space-x-2 text-sm text-gray-600">
                  
                  <img
                    src="/blog8.png"
                    alt="Recent"
                    className="w-10 h-10 rounded object-cover"
                  />
                  <h1>Elit ornare in enim mauris<br/>Aug 09 2022</h1>
                 
                </li>
                <li className="flex items-center space-x-2 text-sm text-gray-600">
                  <img
                    src="/blog9.png"
                    alt="Recent"
                    className="w-10 h-10 rounded object-cover"
                  />
                      <h1>Viverra pulvinar et enim<br/>Aug 09 2022</h1>
                </li>
                
                <li className="flex items-center space-x-2 text-sm text-gray-600">
                  <img
                    src="/blog10.png"
                    alt="Recent"
                    className="w-10 h-10 rounded object-cover"
                  />
                      <h1>Mattis varius donec fd<br/>Aug 09 2022</h1>
                </li>
               
              </ul>
          </div>

        {/* Blog Section */}
        <section className="md:col-span-3">
          <article className="bg-white shadow rounded-lg overflow-hidden">
            <img src="/blog3.png" alt="Blog" className="w-full" />
            <div className="p-4">
              <div className="flex justify-between items-center text-xs text-gray-500 mb-2">
                <span className="flex items-center gap-1">
                  <i className="fa fa-pen"></i> Surf Aviation
                </span>
                <span>Aug 09 2020</span>
              </div>
              <h2 className="text-lg font-bold text-gray-700">
                Mauris at orci non vulputate diam tincidunt nec.
              </h2>
              <p className="text-sm text-gray-600 mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
                facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu
                malesuada vitae ultrices in in neque, porta dignissim.
              </p>
              <a
                href="#"
                className="text-purple-600 font-medium hover:underline mt-4 block"
              >
                Read More
              </a>
            </div>
          </article>
        </section>
        <ul>
            <li>
               
            </li>
            <li></li>
            <li></li>
        </ul>
      </main>
    </div>
  );
};

export default BlogPage;
