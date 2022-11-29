import React from 'react';
import GitHub from '../assets/github.png';
import LinkedIn from '../assets/LI-In-Bug.png';

function Contact() {
  return (
    <div className='w-full h-screen bg-[#556b2f]'>
      <div className='flex flex-col justify-center items-center w-full h-full text-white font-serif align-top'>
        <div>
          <h1 className='text-4xl font-bold inline border-b-4 border-[#673147]'>Contact Me!</h1>
          <p className='py-4'>Contact me by e-mail at devinnguyen@ucsb.edu or by phone at 408-607-7678</p>
          <p className='py-4'>Check out my GitHub and LinkedIn by clicking the icons below!</p>
        </div>
      </div>
      <footer className='fixed inset-x-0 bottom-0 text-center space-x-4'>
        <a className="inline-block" href='https://github.com/kuyadevin'>
          <img src={GitHub} alt='GitHub' style={{ width: '50px' }} />
        </a>
        <a className="inline-block" href='https://www.linkedin.com/in/devin-nguyen-9a0676212/'>
          <img src={LinkedIn} alt='LinkedIn' style={{ width: '50px' }} />
        </a>
      </footer>
    </div>
  )
}

export default Contact
