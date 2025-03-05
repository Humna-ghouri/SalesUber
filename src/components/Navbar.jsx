// import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTwitter, faFacebookF, faLinkedinIn, faInstagram } from "@fortawesome/free-brands-svg-icons";
// import { faPhoneAlt, faEnvelope, faSearch, faTh, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div>
//       {/* 🔹 Top Bar (Hidden on Mobile, Visible on Desktop) */}
//       <div className="bg-blue-900 text-white py-2 hidden md:block">
//         <div className="container mx-auto px-8 md:px-12 flex justify-between items-center">
//           {/* ✅ Left Social Icons */}
//           <div className="flex space-x-4 items-center">
//             <a className="hover:text-gray-300" href="#"><FontAwesomeIcon icon={faTwitter} /></a>
//             <a className="hover:text-gray-300" href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
//             <a className="hover:text-gray-300" href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a>
//             <a className="hover:text-gray-300" href="#"><FontAwesomeIcon icon={faInstagram} /></a>
//           </div>

//           {/* ✅ Right Contact Info */}
//           <div className="flex space-x-6 items-center">
//             <span><FontAwesomeIcon icon={faPhoneAlt} /> +1-888-000-9999</span>
//             <span><FontAwesomeIcon icon={faEnvelope} /> info@salesuberllc.com</span>
//           </div>
//         </div>
//       </div>

//       {/* 🔹 Main Navigation Bar (Fixed for Desktop & Mobile) */}
//       <nav className="bg-white shadow">
//         <div className="container mx-auto px-6 md:px-12 flex items-center justify-between py-4">
//           {/* ✅ Logo */}
//           <div className="flex items-center space-x-4">
//             <img 
//               alt="SalesUber LLC Logo"
//               className="h-10"
//               src="https://storage.googleapis.com/a1aa/image/OHXeNB61Q1GQnjSJO2qFRPEWSh1Fd5DMvRcZB1Ld22M.jpg"
//               width="50"
//               height="50"
//             />
//             <span className="text-2xl font-bold text-blue-900">
//               SalesUber <span className="text-gray-500">LLC</span>
//             </span>
//           </div>

//           {/* ✅ Mobile Toggle Button */}
//           <button 
//             className="md:hidden text-blue-900 focus:outline-none" 
//             onClick={() => setIsOpen(!isOpen)}
//           >
//             <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="lg" />
//           </button>

//           {/* ✅ Navigation Links (Desktop = Row | Mobile = Vertical) */}
//           <div className={`md:flex md:items-center md:space-x-8 ${isOpen ? "flex flex-col p-4 space-y-2 bg-blue-900 text-white w-full absolute top-16 left-0 shadow-lg md:relative md:bg-transparent md:text-gray-700 md:p-0 md:space-y-0" : "hidden md:flex"}`}>
//             <a className="nav-link block md:inline text-center" href="#">Home</a>
//             <a className="nav-link block md:inline text-center" href="#">About Us</a>
//             <a className="nav-link block md:inline text-center" href="#">Contacts</a>
//           </div>

//           {/* ✅ Search & Grid Icons (SIZE INCREASED) */}
//           <div className="hidden md:flex space-x-6">
//             <a className="text-gray-700 hover:text-blue-900" href="#">
//               <FontAwesomeIcon icon={faSearch} size="lg" /> {/* 🔹 SIZE INCREASED */}
//             </a>
//             <a className="text-gray-700 hover:text-blue-900" href="#">
//               <FontAwesomeIcon icon={faTh} size="lg" /> {/* 🔹 SIZE INCREASED */}
//             </a>
//           </div>
//         </div>
//       </nav>

//       {/* ✅ Custom CSS for Underline Hover Effect */}
//       <style>{`
//         .nav-link {
//           position: relative;
//           text-decoration: none;
//           color: inherit;
//           padding-bottom: 4px;
//           transition: color 0.3s ease-in-out;
//         }

//         .nav-link:hover {
//           color: blue;
//         }

//         .nav-link:hover::after {
//           content: "";
//           position: absolute;
//           left: 0;
//           bottom: 0;
//           width: 100%;
//           height: 2px;
//           background-color: blue;
//           transition: width 0.3s ease-in-out;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Navbar;


