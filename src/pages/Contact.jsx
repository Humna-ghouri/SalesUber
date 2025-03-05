// import React from "react";
// import bgImage from "../assets/bg-pheader.jpg"; // Background image from assets folder
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faGlobe, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
// import { faTwitter, faFacebookF, faLinkedinIn, faInstagram } from "@fortawesome/free-brands-svg-icons";


// const Header = () => {
//   return (
//     <div className="bg-blue-950 text-white text-sm py-2 px-[10%]">
//       <div className="container mx-auto flex justify-between items-center">
//         <div>
//           <i className="fas fa-envelope mr-2"></i>
//           info@salesuberllc.com
//           <span className="mx-4">|</span>
//           <i className="fas fa-clock mr-2"></i>
//           Mon - Sat: 8:00 am - 7:00 pm
//         </div>
//         <div className="flex space-x-4">
//           <i className="fab fa-twitter"></i>
//           <i className="fab fa-facebook-f"></i>
//           <i className="fab fa-linkedin-in"></i>
//         </div>
//       </div>
//     </div>
//   );
// };

// const Navbar = () => {
//   return (
//     <div className="bg-white shadow-md">
//       <div className="container mx-auto flex justify-between items-center py-4 px-[10%]">
//         <div className="flex items-center">
//           {/* <img src="./assets/logo.png" alt="loo" className="h-10 mr-2" /> */}
//           <span className="text-xl font-bold text-blue-900">logo</span>
//         </div>
//         <div className="flex space-x-8">
//           <a href="#" className="text-gray-700 hover:text-blue-900 font-bold">
//             Home
//           </a>
//           <a href="#" className="text-gray-700 hover:text-blue-900 font-bold">
//             About Us
//           </a>
//           <a href="#" className="text-blue-900 border-b-2 border-blue-900 font-bold">
//             Contacts
//           </a>
//         </div>
//         <div className="flex items-center space-x-4">
//           <i className="fas fa-search text-gray-700"></i>
//           <div className="text-right">
//             <p className="text-sm text-gray-700">Have Any Questions?</p>
//             <p className="text-lg text-blue-900 font-bold">+1-888-664-0735</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const HeroSection = () => {
//   return (
//     <div className="relative h-70 bg-cover bg-center" style={{ backgroundImage: `url(${bgImage})` }}>
//       <div className="absolute inset-0  bg-opacity-50 flex items-center pl-[15%]">
//         <h1 className="text-white text-4xl font-bold">Contacts</h1>
//       </div>
//       <div className="absolute top-[50%] left-[80%] transform -translate-x-1/2 -translate-y-1/2 text-white text-sm">
//         HOME <i className="fas fa-chevron-right mx-2"></i> CONTACTS
//       </div>
//     </div>
//   );
// };


// const ContactSection = () => {
//     return (
//       <div className="container  mx-auto mt-20 p-6 lg:px-26 flex flex-col lg:flex-row justify-between items-center lg:items-stretch">
//         {/* Spacer for left side */}
//         <div className="hidden lg:block lg:w-1/5"></div>
  
//         {/* Contact Details Section */}
//         <div className="w-full lg:w-3/4 mb-8 lg:mb-0 flex flex-col justify-center bg-white p-8">
//           <h2 className="text-purple-600 text-sm font-semibold">// CONTACT DETAILS</h2>
//           <h1 className="text-4xl font-bold mt-2">Contact us</h1>
//           <p className="text-gray-600 font-medium mt-4">
//             Give us a call or drop by anytime, we endeavour to answer all enquiries within 24 hours on business days. We will be happy to answer your questions.
//           </p>
//           <div className="mt-8 ml-10">
//             <div className="flex items-center mb-10">
//               <i className="fas fa-globe text-2xl text-blue-500 mr-4"></i>
//               <div>
//                 <p className="font-semibold">Our Address:</p>
//                 <p>8858 Dee Rd Des Plaines, IL 60016</p>
//               </div>
//             </div>
//             <div className="flex items-center mb-10">
//               <i className="fas fa-envelope text-2xl text-blue-500 mr-4"></i>
//               <div>
//                 <p className="font-semibold">Our Mailbox:</p>
//                 <p>info@salesuberllc.com</p>
//               </div>
//             </div>
//             <div className="flex items-center">
//               <i className="fas fa-phone text-2xl text-blue-500 mr-4"></i>
//               <div>
//                 <p className="font-semibold">Our Phone:</p>
//                 <p>+1-888-664-0735</p>
//               </div>
//             </div>
//           </div>
//         </div>
  
