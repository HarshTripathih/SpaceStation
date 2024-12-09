import React from "react";
import logo from "../assets/aliens-logo.png";
import sslogo from "../assets/SPACE STATION Gold logo (2) (1).png";

const Navbar = () => {
  return (
    <header className="flex justify-between items-center bg-black opacity-85 p-4 md:px-12 text-white">
      <div className="flex items-center space-x-4">
        <img src={logo} alt="Aliens Group" className="h-11 w-auto" />
      </div>
      <nav>
        <div className="flex justify-center">
          <img src={sslogo} alt="Aliens Group" className="h-20 w-auto" />
        </div>
        <div className="hidden md:flex space-x-8 text-sm">
          <a href="#home" className="hover:text-yellow-500">
            Home
          </a>
          <a href="#about" className="hover:text-yellow-500">
            About
          </a>
          <a href="#features" className="hover:text-yellow-500">
            Features
          </a>
          <a href="#blog" className="hover:text-yellow-500">
            Blog
          </a>
          <a href="#contact" className="hover:text-yellow-500">
            Contact Us
          </a>
        </div>
      </nav>
      <div className="hidden md:block text-sm">
        <p className="font-semibold">+91 99662 34127</p>
      </div>
    </header>
  );
};

export default Navbar;
