


// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './components/Navbar.jsx';
// import Sider from './components/Sider.jsx';
// import HomePage from './components/HomePage.jsx';
// import AboutUs from './components/AboutUs.jsx';
// import WhyChooseUs from './components/WhyChooseUs.jsx';
// import OurExpertise from './components/OurExpertise.jsx';
// import Footer from './components/Footer.jsx';
// import Contact from './pages/Contact.jsx';
// import About from './pages/About.jsx'
//  // Create this file if it doesn't exist

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         {/* Home Route - Displays Navbar, Sider, HomePage, Footer, etc. */}
//         <Route
//           path="/"
//           element={
//             <div>
//               <Navbar />
//               <HomePage/>
//               <Sider />
//               <AboutUs/>
//               {/* <HomePage /> */}
//               <WhyChooseUs />
//               <OurExpertise />
//               <Footer />
//             </div>
//           }
//         />

//         {/* About Us Route - Displays Only AboutUs Component */}
//         <Route path="/about" element={<About />} />

//         {/* Contacts Route - Displays Only Contacts Component */}
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;
// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import HomePage from "./components/HomePage";
// import About from "./pages/About"; // Import About from pages folder
// import Contact from "./pages/Contact"; // Import Contact from pages folder
// import WhyChooseUs from "./components/WhyChooseUs";
// import OurExpertise from "./components/OurExpertise";

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         {/* Home Route */}
//         <Route
//           path="/"
//           element={
//             <div>
                      
//       <Navbar />

//               <HomePage />
//               <WhyChooseUs />
//               <OurExpertise />
//             </div>
//           }
//         />

//         {/* About Route */}
//         <Route path="/about" element={<About />} />

//         {/* Contact Route */}
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//       <Footer />
//     </Router>
//   );
// };

// export default App;


import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Sider from './components/Sider.jsx';
import HomePage from './components/HomePage.jsx';
import AboutUs from './components/AboutUs.jsx';
import WhyChooseUs from './components/WhyChooseUs.jsx';
import OurExpertise from './components/OurExpertise.jsx';
import Footer from './components/Footer.jsx';
import Contact from './pages/Contact.jsx';
import About from './pages/About.jsx'; // Correct import path

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Home Route */}
        <Route
          path="/"
          element={
            <div>
              <Navbar />
              <HomePage />
              <Sider />
              <AboutUs />
              <WhyChooseUs />
              <OurExpertise />
              <Footer />
            </div>
          }
        />

        {/* About Us Route */}
        <Route path="/About" element={<About />} /> {/* Correct route path */}

        {/* Contacts Route */}
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;