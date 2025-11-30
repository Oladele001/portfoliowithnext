"use client";
import { motion } from "framer-motion"; // you already have it
import React, { useState, useEffect } from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram, FaSquareTwitter, FaLinkedin } from "react-icons/fa6";

const Typewriter = ({ text = "software Developer" }) => {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    const fullText = text;

    const type = () => {
      if (!isDeleting && displayText === fullText) {
        // finished typing → wait 2 seconds then delete
        timer = setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayText === '') {
        // finished deleting → start typing again
        setIsDeleting(false);
      }

      timer = setTimeout(() => {
        setDisplayText(isDeleting 
          ? fullText.substring(0, displayText.length - 1)
          : fullText.substring(0, displayText.length + 1)
        );
      }, isDeleting ? 50 : 100); // delete faster, type slower
    };

    timer = setTimeout(type, 100);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, text]);

  return (
    <span className="inline-block">
      {displayText}
      <span className="inline-block w-1 bg-black ml-1 animate-pulse">|</span>
    </span>
  );
};

const Profile = () => {
  return (
    <div className='bg-[#212529] w-full h-full md:mt-10 md:h-2/3' id="about">
      <div className='flex flex-col md:flex-row-reverse md:gap-6 md:justify-center lg:gap-11 lg:pl-10 lg:pr-10'>
        <div className='h-[28rem] w-fit bg-red-500 mt-9 md:w-2/5 md:h-[32rem]'>
          <img src="ayo.jpg" alt="QOzeem AbdulRahman" className='w-full h-[28rem] md:h-[32rem] object-cover' />
        </div>

        <div className='w-full bg-[#212529] md:w-1/2 md:h-[32rem] text-white pt-5 p-4 gap-6 flex flex-col'>
          <h2 className='mt-6 text-xl font-medium'>Welcome to my digital space.</h2>
          
          <h1 className='text-3xl md:text-4xl font-bold leading-tight'>
            Hi, I’m <span className='text-red-600'>QOzeem AbdulRahman</span> <br className="md:hidden" />
            a <Typewriter text="software Developer ." />
          </h1>

          <p className='text-gray-400 text-lg leading-relaxed'>
            Through my experience in web and mobile development, I've gained proficiency in full-stack development, 
            delivering projects from concept to deployment with a strong emphasis on performance and scalability.
          </p>

          <div className='mt-11'>
            <p className='mb-3 text-sm'>find with me</p>
            <div className='flex gap-4'>
              <a href="https://www.facebook.com/profile.php?id=61576382096785" target="_blank" className='size-12 bg-gray-900 rounded-lg flex items-center justify-center hover:bg-gray-800 transition'>
                <FaFacebook className='size-6' />
              </a>
              <a href="https://www.instagram.com/codeking_dev/" target="_blank" className='size-12 bg-gray-900 rounded-lg flex items-center justify-center hover:bg-gray-800 transition'>
                <FaSquareInstagram className='size-6' />
              </a>
              <a href="https://x.com/qozeem_rahman" target="_blank" className='size-12 bg-gray-900 rounded-lg flex items-center justify-center hover:bg-gray-800 transition'>
                <FaSquareTwitter className='size-6' />
              </a>
              <a href="https://www.linkedin.com/in/abdul-rahman-qozeem-a3032a325/" target="_blank" className='size-12 bg-gray-900 rounded-lg flex items-center justify-center hover:bg-gray-800 transition'>
                <FaLinkedin className='size-6' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;