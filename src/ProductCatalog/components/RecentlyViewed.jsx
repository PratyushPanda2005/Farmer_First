import {   CircleChevronRight } from "lucide-react"

const RecentlyViewed = () => {
  return (
    <section className="min-h-screen py-[10vw] bg-skin flex flex-col items-center justify-center ">
      <div className="flex flex-col items-center">
        <h1 className="uppercase text-[2vw] font-semibold font-raleway text-[#3A4510] tracking-[0.08em]">
          recently viewed
        </h1>
        <div className="bg-[#3A4510] h-[0.1px] w-[8vw] mt-4" />
      </div>
      <div className="grid grid-cols-2 gap-x-[4vw] mt-[4vw] w-[80vw]">  
        <div className="w-full h-full relative">
            <img src="/assets/K-turmeric.svg" alt="Product Image" className="bg-[#6A6A6A] w-full" />
            <CircleChevronRight className="absolute right-[2vw] top-[2vw] text-darkgreen cursor-pointer size-[2vw]"/>
        </div>
        <div className="w-full h-full relative">
            <img src="/assets/K-turmeric.svg" alt="Product Image" className="bg-[#6A6A6A] w-full" />
            <CircleChevronRight className="absolute right-[2vw] top-[2vw] text-darkgreen cursor-pointer size-[2vw]"/>
        </div>
      </div>
    </section>
  )
}

export default RecentlyViewed
