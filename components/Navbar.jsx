"use client";
import { useState, useEffect } from "react";
import { MdMenu, MdClose } from "react-icons/md";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setActiveDropdown(null);
  };

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  useEffect(() => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  return (
    <div className="fixed top-0 w-full z-50 navigation-bar">
      <nav className="flex items-center justify-between flex-wrap bg-white py-md-2 py-4 px-14">
        <div className="md:flex items-center flex-shrink-0 text-white mr-6 justify-center h-full text-center logo mt-2">
          <img
            className="md:w-32 w-24 h-auto"
            src="/logo.jpg"
            alt="Nooks Furniture Logo"
          />
        </div>
        <div className="block lg:hidden">
          <button
            onClick={toggleMenu}
            className="ml-[100%] toggle-button flex items-center px-3 py-2 rounded text-black border-black hover:text-gray-500 hover:border-gray-500"
          >
            {isMenuOpen ? <MdClose size={24} /> : <MdMenu size={24} />}
          </button>
        </div>
        <div
          className={`w-full ${isMenuOpen ? "block" : "hidden"} lg:block lg:items-center lg:w-auto menu-links`}
        >
          <div className="text-sm nav-links lg:flex-grow lg:flex-none lg:flex-row flex flex-col lg:gap-3 mt-[-1%]">
            <a
              href="/"
              className="menu-link block mt-4 lg:inline-block lg:mt-0 lg:ml-5 text-black hover:text-[#069376] font-bold text-md"
            >
              Home
            </a>
            <div className="lg:relative inline-block text-left">
              <a
                href="/institutional"
                onClick={() => toggleDropdown(2)}
                className="menu-link block mt-4 lg:inline-block lg:mt-0 text-black hover:text-[#069376] font-bold text-md lg:ml-5"
              >
                Institutional
              </a>
            </div>
            <div className="lg:relative inline-block text-left">
              <a
                href="/office"
                onClick={() => toggleDropdown(2)}
                className="menu-link block mt-4 lg:inline-block lg:mt-0 text-black hover:text-[#069376] font-bold text-md lg:ml-5"
              >
                Office
              </a>
            </div>
            <div className="lg:relative inline-block text-left">
              <a
                href="/contact"
                onClick={() => toggleDropdown(2)}
                className="menu-link block mt-4 lg:inline-block lg:mt-0 text-black hover:text-[#069376] font-bold text-md lg:ml-5"
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
// "use client";
// import { useState } from "react";
// import Link from "next/link";
// import { MdClose, MdMenu, MdHomeFilled, MdCategory, MdShop2, MdContacts } from "react-icons/md";

// import Nav from "./Nav"

// const Navbar = () => {
//   const [menuOpened, setMenuOpened] = useState(false);
//   const toggleMenu = () => setMenuOpened(!menuOpened);

//   return (
//     <header className="fixed top-0 left-0 m-auto mx-auto max-w-[1540px] px-6 lg:px-20 w-full bg-white ring-1 ring-slate-900/5 z-10">
//       <div className="px-4 flex items-center justify-between py-3 max-xs:px-2">
//         {/* logo */}
//         <div>
//         <a href="/">
//               <img src="/logo.jpg" alt="Nooks Furniture Logo" height={66} width={66} />
//             </a>
//         </div>
//         {/* navbar desktop */}
//         <Nav containerStyles={"hidden md:flex gap-x-5 xl:gap-x-10 medium-15 "} />
//         {/* navbar mobile */}
//         <Nav
//           containerStyles={`${
//             menuOpened
//               ? "flex items-start flex-col gap-y-12 fixed top-20 right-8 p-12 bg-white rounded-3xl shadow-md w-64 medium-16 ring-1 ring-slate-900/5 transition-all duration-300"
//               : "flex items-start flex-col gap-y-12 fixed top-20 -right-[100%] p-12 bg-white rounded-3xl shadow-md w-64 medium-16 ring-1 ring-slate-900/5 transition-all duration-300"
//           }`}
//         />
//         {/* button */}
//         <div className="flex items-center justify-between sm:gap-x-2 bold-16">
//           {!menuOpened ? (
//             <MdMenu
//               className="hover:ring-secondary md:hidden cursor-pointer hover:text-secondary mr-2 p-1 ring-1 ring-slate-900/30 h-8 w-8 rounded-full"
//               onClick={toggleMenu}
//             />
//           ) : (
//             <MdClose
//               className="hover:ring-secondary md:hidden cursor-pointer hover:text-secondary mr-2 p-1 ring-1 ring-slate-900/30 h-8 w-8 rounded-full"
//               onClick={toggleMenu}
//             />
//           )}
//           <div className="flex items-center justify-between sm:gap-x-6">
//             {/* Add more elements here if needed */}
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Navbar;
