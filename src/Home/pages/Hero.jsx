
const Hero = () => {
  return (
    <section className="relative">
      <img src="/assets/HeroBg.png" alt="Hero Background"  className="h-full w-full object-cover" />
      <div className="absolute top-0 left-0 w-full h-full flex flex-col pt-[8vw] items-center gap-7">
        <div className="flex flex-col justify-center items-center gap-[8vw] text-[#DDDB00] uppercase">
          <div className="flex gap-[15vw] text-[1vw] w-full font-raleway">
          <ul className="flex space-x-4">
            <li className="border border-[#DDDB00] py-1 px-12 tracking-[0.04em]">products</li>
            <li className="border border-[#DDDB00] py-1 px-12 tracking-[0.04em]">farmer first</li>
          </ul>
          <ul className="flex space-x-4">
            <li className="border border-[#DDDB00] py-1 px-6 tracking-[0.04em]">happiness tourism</li>
            <li className="border border-[#DDDB00] py-1 px-12 tracking-[0.04em]">outlets</li>
          </ul>
          </div>
        <div className="text-[6vw] leading-[100%] text-center uppercase text-[#DDDB00] font-nelphim tracking-[0.01em]">
          <h1>empowering every</h1>
          <h1>farmer, enriching</h1>
          <h1>every table.</h1>
        </div>
        </div>
        <div className="text-center text-white text-[0.8vw] font-extralight font-raleway tracking-[0.04em]">
          <p>AT FARMER FIRST, WE UNITE TRADITION WITH INNOVATION TO DELIVER THE</p>
          <p>FRESHEST, PUREST, AND MOST SUSTAINABLE PRODUCE RIGHT FROM OUR </p>
          <p>FARMERS TO YOUR FAMILY. EXPERIENCE THE WHOLESOME GOODNESS OF </p>
          <p>WHAT TRULY NOURISHED FOOD CAN BE.</p>
        </div>
      </div>
    </section>
  )
}

export default Hero
