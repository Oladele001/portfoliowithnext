"use client";
import { motion } from "framer-motion";
import React from "react";

const Project = () => {
  return (
    <div className="h-fit w-full pt-5 bg-[#212529] p-2">
      <p className="text-red-500 text-center text-xl font-light">
        Visit My Projects And Keep your Feedback
      </p>
      <h1 className="text-4xl text-white mt-4 text-center font-bold" id="project">
        My Projects
      </h1>

      <div className="grid grid-cols-1 gap-8 pt-10 md:grid-cols-2 lg:grid-cols-3 justify-center max-w-7xl mx-auto px-4">
        
        {[
          { 
            img: "Ip address tracker.png", 
            title: "Ip Address Tracker", 
            desc: "This is ip address to track any address using the ip number",
            link: "https://ip-address-git-main-oladele001s-projects.vercel.app/"  
          },
          { 
            img: "weather app.png", 
            title: "Weather App", 
            desc: "This is a weather app built with Html tailwind and Javascript",
            link: "https://weather-app-git-main-oladele001s-projects.vercel.app/"
          },
          { 
            img: "browser-extension.png", 
            title: "Browser Extension", 
            desc: "This is Browser Extension build with html tailwind and Javascript",
            link: "https://browser-extensions-kappa.vercel.app/"
          },
          { 
            img: "Advice generator.png", 
            title: "Advice Generator", 
            desc: "This is Advice Generator App build with tailwind and React",
            link: "https://advice-generator-nftn.vercel.app/"
          },
          { 
            img: "fifth project.png", 
            title: "Age Calculator", 
            desc: "This is Age calculator build with html tailwind and Javascript",
            link: "https://age-calculator-seven-lilac.vercel.app/"
          },
          { 
            img: "ticket generator.png", 
            title: "Ticket Generator", 
            desc: "This is Ticket Generator build with html tailwind and Javascript",
            link: "https://ticket-generator-one-delta.vercel.app/"
          },
        ].map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.7,
              delay: index * 0.15,
              ease: "easeOut",
            }}
            className="w-full rounded-xl p-6 bg-gray-700 shadow-xl hover:shadow-2xl transition-shadow"
          >
            <div className="w-full h-64 rounded-2xl overflow-hidden cursor-pointer">
              <motion.img
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                src={project.img}
                alt={project.title}
                className="w-full h-64 rounded-2xl object-cover transition-transform duration-300"
              />
            </div>

            {project.link ? (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-500 text-xl mt-5 font-semibold hover:underline inline-block"
              >
                {project.title} 
              </a>
            ) : (
              <p className="text-red-500 text-xl mt-5 font-semibold">
                {project.title}
              </p>
            )}

            <p className="text-white text-sm mt-3 leading-relaxed">{project.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Project;