// import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTwitter, faFacebookF, faLinkedinIn, faInstagram } from "@fortawesome/free-brands-svg-icons";
// import { faPhoneAlt, faEnvelope, faSearch, faTh, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
// import Sider from "./Sider"; // ✅ Sidebar Component Import Kiya

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false); // ✅ Sidebar Toggle State

//   return (
//     <div>
//       {/* 🔹 Top Bar (Hidden on Mobile, Visible on Desktop) */}
//       <div className="bg-blue-900 text-white py-2 hidden md:block">
//         <div className="container mx-auto px-8 md:px-12 flex justify-between items-center">
//           {/* ✅ Left Social Icons */}
//           <div className="flex space-x-4 items-center">
//             <a className="hover:text-gray-300" href="#"><FontAwesomeIcon icon={faTwitter} /></a>
//             <a className="hover:text-gray-300" href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
//             <a className="hover:text-gray-300" href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a>
//             <a className="hover:text-gray-300" href="#"><FontAwesomeIcon icon={faInstagram} /></a>
//           </div>

//           {/* ✅ Right Contact Info */}
//           <div className="flex space-x-6 items-center">
//             <span><FontAwesomeIcon icon={faPhoneAlt} /> +1-888-000-9999</span>
//             <span><FontAwesomeIcon icon={faEnvelope} /> info@salesuberllc.com</span>
//           </div>
//         </div>
//       </div>

//       {/* 🔹 Main Navigation Bar (SAME DESIGN) */}
//       <nav className="bg-white shadow fixed w-full top-0 left-0 z-[50]">
//         <div className="container mx-auto px-6 md:px-12 flex items-center justify-between py-4">
//           {/* ✅ Logo */}
//           <div className="flex items-center space-x-4">
//             <img 
//               alt="SalesUber LLC Logo"
//               className="h-10"
//               src="https://storage.googleapis.com/a1aa/image/OHXeNB61Q1GQnjSJO2qFRPEWSh1Fd5DMvRcZB1Ld22M.jpg"
//               width="50"
//               height="50"
//             />
//             <span className="text-2xl font-bold text-blue-900">
//               SalesUber <span className="text-gray-500">LLC</span>
//             </span>
//           </div>

//           {/* ✅ Mobile Toggle Button */}
//           <button 
//             className="md:hidden text-blue-900 focus:outline-none" 
//             onClick={() => setIsOpen(!isOpen)}
//           >
//             <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="lg" />
//           </button>

//           {/* ✅ Navigation Links */}
//           <div className={`md:flex md:items-center md:space-x-8 ${isOpen ? "flex flex-col p-4 space-y-2 bg-blue-900 text-white w-full absolute top-16 left-0 shadow-lg md:relative md:bg-transparent md:text-gray-700 md:p-0 md:space-y-0" : "hidden md:flex"}`}>
//           <a className="nav-link block md:inline text-center relative" href="#">
//     Home
//   </a>
//   <a className="nav-link block md:inline text-center relative" href="#AboutSec">
//     About Us
//   </a>
//   <a className="nav-link block md:inline text-center relative" href="#Contacts">
//     Contacts
//   </a>

//             <style>{`
            
//   .nav-link {
//     position: relative;
//     text-decoration: none;
//     color: inherit;
//     transition: color 0.3s ease-in-out;
//   }

//   .nav-link:hover {
//     color: blue; /* ✅ Hover pe Text Blue */
//   }

//   .nav-link::after {
//     content: "";
//     position: absolute;
//     left: 50%;
//     bottom: -2px;
//     width: 0;
//     height: 2px;
//     background-color: blue;
//     transition: width 0.3s ease-in-out, left 0.3s ease-in-out;
//   }

//   .nav-link:hover::after {
//     width: 100%; /* ✅ Hover pe Full Underline */
//     left: 0;
//   }
// `}</style>

//           </div>

//           {/* ✅ Search & Grid Icons */}
//           <div className="hidden md:flex space-x-6">
//             <a className="text-gray-700 hover:text-blue-900" href="#">
//               <FontAwesomeIcon icon={faSearch} size="lg" />
//             </a>
//             <button 
//               className="text-gray-700 hover:text-blue-900"
//               onClick={() => setIsSidebarOpen(true)} // ✅ Sidebar Open on Click
//             >
//               <FontAwesomeIcon icon={faTh} size="lg" />
//             </button>
//           </div>
//         </div>
//       </nav>

