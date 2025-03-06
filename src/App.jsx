
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