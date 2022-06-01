import React from 'react';
import GitHub from '../assets/github.png';
import LinkedIn from '../assets/LI-In-Bug.png';

function Footer() {
  return (
    <footer className='absolute inset-x-0 bottom-0 text-center space-x-4'>
      <a className="inline-block" href='https://github.com/kuyadevin'>
        <img src={GitHub} alt='GitHub' style={{ width: '50px' }} />
      </a>
      <a className="inline-block" href='https://www.linkedin.com/in/devin-nguyen-9a0676212/'>
        <img src={LinkedIn} alt='LinkedIn' style={{ width: '50px' }} />
      </a>
    </footer>
  )
}

export default Footer