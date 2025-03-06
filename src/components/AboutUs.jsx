import React from 'react';
import mainImage from "../assets/image1-home1.png";
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome


const AboutSection = () => {
  return (
    <section className="relative flex flex-col lg:flex-row items-center w-full py-16 lg:py-24 mt-20">
      {/* Left Text Content */}
      <div className="lg:w-[40%] text-left px-6 lg:px-10 lg:ml-[10%] lg:pt-16 lg:pb-16">
        <h4 className="text-purple-700 text-xs uppercase">// About Company</h4>
        <h2 className="text-3xl lg:text-4xl font-bold mt-2">Who We Are</h2>
        <p className="text-gray-600 text-sm lg:text-base mt-4 font-bold">
          salesuberllc is a leading sales and marketing partner dedicated to helping telecom providers expand their reach and grow their customer base. 
          We are proud to work alongside top cable and internet providers, connecting them to customers seeking the best service options in their area. 
          With salesuberllc, providers gain a trusted ally who understands the industry and brings expertise to every step of the customer acquisition process.
        </p>

        {/* Experience and Quick Support */}
        <div className="flex flex-col sm:flex-row gap-8 mt-6">
          <div className="flex flex-col items-start gap-4 group">
            <i className="fas fa-award text-purple-600 text-4xl"></i>
            <div className="space-y-3">
              <h4 className="font-bold text-lg">Experience</h4>
              <hr className="text-gray-300 w-44 border-t-3 transition-all duration-300 group-hover:w-44 group-hover:border-purple-600" />
              <p className="text-gray-500 text-xs lg:text-sm font-bold">
                Our great team of more than 1400 software experts.
              </p>
            </div>
          </div>
          
          <div className="flex flex-col items-start gap-4 group">
            <i className="fas fa-bolt text-purple-600 text-4xl"></i>
            <div className="space-y-3">
              <h4 className="font-bold text-lg">Quick Support</h4>
              <hr className="text-gray-300 w-44 border-t-3 transition-all duration-300 group-hover:w-44 group-hover:border-purple-600" />
              <p className="text-gray-500 text-xs lg:text-sm font-bold">
                We’ll help you test bold new ideas while sharing your vision.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Image Content - Larger Image on Desktop */}
      <div className="lg:absolute right-0 lg:w-[50%] flex justify-end mt-10 lg:mt-0 lg:pt-16 lg:pb-16">
        <img 
          src={mainImage} 
          alt="Team Work" 
          className="w-full lg:w-[90%] xl:w-[90%] max-w-none h-auto lg:h-[540px] xl:h-[500px] rounded-lg object-cover"
        />
        {/* Learn More Button - Desktop: Absolute, Hidden on Mobile */}
        <a href="#" id="learnbtn"
          className="hidden lg:flex lg:absolute lg:top-[80%] lg:left-1/3 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2 
          text-blue-400 text-sm items-center gap-2 bg-white px-4 py-2"
        >
          <span>&#10145;</span> LEARN MORE ABOUT US
        </a>
      </div>

      {/* Learn More Button - Show below image on screens less than 1025px */}
      <div className="w-full flex justify-center lg:hidden mt-6">
        <a href="#" 
          className="text-blue-400 text-sm flex items-center gap-2 bg-white px-4 py-2"
        >
          <span>&#10145;</span> LEARN MORE ABOUT US
        </a>
      </div>
    </section>
  );
};

export default AboutSection;