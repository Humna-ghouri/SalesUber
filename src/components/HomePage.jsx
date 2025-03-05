import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import bg1 from "../assets/slide1-home1.jpg";  
import bg2 from "../assets/slide2-home1.jpg";  

const images = [bg1, bg2]; 

const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);

  // 🔹 Auto Image Slider (Every 5 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden flex items-center">
      {/* 🔹 Background Image Slider */}
      <div className="absolute top-0 left-0 w-full h-full">
        {images.map((img, index) => (
          <motion.div
            key={index}
            className="absolute top-0 left-0 w-full h-full bg-cover bg-center transition-opacity duration-1000"
            style={{
              backgroundImage: `url(${img})`,
              opacity: index === currentImage ? 1 : 0,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentImage ? 1 : 0 }}
            transition={{ duration: 1 }}
          />
        ))}
      </div>

      {/* 🔹 Hero Content (Left Aligned + Wider Width) */}
      <div className="relative z-10 text-white w-full max-w-[900px] px-6 md:px-16 lg:px-32 xl:px-48">
        {/* 🔹 Animated Heading */}
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold uppercase tracking-wide leading-tight"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          {/* 🔹 "Welcome to" Animation */}
          {"Welcome to".split("").map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
            >
              {letter}
            </motion.span>
          ))}
          <br /> {/* 🔹 Line Break */}
          {/* 🔹 "SalesUber LLC" Animation */}
          {"SalesUber LLC".split("").map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + index * 0.05, duration: 0.5 }}
              className="text-white"
            >
              {letter}
            </motion.span>
          ))}
        </motion.h1>

        {/* 🔹 Subtext Animation (Bigger Width) */}
        <motion.p
          className="text-lg md:text-2xl mt-6 font-light opacity-0 leading-relaxed max-w-[800px]"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.5 }}
        >
          Your trusted partner in <span className="text-white font-semibold">telecom sales</span> and <span className="text-white font-semibold">customer success story.</span>
        </motion.p>
      </div>
    </div>
  );
};

export default Home;
