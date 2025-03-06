


import React from "react";
import footerBg from "../assets/bg-footer1.png"; // ✅ Import Background Image

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobe,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer 
      className="relative py-14 text-white w-full"
      style={{
        backgroundImage: `url(${footerBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#133E89", // ✅ Background Color with Transparency
        backgroundBlendMode: "overlay", // ✅ Blend Image with Color
      }}
    >
      <div className="container mx-auto text-center px-4 sm:px-8 ">
        {/* ✅ Logo */}
        <div className="mb-10">
          {/* <img
            alt="SalesUber LLC logo"
            className="mx-auto mb-6 w-[100px] sm:w-[120px] h-auto"
            src="https://storage.googleapis.com/a1aa/image/Pa0VsyA807fRxlI1gnJb1WwtBLIaTWB3wR6rgpwrEDs.jpg"
          /> */}
          <h1>LOGO</h1>
        </div>

        {/* ✅ Contact Information Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center mb-10">
          {[{ icon: faGlobe, text: "23414 West Fernhurst Dr Apt 2309 Katy, Texas 77494", label: "Our Address" },
            { icon: faEnvelope, text: "info@salesuberllc.com", label: "Our Mailbox" },
            { icon: faPhone, text: "+1-888-000-9999", label: "Our Phone" }].map((item, index) => (
              <div key={index} className="space-y-4 flex flex-col items-center">
                <FontAwesomeIcon icon={item.icon} className="text-3xl text-blue-400" />
                <p className="text-sm text-center max-w-xs">{item.text}</p>
                <p className="text-gray-300 text-xs">{item.label}</p>
              </div>
          ))}
        </div>

        {/* ✅ Navigation Links */}
        <div className="flex flex-wrap justify-center gap-6 text-lg mb-10">
          {["Home", "About Us", "Contacts"].map((link, index) => (
            <a key={index} className="hover:text-blue-400 transition duration-300 px-3 py-1" href="#">
              {link}
            </a>
          ))}
        </div>

        {/* ✅ Copyright Text */}
        <p className="text-gray-300 text-xs mb-8 px-5 py-2 ">
          Copyright © 2024 - All Rights Reserved. SalesUberLLC.com
        </p>

        {/* ✅ Social Media Icons */}
        <div className="flex justify-center gap-6 text-xl">
          {[faFacebookF, faTwitter, faLinkedinIn, faInstagram].map((icon, index) => (
            <a key={index} className="text-gray-300 hover:text-blue-400 transition duration-300 p-2" href="#">
              <FontAwesomeIcon icon={icon} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
