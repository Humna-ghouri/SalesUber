import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faEnvelope, faPhone, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faFacebookF, faLinkedinIn, faInstagram } from "@fortawesome/free-brands-svg-icons";
import bgImage from "../assets/bg-pheader.jpg"; // Background image from assets folder
import { Link } from "react-router-dom";


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
              <span className="text-xl font-bold text-black">logo</span>
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
            <button className="md:hidden text-black text-2xl" onClick={() => setIsOpen(!isOpen)}>
              <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
            </button>
          </div>
    
          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden bg-white shadow-md py-4">
              <Link to="/" className="block text-gray-700 hover:text-black font-bold px-4 py-2" onClick={() => setIsOpen(false)}>
                Home
              </Link>
              <Link to="/about" className="block text-gray-700 hover:text-black font-bold px-4 py-2" onClick={() => setIsOpen(false)}>
                About Us
              </Link>
              <Link to="/contact" className="block text-black font-bold px-4 py-2" onClick={() => setIsOpen(false)}>
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
            <h1 className="text-white text-4xl font-bold">About Us</h1>
          </div>
          <div className="absolute top-[50%] left-[80%] transform -translate-x-1/2 -translate-y-1/2 text-white text-sm">
            HOME <i className="fas fa-chevron-right mx-2"></i> About Us
          </div>
        </div>
      );
    };
    

