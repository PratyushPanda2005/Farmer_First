import Button from "../components/Button";

const Tourism = () => {
  return (
    <section className="min-h-screen flex flex-col gap-8 relative bg-[#918E6C] px-10">
      <div className="w-full h-[90vh] bg-[#B19B8C] p-[6vw] flex justify-between">
        <div className="w-1/2">
          <h1 className="text-[6vw] leading-[100%] uppercase text-[#4E5B20] font-argue">
            happiness
          </h1>
          <h1 className="text-[6vw] leading-[100%] uppercase text-[#4E5B20] font-argue">
            tourism
          </h1>
          <div className="mt-[4vw] font-raleway font-light flex flex-col gap-2 text-[#4E5B20]">
            <h2 className="text-[1.6vw]">JOURNEY TO JOY</h2>
            <p className="text-[0.8vw]">
              IMMERSE YOURSELF IN THE TRANQUILLITY OF THE COUNTRYSIDE WITH
              FARMER FIRST’S{" "}
            </p>
            <p className="text-[0.8vw]">
              HAPPINESS TOURISM. CONNECT WITH NATURE, PARTICIPATE IN FARM LIFE,
              AND RELAX IN{" "}
            </p>
            <p className="text-[0.8vw]">
              SETTINGS THAT BRING YOU CLOSER TO THE EARTH’S NATURAL HARMONY.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-[8vw] items-center p-[4vw] w-1/2">
          <img src="/assets/Food_Forest.svg" alt="" className="w-[14vw]" />
          <button className="uppercase text-[1vw] text-[#DDDB00] bg-[#E8500E] py-4 w-full max-w-[16vw]">
            visit now
          </button>
        </div>
      </div>
      <div>
        <div className="relative">
        <img src="/assets/Hut_View.png" alt="" className="w-full"  />
        <h1 className="absolute right-[4vw] top-[3vw] uppercase font-raleway text-white text-[1vw]">a view with a stay</h1>
        <Button
        bgColor="#E8500E"
        textColor="#DDDB00"
        text="book now"
        className="absolute bottom-[4vw] left-1/2 -translate-x-[50%]"
        />
        </div>
        <div className="relative">
        <img src="/assets/Village_Hut.png" alt="Village Hut" className="w-full" />
        <div className="absolute top-0 w-full h-full p-[6vw]">
            <h1 className="font-raleway text-[1vw]">DIVE DEEP INTO HOLISTIC WELLNESS</h1>
            <h1 className="font-raleway text-[1vw]">ACTIVITIES STRUCTURED AROUND </h1>
            <h1 className="font-raleway text-[1vw] font-medium">HAPPINESS TOURISM.</h1>
        </div>
        </div>
        <div className="p-[4vw] flex w-full justify-center items-center bg-[#B19B8C]">
            <Button
            text="book now"
            bgColor="#E8500E"
            textColor="#DDDB00"
            />
        </div>
      </div>
    </section>
  );
};

export default Tourism;
