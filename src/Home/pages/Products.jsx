import Carousel from "../components/Carousel";

const Products = () => {
  return (
    <>
      <section className=" bg-[#B2B2B2] relative flex justify-center py-[12vw] px-20">
        <div className="w-full h-full flex flex-col gap-10">
          <div className="text-center">
            <h1 className="text-[6vw] leading-[100%] text-center uppercase text-[#4E5B20] font-nelphim">
              from our fields
            </h1>
            <h1 className="text-[6vw] leading-[100%] text-center uppercase text-[#4E5B20] font-nelphim">
              to your fork
            </h1>
          </div>
          <div className="text-center text-[0.8vw] flex flex-col gap-3 font-raleway text-[#4E5B20]">
            <p>EXPLORE OUR DIVERSE RANGE OF PRODUCTS INCLUDING FRESH </p>
            <p>PRODUCE, ORGANIC SPICES, AND HEALTH SUPPLEMENTS. EACH </p>
            <p>PRODUCT IS A TESTAMENT TO OUR COMMITMENT TO QUALITY AND </p>
            <p>SUSTAINABILITY, CRAFTED CAREFULLY TO PRESERVE THE </p>
            <p>ENVIRONMENT WHILE ENHANCING YOUR HEALTH.</p>
          </div>
          <div className="w-full flex justify-center items-center">
            <img
              src="/assets/prime_pro.svg"
              alt="Prime Pro Logo"
              className="w-[12vw] mt-6"
            />
          </div>
          <div className="mt-20">
            <Carousel />
          </div>

          <div className="w-full flex justify-center items-center mt-20">
            <button className="uppercase text-[1vw] text-[#DDDB00] bg-[#E8500E] py-4 w-full max-w-[16vw]">
              view all products
            </button>
          </div>
        </div>
      </section>
      <section className="bg-[#B2B2B2] relative flex justify-center px-20 py-[6vw]">
        <div className="grid grid-cols-3 gap-6">
          <div className="flex flex-col gap-10">
            <img src="/assets/Product_Type-3.png" alt="" />

            <div className="w-full flex justify-center items-center">
              <button className="uppercase text-[1vw] text-[#DDDB00] bg-[#E8500E] py-4 w-full max-w-[16vw]">
                view all products
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-10">
            <img src="/assets/Product_Type-2.png" alt="" />

            <div className="w-full flex justify-center items-center">
              <button className="uppercase text-[1vw] text-[#DDDB00] bg-[#E8500E] py-4 w-full max-w-[16vw]">
                view all products
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-10">
            <img src="/assets/Product_Type-1.png" alt="" />

            <div className="w-full flex justify-center items-center">
              <button className="uppercase text-[1vw] text-[#DDDB00] bg-[#E8500E] py-4 w-full max-w-[16vw]">
                view all products
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