const AboutUs = () => {
    return (
<div className="flex justify-center px-10">
  <div className="w-[90%] p-6">
    {/* About Us Section */}
    <section className="mb-12 ml-6 md:ml-8">
      <h1 className="text-6xl font-black mb-6 text-black">About Us</h1> {/* Bold and large */}
      <h2 className="text-4xl font-extrabold mb-6 text-gray-800"> {/* Bold and slightly smaller */}
        Discover SalesUberLC: Your Trusted Partner in Telecom Sales and Customer Success
      </h2>
      <p className="mb-6 text-lg font-medium text-gray-700">
        SalesUberLC was founded with a single goal in mind: to be the go-to partner for telecom providers looking to expand 
        their customer base and drive meaningful growth. With years of experience in sales and marketing, our team recognized 
        a gap in the industry—telecom providers needed a reliable partner who not only understood the technicalities of 
        customer acquisition but also had a genuine commitment to service quality and long-term customer satisfaction. Today, 
        SalesUberLC stands proudly as a bridge between major cable and internet providers and the communities they serve.
      </p>
    </section>

    {/* Divider */}
    <div className="border-b-2 border-gray-200 mb-12"></div>

    {/* Our Mission Section */}
    <section className="mb-12 ml-6 md:ml-8">
      <h1 className="text-6xl font-black mb-6 text-black">Our Mission</h1> {/* Bold and large */}
      <p className="mb-6 text-lg font-medium text-gray-700">
        At SalesUberLC, our mission is simple: to connect people with the services that improve their lives, while empowering 
        telecom providers to grow. We’re committed to supporting telecom providers through every step of the customer 
        acquisition process, from lead generation and outreach to seamless customer onboarding.
      </p>
    </section>

    {/* Divider */}
    <div className="border-b-2 border-gray-200 mb-12"></div>

    {/* What We Do Section */}
    <section className="mb-12 ml-6 md:ml-8">
      <h1 className="text-6xl font-black mb-6 text-black">What We Do</h1> {/* Bold and large */}
      <p className="mb-6 text-lg font-medium text-gray-700">
        As a full-service sales and marketing agency for telecom providers, we specialize in end-to-end customer acquisition 
        solutions. Here’s a closer look at the core areas we focus on:
      </p>
      <div className="space-y-6">
        <p className="text-lg font-medium text-gray-700">
          <strong className="text-black">Customer Acquisition:</strong> With a robust marketing strategy tailored to each provider’s unique brand, we reach 
          out to potential customers with precision, ensuring they’re well-informed and engaged.
        </p>
        <p className="text-lg font-medium text-gray-700">
          <strong className="text-black">Sales Excellence:</strong> Our sales team is trained to understand each customer’s needs and match them with the best 
          telecom solutions in their area. Every interaction is crafted to build trust, helping customers make confident decisions.
        </p>
        <p className="text-lg font-medium text-gray-700">
          <strong className="text-black">Customer Retention & Loyalty:</strong> Beyond sales, we are committed to nurturing long-term customer relationships. 
          Our follow-up process is designed to keep customers satisfied and loyal, promoting high retention rates for the providers 
          we work with.
        </p>
      </div>
    </section>

    {/* Divider */}
    {/* <div className="border-b-2 border-gray-200 mb-12"></div> */}

    {/* Our Values Section */}
    <section className="mb-12 ml-6 md:ml-8">
      <h1 className="text-6xl font-black text-center mb-8 text-black">Our Values</h1> {/* Bold and large */}
      <h2 className="text-4xl font-extrabold mb-6 text-center text-gray-800"> {/* Bold and slightly smaller */}
        At the heart of SalesUberLC, our values define who we are and guide everything we do:
      </h2>
      <div className="space-y-6">
        <p className="text-lg font-medium text-gray-700">
          <strong className="text-black">Integrity:</strong> We believe in transparency, honesty, and ethics. Every interaction we have with customers and providers alike is rooted in our commitment to integrity.
        </p>
        <p className="text-lg font-medium text-gray-700">
          <strong className="text-black">Quality Service:</strong> Quality isn’t just a goal—it’s a standard. From initial outreach to post-sale support, we ensure that every touchpoint is designed to exceed expectations.
        </p>
        <p className="text-lg font-medium text-gray-700">
          <strong className="text-black">Customer-Centric:</strong> Our customers are at the core of our operations. We strive to provide solutions that genuinely benefit them and enhance their experience.
        </p>
        <p className="text-lg font-medium text-gray-700">
          <strong className="text-black">Continuous Growth:</strong> For us, growth isn’t just about numbers; it’s about meaningful expansion. We work tirelessly to drive growth for our clients and contribute to their long-term success.
        </p>
      </div>
    </section>

    {/* Divider */}
    {/* <div className="border-b-2 border-gray-200 mb-12"></div> */}

    {/* Our Approach Section */}
    <section className="mb-12 ml-6 md:ml-8">
      <h2 className="text-4xl font-extrabold mb-6 text-black">Our Approach Includes:</h2> {/* Bold and slightly smaller */}
      <div className="space-y-6">
        <p className="text-lg font-medium text-gray-700">
          <strong className="text-black">Targeted Marketing Campaigns:</strong> Utilizing data-driven insights to reach sophisticated customers.
        </p>
        <p className="text-lg font-medium text-gray-700">
          <strong className="text-black">Transparent Process:</strong> Providing clear policies and services to help communities make informed decisions.
        </p>
        <p className="text-lg font-medium text-gray-700">
          <strong className="text-black">Innovative Programs:</strong> Encouraging higher education and building a foundation for success.
        </p>
        <p className="text-lg font-medium text-gray-700">
          <strong className="text-black">A Commitment to Excellence:</strong> Striving for excellence in everything we do.
        </p>
      </div>
    </section>

    {/* Divider */}
    {/* <div className="border-b-2 border-gray-200 mb-12"></div> */}

    {/* Serving Our Communities Section */}
    <section className="mb-12 ml-6 md:ml-8">
      <h2 className="text-4xl font-extrabold mb-6 text-black">Serving Our Communities</h2> {/* Bold and slightly smaller */}
      <p className="text-lg font-medium text-gray-700">
        We believe that success is about people—our clients and the wider communities. We are dedicated to providing knowledge, skills, and resources for a better future.
      </p>
    </section>

    {/* Divider */}
    {/* <div className="border-b-2 border-gray-200 mb-12"></div> */}

    {/* Partner with Us Section */}
    <section className="mb-12 ml-6 md:ml-8">
      <h2 className="text-4xl font-extrabold mb-6 text-black">Partner with Us</h2> {/* Bold and slightly smaller */}
      <p className="text-lg font-medium text-gray-700">
        Choosing SalesUberLC means gaining a dedicated ally focused on your success. We specialize in marketing strategies that deliver real results.
      </p>
      <p className="text-lg font-medium text-gray-700">
        From digital marketing to content marketing, we offer a range of services to help you achieve your business objectives.
      </p>
      <p className="text-lg font-medium text-gray-700">
        Connect with SalesUberLC today to learn how we can help you grow your business.
      </p>
    </section>
  </div>
</div>    );
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
      <HeroSection/>
      <AboutUs/>
      <Footer />
    </div>
  );
};

export default App;