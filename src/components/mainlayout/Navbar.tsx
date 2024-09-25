import React, { useContext, useState } from "react";

import { FiShoppingCart } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa6";
import { FaBus } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
import SignIn from "../auth/SignIn";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { CartContext } from "@/context/cart";

const Navbar: React.FC = () => {
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState<string[]>([]);
  const [isHamburgerClicked, setIsHamburgerClicked] = useState<boolean>(false);
  const [showmodal, setShowModal] = useState<boolean>(false);
   // Access CartContext safely
   const cartContext = useContext(CartContext);

   // Check if CartContext is undefined
   if (!cartContext) {
     return <p>Cart context is not available.</p>;
   }
 
   const {  cartItems } = cartContext;
  
 
  const closeModal = () => {
    setShowModal(false);
  };

  const extraLinks = [
    { title: "Sell With Us", href: "/sell-with-us" },
    { title: "About our Products", href: "/about-our-products" },
    { title: "About Us", href: "/about" },
    { title: "Contact Us", href: "/contact" },
    { title: "How It Works", href: "/how-it-works" },
  ];

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
    if (e.target.value.trim() === "") {
      setSearchResults([]);
    } else {
      const results = [
        "Tecno Screen",
        "Samsung Screen",
        "Itel Screen",
        "Oppo",
        "Sim Trays for Tecno",
      "Sim Trays for Samsung",
      "Sim Trays for iPhone",
      "Phone Chargers",
      "USB Cables",
      "Phone Cases",
      "Screen Protectors",
      "Earphones",
      "Wireless Headsets",
      "Phone Repair Service",
      "Screen Replacement Service",
      "Battery Replacement Service",
      "Waterproofing Service",
      "silicone phone covers"
      ].filter((item) =>
        item.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setSearchResults(results);
    }
  };

  return (
    <div>
      {showmodal && <SignIn closeModal={closeModal} />}
      <nav className="relative bg-white shadow-lg ">
        <div className="container mx-auto flex justify-between items-center p-4">
          {/* hamburger */}
          <Sheet>
            <div
              className="flex md:hidden"
              onClick={() => setIsHamburgerClicked(!isHamburgerClicked)}
            >
              <SheetTrigger>
                <GiHamburgerMenu />
              </SheetTrigger>
            </div>
            <SheetContent className="absolute hover:cursor-pointer z-50 p-4 left-0 bg-gray-800 text-white">
              {isHamburgerClicked && (
                <div>
                  <ul className="flex flex-col gap-8">
                    {extraLinks.map((link, index) => {
                      return (
                        <Link
                          to={link.href}
                          key={index}
                          className="hover:underline"
                        >
                          {link.title}
                        </Link>
                      );
                    })}
                  </ul>
                </div>
              )}
            </SheetContent>
          </Sheet>
          <div className="flex items-center">
            <img
              src="/hack-repairs.jpg"
              alt="logo"
              width={30}
              height={30}
              className="rounded-full"
            />
            <p className="text-sm ml-2 font-semibold md:text-2xl">
              Hack-Repairs
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <Link
              to="/cart"
              className={`flex items-center relative gap-2 py-2 ${
                window.location.pathname === "/cart"
                  ? "text-green-500"
                  : "text-black"
              }`}
            >
              <div className="w-4 h-4 bg-green-800 text-white  rounded-full animate-pulse absolute top-0 right-0 flex items-center justify-center text-xs">
                {cartItems.length <= 0 ?'0': cartItems.length} 

              </div>
              <FiShoppingCart />
              Cart
            </Link>

            
            <a
              href="/orders"
              className={`hidden md:flex items-center gap-2 py-2 ${
                window.location.pathname === "/orders"
                  ? "text-green-500"
                  : "text-black"
              }`}
            >
              <FaBus /> Orders
            </a>
            <p
              onClick={() => setShowModal(!showmodal)}
              className={`flex items-center hover:cursor-pointer gap-2 py-2 ${
                window.location.pathname === "/profile"
                  ? "text-green-500"
                  : "text-black"
              }`}
            >
              <FaRegUser />
            </p>
          </div>
        </div>
      </nav>
      <div className="container mx-auto flex flex-col md:flex-row items-center p-4 relative">
        <div className="relative w-full md:w-1/2">
          <input
            type="text"
            value={searchInput}
            onChange={handleSearchChange}
            placeholder="Search all phone screens & phone accessories (e.g Tecno, sim trays, batteries)"
            className="border p-3 border-gray-300 shadow-lg md:shadow-none outline-none focus:ring-2 focus:ring-green-500 rounded-md w-full h-full pl-4 pr-12 text-gray-700 placeholder-gray-500"
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
                    <Link
                      to={`/products/${result.toLowerCase().replace(/\s+/g, "-")}`}
                      className="hover:underline"
                    >
                      {result}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="p-2 text-gray-500">Results not found</div>
            )}
          </div>
        )}

        <div className="hidden md:flex flex-grow justify-between items-center">
          <div className="relative"></div>
          <div>
            <ul className="flex space-x-4">
              {extraLinks.map((link) => (
                <li
                  key={link.title}
                  className={`text-white md:text-gray-800 hover:underline ${
                    window.location.pathname === link.href
                      ? "text-green-800 underline font-bold "
                      : "text-gray-800"
                  }`}
                >
                  <Link to={link.href}>{link.title}</Link>
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
