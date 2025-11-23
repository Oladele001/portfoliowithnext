"use client"
import React from 'react'
import { useState } from 'react';
import { IoReorderThree } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";

const Nav = () => {
    const [IsOpen, setIsOpen] = useState(false);
    const toggleMenu = () =>{
        setIsOpen(!IsOpen);
    };
    return (
    <div>
        <nav className='h-14 w-full bg-[#343a40] fixed top-0 text-gray-300 flex justify-between p-4 pl-4 pr-8 md:bg-red-400 lg:bg-green-600'>
            <div className='flex items-center gap-2'>
                <div className='size-10 border-2 border-black rounded-2xl flex items-center justify-center'>
                    ❤️
                </div>
                <div>
                    Qozeem <br /> AbdulRahman
                </div>
            </div>
            <div className=' gap-3 hidden md:flex'>
                <a href="" className='capitalize '>About</a>
                <a href="">Contact</a>
                <a href="">Services</a>
                <a href="">Resume</a>
            </div>
            {!IsOpen && (
                <div onClick={toggleMenu} className='cursor-pointer md:hidden'>
                    <IoReorderThree size={30} />
                </div>
            )}
            {IsOpen && (
                <div onClick={toggleMenu} className='cursor-pointer md:hidden'>
                    <IoCloseSharp size={30} />
                </div>
            )}
        </nav>
    </div>
  )
}

export default Nav