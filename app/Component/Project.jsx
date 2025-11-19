import React from 'react'

const Project = () => {
  return (
    <div className='h-fit w-full bg-[#212529] p-2 '>
        <p className='text-red-500 text-center text-2xl '>Visit My Projests And Keep your Feed Back</p>
        <h1 className='text-4xl text-white text-center font-bold'>My Projects</h1>
        <div className='flex flex-col gap-3 pt-6'>
            <div className='w-full h-96 rounded-xl bg-gray-800 border-2 border-red-300'> 
                <div className=' w-full h-80 border-2 border-green-500 '></div>
            </div>
            <div className='w-full h-24 bg-gray-800 border-2 border-red-300'> </div>
            <div className='w-full h-24 bg-gray-800 border-2 border-red-300'> </div>
            <div className='w-full h-24 bg-gray-800 border-2 border-red-300'> </div>
            <div className='w-full h-24 bg-gray-800 border-2 border-red-300'> </div>
        </div>
    </div>
  )
}

export default Project