//       {/* 🔹 Sidebar Component */}
//       <Sider isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
// {isOpen && (
//     <div
//       className="fixed inset-0 z-[90]" // ✅ Overlay for Mobile Menu
//       onClick={() => setIsOpen(false)}
//     ></div>
//   )}

//     </div>
    
//   );
// };
// export default Navbar;



// import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTwitter, faFacebookF, faLinkedinIn, faInstagram } from "@fortawesome/free-brands-svg-icons";
// import { faPhoneAlt, faEnvelope, faSearch, faTh, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
// import Sider from "./Sider"; // ✅ Sidebar Component Import Kiya

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false); // ✅ Sidebar Toggle State

//   return (
//     <div>
//       {/* 🔹 Top Bar (Hidden on Mobile, Visible on Desktop) */}
//       <div className="bg-blue-900 text-white py-2 hidden md:block">
//         <div className="container mx-auto px-8 md:px-12 flex justify-between items-center">
//           {/* ✅ Left Social Icons */}
//           <div className="flex space-x-4 items-center">
//             <a className="hover:text-gray-300" href="#"><FontAwesomeIcon icon={faTwitter} /></a>
//             <a className="hover:text-gray-300" href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
//             <a className="hover:text-gray-300" href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a>
//             <a className="hover:text-gray-300" href="#"><FontAwesomeIcon icon={faInstagram} /></a>
//           </div>

//           {/* ✅ Right Contact Info */}
//           <div className="flex space-x-6 items-center">
//             <span><FontAwesomeIcon icon={faPhoneAlt} /> +1-888-000-9999</span>
//             <span><FontAwesomeIcon icon={faEnvelope} /> info@salesuberllc.com</span>
//           </div>
//         </div>
//       </div>

//       {/* 🔹 Main Navigation Bar (SAME DESIGN) */}
//       <nav className="bg-white shadow fixed w-full top-0 left-0 z-[50]">
//         <div className="container mx-auto px-6 md:px-12 flex items-center justify-between py-4">
//           {/* ✅ Logo */}
//           <div className="flex items-center space-x-4">
//             <img 
//               alt="SalesUber LLC Logo"
//               className="h-10"
//               src="https://storage.googleapis.com/a1aa/image/OHXeNB61Q1GQnjSJO2qFRPEWSh1Fd5DMvRcZB1Ld22M.jpg"
//               width="50"
//               height="50"
//             />
//             <span className="text-2xl font-bold text-blue-900">
//               SalesUber <span className="text-gray-500">LLC</span>
//             </span>
//           </div>

//           {/* ✅ Mobile Toggle Button */}
//           <button 
//             className="md:hidden text-blue-900 focus:outline-none z-[100]" 
//             onClick={() => setIsOpen(!isOpen)}
//           >
//             <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="lg" />
//           </button>

//           {/* ✅ Navigation Links (Fixed for Mobile & Desktop) */}
//           <div
//             className={`md:flex md:items-center md:space-x-8 ${
//               isOpen
//                 ? "flex flex-col p-4 space-y-2 bg-blue-900 text-white w-full fixed top-16 left-0 shadow-lg md:relative md:bg-transparent md:text-gray-700 md:p-0 md:space-y-0 z-[100]"
//                 : "hidden md:flex"
//             }`}
//           >
//             <a className="nav-link block md:inline text-center" href="#">Home</a>
//             <a className="nav-link block md:inline text-center" href="#">About Us</a>
//             <a className="nav-link block md:inline text-center" href="#">Contacts</a>
//           </div>

//           {/* ✅ Search & Sidebar Button */}
//           <div className="hidden md:flex space-x-6">
//             <a className="text-gray-700 hover:text-blue-900" href="#">
//               <FontAwesomeIcon icon={faSearch} size="lg" />
//             </a>
//             <button 
//               className="text-gray-700 hover:text-blue-900"
//               onClick={() => setIsSidebarOpen(true)} // ✅ Sidebar Open on Click
//             >
//               <FontAwesomeIcon icon={faTh} size="lg" />
//             </button>
//           </div>
//         </div>
//       </nav>