//         {/* Contact Form Section */}
//         <div className="w-full lg:w-[75%] bg-gradient-to-r from-blue-500 to-purple-500 p-10 ml-20 mb-9 flex flex-col justify-center h-[100%] ">
//           <h2 className="text-white text-3xl font-bold mb-4">Ready to Get Started?</h2>
//           <p className="text-white mb-6">
//             Your email address will not be published. Required fields are marked *
//           </p>
//           <form>
//             <div className="mb-4">
//               <input
//                 type="text"
//                 placeholder="Your Name *"
//                 className="w-full p-3 bg-white/10 backdrop-blur-md text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white"
//               />
//             </div>
//             <div className="mb-4">
//               <input
//                 type="email"
//                 placeholder="Your Email *"
//                 className="w-full p-3 bg-white/10 backdrop-blur-md text-white placeholder-white  focus:outline-none focus:ring-2 focus:ring-white"
//               />
//             </div>
//             <div className="mb-4">
//               <textarea
//                 placeholder="Message..."
//                 className="w-full p-3 bg-white/10 backdrop-blur-md text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white h-30"
//               ></textarea>
//             </div>
//             <button type="submit" className="bg-white text-black text-sm font-bold py-2 px-6  hover:bg-gray-100">
//               SEND MESSAGE
//             </button>
//           </form>
//         </div>
  
//         {/* Spacer for right side */}
//         <div className="hidden lg:block lg:w-1/5"></div>
//       </div>

      
//     );
//   };
  
// // world map

// const GoogleMap = () => {
//     return (
//       <div className="map-container w-full h-60 md:h-96 mt-20 lg:h-[500px] overflow-hidden rounded-lg shadow-lg">
//         <iframe
//           className="map-iframe w-full h-full border-0"
//           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23714.073073073073!2d-87.940033!3d42.033362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fb0b1b1b1b1b1%3A0x1b1b1b1b1b1b1b1b!2s8858%20Dee%20Rd%2C%20Des%20Plaines%2C%20IL%2060016%2C%20USA!5e0!3m2!1sen!2sus!4v1633023033030!5m2!1sen!2sus"
//           allowFullScreen=""
//           loading="lazy"
//         ></iframe>
//       </div>
//     );
//   };  



// const Footer = () => {
//   return (
//     <footer className="text-center py-10 bg-gray-900 text-white h-[90%]">
//       {/* Logo and Company Name */}
//       <div className="mb-6">
//         {/* <img
//           alt="SalesUber LLC logo"
//           className="mx-auto mb-4"
//           height="50"
//           src="https://storage.googleapis.com/a1aa/image/ExeShQ8munxlUQ17RgJuajgKNe5GIKY16uZRz3mJGGY.jpg"
//           width="100"
//         /> */}
//         <h1 className="text-2xl font-bold">
//           SalesUber
//           <span className="text-sm">LLC</span>
//         </h1>
//       </div>

//       {/* Address, Email, and Phone */}
//       <div className="flex flex-col md:flex-row justify-center space-y-9 md:space-y-0 md:space-x-16 mb-6">
//         <div className="text-center">
//           <FontAwesomeIcon icon={faGlobe} className="text-3xl text-blue-500 mb-2" />
//           <p>23414 West Fernhurst Dr Apt 2309, Katy, Texas 77494</p>
//           <p className="text-gray-400">Our Address</p>
//         </div>
//         <div className="text-center">
//           <FontAwesomeIcon icon={faEnvelope} className="text-3xl text-blue-500 mb-2" />
//           <p>info@salesuberllc.com</p>
//           <p className="text-gray-400">Our Mailbox</p>
//         </div>
//         <div className="text-center">
//           <FontAwesomeIcon icon={faPhone} className="text-3xl text-blue-500 mb-2" />
//           <p>+1-888-000-9999</p>
//           <p className="text-gray-400">Our Phone</p>
//         </div>
//       </div>

//       {/* Navigation Links */}
//       <div className="flex justify-center space-x-8 mb-6">
//         <a className="hover:underline" href="#">
//           Home
//         </a>
//         <a className="hover:underline" href="#">
//           About Us
//         </a>
//         <a className="hover:underline" href="#">
//           Contacts
//         </a>
//       </div>

//       {/* Copyright */}
//       <div className="mb-6">
//         <p className="text-gray-400">
//           Copyright © 2024 All Rights Reserved. SalesUberLLC.Com
//         </p>
//       </div>

//       {/* Social Media Icons */}
//       <div className="flex justify-center space-x-4">
//         <a className="text-gray-400 hover:text-white" href="#">
//           <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center">
//             <FontAwesomeIcon icon={faTwitter} />
//           </div>
//         </a>
//         <a className="text-gray-400 hover:text-white" href="#">
//           <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center">
//             <FontAwesomeIcon icon={faFacebookF} />
//           </div>
//         </a>
//         <a className="text-gray-400 hover:text-white" href="#">
//           <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center">
//             <FontAwesomeIcon icon={faLinkedinIn} />
//           </div>
//         </a>
//         <a className="text-gray-400 hover:text-white" href="#">
//           <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center">
//             <FontAwesomeIcon icon={faInstagram} />
//           </div>
//         </a>
//       </div>
//     </footer>
//   );
// };


