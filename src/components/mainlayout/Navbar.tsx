import React, { useState } from "react";

import { FiShoppingCart } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa6";
import { FaBus } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

import { CiSearch } from "react-icons/ci";

const Navbar: React.FC = () => {
 
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState<string[]>([]);
  const [isHamburgerClicked,setIsHamburgerClicked] = useState<boolean>(false)

  const extraLinks = [
    { title: "Sell With Us", href: "/sell-with-us" },
    { title: "About our Products", href: "/products" },
    { title: "About Us", href: "/about" },
    { title: "Contact Us", href: "/contact" },
    { title: "How It Works", href: "/how-it-works " },
  ];

  

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
    if (e.target.value.trim() === "") {
      setSearchResults([]);
    } else {
      const results = ["Tecno Screen", "Samsung Screen", "Itel Screen"].filter(
        (item) => item.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setSearchResults(results);
    }
  };
  return (
    <div>
      <nav className="bg-gray-800 relative text-white">
        <div className="container mx-auto flex justify-between   items-center p-4">
          {/* harmburger */}
          <div className="text-white flex md:hidden" onClick={()=>setIsHamburgerClicked(!isHamburgerClicked)}>
          <GiHamburgerMenu />
          </div>
          {/* hambugre links */}
         {isHamburgerClicked && <div className="absolute hover:cursor-pointer z-50 top-[100%]  p-4 left-0 bg-gray-800 text-white">
            <ul className="flex flex-col gap-8">
              {extraLinks.map((link,index)=>{
                return(<li key={index} className="hover:underline">{link.title}</li>)
              })}
            </ul>
          </div>}
          <div className="flex items-center">
            <img
              src="/hack-repairs.jpg" 
              alt="logo"
              width={30}
              height={30}
              className="rounded-full"
            />
            <p className="text-sm ml-2 font-semibold md:text-2xl">Hack-Repairs</p>
            <button type="button" className="text-white ml-4 md:hidden">
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                <path d="M4 5h16M4 12h16m-7 7h7"></path>
              </svg>
            </button>
          </div>
          <div className="flex items-center space-x-4">
            <a href="/cart" className={`flex items-center gap-2 py-2 ${window.location.pathname === "/cart" ? "text-green-500" : "text-white"}`}>
              <FiShoppingCart />
              Cart
            </a>
            <a href="/orders" className={`hidden md:flex   items-center gap-2 py-2 ${window.location.pathname === "/orders" ? "text-green-500" : "text-white"}`}>
              <FaBus /> Orders
            </a>
            <a href="/profile" className={`flex items-center gap-2 py-2 ${window.location.pathname === "/profile" ? "text-green-500" : "text-white"}`}>
              <FaRegUser />
            </a>
            
            
          </div>
        </div>
      </nav>
      <div className="container bg-gray-700 md:bg-white  mx-auto flex flex-col md:flex-row items-center p-4 relative">
        <div className="relative w-full md:w-1/2">
          <input
            type="text"
            value={searchInput}
            onChange={handleSearchChange}
            placeholder="Search all phone screens (e.g Tecno, Samsung)"
            className="border p-3 border-gray-300 outline-none focus:ring-2 focus:ring-green-500 rounded-md w-full h-full pl-4 pr-12 text-gray-700 placeholder-gray-500"
          />
          <p className="absolute inset-y-0 right-0 bg-green-800 p-2 rounded-r-md flex items-center">
            <CiSearch className="text-white" />
          </p>
        </div>

        {searchInput.trim() !== "" && (
          <div className="absolute mt-[3rem] md:mt-[9rem] bg-white shadow-lg rounded-md w-full md:w-1/2 z-50">
            {searchResults.length > 0 ? (
              <ul>
                {searchResults.map((result, index) => (
                  <li key={index} className="p-2 border-b border-gray-300">
                    {result}
                  </li>
                ))}
              </ul>
            ) : (
              <div className="p-2 text-gray-500">Results not found</div>
            )}
          </div>
        )}
        <div className="hidden md:flex flex-grow justify-between items-center">
          <div className="relative">
            {/* <p className="text-gray-800">Products</p>
            <div className="relative">
              <button className="flex items-center text-gray-800">
                <RiArrowDropDownLine className="text-2xl" />
              </button>
              <div className="absolute right-0 mt-2 bg-gray-800 text-white rounded-md shadow-lg hidden group-hover:block">
                <button className="px-4 py-2 hover:bg-gray-700 w-full text-left">Tecno</button>
                <button className="px-4 py-2 hover:bg-gray-700 w-full text-left">Samsung</button>
                <button className="px-4 py-2 hover:bg-gray-700 w-full text-left">Itel</button>
                <button className="px-4 py-2 hover:bg-gray-700 w-full text-left">Infinix</button>
                <button className="px-4 py-2 hover:bg-gray-700 w-full text-left">Nokia</button>
                <button className="px-4 py-2 hover:bg-gray-700 w-full text-left">Huawei</button>
              </div>
            </div> */}
          </div>
          <div>
            <ul className="flex space-x-4">
              {extraLinks.map((link) => (
                <li key={link.title} className={`text-white md:text-gray-800 hover:underline ${window.location.pathname === link.href ? "text-green-500 font-bold" : ""}`}>
                  <a href={link.href}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
