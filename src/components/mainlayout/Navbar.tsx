import React, { useContext, useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa6";
import { FaBus } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri"
import { GiHamburgerMenu } from "react-icons/gi";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Link } from "react-router-dom";
import SignIn from "../auth/SignIn";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { CartContext } from "@/context/cart";
import { CiSearch } from "react-icons/ci";

const Navbar: React.FC = () => {
  const [searchInput, setSearchInput] = useState("");
  const [isHamburgerClicked, setIsHamburgerClicked] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [products] = useState([
    {
      id: 1,
      title: "Wireless Earbuds",
      category: "Phone Accessories",
      price: "500",
      tags: "earbuds wireless bluetooth noise-cancelling black",
    },
    {
      id: 2,
      title: "Laptop Mouse",
      category: "Computer Accessories",
      price: "350",
      tags: "mouse wireless optical laptop computer ergonomic",
    },
    {
      id: 3,
      title: "Laptop Battery",
      category: "Laptop Spares",
      price: "4500",
      tags: "battery laptop replacement lithium-ion high-capacity",
    },
    {
      id: 4,
      title: "Phone Screen Protector",
      category: "Phone Accessories",
      price: "250",
      tags: "screen protector tempered glass phone anti-scratch",
    },
    {
      id: 5,
      title: "External Hard Drive",
      category: "Computer Accessories",
      price: "5000",
      tags: "hard drive external storage portable 1TB laptop",
    },
    {
      id: 6,
      title: "Laptop Keyboard",
      category: "Laptop Spares",
      price: "4500",
      tags: "keyboard replacement laptop backlit wireless",
    },
  ]);


  const cartContext = useContext(CartContext);
  if (!cartContext) {
    return <p>Cart context is not available.</p>;
  }
  const { cartItems } = cartContext;

  const closeModal = () => setShowModal(false);

  const extraLinks = [
    { title: "Sell With Us", href: "/sell-with-us" },
    { title: "About our Products", href: "/about-our-products" },
    { title: "About Us", href: "/about" },
    { title: "Contact Us", href: "/contact" },
    { title: "How It Works", href: "/how-it-works" },
  ];

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value.toLowerCase());
  };

  const filteredProducts = products.filter((product) =>
    product.tags.toLowerCase().includes(searchInput) ||
    product.title.toLowerCase().includes(searchInput) ||
    product.category.toLowerCase().includes(searchInput)
  );

  return (
    <div>
      {showModal && <SignIn closeModal={closeModal} />}
      <nav className="relative bg-white">
        <div className="container mx-auto flex justify-between items-center p-4">
          {/* Hamburger menu for mobile */}
          <Sheet>
            <div className="flex md:hidden" onClick={() => setIsHamburgerClicked(!isHamburgerClicked)}>
              <SheetTrigger>
                <GiHamburgerMenu />
              </SheetTrigger>
            </div>
            <SheetContent className="absolute hover:cursor-pointer z-50 p-4 left-0 bg-gray-800 text-white">
              {isHamburgerClicked && (
                <div>
                  <ul className="flex flex-col gap-8">
                    {extraLinks.map((link, index) => (
                      <Link key={index} to={link.href} className="hover:underline">
                        {link.title}
                      </Link>
                    ))}
                  </ul>
                </div>
              )}
            </SheetContent>
          </Sheet>
          <div className="flex items-center">
            <img src="/hack-repairs.jpg" alt="logo" width={30} height={30} className="rounded-full" />
            <p className="text-sm ml-2 font-semibold md:text-2xl">Hack-Repairs</p>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/cart" className="flex items-center relative gap-2 py-2 text-black">
              <div className="w-4 h-4 bg-green-800 text-white rounded-full animate-pulse absolute top-0 right-0 flex items-center justify-center text-xs">
                {cartItems.length}
              </div>
              <FiShoppingCart /> Cart
            </Link>
            <a href="/orders" className="hidden md:flex items-center gap-2 py-2 text-black">
              <FaBus /> Orders
            </a>
            <p onClick={() => setShowModal(!showModal)} className="flex items-center gap-2 py-2 cursor-pointer text-black">
              <FaRegUser />
            </p>
          </div>
        </div>
      </nav>

      {/* Search bar and results */}
      <div className="mx-2  flex flex-col md:flex-row  items-center  relative">
        <div className="relative w-full md:w-1/2">
          <input
            type="text"
            value={searchInput}
            onChange={handleSearchChange}
            placeholder="What are you looking for?"
            className="border p-2   bg-slate-200 outline-none rounded-2xl w-full pl-[3rem] pr-12"
          />
          
           {/* Search Icon */}
            <div className="absolute   top-[20%] left-4 flex  items-center  pointer-events-none">
              <CiSearch className=" font-bold " />
            </div>
          {/* products */}
          <div className="mt-2 md:mx-8">
            <ul className="flex text-sm md:text-lg justify-between">
              <li className="capitalize font-bold">
                <DropdownMenu>
                  <DropdownMenuTrigger><span className="flex  items-center gap-2">
                    <span>Accessories</span> <span className="text-2xl"><RiArrowDropDownLine /></span></span> </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>Phone accessories</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>laptop accessories</DropdownMenuItem>
                    <DropdownMenuItem>computer accessories</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu></li>
              <li className="capitalize font-bold"> <DropdownMenu>
                <DropdownMenuTrigger><span className="flex  items-center gap-2">
                  <span>Spare Parts</span> <span className="text-2xl"><RiArrowDropDownLine /></span></span> </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>Phone spare parts</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>laptop spareparts</DropdownMenuItem>
                  <DropdownMenuItem>computer spareparts</DropdownMenuItem>

                </DropdownMenuContent>
              </DropdownMenu> </li>
              <li className="capitalize font-bold"> <DropdownMenu>
                <DropdownMenuTrigger><span className="flex  items-center gap-2">
                  <span>LCD's</span> <span className="text-2xl"><RiArrowDropDownLine /></span></span> </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>phone screens</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                </DropdownMenuContent>
              </DropdownMenu> </li>
            </ul>
          </div>

          {/* Display search results */}
          {searchInput && (
            <div className="absolute  bg-white shadow-lg rounded-md w-full  md:w-1/2 z-50">
              {filteredProducts.length > 0 ? (
                <ul>
                  {filteredProducts.map((product, index) => (
                    <li key={index} className="p-2 border-b border-gray-300">
                      <Link to={`/category/:categoryId/product/:productId`}>

                        <h3 className="font-bold">{product.title}</h3>
                        <h5>Ksh {product.price}</h5>
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="p-2 text-gray-500">No results found</div>
              )}
            </div>
          )}

        </div>
        <div className="hidden   md:ml-2 md:flex flex-grow justify-between  -mt-8 ">
          <ul className="flex space-x-4">
            {extraLinks.map((link) => (
              <li key={link.title} className="text-gray-800 hover:underline">
                <Link to={link.href}>{link.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
