import { useParams, useNavigate, Link } from "react-router-dom";
import { products } from "../Config/products";
import Button from "../Common/Button";
import { ArrowLeft, Minus, PlusIcon } from "lucide-react";
import { useState } from "react";
import HoverRating from "./components/Rating";
import DeliveryCheckButton from "./components/DeliveryCheckButton";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [count, setCount] = useState(0);
  const product = products.find((p) => p.id === parseInt(id));

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-lightgray">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4 font-raleway">
            Product Not Found
          </h2>
          <Button
            text="Back to Catalog"
            textColor={"#DDDB00"}
            bgColor={"#E8500E"}
            routeLink={"/product-catalog"}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-forestgreen px-20 py-[3vw]">
      <div className="">
        <Link
          onClick={() => navigate("/product-catalog")}
          className="mb-8 text-white hover:text-gray-800 flex items-center gap-2 uppercase font-raleway font-light text-[1vw] w-fit"
        >
          <span>
            <ArrowLeft/>
          </span>
          Back
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="flex justify-center bg-lightgray h-[30vw] p-[3vw]">
            <img
              src={product.detailImg}
              alt={product.name}
              className="w-auto object-cover object-center"
            />
          </div>

          <div className="space-y-6">
            <div className="max-w-[30vw]">
              <h1 className="text-[3vw] font-light text-[#4E5B20] font-nelphim tracking-[0.01em] uppercase leading-[120%]">
                {product.name} {product.weight}
              </h1>
            </div>

            <div>
              <HoverRating/>
            </div>

            <div className="text-[2vw] font-semibold text-[#4E5B20] font-raleway">
              {product.price}
            </div>

            <div className="flex gap-[2vw]">
              <button className="flex items-center bg-lightgray border border-gray rounded-2xl px-[1vw] py-[0.5vw] text-darkgreen">
                <span
                  onClick={handleDecrement}
                  className="flex items-center justify-center h-[2vw] w-[2vw] cursor-pointer hover:bg-gray-200 rounded transition-colors"
                >
                  <Minus size={12} strokeWidth={4} className="size-[0.8vw]"/>
                </span>
                <span className="px-[1vw] min-w-[2rem] text-center font-medium font-raleway text-[1vw]">
                  {count}
                </span>
                <span
                  onClick={handleIncrement}
                  className="flex items-center justify-center h-[2vw] w-[2vw] cursor-pointer hover:bg-gray-200 rounded transition-colors"
                >
                  <PlusIcon size={12} strokeWidth={4} className="size-[0.8vw]"/>
                </span>
              </button>
              <button className="bg-[#DDDB00] text-gray w-full  py-[0.8vw] text-[1.1vw] rounded-2xl transition-colors font-raleway uppercase border border-gray">
                Add to Cart
              </button>
              <button className="border border-gray bg-[#DDDB00] text-gray w-full  py-[0.8vw] text-[1.1vw] rounded-2xl  transition-colors font-raleway uppercase">
                Buy Now
              </button>
            </div>
    
              <DeliveryCheckButton/>
  
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
