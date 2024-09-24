
import { useState } from "react";
import { SiTicktick } from "react-icons/si";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import Navbar from "@/components/mainlayout/Navbar";
import Footer from "@/components/mainlayout/Footer";
import { Link, useParams } from "react-router-dom";
import Breadcrumbs from "@/components/BreadCrumbs";

interface Product {
  title: string;
  description: string;
  img: string;
  price: number
}
interface SalesData {

  title: string;

  products: Product[]

};



const salesData = [
  {
    id: 0,
    title: "Tecno",
    screen: [
      {
        type: "Tecno Camon 15",
        img: "/screens/tecno/tecnoscreen.png",
        oldPrice: 2000,
        newPrice: 1800,
      },
      {
        type: "Tecno Spark 7p",
        img: "/screens/tecno/tecnoscreen.png",
        oldPrice: 2500,
        newPrice: 2300,
      },
      
    ],
  },
  {
    id: 1,
    title: "Samsung",
    screen: [
      {
        type: "Samsung Galaxy S10",
        img: "/screens/samsung/samsungscreen.png",
        oldPrice: 3000,
        newPrice: 2800,
      },
      
    ],
  },
  
];
const CategoryDetail = () => {
  const { id: category } = useParams(); // Access the dynamic route parameter
  const [quantity, setQuantity] = useState(1); // State to track quantity

  const repairDetail = salesData[category?.toLowerCase() as keyof typeof salesData];

  if (!repairDetail) {
    return <p>Category details not found</p>; // Handle case where brand is not found
  }



  // Handlers for increment and decrement
  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  return (
    <>
      <Navbar />
      <Breadcrumbs />
      <div className="container mx-auto py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Image Section */}
          <div className="md:w-1/2">
            <img
              width={500}
              height={500}

              src={repairDetail.img}
              alt={repairDetail.title}
              className=""
            />
          </div>

          {/* Details Section */}
          <div className="md:w-1/2">
            <h1 className="text-3xl font-bold mb-4">
              {repairDetail.title} Phone Screen
            </h1>
            <p className="text-gray-600 mb-4">{repairDetail.description}</p>

            <div className="mb-4">
              <p className="text-lg text-gray-500 line-through">
                Ksh {repairDetail.oldPrice}
              </p>
              <p className="text-2xl font-bold">Ksh {repairDetail.newPrice}</p>
            </div>

            {/* Quantity Section */}
            <div className="mb-4 flex items-center space-x-4">
              <button
                onClick={handleDecrement}
                className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
              >
                -
              </button>
              <span className="text-xl">{quantity}</span>
              <button
                onClick={handleIncrement}
                className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
              >
                +
              </button>
            </div>

            {/* Total Price */}
            <div className="mb-4">
              <p className="text-xl font-semibold">
                Total Price: Ksh {repairDetail.newPrice * quantity}
              </p>
            </div>
            <Dialog>
              <DialogTrigger> <button className="mt-4 px-6 py-3 bg-button text-white rounded-lg hover:bg-green-700">
                Add To cart
              </button>
              </DialogTrigger>
              <DialogContent className="">
                <DialogHeader>
                  <DialogTitle className="text-center text-button text-3xl"><SiTicktick /></DialogTitle>
                  <h1>Product added to cart successfully</h1>
                  <DialogDescription>
                    Do you want to continue browsing for more screen repair services or go to cart?
                  </DialogDescription>
                </DialogHeader>

                <div className='flex justify-between capitalize'> <button className="bg-button hover:bg-green-800 text-white p-2 rounded"><Link to='/cart'>View Cart and checkout</Link></button>
                  <button className="border  border-button p-2 rounded">
                    <Link to='/'>Continue browsing</Link>  </button>
                </div>




              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CategoryDetail;