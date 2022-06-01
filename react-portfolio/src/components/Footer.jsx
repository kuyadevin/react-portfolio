import React from 'react';
import GitHub from '../assets/github.png';
import LinkedIn from '../assets/LI-In-Bug.png';

function Footer() {
  return (
    <footer className='flex text-center justify-between'>
  <div className="absolute inset-x-0 bottom-0 text-center items-center text-gray-700 p-10">
    <a className="inline-block" href='https://github.com/kuyadevin'>
      <img src={GitHub} alt='GitHub' style={{width: '80px'}}/>
    </a>
    <a className="inline-block" href='https://www.linkedin.com/in/devin-nguyen-9a0676212/'>
      <img src={LinkedIn} alt='LinkedIn' style={{width: '80px'}}/>
    </a>
  </div>
</footer>
  )
}

export default Footer