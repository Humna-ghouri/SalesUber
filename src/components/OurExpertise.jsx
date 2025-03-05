


import React from "react";
import expertiseBg from "../assets/bg-tech-home1.jpg"; // ✅ Import Background Image

const OurExpertise = () => {
  return (
    <section
      className="relative w-full min-h-[70vh] mt-[20%] flex items-center justify-center text-center px-4"
      style={{
        backgroundImage: `url(${expertiseBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* ✅ Dark Overlay */}
      <div className="absolute inset-0"></div>

      {/* ✅ Content (Above Overlay) */}
      <div className="relative z-10 px-6 text-white flex flex-col items-center w-full">
        {/* ✅ Centered Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 font-anton max-w-4xl leading-tight text-center">
          Our Expertise <br />
          <span className="text-white">Sales & Marketing that Drives Real Results</span>
        </h2>

        {/* ✅ Responsive Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 w-full max-w-6xl justify-center">
          {["TARGETED MARKETING", "PROFESSIONAL SALES TEAM", "SEAMLESS SALES PROCESS", "HIGH-QUALITY SALES", "TRANSPARENT COMMUNICATION", "CUSTOMER EDUCATION"].map(
            (item, index) => (
              <button
                key={index}
                className="border border-white text-white text-sm sm:text-lg font-kanit w-full h-[100px] sm:h-[120px] flex items-center justify-center transition-all duration-300 hover:bg-blue-400 hover:text-white"
              >
                {item}
              </button>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default OurExpertise;