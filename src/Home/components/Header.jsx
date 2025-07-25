import { useState, useRef, useEffect } from "react";
import { ChevronDown, Search, ShoppingCart } from "lucide-react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const dropdownRef = useRef(null);
  const searchRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsSearchOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };
  return (
    <nav className="flex w-full relative justify-between items-end bg-[#825c41] pl-[3vw] pr-20 pb-[1vw] pt-[1.5vw]">
      <div className="flex items-start">
        <ShoppingCart color="#DDDB00" size={20} className="size-[1.5vw]" />
        <ul className="flex uppercase text-[#3A4510] text-[1vw] ml-4 space-x-[2.5vw] font-raleway">
          <NavLink to="/login">login</NavLink>
          <li>language</li>
          <NavLink>shop now</NavLink>
          <NavLink to="/farmerfirst">farm & farmers</NavLink>
          <NavLink>home</NavLink>
          <li className="relative" ref={dropdownRef}>
            <div
              className="flex items-center cursor-pointer hover:opacity-80"
              onClick={toggleDropdown}
            >
              <span>farmer first</span>
              <ChevronDown
                size={16}
                className={`ml-1 transition-transform duration-200 ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
                color="#3A4510"
              />
            </div>

            {isDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 bg-[#B2B2B2] shadow-lg z-50 min-w-[14vw]">
                <ul className="py-6 text-sm text-[#4E5B20] normal-case">
                  <li>
                    <a
                      href="#"
                      className="block px-6 py-2 hover:bg-gray-100 transition-colors duration-150 text-[1vw] font-raleway"
                    >
                      FARMER FIRST
                    </a>
                  </li>
                  <li>
                    <NavLink
                      to="/products"
                      className="block px-6 py-2 hover:bg-gray-100 transition-colors duration-150 text-[1vw] font-raleway"
                    >
                      PRODUCTS
                    </NavLink>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-6 py-2 hover:bg-gray-100 transition-colors duration-150 text-[1vw] font-raleway"
                    >
                      HAPPIEST TOURISM
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-6 py-2 hover:bg-gray-100 transition-colors duration-150 text-[1vw] font-raleway"
                    >
                      OUTLETS
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-6 py-2 hover:bg-gray-100 transition-colors duration-150 text-[1vw] font-raleway"
                    >
                      JOIN WITH US
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </li>
        </ul>
      </div>
      <div className="">
        <ul className="flex justify-center items-end space-x-8">
          <li></li>
          <li
            ref={searchRef}
            onClick={toggleSearch}
            className="flex items-center gap-4  cursor-pointer"
          >
            <span className="h-[1em] w-[1em] flex items-center justify-center">
              <Search className="h-[1em] w-[1em]" color="#3A4510" />
            </span>
            <h1 className="uppercase text-[#3A4510] text-[1vw] font-light">
              search
            </h1>
            {isSearchOpen && (
              <div className="absolute top-full left-0 bg-[#6A6A6A] shadow-lg z-50 w-[100vw] p-[8vw] flex justify-between items-center duration-300 transition-all">
                <div className="max-w-5xl w-full flex justify-between border-b pb-2 border-[#B2B2B2]">
                <h1 className="uppercase text-[#B2B2B2] text-[1vw] font-light">
                  search
                </h1>
                <span className="h-[1em] w-[1em] flex items-center justify-center">
                  <Search className="h-[1em] w-[1em]" color="#B2B2B2" />
                </span>
                </div>
              </div>
            )}
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
