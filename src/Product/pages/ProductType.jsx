import React from 'react'
import Button from '../../Common/Button'

const ProductType = () => {
  return (
    <section className='grid grid-cols-2 gap-x-[4vw] px-[4vw] bg-lightgray'>
      <div className='col-span-1 flex flex-col justify-center items-center '>
      <img src='/product/halwani.png' alt='Product Type 1' className='w-full h-full object-cover object-center' />
      <Button
      text="shop now"
      bgColor="#E8500E"
      textColor="#DDDB00"
      className="mt-10"
      />
      </div>
      <div className='col-span-1 flex flex-col justify-center items-center '>
      <img src='/product/coffee.png' alt='Product Type 1' className='w-full h-full object-cover object-center' />
      <Button
      text="shop now"
      bgColor="#E8500E"
      textColor="#DDDB00"
      className="mt-10"
      />
      </div>

    </section>
  )
}

export default ProductType
