import React from 'react';
import Workday from '../assets/workday.png';
import GitHub from '../assets/github.png';
import MiseEnPlace from '../assets/MiseEnPlace.png';
import TravelCenter from '../assets/travelCenter.png';
import EMS from '../assets/ems.png';
import ECommerce from '../assets/ecommerce.png';
import Social from '../assets/socialmedia.png';

function Portfolio() {
  return (
    <div className='w-full h-screen bg-[#556b2f]'>
      <div className='flex flex-col justify-center items-center w-full h-full text-white font-serif'>
        <h1 className='text-4xl'>Portfolio</h1>
        <div className='max-w-[1000px] w-full grid grid-cols-3 gap-10 justify-center items-center text-center text-sm'>
          <div>
            <a href='https://kuyadevin.github.io/Day-Planner/'>
              <img src={Workday} alt='Workday Scheduler' style={{ width: '500px' }} />
            </a>
            <h5>Work Day Scheduler</h5>
            <p>An app that lets you plan our a workday, showing what hours have pasted and which haven't.</p>
            <a className="inline-block" href='https://github.com/kuyadevin/Day-Planner'>
              <img src={GitHub} alt='GitHub' style={{ width: '30px' }} />
            </a>
          </div>
          <div>
            <a href='https://mise-en-place-planner.herokuapp.com/'>
              <img src={MiseEnPlace} alt='Mise En Place' style={{ width: '500px' }} />
            </a>
            <h5>Mise en Place</h5>
            <p>Put everything in its place. This app is a time-management apllication for the busy coder.</p>
            <a className="inline-block" href='https://github.com/jvbridge/mise-en-place'>
              <img src={GitHub} alt='GitHub' style={{ width: '30px' }} />
            </a>
          </div>
          <div>
            <a href='https://kuyadevin.github.io/the-travel-center/'>
              <img src={TravelCenter} alt='Travel Center' style={{ width: '500px' }} />
            </a>
            <h5>The Travel Center</h5>
            <p>The Travel Center is a one stop shop for information when traveling to new city, with weather events, and traffic for a city you search.</p>
            <a className="inline-block" href='https://github.com/kuyadevin/the-travel-center'>
              <img src={GitHub} alt='GitHub' style={{ width: '30px' }} />
            </a>
          </div>
          <div>
            <a href='https://github.com/kuyadevin/employee-management-system'>
              <img src={EMS} alt='Employee Management System' style={{ width: '500px' }} />
            </a>
            <h5>Employee Management System</h5>
            <p>A back-end application that allows for the organization of employees within a company.</p>
            <a className="inline-block" href='https://github.com/kuyadevin/employee-management-system'>
              <img src={GitHub} alt='GitHub' style={{ width: '30px' }} />
            </a>
          </div>
          <div>
            <a href='https://github.com/kuyadevin/e-commerce-back-end'>
              <img src={ECommerce} alt='E-Commerce' style={{ width: '500px' }} />
            </a>
            <h5>E-Commerce Back-End</h5>
            <p>Back-end application that uses MySQL in ordered to run and organize a store with various products.</p>
            <a className="inline-block" href='https://github.com/kuyadevin/e-commerce-back-end'>
              <img src={GitHub} alt='GitHub' style={{ width: '30px' }} />
            </a>
          </div>
          <div>
            <a href='https://github.com/kuyadevin/social-media-api'>
              <img src={Social} alt='Social Media API' style={{ width: '500px' }} />
            </a>
            <h5>Social Media API</h5>
            <p>The Back-end for a Social Media API that allows users to have friends, make comments, and add thoughts using MongoDB.</p>
            <a className="inline-block" href='https://github.com/kuyadevin/social-media-api'>
              <img src={GitHub} alt='GitHub' style={{ width: '30px' }} />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio