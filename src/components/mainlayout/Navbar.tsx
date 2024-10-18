import React, { useContext, useEffect, useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa6";
import { FaBus } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri"
import { GiHamburgerMenu } from "react-icons/gi";
import { useNavigate } from 'react-router-dom'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Link } from "react-router-dom";
import SignIn from "../auth/SignIn";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { CartContext } from "@/context/cart";
import { CiSearch } from "react-icons/ci";
import axios from "axios";
interface Product {
  productDescription: string;
  productName: string;
  description: string;
  productPrice: number;
  coverImage: string ;
  img: string;
  ProductName: string;
  id: string;
  MarketPrice: number;
  sellingPrice: number;
  productQuantity:number
}
interface Category{
  name:string
  id:string
}

const Navbar: React.FC = () => {
  const [searchInput, setSearchInput] = useState("");
  const [isHamburgerClicked, setIsHamburgerClicked] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [categories,setCategories] = useState<Category[]>([])

  const [products,setProducts] = useState<Product[]>([
   
  ]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("https://api.hackrepairs.co.ke/products");
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

 

  useEffect(() => {
    fetchProducts();
  }, []);

  const navigate = useNavigate()
  const handleCategoryClick = (categoryName: string) => {
    navigate(`/category/${categoryName.toLowerCase()}`);
  }
  const cartContext = useContext(CartContext);
  if (!cartContext) {
    return <p>Cart context is not available.</p>;
  }
  const { cartItems } = cartContext;


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
    product.productName.toLowerCase().includes(searchInput) 
  );
  if(!products){
    return <p>No Search products found</p>
  }
  const fetchCategories =async()=>{
const response  = await axios.get('https://api.hackrepairs.co.ke/categories')
setCategories(response.data)
  }
  useEffect(()=>{
    fetchCategories()
  },[])

  
  return (
    <div>
      {showModal && <SignIn  />}
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
          <Link to='/'><div className="flex items-center">
            <img src="/hack-repairs.jpg" alt="logo" width={30} height={30} className="rounded-full" />
            <p className="text-sm ml-2 font-semibold md:text-2xl">Hack-Repairs</p>

          </div>
          </Link>
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
            <p onClick={() =>navigate('/user/:userId')} className="flex items-center gap-2 py-2 cursor-pointer text-black">
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
                    <span>product categories</span> <span className="text-2xl"><RiArrowDropDownLine /></span></span> </DropdownMenuTrigger>
                  <DropdownMenuContent>

{categories.map((category)=>< DropdownMenuItem onClick={()=> handleCategoryClick(`${category.name}`)} >{category.name}</DropdownMenuItem>)}
                   
                    

                  </DropdownMenuContent>
                </DropdownMenu></li>
              <li className="capitalize font-bold"> <DropdownMenu>
                <DropdownMenuTrigger><span className="flex  items-center gap-2">
                  <span>Spare Parts</span> <span className="text-2xl"><RiArrowDropDownLine /></span></span> </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem onClick={()=> handleCategoryClick('/phone-spareparts')}>Phone spare parts</DropdownMenuItem>
                  
                  <DropdownMenuItem onClick={()=> handleCategoryClick('/laptop-sparesparts')}>laptop spareparts</DropdownMenuItem>
                  <DropdownMenuItem onClick={()=> handleCategoryClick('/computer-spareparts')}>computer spareparts</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu> </li>
              <li className="capitalize font-bold"> <DropdownMenu>
                <DropdownMenuTrigger><span className="flex  items-center gap-2">
                  <span>Services</span> <span className="text-2xl"><RiArrowDropDownLine /></span></span> </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem onClick={()=> handleCategoryClick('/phone-screens')}>phone screens</DropdownMenuItem>
                  
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
                      <Link to={`/category/${product.id}/product/${product.id}`}>

                        <h3 className="font-bold">{product.productName}</h3>
                        <h5>Ksh {product.productPrice}</h5>
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
