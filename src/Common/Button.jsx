import { Link } from "react-router-dom";

const Button = ({ bgColor, textColor, text, className, routeLink}) => {
  return (
    <Link to={routeLink}
      className={`uppercase text-[1vw] bg-[${bgColor}] text-[${textColor}] py-4 w-full max-w-[16vw] font-raleway ${className} flex justify-center items-center`}
    >
      {text}
    </Link>
  );
};

export default Button;
