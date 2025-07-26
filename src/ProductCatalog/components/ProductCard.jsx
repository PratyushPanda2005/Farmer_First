import { useState } from "react";

const ProductCard = ({ img, name, weight, price }) => {
  const [count, setCount] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    setCount(count + 1);
    setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false);
    }, 100);
  };

  return (
    <div className="flex flex-col items-center bg-white rounded-b-xl border border-gray">
      <img src={img} alt={name} className="w-full h-auto bg-gray p-[1vw]" />
      <div className="text-center w-full h-full p-[2vw] rounded-[inherit] flex flex-col items-center justify-center gap-[1vw]">
        <div className="flex justify-between">
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
          <div className=""></div>
          <div></div>
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