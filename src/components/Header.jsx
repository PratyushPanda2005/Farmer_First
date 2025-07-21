import { Search, ShoppingCart } from "lucide-react";

const Header = () => {
  return (
    <nav className="flex w-full justify-between items-end bg-[#825c41] pl-[3vw] pr-20 pb-[1vw] pt-[1.5vw]">
      <div className="flex items-start">
        <ShoppingCart color="#DDDB00" size={20} className="size-[1.5vw]" />
        <ul className="flex uppercase text-[#3A4510] text-[1vw] ml-4 space-x-[2.5vw] font-raleway">
          <li>login</li>
          <li>language</li>
          <li>join with us</li>
          <li>farm & farmers</li>
          <li>home</li>
          <li>farmer first</li>
        </ul>
      </div>
      <div className="">
        <ul className="flex justify-center items-end space-x-8">
          <li></li>
          <li className="flex items-center gap-4">
            <span className="h-[1em] w-[1em] flex items-center justify-center">
              <Search className="h-[1em] w-[1em]" color="#3A4510" />
            </span>
            <h1 className="uppercase text-[#3A4510] text-[1vw] font-light">search</h1>
          </li>
          <li>
            <img
              src="/assets/Logo.svg"
              alt="PrimePro Logo"
              className="w-[14vw]"
            />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
