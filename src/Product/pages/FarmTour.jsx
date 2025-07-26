import React from 'react'
import Button from '../../Common/Button'

const FarmTour = () => {
  return (
    <section className='min-h-screen py-[8vw] bg-skin flex flex-col justify-center items-center'>
       <div className="flex flex-col items-center">
        <h1 className="uppercase text-[2vw] font-semibold font-raleway text-[#3A4510] tracking-[0.08em]">
         farm tour
        </h1>
        <div className="bg-[#3A4510] h-[0.1px] w-[8vw] mt-4" />
      </div>
      <div className='flex flex-col justify-center items-center mt-[8vw] gap-[3vw]'>
        <div className='h-[50vw] relative'>
        <img src='/product/kanthaloor.png' alt='KANTHALLOOR' className='h-full object-cover object-center' />
        <h1 className='absolute top-[4vw] left-1/2 -translate-x-[50%] text-darkgreen font-raleway text-[1.5vw] uppercase'>KANTHALLOOR</h1>
        </div>
        <div className='h-[50vw] relative'>
        <img src='/product/wayanad.png' alt='KANTHALLOOR' className='h-full object-cover object-center' />
        <h1 className='absolute top-[4vw] left-1/2 -translate-x-[50%] text-darkgreen font-raleway text-[1.5vw] uppercase'>WAYANAD</h1>
        </div>
        
      </div>
         <Button
      text="explore now"
      bgColor="#6A6A6A"
      textColor="#DDDB00"
      className="mt-[6vw]"
      />
    </section>
  )
}

export default FarmTour
