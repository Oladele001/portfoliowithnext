"use client";
import React from "react";
import { motion } from "framer-motion"; // Fixed import
import { CiCloud } from "react-icons/ci";
import { FaCode } from "react-icons/fa";

// Animation variants (easy to understand)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // each card waits 0.3s after the previous one
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" }
  }
};

const Features = () => {
  return (
    <div className="w-full h-fit bg-[#212529] text-center py-10 md:py-20" id="services">
      {/* Title animation */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-red-600 text-xl font-medium">Features</p>
        <h1 className="text-gray-300 text-4xl md:text-5xl font-bold mt-2">Services</h1>
      </motion.div>

      {/* Cards container with stagger effect */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="flex flex-col justify-center mt-12 gap-8 md:gap-12 p-4 md:flex-row max-w-6xl mx-auto"
      >
        {/* First Service Card */}
        <motion.div
          variants={cardVariants}
          className="w-full md:w-2/5 rounded-xl bg-gray-900 text-left p-8 md:p-10 shadow-xl hover:shadow-2xl transition-shadow"
        >
          <CiCloud className="size-12 text-red-600 mb-4" />
          <h1 className="text-white text-2xl md:text-3xl font-bold mb-3">Web Development</h1>
          <p className="text-gray-300 text-base leading-relaxed">
            Creating responsive and user-friendly websites using modern technologies like React, Next.js, and Tailwind CSS.
          </p>
        </motion.div>

        {/* Second Service Card */}
        <motion.div
          variants={cardVariants}
          className="w-full md:w-2/5 rounded-xl bg-gray-900 text-left p-8 md:p-10 shadow-xl hover:shadow-2xl transition-shadow"
        >
          <FaCode className="size-12 text-red-600 mb-4" />
          <h1 className="text-white text-2xl md:text-3xl font-bold mb-3">Software Consulting</h1>
          <p className="text-gray-300 text-base leading-relaxed">
            Providing expert guidance and solutions for software development projects — from planning to deployment.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Features;