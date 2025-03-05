

// import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faMapMarkerAlt, faEnvelope, faPhone, faTimes } from "@fortawesome/free-solid-svg-icons";
// import { faTwitter, faFacebookF, faPinterest, faInstagram } from "@fortawesome/free-brands-svg-icons";

// const Sider = ({ isSidebarOpen, setIsSidebarOpen }) => {
//   return (
//     <>
//       {/* 🔹 Overlay Backdrop */}
//       {isSidebarOpen && (
//         <div
//           className="fixed inset-0  backdrop-blur-sm z-50"
//           onClick={() => setIsSidebarOpen(false)} // ✅ Close Sidebar on Click Outside
//         ></div>
//       )}

//       {/* 🔹 Sidebar Panel */}
//       <div
//         className={`fixed top-0 right-0 max-w-sm w-full h-full bg-white shadow-xl  overflow-hidden transform transition-transform duration-300 z-50 ${
//           isSidebarOpen ? "translate-x-0" : "translate-x-full"
//         }`}
//       >
//         {/* 🔹 Sidebar Header */}
//         <div className="p-6">
//           <div className="flex justify-between items-center">
//             <div className="flex items-center">
//               <img
//                 alt="Engitech logo"
//                 className="w-10 h-10"
//                 src="https://storage.googleapis.com/a1aa/image/XeUtaQzIvTgOl6sSgb4b4wrrosqqmMWt2-3PUYC2bfk.jpg"
//               />
//               <span className="ml-2 text-xl font-extrabold text-gray-800 font-anton">Engitech</span>
//             </div>
//             <button
//               className="text-gray-500 text-2xl hover:text-gray-700 transition"
//               onClick={() => setIsSidebarOpen(false)}
//             >
//               <FontAwesomeIcon icon={faTimes} />
//             </button>
//           </div>

//           {/* 🔹 Sidebar Description */}
//           <p className="mt-4 text-gray-700 font-kanit leading-relaxed">
//             Over 10 years we help companies reach their financial and branding goals. Engitech is a values-driven technology agency dedicated to success.
//           </p>

//           {/* 🔹 Gallery */}
//           <h2 className="mt-6 text-lg text-black font-kanit uppercase tracking-wide">Gallery</h2>
//           <div className="grid grid-cols-3 gap-2 mt-4">
//             {[...Array(6)].map((_, i) => (
//               <img
//                 key={i}
//                 className="w-full h-full object-cover rounded-lg hover:scale-105 transition-transform duration-300"
//                 src="https://storage.googleapis.com/a1aa/image/NGinJRSIV0A71g8KS40mFKTUzUf-xwt_c1df54Rko3k.jpg"
//                 alt="Gallery Item"
//               />
//             ))}
//           </div>

//           {/* 🔹 Contacts */}
//           <h2 className="mt-6 text-lg text-black font-kanit uppercase tracking-wide">Contacts</h2>
//           <div className="mt-4">
//             <div className="flex items-center text-gray-700">
//               <FontAwesomeIcon icon={faMapMarkerAlt} className="w-6 text-blue-900" />
//               <span className="ml-2 font-kanit">411 University St, Seattle, USA</span>
//             </div>
//             <div className="flex items-center text-gray-700 mt-2">
//               <FontAwesomeIcon icon={faEnvelope} className="w-6 text-blue-900" />
//               <span className="ml-2 font-kanit">engitech@oceanthemes.net</span>
//             </div>
//             <div className="flex items-center text-gray-700 mt-2">
//               <FontAwesomeIcon icon={faPhone} className="w-6 text-blue-900" />
//               <span className="ml-2 font-kanit">+1-800-456-478-23</span>
//             </div>
//           </div>

//           {/* 🔹 Social Media Icons */}
//           <div className="flex mt-4 space-x-4">
//             <a className="text-blue-500 hover:text-blue-700 transition" href="#">
//               <FontAwesomeIcon icon={faTwitter} size="lg" />
//             </a>
//             <a className="text-blue-700 hover:text-blue-900 transition" href="#">
//               <FontAwesomeIcon icon={faFacebookF} size="lg" />
//             </a>
//             <a className="text-red-500 hover:text-red-700 transition" href="#">
//               <FontAwesomeIcon icon={faPinterest} size="lg" />
//             </a>
//             <a className="text-orange-500 hover:text-orange-700 transition" href="#">
//               <FontAwesomeIcon icon={faInstagram} size="lg" />
//             </a>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Sider;



