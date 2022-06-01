import React from 'react'

function Portfolio() {
  return (
    <div className='w-full h-screen bg-[#556b2f]'>
      <div className='flex flex-col justify-center items-center w-full h-full text-white font-serif'>
        <h1 className='text-4xl'>Portfolio</h1>
        <div className='max-w-[1000px] w-full grid grid-cols-3 gap-10 justify-center items-center text-center'>
          <div>1</div>
          <div>2</div>
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