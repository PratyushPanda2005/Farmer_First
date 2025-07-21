
const ProductCard = () => {
  return(
    <div className=" w-fit flex flex-col justify-center items-center">
      <img src="/assets/K-turmeric.svg" alt="Product Image" className="bg-[#6A6A6A]" />
      <h1 className="text-center w-full font-raleway text-[1vw] mt-6">KASTURI TURMERIC POWDER (100G)</h1>
      <h2 className="text-center font-raleway text-[1vw] mt-1">₹ 550</h2>
    </div>
  )
}

const productlist = [
  {id: 1}, {id : 2}, {id: 3}, {id: 4}
]


const Carousel = () => {
  return (
    <div className='flex gap-20 w-full justify-center items-center'>
       <span className="bg-white px-2 rounded-full">{"<"}</span>
      {productlist.map(() => (
        <ProductCard/>
      ))}
      <span className="bg-white px-2 rounded-full">{">"}</span>
    </div>
  )
}

export default Carousel
