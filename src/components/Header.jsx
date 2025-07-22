import { useState, useRef, useEffect } from "react";
import { ChevronDown, Search, ShoppingCart } from "lucide-react";

const Header = () => {

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <nav className="flex w-full justify-between items-end bg-[#825c41] pl-[3vw] pr-20 pb-[1vw] pt-[1.5vw]">
      <div className="flex items-start">
        <ShoppingCart color="#DDDB00" size={20} className="size-[1.5vw]" />
        <ul className="flex uppercase text-[#3A4510] text-[1vw] ml-4 space-x-[2.5vw] font-raleway">
          <li>login</li>
          <li>language</li>
          <li >shop now</li>
          
          <li>farm & farmers</li>
          <li>home</li>
           <li className="relative" ref={dropdownRef}>
            <div 
              className="flex items-center cursor-pointer hover:opacity-80"
              onClick={toggleDropdown}
            >
              <span>farmer first</span>
              <ChevronDown
                size={16} 
                className={`ml-1 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}
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
                    <a 
                      href="#" 
                      className="block px-6 py-2 hover:bg-gray-100 transition-colors duration-150 text-[1vw] font-raleway"
                    >
                      PRODUCTS
                    </a>
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
