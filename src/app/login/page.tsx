export default function LoginPage() {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center">
        {/* Header Section */}
        <div className="w-full bg-gray-100 py-6">
          <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-3xl font-bold text-indigo-900">My Account</h1>
            <p className="text-sm text-black">
              Home . Pages . <span className="text-pink-500">My Account</span>
            </p>
          </div>
        </div>
  
        {/* Login Section */}
        <div className="flex-1 w-full flex items-center justify-center mt-6">
          <div className="w-full max-w-md bg-white shadow-md rounded-lg p-8">
            <h1 className="text-2xl font-bold text-gray-900 text-center">Login</h1>
            <p className="text-sm text-gray-500 text-center mt-2">
              Please login using account details below.
            </p>
            <form className="mt-6">
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full border border-gray-300 rounded-md p-2 mt-1 text-sm focus:ring-pink-500 focus:border-pink-500"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full border border-gray-300 rounded-md p-2 mt-1 text-sm focus:ring-pink-500 focus:border-pink-500"
                  placeholder="Enter your password"
                />
              </div>
              <div className="text-right text-sm text-pink-500 mb-4">
                <a href="#" className="hover:underline">
                  Forgot your password?
                </a>
              </div>
              <button
                type="submit"
                className="w-full bg-pink-500 text-white font-bold py-2 px-4 rounded-md hover:bg-pink-600 focus:outline-none focus:ring focus:ring-pink-300"
              >
                Sign In
              </button>
            </form>
            <p className="text-center text-sm text-gray-500 mt-4">
              Don’t have an Account?{" "}
              <a href="#" className="text-pink-500 font-medium hover:underline">
                Create account
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
  