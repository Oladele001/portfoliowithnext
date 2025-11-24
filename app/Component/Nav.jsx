"use client";
import React from "react";
import Link from "next/link";
import { useState } from "react";
import { IoReorderThree } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";

const Nav = () => {
  const [IsOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!IsOpen);
  };
  return (
    <div>
      <nav className="h-14 w-full bg-[#343a40] fixed top-0 text-gray-300 flex justify-between p-4 pl-4 pr-8">
        <div className="flex items-center gap-2">
          <div className="size-10 rounded-2xl flex items-center justify-center">
                <img src="ayo.jpg" alt="" className="size-10 rounded-2xl border-2 border-amber-300 object-cover" />
          </div>
          <div>
            Qozeem <br /> AbdulRahman
          </div>
        </div>
        <div className=" gap-5 hidden md:flex">
          <a href="#about" className="capitalize ">
            About
          </a>
          <a href="#contact">Contact</a>
          <a href="#services">Services</a>
          <a href="">Resume</a>
        </div>
        {!IsOpen && (
          <div onClick={toggleMenu} className="cursor-pointer md:hidden left-0">
            <IoReorderThree size={30} />
          </div>
        )}
        {IsOpen && (
          <div onClick={toggleMenu} className="cursor-pointer md:hidden">
            <IoCloseSharp size={30} />
          </div>
        )}
        {IsOpen ? (
          <div className="w-2/3 ease-in h-full duration-500 flex flex-col  bg-gray-950 text-white font-bold overflow-y-hidden top-0 left-0 z-10 fixed">
            <div className="flex justify-start gap-2 pt-5 p-4">
              <div className="size-10 rounded-2xl flex  justify-start">
                <img src="ayo.jpg" alt="" className="size-10 rounded-2xl border-2 border-amber-300 object-cover" />
              </div>
              <div>
                Qozeem <br /> AbdulRahman
              </div>
            </div>
            <div className="flex flex-col gap-8 justify-center text-center">
            <a href="#about" className="capitalize ">
              About
            </a>
            <a href="#contact">Contact</a>
            <a href="#services">Services</a>
            <a href="">Resume</a>
            </div>
          </div>
        ) : (
          <div className="w-2/3 ease-in h-full duration-1000 flex flex-col text-center items-center bg-gray-400 text-white font-bold overflow-y-hidden top-0 left-[-150%] z-10 fixed" ></div>
        )}
      </nav>
    </div>
  );
};

export default Nav;
