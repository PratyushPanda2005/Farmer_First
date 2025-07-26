import Button from "../components/Button";

const Blogs = () => {
  return (
    <section className="min-h-screen py-[10vw] bg-[#918E6C] flex flex-col items-center justify-center px-10">
      <div className="flex flex-col  items-center">
        <h1 className="uppercase text-[2vw] font-semibold font-raleway text-[#3A4510] tracking-[0.01em]">
          RECENT ARTICAL & VLOGS
        </h1>
        <div className="bg-[#3A4510] h-[0.1px] w-[14vw] mt-4" />
      </div>
      <div className="grid grid-cols-3 gap-x-10 mt-[10vw]">
        <div>
            <img src="/assets/Artical_Thumbnal(1).png" alt="Artical Thumbnail" className="w-full"/>
            <div className="font-raleway text-[#3A4510] flex flex-col gap-3 py-[2vw] px-[2vw]">
                <div>
                <h1 className="text-[1vw] font-medium tracking-[0.01em]">ORGANIC FOOD NO MORE</h1>
                <h1 className="text-[1vw] font-medium tracking-[0.01em]">NUTRITIOUS THAN</h1>
                <h1 className="text-[1vw] font-medium tracking-[0.01em]">CONVENTIONALLY GROWN FOOD</h1>
                </div>
                <div className="flex flex-col gap-2">
                    <p className="text-[0.7vw] font-raleway font-light tracking-[0.04em]">As a service to our readers, Harvard Health Publishing provides access to our</p>
                    <p className="text-[0.7vw] font-raleway font-light tracking-[0.04em]">library of archived content. Please note the date each article was posted or last</p>
                </div>
                <button className="uppercase text-[0.7vw] border-b-[0.5px] w-fit pb-2 font-light mt-4">
                    read more
                </button>
            </div>
        </div>
        <div>
            <img src="/assets/Artical_Thumbnal(2).png" alt="Artical Thumbnail" className="w-full"/>
            <div className="font-raleway text-[#3A4510] flex flex-col gap-3 py-[2vw] px-[2vw]">
                <div>
              <h1 className="text-[1vw] font-medium tracking-[0.01em]">CLIMATE CHANGE IMPACTS</h1>
                </div>
                <div className="flex flex-col gap-2">
                    <p className="text-[0.7vw] font-raleway font-light tracking-[0.04em]">Though we often think about human-induced climate change as something that</p>
                    <p className="text-[0.7vw] font-raleway font-light tracking-[0.04em]">will happen in the future, it is an ongoing process. Ecosystems and communities</p>
                    <p className="text-[0.7vw] font-raleway font-light tracking-[0.04em]">in the United States and around the world are being impacted today.</p>
                </div>
                <button className="uppercase text-[0.7vw] border-b-[0.5px] w-fit pb-2 font-light mt-4">
                    read more
                </button>
            </div>
        </div>
        <div>
            <img src="/assets/Artical_Thumbnal(3).png" alt="Artical Thumbnail" className="w-full"/>
            <div className="font-raleway text-[#3A4510] flex flex-col gap-3 py-[2vw] px-[2vw]">
                <div>
                <h1 className="text-[1vw] font-medium tracking-[0.01em]">SIMPLE STEPS TO NURTURE</h1>
                <h1 className="text-[1vw] font-medium tracking-[0.01em]">ORGANIC COMMUNITY GROWTH</h1>
                <h1 className="text-[1vw] font-medium tracking-[0.01em]">EFFICIENTLY</h1>
                </div>
                <div className="flex flex-col gap-2">
                    <p className="text-[0.7vw] font-raleway font-light tracking-[0.04em]">How Does Commitment Play a Major Role in Growing Vibrant Online </p>
                    <p className="text-[0.7vw] font-raleway font-light tracking-[0.04em]">Communities? We mentioned that the </p>
                </div>
                <button className="uppercase text-[0.7vw] border-b-[0.5px] w-fit pb-2 font-light mt-4">
                    read more
                </button>
            </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-x-10 mt-[10vw] w-full">
        <div className="col-span-1">
          <div className="w-full flex justify-center h-full items-center bg-[#B2B2B2] pt-[2vw] pb-[4vw]">
          <img src="/assets/Logo.svg" alt="PrimePro Logo" className="w-[14vw]" />
          </div>
        </div>
        <div className="col-span-1">
          <div className="w-full flex justify-center h-full items-center bg-[#B2B2B2] pt-[2vw] pb-[4vw]">
          <img src="/assets/Logo.svg" alt="PrimePro Logo" className="w-[14vw]" />
          </div>
        </div>
        <div className="col-span-1">
          <div className="w-full flex justify-center h-full items-center bg-[#B2B2B2] pt-[2vw] pb-[4vw]">
          <img src="/assets/Logo.svg" alt="PrimePro Logo" className="w-[14vw]" />
          </div>
        </div>
      </div>
      <Button
      text="view all vlogs"
      className="mt-[10vw]"
      bgColor="#E8500E"
      textColor="#DDDB00"
      />
    </section>
  );
};

export default Blogs;
