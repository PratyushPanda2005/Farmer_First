'use client'
import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules'; 

import 'swiper/css';
import 'swiper/css/navigation'; 
import 'swiper/css/pagination';
import Button from '../../Common/Button';

const ProductCard = () => {
  return(
    <div className=" flex flex-col justify-center items-center">
      <img src="/assets/K-turmeric.svg" alt="Product Image" className="bg-[#6A6A6A] w-[16vw]" />
      <h1 className="text-center w-full font-raleway text-[1vw] mt-6 text-gray">KASTURI TURMERIC POWDER (100G)</h1>
      <h2 className="text-center font-raleway text-[1vw] mt-1 text-darkgreen">₹ 550</h2>
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
    <div className='flex flex-col w-full justify-center items-center h-[90vh] bg-forestgreen'>
      <div className='w-[80vw] flex justify-center items-center gap-4'>

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
      <Button
      text="shop now"
      bgColor="#E8500E"
      textColor="#DDDB00"
      className="mt-20"
      />
    </div>
  )
}

export default Carousel