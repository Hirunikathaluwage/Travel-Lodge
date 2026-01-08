import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="absolute top-0 left-0 right-0 z-20 bg-gradient-to-b from-black to-transparent">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-white tracking-wide">
            Travel Lodge
          </h1>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-white hover:text-indigo-300 font-medium">
            Home
          </Link>

          <Link
            to="/rooms"
            className="text-white hover:text-indigo-300 font-medium"
          >
            Rooms
          </Link>

          <Link
            to="/aboutUs"
            className="text-white hover:text-indigo-300 font-medium"
          >
            About Us
          </Link>

          <Link
            to="/contactUs"
            className="text-white hover:text-indigo-300 font-medium"
          >
            Contact
          </Link>

          <button
            onClick={() => navigate("/login")}
            className="text-white px-6 py-2 rounded-lg font-medium"
          >
            Sign In
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
