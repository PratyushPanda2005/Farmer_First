'use client'
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules'; 

import 'swiper/css';
import 'swiper/css/navigation'; 
import 'swiper/css/pagination';

const ProductCard = () => {
  return(
    <div className="w-fit flex flex-col justify-center items-center">
      <img src="/assets/K-turmeric.svg" alt="Product Image" className="bg-[#6A6A6A]" />
      <h1 className="text-center w-full font-raleway text-[1vw] mt-6">KASTURI TURMERIC POWDER (100G)</h1>
      <h2 className="text-center font-raleway text-[1vw] mt-1">₹ 550</h2>
    </div>
  )
}

const productlist = [
  {id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5}, {id: 6}, {id: 7}
]

const Carousel = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperInitialized, setSwiperInitialized] = useState(false)
  
  return (
    <div className='flex gap-4 w-full justify-center items-center'>
      <button ref={prevRef} className="bg-white px-3 py-1 rounded-full hover:bg-gray-100 transition">{'<'}</button>
      
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        modules={[Navigation]} 
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onInit={() => setSwiperInitialized(true)}
        className="mySwiper"
      >
        {productlist.map((item) => (
          <SwiperSlide key={item.id}>
            <ProductCard/>
          </SwiperSlide>
        ))}
      </Swiper>
      
      <button ref={nextRef} className="bg-white px-3 py-1 rounded-full hover:bg-gray-100 transition">{'>'}</button>
    </div>
  )
}

export default Carousel