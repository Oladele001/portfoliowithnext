"use client"
import { motion } from "motion/react"
import React from 'react'

const Project = () => {
  return (
    <div className='h-fit w-full bg-[#212529] p-2'>
        <p className='text-red-500 text-center text-2xl '>Visit My Projests And Keep your Feed Back</p>
        <h1 className='text-4xl text-white text-center font-bold'>My Projects</h1>
        <div className='grid grid-cols-1 gap-3 pt-6 md:grid-cols-2 lg:grid-cols-3 justify-center'>
            <div className='w-fit h-fit rounded-xl p-6 pl-8 pr-8 pt-6 bg-gray-700'> 
                <div className=' w-full h-64 rounded-2xl cursor-pointer'>
                    <motion.img whileHover={{scale: 1.1}} whileTap={{scale : 0.9}} src="Ip address tracker.png" alt="" className='h-64 rounded-2xl duration-300 object-cover' />
                </div>
                <p className='text-red-500 text-xl mt-5 '>Ip Address Tracker</p>
                <p className='text-white text-sm mt-3 '>This is ip address to track any adress using the ip number</p>
            </div>
            <div className='w-fit h-fit rounded-xl p-6 pl-8 pr-8 pt-6 bg-gray-700'> 
                <div className=' w-full h-64 rounded-2xl cursor-pointer'>
                    <motion.img whileHover={{scale: 1.1}} whileTap={{scale : 0.9}} src="weather app.png" alt="" className='h-64 rounded-2xl duration-300 object-cover' />
                </div>
                <p className='text-red-500 text-xl mt-5 '>Weather App</p>
                <p className='text-white text-sm mt-3 '>This is a weather app built with Html tailwind and Javascript</p>
            </div>
            <div className='w-fit h-fit rounded-xl p-6 pl-8 pr-8 pt-6 bg-gray-700'> 
                <div className=' w-full h-64 rounded-2xl cursor-pointer'>
                    <motion.img whileHover={{scale: 1.1}} whileTap={{scale : 0.9}} src="browser-extension.png" alt="" className='h-64 rounded-2xl duration-300 object-cover' />
                </div>
                <p className='text-red-500 text-xl mt-5 '>Browser Extension</p>
                <p className='text-white text-sm mt-3 '>This is Browser Extension build with html tailwind and Javascript</p>
            </div>
            <div className='w-fit h-fit rounded-xl p-6 pl-8 pr-8 pt-6 bg-gray-700'> 
                <div className=' w-full h-64 rounded-2xl cursor-pointer'>
                    <motion.img whileHover={{scale: 1.1}} whileTap={{scale : 0.9}} src="Advice generator.png" alt="" className='h-64 rounded-2xl duration-300 object-cover' />
                </div>
                <p className='text-red-500 text-xl mt-5 '>Advice Generator</p>
                <p className='text-white text-sm mt-3 '>This is Advice Generator App build with tailwind and React</p>
            </div>
            <div className='w-fit h-fit rounded-xl p-6 pl-8 pr-8 pt-6 bg-gray-700'> 
                <div className=' w-full h-64 rounded-2xl cursor-pointer'>
                    <motion.img whileHover={{scale: 1.1}} whileTap={{scale : 0.9}} src="fifth project.png" alt="" className='h-64 rounded-2xl duration-300 object-cover' />
                </div>
                <p className='text-red-500 text-xl mt-5 '>Age Calculator</p>
                <p className='text-white text-sm mt-3 '>This is Age calculator build with html tailwind and Javascript</p>
            </div>
            <div className='w-fit h-fit rounded-xl p-6 pl-8 pr-8 pt-6 bg-gray-700'> 
                <div className=' w-full h-64 rounded-2xl cursor-pointer'>
                    <motion.img whileHover={{scale: 1.1}} whileTap={{scale : 0.9}} src="ticket generator.png" alt="" className='h-64 rounded-2xl duration-300 object-cover' />
                </div>
                <p className='text-red-500 text-xl mt-5 '>Ticket Generator</p>
                <p className='text-white text-sm mt-3 '>This is Ticket Generator build with html tailwind and Javascript</p>
            </div>
            
        </div>
    </div>
  )
}

export default Project