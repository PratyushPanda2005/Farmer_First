import Button from "../../Common/Button";

const Card = () => {
    return(
          <div className="bg-forestgreen p-[3vw] flex flex-col justify-center items-center">
        <h1 className="text-yellow font-raleway text-[1.2vw] uppercase text-center font-light">kasturi turmericpowder</h1>
        <div className="bg-yellow h-[0.1px] w-[8vw] mt-2" />
        <h1 className="text-[2vw] font-raleway text-yellow mt-4">₹ 550</h1>
        <img src="/product/turmeric-box.svg" alt="" className="mt-[6vw] w-full h-full object-cover"/>
        </div>
    )
}


const BestSelling = () => {
    const list = [
        {id: 1},{id : 2},{id: 3}
    ]
  return (
    <section className="min-h-screen py-[10vw] bg-lightgray flex flex-col items-center justify-center ">
      <div className="flex flex-col items-center">
        <h1 className="uppercase text-[2vw] font-semibold font-raleway text-[#3A4510] tracking-[0.08em]">
          best selling
        </h1>
        <div className="bg-[#3A4510] h-[0.1px] w-[8vw] mt-4" />
      </div>
      <div className="grid grid-cols-3 gap-x-10 mt-[4vw] w-[80vw]">
        {list.map(() => (
            <Card/>
        ))}
      </div>
        <Button
      text="shop now"
      bgColor="#E8500E"
      textColor="#DDDB00"
      className="mt-[6vw]"
      />
    </section>
  );
};

export default BestSelling;
