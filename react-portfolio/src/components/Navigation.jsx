import React, {useState} from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import Logo from '../assets/Devin Nguyen-logos_transparent.png'

const Navigation = () => {
  // eslint-disable-next-line no-unused-vars
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#556b2f] text-gray-300'>
        <div>
          <img src = {Logo} alt="Logo" style={{width: '200px'}} />
        </div>

        {/*navbar */}
          <ul className='hidden md:flex'>
            <li>About Me</li>
            <li>Portfolio</li>
            <li>Contact</li>
            <li>Resume</li>
          </ul>

        {/*Hamburger */}
        <div onClick={handleClick} className='md:hidden z-10'>
          <FaBars />
        </div>

        {/*Mobile*/}
        <div>
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#556b2f] flex flex-col justify-center items-center'}>
            <li className='py-6 text-4xl'>About Me</li>
            <li className='py-6 text-4xl'>Portfolio</li>
            <li className='py-6 text-4xl'>Contact</li>
            <li className='py-6 text-4xl'>Resume</li>
          </ul>
        </div>
    </div>

  

  )
}

export default Navigation