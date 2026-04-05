import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <div>
        <div className='bg-[#212529] w-full h-52 text-center pt-4'>
            <div className='size-14 rounded-2xl m-auto  flex justify-center items-center-safe' >
                <Image src="/ayo.jpg" alt="Profile" width={48} height={48} className='size-12 rounded-2xl object-cover border-2 border-amber-300' />
            </div>
            <p className='text-white font-bold text-xl'>Qozeem AbdulRahman</p>
            <h2 className='text-white font-light '> ©️ {new Date().getFullYear()}. Alright reserved by AbdulRahman </h2>
        </div>
    </div>
  )
}

export default Footer;