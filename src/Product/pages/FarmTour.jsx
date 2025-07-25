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
        <img src='/product/kanthaloor.png' alt='KANTHALLOOR' className='h-[50vw] object-cover object-center' />
        <img src='/product/wayanad.png' alt='KANTHALLOOR' className='h-[50vw] object-cover object-center' />
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
