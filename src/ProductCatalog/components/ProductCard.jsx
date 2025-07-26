import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ id, img, name, weight, price }) => {
  const [count, setCount] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const navigate = useNavigate()

  const handleProductClick = () => {
    navigate(`/product/${id}`)
  }

  const handleClick = (event) => {
    setCount(count + 1);
    setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false);
    }, 100);
    event.stopPropagation()
  };

  return (
    <div onClick={handleProductClick} className="flex flex-col items-center bg-white rounded-b-xl border border-gray cursor-pointer">
      <img  src={img} alt={name} className="w-full h-auto bg-gray p-[1vw] " />
      <div className="text-center w-full h-full p-[2vw] rounded-[inherit] flex flex-col items-center justify-center gap-[1vw]">
        <div className="flex justify-evenly w-full items-center">
          <div className="likes flex gap-[0.8vw] items-center">
            <img 
              src="/product-catalog/icon-feather-heart.svg" 
              className={`h-[1.6vw] cursor-pointer transition-transform duration-100 ${
                isAnimating ? "scale-125" : "scale-100"
              }`} 
              onClick={handleClick} 
            />
            <h1 className="font-raleway text-[1vw] text-darkgreen">{count}</h1>
          </div>
          <div className="">
            <img 
              src="/product-catalog/share.svg" 
              className={`h-[1.6vw] cursor-pointer transition-transform duration-100`} 
            />
          </div>
          <div className="flex items-center gap-[0.5vw]">
               <img 
              src="/product-catalog/star.svg" 
              className={`h-[1vw] cursor-pointer transition-transform duration-100`} 
            />
               <img 
              src="/product-catalog/star.svg" 
              className={`h-[1vw] cursor-pointer transition-transform duration-100`} 
            />
               <img 
              src="/product-catalog/star.svg" 
              className={`h-[1vw] cursor-pointer transition-transform duration-100`} 
            />
               <img 
              src="/product-catalog/star.svg" 
              className={`h-[1vw] cursor-pointer transition-transform duration-100`} 
            />
          </div>
        </div>
        <h1 className="text-gray font-medium uppercase font-raleway text-[1vw]">
          {name} {weight}
        </h1>
        <p className="text-darkgreen font-raleway">{price}</p>
      </div>
    </div>
  );
};

export default ProductCard;