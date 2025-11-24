"use client"
import { motion } from "motion/react"
import React, { useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

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
    <div className="text-center w-full p-2 h-fit bg-[#212529]" id="contact">
      <p className="text-red-500 text-sm">Contact</p>
      <h1 className="text-gray-300 text-2xl">Contact With Me</h1>
      <div className="md:flex md:flex-row md:gap-12 md:p-20">
        <div className="w-fit h-fit p-4 bg-gray-800 md:w-1/2 md:pl-16 md:pr-16">
          <div className="w-full h-48 mt-6 mb-8 m-auto rounded-2xl overflow-hidden cursor-pointer">
            <motion.img whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
              src="https://mahmoudnabhan.com/assets/images/contact/contact1.png"
              alt="" className="w-full  h-48 rounded-2xl object-cover duration-300 "
            />
          </div>
          <div className="w-full h-fit text-justify">
            <h1 className="text-white font-bold text-xl">Qozeem AbdulRahman</h1>
            <p className="text-gray-500 mt-3">Software Developer.</p>

            <p className="text-gray-500 mt-3 text-lg font-light">
              I'm always open to networking and discussing potential
              collaborations. Connect with me through this form or find me on .
            </p>
            <p className="text-gray-500 mt-3">Phone:  <span className="text-gray-300 text-sm">+234 7037023820</span> </p>
            <p className="text-gray-500">Email: <span className="text-gray-300 text-sm">abdulrahmanqozeem15@gmail.com</span> </p>
            <p className="text-gray-500 mt-6">FIND WITH ME</p>
            <div className='flex gap-3 mt-6 text-white'>
              <button className='size-10 bg-gray-950 rounded-lg items-center flex justify-center'><FaFacebook className='size-6' /></button>
              <button className='size-10 bg-gray-950 rounded-lg items-center flex justify-center'><FaSquareInstagram className='size-6' /></button>
              <button className='size-10 bg-gray-950 rounded-lg items-center flex justify-center'><FaSquareTwitter className='size-6' /></button>
              <button className='size-10 bg-gray-950 rounded-lg items-center flex justify-center'><FaLinkedin className='size-6' /></button>
            </div>
          </div>
        </div>
        <div className="rounded-2xl border-2 h-fit mt-4 md:w-1/2">
          <form onSubmit={handleSubmit} className="text-justify flex flex-col gap-3 p-5" noValidate>
            <div>
              <label htmlFor="name" className="text-gray-400 font-light">Your Name</label> <br />
              <input
                id="name"
                type="text"
                placeholder="Qozeem AbdulRahman"
                className={`w-full h-11 mt-3.5 bg-black p-2 text-gray-300 ${errors.name ? "border border-red-500" : ""}`}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>
            <div>
              <label htmlFor="phone" className="text-gray-400 font-light">Your Phone Number</label> <br />
              <input
                id="phone"
                type="text"
                placeholder="+234 7037023820"
                className={`bg-black mt-3.5 w-full h-11 p-2 text-gray-300 ${errors.phone ? "border border-red-500" : ""}`}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
            </div>
            <div>
              <label htmlFor="email" className="text-gray-400 font-light">Email</label> <br />
              <input
                id="email"
                type="email"
                placeholder="your email address"
                className={`w-full h-11 p-2 text-gray-300 mt-3.5 bg-black ${errors.email ? "border border-red-500" : ""}`}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>
            <div>
              <label htmlFor="message" className="text-gray-400 font-light">Your Messages</label> <br />
              <textarea
                id="message"
                className={`bg-black mt-3.5 w-full h-fit p-2 text-gray-300 ${errors.message ? "border border-red-500" : ""}`}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
            </div>
            <button type="submit" className="text-red-600 text-2xl text-center bg-black h-14 rounded-2xl cursor-pointer mt-7">Send Message →</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
