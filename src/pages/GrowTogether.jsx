const GrowTogether = () => {
  return (
    <section className="px-20 bg-[#918E6C] relative">
      <div className="flex h-[30vw] w-full justify-end relative">
        <img
          src="/assets/Grow_Together(2).png"
          alt="Grow Together Thumbnail"
          className="relative z-[2]"
        />
        <img src="/assets/Grow_Together.png" alt="Grow Together Thumbnail" />
        <div className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] z-10 text-[0.8vw] bg-black/80 text-[#DDDB00] font-raleway p-10 font-light">
          <p>JOIN OUR COMMUNITY TO ENGAGE IN EVENTS THAT EDUCATE,</p>
          <p>INSPIRE, AND CONNECT. FROM WORKSHOPS TO FARM VISITS,</p>
          <p>WE OFFER NUMEROUS WAYS TO GET INVOLVED AND LEARN</p>
          <p>ABOUT THE IMPACT OF YOUR FOOD CHOICES.</p>
        </div>
        <div className="absolute top-[23vw] left-[30vw] -translate-x-[50%] -translate-y-[50%] text-[5vw] z-10 text-[#DDDB00] uppercase font-nelphim">
         <h1>growing</h1>
        </div>
        <div className="absolute top-[26vw] right-[6vw] -translate-x-[50%] -translate-y-[50%] text-[5vw] z-10 text-[#DDDB00] uppercase font-nelphim">
         <h1>together</h1>
        </div>
      </div>
      <img
        src="/assets/Grow_Together(2).png"
        alt="Grow Together Thumbnail"
        className="h-[30vw] relative -mt-[15vw] z-[1] left-1/2 -translate-x-[50%]"
      />

      <button className="uppercase text-[1vw] text-[#DDDB00] bg-[#B2B2B2] py-4 w-full max-w-[16vw] absolute right-[10vw] bottom-[6vw]">
        explore now
      </button>
    </section>
  );
};

export default GrowTogether;
