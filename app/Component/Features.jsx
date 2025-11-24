"use client"
import React from "react";
import { motion } from "motion/react";
import { CiCloud } from "react-icons/ci";
import { FaMobile } from "react-icons/fa";
import { FaCode } from "react-icons/fa";


const Features = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="w-full h-fit bg-[#212529] text-center md:pt-14 md:pb-10" id="services">
      <p className="text-red-600 text-xl font-medium ">Features</p>
      <h1 className="text-gray-300 text-4xl font-bold">Services</h1>
      <div className="grid grid-cols-1 gap-3 p-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="w-fit h-fit flex flex-col gap-3 rounded-lg bg-gray-900 text-justify p-6 pt-6 md:pl-10 md:pr-10 md:pb-10 ">
          <div><CiCloud className="size-10 text-red-600" /></div>
          <h1 className="text-white text-3xl">Web Development</h1>
          <p className="text-white">
            Creating responsive and user-friendly websites using modern
            technologies.
          </p>
        </div>
        <div className="w-fit h-fit flex flex-col gap-3 rounded-lg bg-gray-900 text-justify p-6 pt-6 md:pl-10 md:pr-10 md:pb-10 ">
          <div><FaMobile className="size-10 text-red-600"  /></div>
          <h1 className="text-white text-2xl">MobileApp Development</h1>
          <p className="text-white leading-relaxed text-xl ">
            Building cross-platform mobile applications for iOS and Android.
          </p>
        </div>
        <div className="w-fit h-fit flex flex-col gap-3 rounded-lg bg-gray-900 text-justify p-6 pt-6 md:pl-10 md:pr-10 md:pb-10  ">
          <div><FaCode className="size-10 text-red-600"  /></div>
          <h1 className="text-white text-3xl">Software Consulting</h1>
          <p className="text-white">
            Providing expert guidance and solutions for software development
            projects.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Features;