import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faEnvelope, faPhone, faTimes } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faFacebookF, faPinterest, faInstagram } from "@fortawesome/free-brands-svg-icons";

// Import images from the assets folder
import image1 from "../assets/project11-720x720.jpg";
import image2 from "../assets/project10-720x720.jpg";
import image3 from "../assets/project4-720x520.jpg";
import image4 from "../assets/project6-720x720.jpg";
import image5 from "../assets/project7-720x520.jpg";
import image6 from "../assets/project10-720x720.jpg";

const Sider = ({ isSidebarOpen, setIsSidebarOpen }) => {
  // Array of imported images
  const galleryImages = [image1, image2, image3, image4, image5, image6];

  return (
    <>
      {/* 🔹 Overlay Backdrop */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 backdrop-blur-sm z-50"
          onClick={() => setIsSidebarOpen(false)} // ✅ Close Sidebar on Click Outside
        ></div>
      )}

      {/* 🔹 Sidebar Panel */}
      <div
        className={`fixed top-0 right-0 max-w-sm w-full h-full bg-white shadow-xl overflow-hidden transform transition-transform duration-300 z-50 ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* 🔹 Sidebar Header */}
        <div className="p-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <img
                alt="Engitech logo"
                className="w-10 h-10"
                src="https://storage.googleapis.com/a1aa/image/XeUtaQzIvTgOl6sSgb4b4wrrosqqmMWt2-3PUYC2bfk.jpg"
              />
              <span className="ml-2 text-xl font-extrabold text-gray-800 font-anton">Engitech</span>
            </div>
            <button
              className="text-gray-500 text-2xl hover:text-gray-700 transition"
              onClick={() => setIsSidebarOpen(false)}
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>

          {/* 🔹 Sidebar Description */}
          <p className="mt-4 text-gray-700 font-kanit leading-relaxed">
            Over 10 years we help companies reach their financial and branding goals. Engitech is a values-driven technology agency dedicated to success.
          </p>

          {/* 🔹 Gallery */}
          <h2 className="mt-6 text-lg text-black font-kanit uppercase tracking-wide">Gallery</h2>
          <div className="grid grid-cols-3 gap-2 mt-4">
            {galleryImages.map((image, index) => (
              <img
                key={index}
                className="w-full h-full object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                src={image} // Use the imported image
                alt={`Gallery Item ${index + 1}`}
              />
            ))}
          </div>

          {/* 🔹 Contacts */}
          <h2 className="mt-6 text-lg text-black font-kanit uppercase tracking-wide">Contacts</h2>
          <div className="mt-4">
            <div className="flex items-center text-gray-700">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="w-6 text-blue-900" />
              <span className="ml-2 font-kanit">411 University St, Seattle, USA</span>
            </div>
            <div className="flex items-center text-gray-700 mt-2">
              <FontAwesomeIcon icon={faEnvelope} className="w-6 text-blue-900" />
              <span className="ml-2 font-kanit">engitech@oceanthemes.net</span>
            </div>
            <div className="flex items-center text-gray-700 mt-2">
              <FontAwesomeIcon icon={faPhone} className="w-6 text-blue-900" />
              <span className="ml-2 font-kanit">+1-800-456-478-23</span>
            </div>
          </div>

          {/* 🔹 Social Media Icons */}
          <div className="flex mt-4 space-x-4">
            <a className="text-blue-500 hover:text-blue-700 transition" href="#">
              <FontAwesomeIcon icon={faTwitter} size="lg" />
            </a>
            <a className="text-blue-700 hover:text-blue-900 transition" href="#">
              <FontAwesomeIcon icon={faFacebookF} size="lg" />
            </a>
            <a className="text-red-500 hover:text-red-700 transition" href="#">
              <FontAwesomeIcon icon={faPinterest} size="lg" />
            </a>
            <a className="text-orange-500 hover:text-orange-700 transition" href="#">
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sider;