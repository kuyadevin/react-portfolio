import React from 'react';
import Workday from '../assets/workday.png';
import GitHub from '../assets/github.png';
import MiseEnPlace from '../assets/MiseEnPlace.png';
import TravelCenter from '../assets/travelCenter.png';
import EMS from '../assets/ems.png';
import ECommerce from '../assets/ecommerce.png';
import Social from '../assets/socialmedia.png';
import LinkedIn from '../assets/LI-In-Bug.png';

function Portfolio() {
  return (
    <div className='w-full h-screen bg-[#556b2f] pb-20 bg-repeat'>
      <div className='flex flex-col justify-center items-center w-full h-full text-white font-serif'>
        <h1 className='text-2xl font-bold inline border-b-4 border-[#673147] mb-2'>Portfolio</h1>
        <div className='max-w-[1000px] max-h-[550px] w-full grid grid-cols-1 sm:grid-cols-3 gap-10 justify-center items-center text-center text-sm sm:pb-20'>
          <div className='bg-[#556b2f]'>
            <a href='https://kuyadevin.github.io/Day-Planner/'>
              <img src={Workday} alt='Workday Scheduler' style={{ width: '500px', height: '150px' }} />
            </a>
            <h5 className='text-[#673147] text-base'>Work Day Scheduler</h5>
            <p>An app that lets you plan our a workday, showing what hours have pasted and which haven't.</p>
            <a className="inline-block" href='https://github.com/kuyadevin/Day-Planner'>
              <img src={GitHub} alt='GitHub' style={{ width: '30px' }} />
            </a>
          </div>
          <div className='bg-[#556b2f]'>
            <a href='https://mise-en-place-planner.herokuapp.com/'>
              <img src={MiseEnPlace} alt='Mise En Place' style={{ width: '500px' }} />
            </a>
            <h5 className='text-[#673147] text-base'>Mise en Place</h5>
            <p>Put everything in its place. This app is a time-management apllication for the busy coder.</p>
            <a className="inline-block" href='https://github.com/jvbridge/mise-en-place'>
              <img src={GitHub} alt='GitHub' style={{ width: '30px' }} />
            </a>
          </div>
          <div className='bg-[#556b2f]'>
            <a href='https://kuyadevin.github.io/the-travel-center/'>
              <img src={TravelCenter} alt='Travel Center' style={{ width: '500px' }} />
            </a>
            <h5 className='text-[#673147] text-base'>The Travel Center</h5>
            <p>The Travel Center is a one stop shop for information when traveling to new city, with weather events, and traffic for a city you search.</p>
            <a className="inline-block" href='https://github.com/kuyadevin/the-travel-center'>
              <img src={GitHub} alt='GitHub' style={{ width: '30px' }} />
            </a>
          </div>
          <div className='bg-[#556b2f]'>
            <a href='https://github.com/kuyadevin/employee-management-system'>
              <img src={EMS} alt='Employee Management System' style={{ width: '500px' }} />
            </a>
            <h5 className='text-[#673147] text-base'>Employee Management System</h5>
            <p>A back-end application that allows for the organization of employees within a company.</p>
            <a className="inline-block" href='https://github.com/kuyadevin/employee-management-system'>
              <img src={GitHub} alt='GitHub' style={{ width: '30px' }} />
            </a>
          </div>
          <div className='bg-[#556b2f]'>
            <a href='https://github.com/kuyadevin/e-commerce-back-end'>
              <img src={ECommerce} alt='E-Commerce' style={{ width: '500px' }} />
            </a>
            <h5 className='text-[#673147] text-base'>E-Commerce Back-End</h5>
            <p>Back-end application that uses MySQL in ordered to run and organize a store with various products.</p>
            <a className="inline-block" href='https://github.com/kuyadevin/e-commerce-back-end'>
              <img src={GitHub} alt='GitHub' style={{ width: '30px' }} />
            </a>
          </div>
          <div className='bg-[#556b2f]'>
            <a href='https://github.com/kuyadevin/social-media-api'>
              <img src={Social} alt='Social Media API' style={{ width: '500px' }} />
            </a>
            <h5 className='text-[#673147] text-base'>Social Media API</h5>
            <p>The Back-end for a Social Media API that allows users to have friends, make comments, and add thoughts using MongoDB.</p>
            <a className="inline-block" href='https://github.com/kuyadevin/social-media-api'>
              <img src={GitHub} alt='GitHub' style={{ width: '30px' }} />
            </a>
          </div>
        </div>
      </div>
      <footer className='fixed inset-x-0 bottom-0 text-center space-x-4 invisible sm:visible'>
        <a className="inline-block" href='https://github.com/kuyadevin'>
          <img src={GitHub} alt='GitHub' style={{ width: '50px' }} />
        </a>
        <a className="inline-block" href='https://www.linkedin.com/in/devin-nguyen-9a0676212/'>
          <img src={LinkedIn} alt='LinkedIn' style={{ width: '50px' }} />
        </a>
      </footer>
      <footer className='fixed bottom-0 sm:hidden '>
        <a className="inline-block" href='https://github.com/kuyadevin'>
          <img src={GitHub} alt='GitHub' style={{ width: '30px' }} />
        </a>
        <a className="inline-block" href='https://www.linkedin.com/in/devin-nguyen-9a0676212/'>
          <img src={LinkedIn} alt='LinkedIn' style={{ width: '30px' }} />
        </a>
      </footer>
    </div>
  )
}

export default Portfolio