import React from 'react'

const Nav = () => {
  return (
    <div>
        <nav className='h-14 w-full bg-[#343a40] fixed top-0 text-gray-300 flex justify-between p-4 pl-4 pr-8'>
            <div className='flex items-center gap-2'>
                <div className='size-10 border-2 border-black rounded-2xl flex items-center justify-center'>
                    ❤️
                </div>
                <div>
                    Qozeem <br /> AbdulRahman
                </div>
            </div>
            <div className=' gap-3 hidden'>
                <a href="" className='capitalize '>About</a>
                <a href="">Contact</a>
                <a href="">Services</a>
                <a href="">Resume</a>
            </div>
        </nav>
    </div>
  )
}

export default Nav