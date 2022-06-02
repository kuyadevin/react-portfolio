import React from 'react';
import PDF from '../assets/resume.pdf';

function Resume() {
  return (
    <div className='w-full h-screen bg-[#556b2f]'>
      <div className='flex flex-col justify-center items-center w-full h-full text-white font-serif'>
        <h1 className='text-4xl font-bold inline border-b-4 border-[#673147] mb-4'>Resume</h1>
        <a href={PDF} target="_blank">
          Download my Resume Here
        </a>
      </div>
    </div>
  )
}

export default Resume