// const App = () => {
//   return (
//     <div>
//       <Header />
//       <Navbar />
//       <HeroSection />
//       <ContactSection/>
//       <GoogleMap/>
//       <Footer/>
//     </div>
//   );
// };

// export default App;


import React, { useState } from "react";
import { Link } from "react-router-dom"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faEnvelope, faPhone, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faFacebookF, faLinkedinIn, faInstagram } from "@fortawesome/free-brands-svg-icons";
import bgImage from "../assets/bg-pheader.jpg"; // Background image from assets folder

const Header = () => {
  return (
    <div className="bg-blue-950 text-white text-sm py-2 px-[10%] hidden md:block">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <i className="fas fa-envelope mr-2"></i>
          info@salesuberllc.com
          <span className="mx-4">|</span>
          <i className="fas fa-clock mr-2"></i>
          Mon - Sat: 8:00 am - 7:00 pm
        </div>
        <div className="flex space-x-4">
          <i className="fab fa-twitter"></i>
          <i className="fab fa-facebook-f"></i>
          <i className="fab fa-linkedin-in"></i>
        </div>
      </div>
    </div>
  );
};

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <div className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center py-4 px-[10%]">
          <div className="flex items-center">
            <span className="text-xl font-bold text-blue-900">logo</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-black hover:text-blue-300 font-bold relative group">
              Home
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-300 transition-all group-hover:w-full"></span>
            </Link>
            <Link to="/about" className="text-black hover:text-blue-300 font-bold relative group">
              About Us
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-300 transition-all group-hover:w-full"></span>
            </Link>
            <Link to="/contact" className="text-black hover:text-blue-300 font-bold relative group">
              Contacts
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-300 transition-all group-hover:w-full"></span>
            </Link>
          </div>
  
          <div className="hidden md:flex items-center space-x-4">
            <i className="fas fa-search text-gray-700"></i>
            <div className="border-l-2 border-gray-400 h-10"></div>
            <div className="text-right">
              <p className="text-sm text-black">Have Any Questions?</p>
              <p className="text-lg text-black font-bold">+1-888-664-0735</p>
            </div>
          </div>
  
          <button className="md:hidden text-blue-900 text-2xl" onClick={() => setIsOpen(!isOpen)}>
            <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
          </button>
        </div>
  
        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white shadow-md py-4">
            <Link to="/" className="block text-gray-700 hover:text-blue-900 font-bold px-4 py-2">
              Home
            </Link>
            <Link to="/about" className="block text-gray-700 hover:text-blue-900 font-bold px-4 py-2">
              About Us
            </Link>
            <Link to="/contact" className="block text-blue-900 font-bold px-4 py-2">
              Contacts
            </Link>
          </div>
        )}
      </div>
    );
  };
  
const HeroSection = () => {
  return (
    <div className="relative h-70 bg-cover bg-center" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="absolute inset-0 bg-opacity-50 flex items-center pl-[15%]">
        <h1 className="text-white text-4xl font-bold">Contacts</h1>
      </div>
      <div className="absolute top-[50%] left-[80%] transform -translate-x-1/2 -translate-y-1/2 text-white text-sm">
        HOME <i className="fas fa-chevron-right mx-2"></i> CONTACTS
      </div>
    </div>
  );
};