//       {/* 🔹 Sidebar Component - Issue Fixed */}
//       <Sider isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
//     </div>
//   );
// };

// export default Navbar;


// import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTwitter, faFacebookF, faLinkedinIn, faInstagram } from "@fortawesome/free-brands-svg-icons";
// import { faPhoneAlt, faEnvelope, faSearch, faTh, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
// import Sider from "./Sider"; // ✅ Sidebar Component Import Kiya

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false); // ✅ Sidebar Toggle State

//   return (
//     <div>
//       {/* 🔹 Top Bar (Fixed & Visible for Desktop) */}
//       <div className="bg-blue-900 text-white py-2 hidden md:block w-full fixed top-0 left-0 z-[50]">
//         <div className="container mx-auto px-8 md:px-12 flex justify-between items-center">
//           {/* ✅ Left Social Icons */}
//           <div className="flex space-x-4 items-center">
//             <a className="hover:text-gray-300" href="#"><FontAwesomeIcon icon={faTwitter} /></a>
//             <a className="hover:text-gray-300" href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
//             <a className="hover:text-gray-300" href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a>
//             <a className="hover:text-gray-300" href="#"><FontAwesomeIcon icon={faInstagram} /></a>
//           </div>

//           {/* ✅ Right Contact Info */}
//           <div className="flex space-x-6 items-center">
//             <span><FontAwesomeIcon icon={faPhoneAlt} /> +1-888-000-9999</span>
//             <span><FontAwesomeIcon icon={faEnvelope} /> info@salesuberllc.com</span>
//           </div>
//         </div>
//       </div>

//       {/* 🔹 Main Navigation Bar (Fixed & Visible for All Screens) */}
//       <nav className="bg-white shadow fixed w-full top-[40px] left-0 z-[50]">
//         <div className="container mx-auto px-6 md:px-12 flex items-center justify-between py-4">
//           {/* ✅ Logo */}
//           <div className="flex items-center space-x-4">
//             <img 
//               alt="SalesUber LLC Logo"
//               className="h-10"
//               src="https://storage.googleapis.com/a1aa/image/OHXeNB61Q1GQnjSJO2qFRPEWSh1Fd5DMvRcZB1Ld22M.jpg"
//               width="50"
//               height="50"
//             />
//             <span className="text-2xl font-bold text-blue-900">
//               SalesUber <span className="text-gray-500">LLC</span>
//             </span>
//           </div>

//           {/* ✅ Mobile Toggle Button */}
//           <button 
//             className="md:hidden text-blue-900 focus:outline-none z-[100]" 
//             onClick={() => setIsOpen(!isOpen)}
//           >
//             <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="lg" />
//           </button>

//           {/* ✅ Navigation Links (Fixed for Mobile & Desktop) */}
//           <div
//             className={`md:flex md:items-center md:space-x-8 ${
//               isOpen
//                 ? "flex flex-col p-4 space-y-2 bg-blue-900 text-white w-full fixed top-[80px] left-0 shadow-lg md:relative md:bg-transparent md:text-gray-700 md:p-0 md:space-y-0 z-[100]"
//                 : "hidden md:flex"
//             }`}
//           >
//             <a className="nav-link block md:inline text-center" href="#">Home</a>
//             <a className="nav-link block md:inline text-center" href="#">About Us</a>
//             <a className="nav-link block md:inline text-center" href="#">Contacts</a>
//           </div>

//           {/* ✅ Search & Sidebar Button */}
//           <div className="hidden md:flex space-x-6">
//             <a className="text-gray-700 hover:text-blue-900" href="#">
//               <FontAwesomeIcon icon={faSearch} size="lg" />
//             </a>
//             <button 
//               className="text-gray-700 hover:text-blue-900"
//               onClick={() => setIsSidebarOpen(true)} // ✅ Sidebar Open on Click
//             >
//               <FontAwesomeIcon icon={faTh} size="lg" />
//             </button>
//           </div>
//         </div>
//       </nav>

//       {/* 🔹 Sidebar Component - Fixed */}
//       <Sider isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
//     </div>
//   );
// };

// export default Navbar;


