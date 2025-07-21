import React from "react";

const Button = ({ bgColor, textColor, text, className}) => {
  return (
    <button
      className={`uppercase text-[1vw] bg-[${bgColor}] text-[${textColor}] py-4 w-full max-w-[16vw] font-raleway ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
