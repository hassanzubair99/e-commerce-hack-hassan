import React from "react";
import Link from "next/link";

const NavBar = () => {
  return (
    <div className="w-full">
      <div className="bg-back-900 text-white text-sm py-2">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="flex items-center space-x-4">
            <span>
              <i className="fas fa-phone-alt"></i> (225) 555-0118
            </span>
            <span>
              <i className="fas fa-envelope"></i> michelle.rivera@example.com
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <span>Follow Us and get a chance to win 80% off</span>
            <div className="flex space-x-2">
              <Link href="#">
                <i className="fab fa-instagram text-white"></i>
              </Link>
              <Link href="#">
                <i className="fab fa-facebook-f text-white"></i>
              </Link>
              <Link href="#">
                <i className="fab fa-twitter text-white"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="bg-white shadow-md py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          {/* Logo */}
          <div className="text-2xl font-bold text-black">Bandage</div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-6">
            <Link href="/front" className="text-gray-700 hover:text-blue-700">
              Home
            </Link>
            <div className="relative group">
              <Link href="/shop" className="text-gray-700 hover:text-blue-700">
                Shop
              </Link>
            </div>
            <Link href="/aboutUs" className="text-gray-700 hover:text-blue-700">
              About
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-blue-700">
              Blog
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-700">
              Contact
            </Link>
            <Link href="#" className="text-gray-700 hover:text-blue-700">
              Pages
            </Link>
          </div>

          {/* User Actions */}
          <div className="flex items-center space-x-4 text-gray-700">
            <Link href="#" className="hover:text-blue-700">
              Login / Register
            </Link>
            <Link href="#" className="hover:text-blue-700">
              <i className="fas fa-shopping-cart"></i> 1
            </Link>
            <Link href="#" className="hover:text-blue-700">
              <i className="fas fa-heart"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
