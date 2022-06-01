import React from 'react';
import Workday from '../assets/workday.png';
import GitHub from '../assets/github.png';
import MiseEnPlace from '../assets/MiseEnPlace.png';

function Portfolio() {
  return (
    <div className='w-full h-screen bg-[#556b2f]'>
      <div className='flex flex-col justify-center items-center w-full h-full text-white font-serif'>
        <h1 className='text-4xl'>Portfolio</h1>
        <div className='max-w-[1000px] w-full grid grid-cols-3 gap-10 justify-center items-center text-center'>
          <div>
            <a href='https://kuyadevin.github.io/Day-Planner/'>
              <img src={Workday} alt='Workday Scheduler' style={{ width: '500px' }} />
            </a>
            <a className="inline-block" href='https://github.com/kuyadevin/Day-Planner'>
              <img src={GitHub} alt='GitHub' style={{ width: '30px' }} />
            </a>
          </div>
          <div><a href='https://mise-en-place-planner.herokuapp.com/'>
            <img src={MiseEnPlace} alt='Mise En Place' style={{ width: '500px' }} />
          </a>
            <a className="inline-block" href='https://github.com/jvbridge/mise-en-place'>
              <img src={GitHub} alt='GitHub' style={{ width: '30px' }} />
            </a></div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <div>6</div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio