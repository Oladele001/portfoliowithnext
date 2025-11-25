"use client";
import { motion } from "framer-motion"; // Fixed import
import React, { useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

// Animation variants (easy to understand)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // each part waits 0.3s after the previous one
    }
  }
};

const childVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" }
  }
};

const Contact = () => {
  // Form state
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Errors state
  const [errors, setErrors] = useState({});

  // Validation function
  const validate = () => {
    const newErrors = {};
    if (!name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        newErrors.email = "Invalid email address";
      }
    }
    if (phone.trim()) {
      const phonePattern = /^[+\d\s]+$/;
      if (!phonePattern.test(phone)) {
        newErrors.phone = "Invalid phone number";
      }
    }
    if (!message.trim()) {
      newErrors.message = "Message is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const whatsappNumber = "2347037023820";
      const text = `Name: ${name}%0aPhone: ${phone}%0aEmail: ${email}%0aMessage: ${message}`;
      const encodedText = encodeURIComponent(text);
      const whatsappURL = `https://wa.me/${'+2347037023820'}?text=${encodedText}`;
      window.open(whatsappURL, "_blank");
      // Reset form after submission
      setName("");
      setPhone("");
      setEmail("");
      setMessage("");
      setErrors({});
    }
  };

  return (
    <div className="text-center w-full p-2 pt-5 h-fit bg-[#212529]" id="contact">
      {/* Title animation */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-red-500 text-lg font-medium">Contact</p>
        <h1 className="text-gray-300 text-3xl md:text-4xl font-bold mt-2">Contact With Me</h1>
      </motion.div>

      {/* Main content with stagger effect */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="pt-8 md:flex md:flex-row md:gap-12 md:p-20 max-w-7xl mx-auto"
      >
        {/* Left side: Info + Social */}
        <motion.div
          variants={childVariants}
          className="w-full h-fit p-4 bg-gray-800 rounded-xl shadow-xl md:w-1/2 md:pl-16 md:pr-16"
        >
          <div className="w-full h-48 mt-6 mb-8 m-auto rounded-2xl overflow-hidden cursor-pointer">
            <motion.img whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
              src="https://mahmoudnabhan.com/assets/images/contact/contact1.png"
              alt="QOzeem AbdulRahman" className="w-full h-48 rounded-2xl object-cover duration-300"
            />
          </div>
          <div className="w-full h-fit text-left">
            <h1 className="text-white font-bold text-xl">QOzeem AbdulRahman</h1>
            <p className="text-gray-500 mt-3">Software Developer.</p>

            <p className="text-gray-500 mt-3 text-lg font-light">
              I'm always open to networking and discussing potential
              collaborations. Connect with me through this form or find me on.
            </p>
            <p className="text-gray-500 mt-3">Phone: <span className="text-gray-300 text-sm">+234 7037023820</span></p>
            <p className="text-gray-500 mt-2">Email: <span className="text-gray-300 text-sm">abdulrahmanqozeem15@gmail.com</span></p>
            <p className="text-gray-500 mt-6 font-medium">FIND WITH ME</p>
            <div className='flex gap-3 mt-6 text-white'>
              <button className='size-10 bg-gray-950 rounded-lg items-center flex justify-center hover:bg-gray-700 transition'><a href="https://www.facebook.com/profile.php?id=61576382096785"><FaFacebook className='size-6' /></a></button>
              <button className='size-10 bg-gray-950 rounded-lg items-center flex justify-center hover:bg-gray-700 transition'><a href="https://www.instagram.com/codeking_dev/"><FaSquareInstagram className='size-6' /></a></button>
              <button className='size-10 bg-gray-950 rounded-lg items-center flex justify-center hover:bg-gray-700 transition'><a href="https://x.com/qozeem_rahman?s=09"><FaSquareTwitter className='size-6' /></a></button>
              <button className='size-10 bg-gray-950 rounded-lg items-center flex justify-center hover:bg-gray-700 transition'><a href="https://www.linkedin.com/in/abdul-rahman-qozeem-a3032a325/"><FaLinkedin className='size-6' /></a></button>
            </div>
          </div>
        </motion.div>

        {/* Right side: Form */}
        <motion.div
          variants={childVariants}
          className="rounded-2xl border-2 h-fit mt-8 md:mt-0 md:w-1/2"
        >
          <form onSubmit={handleSubmit} className="text-left flex flex-col gap-6 p-6 md:p-8" noValidate>
            <div>
              <label htmlFor="name" className="text-gray-400 font-light block mb-2">Your Name</label>
              <input
                id="name"
                type="text"
                placeholder="QOzeem AbdulRahman"
                className={`w-full h-11 bg-black p-3 text-gray-300 rounded-md ${errors.name ? "border border-red-500" : "border border-gray-700"}`}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>
            <div>
              <label htmlFor="phone" className="text-gray-400 font-light block mb-2">Your Phone Number</label>
              <input
                id="phone"
                type="text"
                placeholder="+234 7037023820"
                className={`w-full h-11 bg-black p-3 text-gray-300 rounded-md ${errors.phone ? "border border-red-500" : "border border-gray-700"}`}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
            </div>
            <div>
              <label htmlFor="email" className="text-gray-400 font-light block mb-2">Email</label>
              <input
                id="email"
                type="email"
                placeholder="your email address"
                className={`w-full h-11 bg-black p-3 text-gray-300 rounded-md ${errors.email ? "border border-red-500" : "border border-gray-700"}`}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>
            <div>
              <label htmlFor="message" className="text-gray-400 font-light block mb-2">Your Message</label>
              <textarea
                id="message"
                className={`w-full h-32 bg-black p-3 text-gray-300 rounded-md ${errors.message ? "border border-red-500" : "border border-gray-700"}`}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
            </div>
            <button type="submit" className="text-red-600 text-xl font-medium text-center bg-black h-12 rounded-xl cursor-pointer hover:bg-gray-900 transition">Send Message →</button>
          </form>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Contact;