const ContactSection = () => {
    return (
      <div className="container mx-auto mt-20 p-6 lg:px-10 flex flex-col lg:flex-row justify-between items-center lg:items-stretch">
        {/* Spacer for left side */}
        <div className="hidden lg:block lg:w-1/5"></div>
  
        {/* Contact Details Section */}
        <div className="w-full lg:w-3/4 mb-8 lg:mb-0 flex flex-col justify-center bg-white p-8">
          <h2 className="text-purple-600 text-sm font-semibold">// CONTACT DETAILS</h2>
          <h1 className="text-4xl font-bold mt-2">Contact us</h1>
          <p className="text-gray-600 font-medium mt-4">
            Give us a call or drop by anytime, we endeavour to answer all enquiries within 24 hours on business days. We will be happy to answer your questions.
          </p>
          <div className="mt-8 ml-10">
            <div className="flex items-center mb-10">
              <i className="fas fa-globe text-2xl text-blue-500 mr-4"></i>
              <div>
                <p className="font-semibold">Our Address:</p>
                <p>8858 Dee Rd Des Plaines, IL 60016</p>
              </div>
            </div>
            <div className="flex items-center mb-10">
              <i className="fas fa-envelope text-2xl text-blue-500 mr-4"></i>
              <div>
                <p className="font-semibold">Our Mailbox:</p>
                <p>info@salesuberllc.com</p>
              </div>
            </div>
            <div className="flex items-center">
              <i className="fas fa-phone text-2xl text-blue-500 mr-4"></i>
              <div>
                <p className="font-semibold">Our Phone:</p>
                <p>+1-888-664-0735</p>
              </div>
            </div>
          </div>
        </div>
  
        {/* Contact Form Section */}
        <div className="w-full lg:w-[75%] bg-gradient-to-r from-blue-500 to-purple-500 p-6 lg:p-10 mb-9 flex flex-col justify-center">
          <h2 className="text-white text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-white mb-6">
            Your email address will not be published. Required fields are marked *
          </p>
          <form className="w-full">
            <div className="mb-4">
              <input
                type="text"
                placeholder="Your Name *"
                className="w-full p-3 bg-white/10 backdrop-blur-md text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Your Email *"
                className="w-full p-3 bg-white/10 backdrop-blur-md text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white"
              />
            </div>
            <div className="mb-4">
              <textarea
                placeholder="Message..."
                className="w-full p-3 bg-white/10 backdrop-blur-md text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white h-32"
              ></textarea>
            </div>
            <button type="submit" className="bg-white text-black text-sm font-bold py-2 px-6 hover:bg-gray-100">
              SEND MESSAGE
            </button>
          </form>
        </div>
  
        {/* Spacer for right side */}
        <div className="hidden lg:block lg:w-1/5"></div>
      </div>
    );
  };
  
  const GoogleMap = () => {
  return (
    <div className="map-container w-full h-60 md:h-96 mt-20 lg:h-[500px] overflow-hidden  shadow-lg">
      <iframe
        className="map-iframe w-full h-full border-0"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23714.073073073073!2d-87.940033!3d42.033362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fb0b1b1b1b1b1%3A0x1b1b1b1b1b1b1b1b!2s8858%20Dee%20Rd%2C%20Des%20Plaines%2C%20IL%2060016%2C%20USA!5e0!3m2!1sen!2sus!4v1633023033030!5m2!1sen!2sus"
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="text-center py-10 bg-gray-900 text-white h-[90%]">
      {/* Logo and Company Name */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold">
          SalesUber
          <span className="text-sm">LLC</span>
        </h1>
      </div>

      {/* Address, Email, and Phone */}
      <div className="flex flex-col md:flex-row justify-center space-y-9 md:space-y-0 md:space-x-16 mb-6">
        <div className="text-center">
          <FontAwesomeIcon icon={faGlobe} className="text-3xl text-blue-500 mb-2" />
          <p>23414 West Fernhurst Dr Apt 2309, Katy, Texas 77494</p>
          <p className="text-gray-400">Our Address</p>
        </div>
        <div className="text-center">
          <FontAwesomeIcon icon={faEnvelope} className="text-3xl text-blue-500 mb-2" />
          <p>info@salesuberllc.com</p>
          <p className="text-gray-400">Our Mailbox</p>
        </div>
        <div className="text-center">
          <FontAwesomeIcon icon={faPhone} className="text-3xl text-blue-500 mb-2" />
          <p>+1-888-000-9999</p>
          <p className="text-gray-400">Our Phone</p>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="flex justify-center space-x-8 mb-6">
        <a className="hover:underline" href="#">
          Home
        </a>
        <a className="hover:underline" href="#">
          About Us
        </a>
        <a className="hover:underline" href="#">
          Contacts
        </a>
      </div>

      {/* Copyright */}
      <div className="mb-6">
        <p className="text-gray-400">
          Copyright © 2024 All Rights Reserved. SalesUberLLC.Com
        </p>
      </div>

      {/* Social Media Icons */}
      <div className="flex justify-center space-x-4">
        <a className="text-gray-400 hover:text-white" href="#">
          <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center">
            <FontAwesomeIcon icon={faTwitter} />
          </div>
        </a>
        <a className="text-gray-400 hover:text-white" href="#">
          <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center">
            <FontAwesomeIcon icon={faFacebookF} />
          </div>
        </a>
        <a className="text-gray-400 hover:text-white" href="#">
          <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </div>
        </a>
        <a className="text-gray-400 hover:text-white" href="#">
          <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center">
            <FontAwesomeIcon icon={faInstagram} />
          </div>
        </a>
      </div>
    </footer>
  );
};

const App = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <HeroSection />
      <ContactSection />
      <GoogleMap />
      <Footer />
    </div>
  );
};

export default App;