import React from "react";

const Features = () => {
  return (
    <div className="w-full h-[52rem] bg-[#212529] text-center">
      <p className="text-red-600 text-xl font-medium ">Features</p>
      <h1 className="text-gray-300 text-4xl font-bold">Services</h1>
      <div className="flex flex-col gap-3 p-4 ">
        <div className="w-full h-48 flex flex-col gap-3 rounded-lg bg-gray-900 text-justify p-6 pt-6  ">
          <div>🙎‍♂️</div>
          <h1 className="text-white text-3xl">Web Development</h1>
          <p className="text-white">
            Creating responsive and user-friendly websites using modern
            technologies.
          </p>
        </div>
        <div className="w-full h-48 flex flex-col gap-3 rounded-lg bg-gray-900 text-justify p-6 pt-6  ">
          <div>🙎</div>
          <h1 className="text-white text-2xl">MobileApp Development</h1>
          <p className="text-white leading-relaxed text-xl ">
             Building cross-platform mobile applications for iOS and Android.
          </p>
        </div>
        <div className="w-full h-48 flex flex-col gap-3 rounded-lg bg-gray-900 text-justify p-6 pt-6  ">
          <div>🙅‍♂️</div>
          <h1 className="text-white text-3xl">Software Consulting</h1>
          <p className="text-white">
           Providing expert guidance and solutions for software development projects.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
