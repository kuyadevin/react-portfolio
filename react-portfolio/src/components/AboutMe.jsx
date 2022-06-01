import React from 'react';
import {IoIosArrowRoundForward} from 'react-icons/io'

const AboutMe = () => {
  return (
    <div className='w-full h-screen bg-[#556b2f]'>
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full text-white font-serif'>
        <div>
          <p className='text-lg sm:text-2xl text-[#673147]'>Hello! My name is</p>
          <h1 className='text-4xl sm:text-7xl font-bold'>Devin Nguyen.</h1>
          <h2 className='text-xl'> I am an aspiring full-stack developer.</h2>
          <p className='text-sm sm:text-base'> I am a graduate of the UC Berkeley Full-Stack</p>
          <p className='text-sm sm:text-base'>as well as a a UCSB alumus with a BA in Sociology.</p>
          <p className='text-sm sm:text-base'>Some of my skills include Javascript, MySQL, CSS and more.</p>
          <p className='text-sm sm:text-base'> Come checkout my work!</p>
          </div>
        <div>
          <button className='border-2 px-4 py-2 my-2 flex items-center hover:bg-[#673147] hover:border-[#673147]'>My Portfolio <IoIosArrowRoundForward /></button>
        </div>
      </div>
    </div>
  )
}

export default AboutMe