import React from 'react'

function Contact() {
  return (
    <div className='w-full h-screen bg-[#556b2f]'>
      <div className='flex flex-col justify-center items-center w-full h-full text-white font-serif'>
        <form action="" className='flex flex-col max-w-[600px] w-full'>
          <div>
            <h1 className='text-4xl font-bold inline border-b-4 border-[#673147]'>Contact</h1>
            <p className='py-4'>Submit the form below to send me a meesage or e-mail me at devinnguyen@ucsb.edu</p>
          </div>
          <input type='text' placeholder='Name' name='name' className='p-2 text-black' />
          <input type='email' placeholder='Email' name='email' className='my-4 p-2 text-black' />
          <textarea placeholder='Message' name='message' rows='10' className='my-4 p-2 text-black'></textarea>
          <button className='text-white border-2 bg-[#673147] hover:bg-slate-600 hover:border-slate-600'>Contact Me!</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
