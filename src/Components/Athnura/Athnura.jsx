import React from 'react'

export default function Athnura() {
  return (
    <>
      <div className='flex  flex-col justify-center text-center bg-[#FBF9F5] w-full py-[12px] px-3'>
        <h1 className='text-[32px] text-black'>A FEW WORDS ON MY ROLE AT ATHENURA</h1>
        <p className='text-[#7c6e66]'>
           Frontend Developer Intern with 1 month of hands-on experience specializing in building responsive and user-friendly web interfaces using React, JavaScript, HTML, and CSS. Adept at translating UI/UX designs into clean, maintainable code and optimizing web performance for seamless user experiences.
        </p>
        <button className='bg-[#556e41] flex justify-center w-[138px] h-auto p-[7px] my-2 items-center  m-auto rounded-3xl text-white hover:bg-[#435037] cursor-pointer'onClick={()=>window.open('https://www.athenura.in')}>
VISIT ATHNURA
        </button>
      </div>
    </>
  )
}
