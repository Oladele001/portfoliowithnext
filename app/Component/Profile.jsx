"use client"
import { motion } from "motion/react"
import React from 'react'
// import { Typewriter } from "motion"
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const Profile = () => {
  return (
    <div className=' bg-[#212529] w-full h-full md:mt-10 md:h-2/3' id="about">
      <div className=' flex flex-col  md:flex-row-reverse md:gap-6 md:justify-center lg:gap-11 lg:pl-10 lg:pr-10'>
      <div className='h-fit w-fit bg-red-500 mt-9 md:w-2/5 md:h-[32rem]'>
        <img src="ayo.jpg" alt="" className='w-fit h-fit md:w-full md:h-[32rem] object-cover' />
      </div>
      <div className='h-screen w-full bg-[#212529] md:w-1/2 md:h-[32rem] text-white mt-9 pt-5 p-2 gap-5 flex flex-col md:p-4 md:pr-10'>
        <h2 className='mt-6 text-xl font-medium'>Welcome to my digital space.</h2>
        <h1 className='text-2xl font-bold'>Hi, I’m <span className='text-red-600'>QOzeem AbdulRahman</span> <br />
         {/* <Typewriter 
              text="a Software Developer.!" 
              speed={60} 
            />  */}
            a software Developer
            </h1>
          <p className='text-gray-400 text-lg'>Through my experience in web and mobile development, I've gained proficiency in full-stack development, delivering projects from concept
             to deployment with a strong emphasis on performance and scalability.</p>
             <div className='mt-11 flex flex-col gap-2'>
              <div> <p className=''>find with me</p></div>
              <div className='flex gap-3 '>
              <button className='size-10 bg-gray-950 rounded-lg items-center flex justify-center '><a href="https://www.facebook.com/profile.php?id=61576382096785"><FaFacebook className='size-6' /></a></button>
              <button className='size-10 bg-gray-950 rounded-lg items-center flex justify-center'><a href="https://www.instagram.com/codeking_dev/"><FaSquareInstagram className='size-6' /></a></button>
              <button className='size-10 bg-gray-950 rounded-lg items-center flex justify-center'><a href="https://x.com/qozeem_rahman?s=09"><FaSquareTwitter className='size-6' /></a> </button>
              <button className='size-10 bg-gray-950 rounded-lg items-center flex justify-center'><a href="https://www.linkedin.com/in/abdul-rahman-qozeem-a3032a325/"><FaLinkedin className='size-6' /></a></button>
              </div>
             </div>
      </div>
    </div>
    </div>
  )
}

export default Profile