import React from 'react';
import PDF from '../assets/resume.pdf';

function Resume() {
  return (
    <div className='w-full h-screen bg-[#556b2f]'>
      <div className='flex flex-col justify-center items-center w-full h-full text-white font-serif'>
        <h1 className='text-4xl font-bold inline border-b-4 border-[#673147] mb-4'>Resume</h1>
        <a href={PDF} target="_blank" className='border-2 border-[#673147] p-2 hover:bg-[#673147] hover:border-[#673147] mb-4'>
          Download my Resume Here
        </a>
        <div>
          <h2 className='text-2xl'>My Skills</h2>
          <ul className='list-disc'>
            <li>Javascript</li>
            <li>HTML</li>
            <li>React</li>
            <li>MySQL</li>
            <li>MongoDB</li>
            <li>CSS</li>
            <li>Handlebars</li>
            <li>Express</li>
            <li>Node.js</li>
            <li>MERN</li>
            <li>Sequelize</li>
            <li>PWA</li>
            <li>ORM</li>
            <li>and many, many more...</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Resume