// import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTwitter, faFacebookF, faLinkedinIn, faInstagram } from "@fortawesome/free-brands-svg-icons";
// import { faPhoneAlt, faEnvelope, faSearch, faTh, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
// import Sider from "./Sider"; // ✅ Sidebar Component Import Kiya

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false); // ✅ Sidebar Toggle State

//   return (
//     <div>
//       {/* 🔹 Top Bar (Hidden on Mobile, Visible on Desktop) */}
//       <div className="bg-blue-900 text-white py-2 hidden md:block">
//         <div className="container mx-auto px-8 md:px-12 flex justify-between items-center">
//           {/* ✅ Left Social Icons */}
//           <div className="flex space-x-4 items-center">
//             <a className="hover:text-gray-300" href="#"><FontAwesomeIcon icon={faTwitter} /></a>
//             <a className="hover:text-gray-300" href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
//             <a className="hover:text-gray-300" href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a>
//             <a className="hover:text-gray-300" href="#"><FontAwesomeIcon icon={faInstagram} /></a>
//           </div>

//           {/* ✅ Right Contact Info */}
//           <div className="flex space-x-6 items-center">
//             <span><FontAwesomeIcon icon={faPhoneAlt} /> +1-888-000-9999</span>
//             <span><FontAwesomeIcon icon={faEnvelope} /> info@salesuberllc.com</span>
//           </div>
//         </div>
//       </div>

//       {/* 🔹 Main Navigation Bar (SAME DESIGN) */}
//       <nav className="bg-white shadow fixed w-full top-0 left-0 z-[50]">
//         <div className="container mx-auto px-6 md:px-12 flex items-center justify-between py-4">
//           {/* ✅ Logo */}
//           <div className="flex items-center space-x-4">
//             <img 
//               alt="SalesUber LLC Logo"
//               className="h-10"
//               src="https://storage.googleapis.com/a1aa/image/OHXeNB61Q1GQnjSJO2qFRPEWSh1Fd5DMvRcZB1Ld22M.jpg"
//               width="50"
//               height="50"
//             />
//             <span className="text-2xl font-bold text-blue-900">
//               SalesUber <span className="text-gray-500">LLC</span>
//             </span>
//           </div>

//           {/* ✅ Mobile Toggle Button */}
//           <button 
//             className="md:hidden text-blue-900 focus:outline-none z-[100]" 
//             onClick={() => setIsOpen(!isOpen)}
//           >
//             <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="lg" />
//           </button>

//           {/* ✅ Navigation Links (Fixed for Mobile & Desktop) */}
//           <div
//             className={`md:flex md:items-center md:space-x-8 ${
//               isOpen
//                 ? "flex flex-col p-4 space-y-2 bg-blue-900 text-white w-full fixed top-16 left-0 shadow-lg md:relative md:bg-transparent md:text-gray-700 md:p-0 md:space-y-0 z-[100]"
//                 : "hidden md:flex"
//             }`}
//           >
//             <a className="nav-link block md:inline text-center" href="#">Home</a>
//             <a className="nav-link block md:inline text-center" href="#">About Us</a>
//             <a className="nav-link block md:inline text-center" href="#">Contacts</a>
//           </div>

//           {/* ✅ Search & Sidebar Button */}
//           <div className="hidden md:flex space-x-6">
//             <a className="text-gray-700 hover:text-blue-900" href="#">
//               <FontAwesomeIcon icon={faSearch} size="lg" />
//             </a>
//             <button 
//               className="text-gray-700 hover:text-blue-900"
//               onClick={() => setIsSidebarOpen(true)} // ✅ Sidebar Open on Click
//             >
//               <FontAwesomeIcon icon={faTh} size="lg" />
//             </button>
//           </div>
//         </div>
//       </nav>

//       {/* 🔹 Sidebar Component - Issue Fixed */}
//       <Sider isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
//     </div>
//   );
// };

// export default Navbar;


// import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTwitter, faFacebookF, faLinkedinIn, faInstagram } from "@fortawesome/free-brands-svg-icons";
// import { faPhoneAlt, faEnvelope, faSearch, faTh, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
// import Sider from "./Sider"; // ✅ Sidebar Component Import Kiya

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false); // ✅ Sidebar Toggle State

