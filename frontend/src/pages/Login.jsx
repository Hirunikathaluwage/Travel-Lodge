import React, { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Received values:", { username, password, remember });
  };

  return (
    <div
      className="relative min-h-screen w-full flex items-center justify-center lg:justify-end px-4 sm:px-6 lg:px-180 pt-3 pb-12"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1506059612708-99d6c258160e?q=80&w=2069&auto=format&fit=crop')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left center",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Login Form Container */}
      <div className="relative z-10 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-8 sm:p-10 w-full max-w-md">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">
            Travel Lodge
          </h1>
          <p className="text-gray-600 text-m text-center">
            Sign in to continue
          </p>
        </div>

        <div className="space-y-4">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-blue-900 outline-none transition text-black bg-transparent"
          />

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-blue-900 outline-none transition text-black bg-transparent"
          />

          <div className="flex items-center justify-between pt-5 flex-wrap gap-2">
            <label className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
                className="w-4 h-4 text-blue-600 rounded cursor-pointer"
              />
              <span className="ml-2 text-sm text-gray-700">Remember me</span>
            </label>

            <a href="#" className="text-sm text-blue-600 hover:text-blue-700">
              Forgot password?
            </a>
          </div>

          <button
            onClick={handleSubmit}
            className="w-full bg-black hover:bg-gray-800 text-white font-semibold py-3 rounded-lg transition duration-200 mt-6"
          >
            Sign In
          </button>

          <div className="text-center text-sm text-gray-600 pt-4">
            New here?{" "}
            <a
              href="/Signup"
              className="text-blue-600 hover:text-blue-700 font-semibold"
            >
              Create an account
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
