"use client";

import React, { useState } from "react";
import { IoReorderThree, IoCloseSharp } from "react-icons/io5";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMobileLinkClick = (sectionId) => {
    setIsOpen(false);

    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 550);
  };

  return (
    <div>
      <nav className="h-14 w-full bg-[#343a40] fixed top-0 text-gray-300 flex justify-between items-center p-4 pl-4 pr-8 z-50">
        <div className="flex items-center gap-2">
          <div className="size-10 rounded-2xl flex items-start justify-start">
            <img
              src="ayo.jpg"
              alt="Qozeem AbdulRahman"
              className="size-10 rounded-2xl border-2 border-amber-300 object-cover"
            />
          </div>
          <div className="leading-tight">
            Qozeem <br /> AbdulRahman
          </div>
        </div>

        <div className="gap-8 hidden md:flex">
          <a href="#about" className="capitalize hover:text-amber-300 transition">
            About
          </a>
          <a href="#contact" className="hover:text-amber-300 transition">
            Contact
          </a>
          <a href="#services" className="hover:text-amber-300 transition">
            Services
          </a>
          <a href="" className="hover:text-amber-300 transition">
            Resume
          </a>
        </div>

        <div onClick={toggleMenu} className="cursor-pointer md:hidden z-50">
          { isOpen ? <IoCloseSharp size={34} /> : <IoReorderThree size={34} />}
        </div>
      </nav>

      {isOpen ? (
        <div className="fixed top-0 left-0 w-2/3 h-full bg-black text-white font-bold z-100 flex flex-col duration-300 ease-in">
          <div className="flex items-center gap-3 pt-5 px-6">
            <img
              src="ayo.jpg"
              alt="Qozeem AbdulRahman"
              className="size-10 rounded-2xl border-2 border-amber-300 object-cover"
            />
            <div className="leading-tight">
              Qozeem <br /> AbdulRahman
            </div>
          </div>

          <div className="flex flex-col gap-10 text-center mt-10 text-xl">
            <div
              onClick={() => handleMobileLinkClick("about")}
              className="cursor-pointer hover:text-amber-300 transition"
            >
              About
            </div>
            <div
              onClick={() => handleMobileLinkClick("services")}
              className="cursor-pointer hover:text-amber-300 transition"
            >
              Services
            </div>
            <div
              onClick={() => handleMobileLinkClick("contact")}
              className="cursor-pointer hover:text-amber-300 transition"
            >
              Contact
            </div>
            <a
              href=""
              className="cursor-pointer hover:text-amber-300 transition"
            >
              Resume
            </a>
          </div>
        </div>
      ) : 
      (
          <div className="w-2/3 ease-in h-full duration-300 flex flex-col text-center items-center bg-gray-400 text-white font-bold overflow-y-hidden top-0 left-[-150%] z-10 fixed" ></div>
        )
      }
    </div>
  );
};

export default Nav;