//   // ✅ Small Screen Par Toggle Open Ho, To Blue Navbar Hide Ho Jaye
//   const shouldHideTopNav = (isOpen || isSidebarOpen) && window.innerWidth < 768; 

//   return (
//     <div>
//       {/* 🔹 Top Bar (Fixed & Visible for Desktop) - Hide If Menu or Sidebar is Open on Small Screen */}
//       {!shouldHideTopNav && (
//         <div className="bg-blue-900 text-white py-2 w-full fixed top-0 left-0 z-[60] hidden md:block">
//           <div className="container mx-auto px-8 md:px-12 flex justify-between items-center">
//             {/* ✅ Left Social Icons */}
//             <div className="flex space-x-4 items-center">
//               <a className="hover:text-gray-300" href="#"><FontAwesomeIcon icon={faTwitter} /></a>
//               <a className="hover:text-gray-300" href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
//               <a className="hover:text-gray-300" href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a>
//               <a className="hover:text-gray-300" href="#"><FontAwesomeIcon icon={faInstagram} /></a>
//             </div>

//             {/* ✅ Right Contact Info */}
//             <div className="flex space-x-6 items-center">
//               <span><FontAwesomeIcon icon={faPhoneAlt} /> +1-888-000-9999</span>
//               <span><FontAwesomeIcon icon={faEnvelope} /> info@salesuberllc.com</span>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* 🔹 Main Navigation Bar (Fixed & Adjusted) */}
//       <nav className="bg-white shadow fixed w-full top-[40px] left-0 z-[50]">
//         <div className="container mx-auto px-6 md:px-12 flex items-center justify-between py-4">
//           {/* ✅ Logo */}
//           <div className="flex items-center space-x-4">
//             <img 
//               alt="SalesUber LLC Logo"
//               className="h-10"
//               src="https://storage.googleapis.com/a1aa/image/OHXeNB61Q1GQnjSJO2qFRPEWSh1Fd5DMvRcZB1Ld22M.jpg"
//               width="50"
//               height="50"
//             />
//             <span className="text-2xl font-bold text-blue-900">
//               SalesUber <span className="text-gray-500">LLC</span>
//             </span>
//           </div>

//           {/* ✅ Mobile Toggle Button */}
//           <button 
//             className="md:hidden text-blue-900 focus:outline-none z-[100]" 
//             onClick={() => setIsOpen(!isOpen)}
//           >
//             <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="lg" />
//           </button>

//           {/* ✅ Navigation Links (Fixed for Mobile & Desktop) */}
//           <div
//             className={`md:flex md:items-center md:space-x-8 ${
//               isOpen
//                 ? "flex flex-col p-4 space-y-2 bg-blue-900 text-white w-full fixed top-16 left-0 shadow-lg md:relative md:bg-transparent md:text-gray-700 md:p-0 md:space-y-0 z-[100]"
//                 : "hidden md:flex"
//             }`}
//           >
//             <a className="nav-link block md:inline text-center" href="#">Home</a>
//             <a className="nav-link block md:inline text-center" href="#">About Us</a>
//             <a className="nav-link block md:inline text-center" href="#">Contacts</a>
//           </div>

//           {/* ✅ Search & Sidebar Button */}
//           <div className="hidden md:flex space-x-6">
//             <a className="text-gray-700 hover:text-blue-900" href="#">
//               <FontAwesomeIcon icon={faSearch} size="lg" />
//             </a>
//             <button 
//               className="text-gray-700 hover:text-blue-900"
//               onClick={() => setIsSidebarOpen(true)} // ✅ Sidebar Open on Click
//             >
//               <FontAwesomeIcon icon={faTh} size="lg" />
//             </button>
//           </div>
//         </div>
//       </nav>

//       {/* 🔹 Sidebar Component - Fixed */}
//       <Sider isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />

//       {/* ✅ Prevent Content from Going Under Navbar */}
//       <div className="pt-[100px]"></div>
//     </div>
//   );
// };

// export default Navbar;
// import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTwitter, faFacebookF, faLinkedinIn, faInstagram } from "@fortawesome/free-brands-svg-icons";
// import { faPhoneAlt, faEnvelope, faSearch, faTh, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
// import Sider from "./Sider"; // ✅ Sidebar Component Import Kiya

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false); // ✅ Sidebar Toggle State

