import React from "react";

const Contact = () => {
  return (
    <div className="text-center w-full p-2 h-fit bg-[#212529]">
      <p className="text-red-500 text-sm">Contact</p>
      <h1 className="text-gray-300 text-2xl">Contact With Me</h1>
      <div>
        <div className="w-full h-fit p-8 bg-gray-800 border-red-400">
          <div className="w-full h-36  m-auto rounded-2xl">
            <img
              src="https://mahmoudnabhan.com/assets/images/contact/contact1.png"
              alt="" className="w-full  h-36 rounded-2xl"
            />
          </div>
          <div className="w-full h-fit text-justify">
            <h1 className="text-white">Qozeem AbdulRahman</h1>
            <p className="text-gray-500">Software Developer.</p>

            <p className="text-gray-500">
              I'm always open to networking and discussing potential
              collaborations. Connect with me through this form or find me on .
            </p>
            <p className="text-gray-500">Phone:  <span className="text-white">+234 7037023820</span> </p>
            <p className="text-gray-500">Email: <span className="text-white">abdulrahmanqozeem15@gmail.com</span> </p>
            <p className="text-gray-500">FIND WITH ME</p>
              <div className='flex gap-3'>
              <button className='size-10 bg-gray-950 rounded-lg items-center'>📩</button>
              <button className='size-10 bg-gray-950 rounded-lg items-center'>✅</button>
              <button className='size-10 bg-gray-950 rounded-lg items-center'>😎</button>
              <button className='size-10 bg-gray-950 rounded-lg items-center'>🥷</button>
              </div>
          </div>
        </div>
        <div className="rounded-2xl border-2 mt-4">
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
