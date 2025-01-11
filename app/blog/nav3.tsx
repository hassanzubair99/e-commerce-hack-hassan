import React from "react";
import Link from "next/link"

const Header2= () => {
  return (
    <header>
      {/* Top Bar */}
      <div className="bg-green-600 text-white text-sm py-2">
        <div className="container mx-auto flex justify-between items-center px-4">
          {/* Left Info */}
          <div className="flex items-center space-x-4">
            <span className="flex items-center">
              <i className="mr-1">📞</i> (225) 555-0118
            </span>
            <span className="flex items-center">
              <i className="mr-1">✉️</i> michelle.rivera@example.com
            </span>
          </div>

          {/* Center Text */}
          <div className="hidden md:block font-semibold">
            Follow Us and get Link chance to win 80% off
          </div>

          {/* Social Icons */}
          <div className="flex items-center space-x-3">
            <span>Follow Us :</span>
            <i className="cursor-pointer">📸</i>
            <i className="cursor-pointer">🎥</i>
            <i className="cursor-pointer">📘</i>
            <i className="cursor-pointer">🐦</i>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-white shadow-md py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          {/* Logo */}
          <h1 className="text-xl font-bold text-gray-800">Bandage</h1>

          {/* Nav Links */}
          <nav className="hidden md:flex space-x-8 text-black font-bold">
            <Link href="/" className="hover:text-green-600">
              Home
            </Link>
            <Link href="/shop" className="hover:text-green-600">
              Shop <span className="text-xs">▼</span>
            </Link>
            <Link href="/aboutUs" className="hover:text-green-600">
              About
            </Link>
            <Link href="/blog" className="hover:text-green-600">
              Blog
            </Link>
            <Link href="/contact" className="hover:text-green-600">
              Contact
            </Link>
            <Link href="/Talk To Us" className="hover:text-green-600">
              Pages
            </Link>
          </nav>

          {/* Right Links */}
          <div className="flex items-center space-x-4 text-sm font-bold text-blue-600">
            <Link href="#" className="hover:underline">
              Login / Register
            </Link>
            <i className="cursor-pointer text-gray-700">🔍</i>
            <i className="cursor-pointer text-gray-700">🛒 1</i>
            <i className="cursor-pointer text-gray-700">💙</i>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header2;
