import React from "react";
import { motion } from "framer-motion"
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const Contact = () => {

    const bounce = {
        whileHover:{scale : 1.2}, whileTap:{scale: 0.9}
    }

  return (
    <div className="text-center w-full p-2 h-fit bg-[#212529]">
      <p className="text-red-500 text-sm">Contact</p>
      <h1 className="text-gray-300 text-2xl">Contact With Me</h1>
      <div className="md:flex md:flex-row md:gap-12 md:p-20">
        <div className="w-fit h-fit p-4 bg-gray-800 md:w-1/2 md:pl-16 md:pr-16">
          <div className="w-full h-44 mt-6 mb-8 m-auto rounded-2xl overflow-hidden cursor-pointer">
            <motion.img whileHover={bounce} whileTap={bounce}
              src="https://mahmoudnabhan.com/assets/images/contact/contact1.png"
              alt="" className="w-full  h-44 rounded-2xl object-cover  "
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
            <form action="" className="text-justify flex flex-col gap-3 p-5" >
            <div>
            <label htmlFor="" className="text-gray-400 font-light">Your Name</label> <br />
            <input type="text" placeholder="Qozeem AbdulRahman" className=" w-full h-11 mt-3.5 bg-black p-2 text-gray-300" />
            </div>
            <div>
            <label htmlFor="" className="text-gray-400 font-light">Your Phone Number</label> <br />
            <input type="number" placeholder="+234 7037023820" className="bg-black mt-3.5 w-full h-11 p-2 text-gray-300" />
            </div>
            <div>
            <label htmlFor="" className="text-gray-400 font-light">Email</label> <br />
            <input type="emial" placeholder="your emial address" className=" w-full h-11 p-2 text-gray-300 mt-3.5 bg-black" />
            </div>
            <div>
            <label htmlFor="" className="text-gray-400 font-light">Your Messages</label> <br />
            <textarea name="" id="" className="bg-black mt-3.5 w-full h-fit p-2 text-gray-300" ></textarea>
            </div>
            </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
