import React from 'react'

const Profile = () => {
  return (
    <div>
      <div className=' border-2 border-black flex flex-col p-2'>
      <div className='h-3/4 w-full bg-red-500 mt-9'>
        <img src="master003.jpg" alt="" />
      </div>
      <div className='h-screen w-full bg-[#212529] text-white pt-5 p-2 gap-5 flex flex-col'>
        <h2 className='mt-6 text-xl font-medium'>Welcome to my digital space.</h2>
        <h1 className='text-2xl font-bold'>Hi, I’m <span className='text-red-600'>QOzeem AbdulRahman</span> <br />
          a Software Developer.</h1>
          <p className='text-gray-400 text-lg'>Through my experience in web and mobile development, I've gained proficiency in full-stack development, delivering projects from concept
             to deployment with a strong emphasis on performance and scalability.</p>
             <div className='mt-11 flex flex-col gap-2'>
              <div> <p className=''>find with me</p></div>
              <div className='flex gap-3'>
              <button className='size-10 bg-gray-950 rounded-lg items-center'>📩</button>
              <button className='size-10 bg-gray-950 rounded-lg items-center'>✅</button>
              <button className='size-10 bg-gray-950 rounded-lg items-center'>😎</button>
              <button className='size-10 bg-gray-950 rounded-lg items-center'>🥷</button>
              </div>
             </div>
      </div>
    </div>
    </div>
  )
}

export default Profile