//   // ✅ Small Screen Par Toggle Ya Sidebar Open Ho, To Blue Navbar Hide Ho Jaye
//   const shouldHideTopNav = (isOpen || isSidebarOpen) && window.innerWidth < 768;

//   return (
//     <div>
//       {/* 🔹 Top Bar (Fixed & Visible for Desktop) - Hide If Menu or Sidebar is Open on Small Screen */}
//       {!shouldHideTopNav && (
//         <div className="bg-blue-900 text-white py-2 w-full fixed top-0 left-0 z-[60] hidden md:block">
//           <div className="container mx-auto px-8 md:px-12 flex justify-between items-center">
//             {/* ✅ Left Social Icons */}
//             <div className="flex space-x-4 items-center">
//               <a className="hover:text-gray-300" href="#"><FontAwesomeIcon icon={faTwitter} /></a>
//               <a className="hover:text-gray-300" href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
//               <a className="hover:text-gray-300" href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a>
//               <a className="hover:text-gray-300" href="#"><FontAwesomeIcon icon={faInstagram} /></a>
//             </div>

//             {/* ✅ Right Contact Info */}
//             <div className="flex space-x-6 items-center">
//               <span><FontAwesomeIcon icon={faPhoneAlt} /> +1-888-000-9999</span>
//               <span><FontAwesomeIcon icon={faEnvelope} /> info@salesuberllc.com</span>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* 🔹 Main Navigation Bar (Fixed & Adjusted) */}
//       <nav
//         className="bg-white shadow fixed w-full left-0 z-[50]"
//         style={{
//           top: shouldHideTopNav ? "0px" : "40px", // ✅ Automatically Adjust Top Position
//         }}
//       >
//         <div className="container mx-auto px-6 md:px-12 flex items-center justify-between py-4">
//           {/* ✅ Logo */}
//           <div className="flex items-center space-x-4">
//             <img 
//               alt="SalesUber LLC Logo"
//               className="h-10"
//               src="https://storage.googleapis.com/a1aa/image/OHXeNB61Q1GQnjSJO2qFRPEWSh1Fd5DMvRcZB1Ld22M.jpg"
//               width="50"
//               height="50"
//             />
//             <span className="text-2xl font-bold text-blue-900">
//               SalesUber <span className="text-gray-500">LLC</span>
//             </span>
//           </div>

//           {/* ✅ Mobile Toggle Button */}
//           <button 
//             className="md:hidden text-blue-900 focus:outline-none z-[100]" 
//             onClick={() => setIsOpen(!isOpen)}
//           >
//             <FontAwesomeIcon icon={faBars} size="lg" />
//           </button>

//           {/* ✅ Navigation Links (Fixed for Mobile & Desktop) */}
//           <div
//             className={`fixed top-0 left-0 w-full h-full bg-blue-900 text-white flex flex-col items-center justify-center space-y-6 text-lg font-medium transition-transform duration-300 ease-in-out ${
//               isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
//             } md:relative md:flex md:flex-row md:items-center md:space-x-8 md:bg-transparent md:text-gray-700 md:translate-y-0 md:opacity-100 md:p-0`}
//           >
//             {/* ✅ Close Button in Menu */}
//             <button 
//               className="absolute top-6 right-6 text-white text-2xl hover:text-gray-300 md:hidden"
//               onClick={() => setIsOpen(false)}
//             >
//               <FontAwesomeIcon icon={faTimes} />
//             </button>

//             <a className="nav-link transition-all duration-200 hover:text-blue-300" href="#">Home</a>
//             <a className="nav-link transition-all duration-200 hover:text-blue-300" href="#">About Us</a>
//             <a className="nav-link transition-all duration-200 hover:text-blue-300" href="#">Contacts</a>
//           </div>

//           {/* ✅ Search & Sidebar Button */}
//           <div className="hidden md:flex space-x-6">
//             <a className="text-gray-700 hover:text-blue-900" href="#">
//               <FontAwesomeIcon icon={faSearch} size="lg" />
//             </a>
//             <button 
//               className="text-gray-700 hover:text-blue-900"
//               onClick={() => setIsSidebarOpen(true)} // ✅ Sidebar Open on Click
//             >
//               <FontAwesomeIcon icon={faTh} size="lg" />
//             </button>
//           </div>
//         </div>
//       </nav>

