

import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faFacebookF, faLinkedinIn, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faPhoneAlt, faEnvelope, faSearch, faThLarge, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import Sider from "./Sider";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      {/* First (Blue) Navbar - Hide on Scroll */}
      {!isScrolling && (
        <div className="bg-blue-950 text-white py-2 w-full fixed top-0 left-0 z-50 hidden md:block">
          <div className="max-w-screen-xl mx-auto flex justify-between items-center px-10">
            <div className="flex space-x-3 items-center text-xs">
              <a className="hover:text-gray-300" href="#"><FontAwesomeIcon icon={faTwitter} /></a>
              <a className="hover:text-gray-300" href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
              <a className="hover:text-gray-300" href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a>
              <a className="hover:text-gray-300" href="#"><FontAwesomeIcon icon={faInstagram} /></a>
            </div>
            <div className="flex space-x-4 items-center text-sm">
              <span><FontAwesomeIcon icon={faPhoneAlt} className="text-xs" /> +1-888-000-9999</span>
              <span><FontAwesomeIcon icon={faEnvelope} className="text-xs" /> info@salesuberllc.com</span>
            </div>
          </div>
        </div>
      )}

      {/* Second (White) Navbar - Fixed on Scroll */}
      <nav className={`bg-white shadow fixed w-full left-0 z-40 transition-all ${isScrolling ? "top-0" : "top-10"}`}>
        <div className="max-w-screen-xl mx-auto flex items-center justify-between py-8 px-10">
          <span className="text-2xl font-bold text-blue-900">SalesUber <span className="text-gray-500">LLC</span></span>
          <div className="hidden md:flex space-x-10 text-lg font-medium">
            <Link to="/" className="relative font-bold hover:text-blue-300 transition-all duration-200 group">
              Home
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-300 transition-all group-hover:w-full"></span>
            </Link>
            <Link to="/About" className="relative font-bold hover:text-blue-300 transition-all duration-200 group">
  About Us
  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-300 transition-all group-hover:w-full"></span>
</Link>           
 <Link to="/contact" className="relative font-bold hover:text-blue-300 transition-all duration-200 group">
              Contacts
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-300 transition-all group-hover:w-full"></span>
            </Link>
          </div>
          <div className="flex space-x-6 items-center">
            <a className="text-gray-700 hover:text-blue-900 text-2xl hidden md:block" href="#">
              <FontAwesomeIcon icon={faSearch} />
            </a>
            <button className="text-gray-700 hover:text-blue-900 text-2xl hidden md:block" onClick={() => setIsSidebarOpen(true)}>
              <FontAwesomeIcon icon={faThLarge} />
            </button>
            <button className="md:hidden text-blue-900 text-2xl" onClick={() => setIsOpen(!isOpen)}>
              <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-blue-900 text-white flex flex-col items-center justify-center space-y-6 text-lg font-medium z-50">
          <button className="absolute top-6 right-6 text-white text-2xl hover:text-gray-300" onClick={() => setIsOpen(false)}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
          <Link to="/" className="hover:text-blue-300" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/About" className="hover:text-blue-300" onClick={() => setIsOpen(false)}>About Us</Link>
          <Link to="/contact" className="hover:text-blue-300" onClick={() => setIsOpen(false)}>Contacts</Link>
        </div>
      )}

      {/* Sidebar */}
      <Sider isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />

      {/* Prevent Content Overlap */}
      <div className="pt-[80px]"></div>
    </div>
  );
};

export default Navbar;