"use client"
import { useState } from "react";
import { MdMenu, MdClose } from "react-icons/md"; 
const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setActiveDropdown(null); 
  };

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    
    <div className="fixed top-0 w-full z-50 navigation-bar">
      <nav className="flex items-center justify-between flex-wrap bg-white py-md-2 py-4 px-14">
        <div className="md:flex items-center flex-shrink-0 text-white mr-6 justify-center h-full text-center logo mt-2   ">
            <img className="md:w-32 w-24 h-auto " src="/logo.jpg" alt="logo image" />
          
        </div>
        <div className="block lg:hidden "> 
          <button
            onClick={toggleMenu}
            className="ml-[100%] toogle-button flex items-center px-3 py-2  rounded text-black border-black hover:text-gray-500 hover:border-gray-500"
          >
            {isMenuOpen ? <MdClose size={24} /> : <MdMenu size={24} />}
          </button>
        </div>
        <div
          className={`w-full ${
            isMenuOpen ? "block" : "hidden"
          } lg:block  lg:items-center lg:w-auto menu-links`}
        >
          <div className="text-sm  nav-links lg:flex-grow lg:flex-none lg:flex-row flex flex-col lg:gap-3  mt-[-1%]">
            <a
              href="/"
              className=" l  menu-link block mt-4 lg:inline-block lg:mt-0   lg:ml-5  text-black hover:text-[#069376] font-bold text-md "
            >
              Home
            </a>
            {/* <div className="lg:relative inline-block text-left">
              <button
                onClick={() => toggleDropdown(0)}
                className=" l menu-link block mt-4 lg:inline-block lg:mt-0 text-black hover:text-[#069376] font-bold text-md  lg:ml-5"
              >
                Produ
              </button>
              {activeDropdown === 0 && (
                <div className="z-50 origin-top-right lg:absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div
                    className="py-1"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                  >
                    <a
                      href="/institutional"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                     Institutional Furniture
                    </a>
                    <a
                      href="/office"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      Office Furniture
                    </a>
                   
                  </div>
                </div>
              )}
            </div> */}

<div className="lg:relative inline-block text-left">
              <a
               href="/institutional"
                onClick={() => toggleDropdown(2)}
                className=" l menu-link block mt-4 lg:inline-block lg:mt-0 text-black hover:text-[#069376] font-bold text-md  lg:ml-5"
              >
              Institutional
              </a>
            </div>
            <div className="lg:relative inline-block text-left">
              <a
               href="/office"
                onClick={() => toggleDropdown(2)}
                className=" l menu-link block mt-4 lg:inline-block lg:mt-0 text-black hover:text-[#069376] font-bold text-md  lg:ml-5"
              >
              Office
              </a>
            </div>


            <div className="lg:relative inline-block text-left">
              <a
               href="/contact"
                onClick={() => toggleDropdown(2)}
                className=" l menu-link block mt-4 lg:inline-block lg:mt-0 text-black hover:text-[#069376] font-bold text-md  lg:ml-5"
              >
              Contact
              </a>
            </div>

       


          
          
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;