//       {/* 🔹 Sidebar Component - Fixed */}
//       <Sider 
//         isSidebarOpen={isSidebarOpen} 
//         setIsSidebarOpen={setIsSidebarOpen} 
//       />

//       {/* ✅ Prevent Content from Going Under Navbar */}
//       <div className="pt-[100px]"></div>
//     </div>
//   );
// };

// export default Navbar;


// import React, { useState, useEffect } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTwitter, faFacebookF, faLinkedinIn, faInstagram } from "@fortawesome/free-brands-svg-icons";
// import { faPhoneAlt, faEnvelope, faSearch, faThLarge, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
// import Sider from "./Sider";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [isScrolling, setIsScrolling] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolling(window.scrollY > 50);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <div>
//       {/* First (Blue) Navbar - Hide on Scroll */}
//       {!isScrolling && (
//         <div className="bg-blue-900 text-white py-2 w-full fixed top-0 left-0 z-50 hidden md:block">
//           <div className="max-w-screen-xl mx-auto flex justify-between items-center px-10">
//             <div className="flex space-x-3 items-center text-xs">
//               <a className="hover:text-gray-300" href="#"><FontAwesomeIcon icon={faTwitter}  /></a>
//               <a className="hover:text-gray-300" href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
//               <a className="hover:text-gray-300" href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a>
//               <a className="hover:text-gray-300" href="#"><FontAwesomeIcon icon={faInstagram} /></a>
//             </div>
//             <div className="flex space-x-4 items-center text-sm">
//               <span><FontAwesomeIcon icon={faPhoneAlt} className="text-xs" /> +1-888-000-9999</span>
//               <span><FontAwesomeIcon icon={faEnvelope} className="text-xs" /> info@salesuberllc.com</span>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Second (White) Navbar - Fixed on Scroll */}
//       <nav className={`bg-white shadow fixed w-full left-0 z-40 transition-all ${isScrolling ? "top-0" : "top-10"}`}>
//         <div className="max-w-screen-xl mx-auto flex items-center justify-between py-8 px-10">
//           <span className="text-2xl font-bold text-blue-900">SalesUber <span className="text-gray-500">LLC</span></span>
//           <div className="hidden md:flex space-x-10 text-lg font-medium">
//             {["Home", "About Us", "Contacts"].map((item, idx) => (
//               <a key={idx} className="relative hover:text-blue-300 transition-all duration-200 group" href="#">
//                 {item}
//                 <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-300 transition-all group-hover:w-full"></span>
//               </a>
//             ))}
//           </div>
//           <div className="flex space-x-6 items-center">
//             <a className="text-gray-700 hover:text-blue-900 text-2xl hidden md:block" href="#">
//               <FontAwesomeIcon icon={faSearch} />
//             </a>
//             <button className="text-gray-700 hover:text-blue-900 text-2xl hidden md:block" onClick={() => setIsSidebarOpen(true)}>
//               <FontAwesomeIcon icon={faThLarge} />
//             </button>
//             <button className="md:hidden text-blue-900 text-2xl" onClick={() => setIsOpen(!isOpen)}>
//               <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
//             </button>
//           </div>
//         </div>
//       </nav>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="fixed top-0 left-0 w-full h-full bg-blue-900 text-white flex flex-col items-center justify-center space-y-6 text-lg font-medium z-50">
//           <button className="absolute top-6 right-6 text-white text-2xl hover:text-gray-300" onClick={() => setIsOpen(false)}>
//             <FontAwesomeIcon icon={faTimes} />
//           </button>
//           {["Home", "About Us", "Contacts"].map((item, idx) => (
//             <a key={idx} className="hover:text-blue-300" href="#">{item}</a>
//           ))}
//         </div>
//       )}

//       {/* Sidebar */}
//       <Sider isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />

//       {/* Prevent Content Overlap */}
//       <div className="pt-[80px]"></div>
//     </div>
//   );
// };

// export default Navbar;


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
        <div className="bg-blue-900 text-white py-2 w-full fixed top-0 left-0 z-50 hidden md:block">
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