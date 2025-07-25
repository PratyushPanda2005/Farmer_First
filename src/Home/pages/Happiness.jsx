import React from 'react'

const Happiness = () => {
  return (
    <section className='relative'>
      <img src='/assets/Happiness.png' alt='Happiness Banner' className='w-full' />
      <div className='absolute top-0 z-10  h-full flex flex-col w-full justify-center items-center'>
        <img src='/assets/happiness_tourism.svg' alt='Happiness Mask Svg' className='w-[40vw]'/>
        <div className='text-white text-center font-raleway text-[1vw]'>
            <h1>IS BEAING HARMONY</h1>
            <h1>WITH NATURE</h1>
        </div>
      </div>
    </section>
  )
}

export default Happiness
