import { useState } from "react";
import { SiTicktick } from "react-icons/si";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import Navbar from "@/components/mainlayout/Navbar";
import Footer from "@/components/mainlayout/Footer";
import { Link, useParams } from "react-router-dom";
import Breadcrumbs from "@/components/BreadCrumbs";


const repairsData = [
  {
    title: "Tecno",
    products:[
      {
        title: "Tecno X20",
        description: "High-quality Tecno X20 phone screen replacement services.",
        img: "/screens/tecno/tecnos.jpeg",
        price: 1800,
      },
      {
        title: "Tecno X30",
        description: "Premium Tecno X30 phone screen replacement services.",
        img: "/screens/tecno/tecnos.jpeg",
        price: 2200,
      },
      {
        title: "Tecno X30 Pro",
        description: "Excellent Tecno X30 Pro phone screen replacement services.",
        img: "/screens/tecno/tecnos.jpeg",
        price: 2500,
      },
      
    ]
    
  },
  {
    title: "Samsung",
    products:[
      {
        title: "Samsung Galaxy S21",
        description: "Premium Samsung Galaxy S21 phone screen replacement services.",
        img: "/screens/samsung/samsung.jpg",
        price: 2800,
      },
      {
        title: "Samsung Galaxy S21 Ultra",
        description: "Excellent Samsung Galaxy S21 Ultra phone screen replacement services.",
        img: "/screens/samsung/samsung.jpg",
        price: 3500,
      },
      {
        title: "Samsung Galaxy S21+ 5G",
        description: "Amazing Samsung Galaxy S21+ 5G phone screen replacement services.",
        img: "/screens/samsung/samsung.jpg",
        price: 4000,
      },
    ]
  
  },
  {
    title: "Itel",
    products:[
      {
        title: "Itel M21",
        description: "Premium Itel M21 phone screen replacement services.",
        img: "/screens/itel/itel.jpg",
        price: 2800,
      },
      {
        title: "Itel M21 Pro",
        description: "Excellent Itel M21 Pro phone screen replacement services.",
        img: "/screens/itel/itel.jpg",
        price: 3500,
      },
      {
        title: "Itel M21+ 5G",
        description: "Amazing Itel M21+ 5G phone screen replacement services.",
        img: "/screens/itel/itel.jpg",
        price: 4000,
      },
    ]
    
  },
  {
    title: "Xiaomi",
    products:[
      {
        title: "Xiaomi Mi 11",
        description: "Affordable Xiaomi Mi 11 phone screen replacement services.",
        img: "/screens/xiaomi/xiaomi.jpg",
        price: 1800,
      },
      {
        title: "Xiaomi Mi 11 Pro",
        description: "Premium Xiaomi Mi 11 Pro phone screen replacement services.",
        img: "/screens/xiaomi/xiaomi.jpg",
        price: 2200,
      },
      {
        title: "Xiaomi Mi 11 Ultra",
        description: "Excellent Xiaomi Mi 11 Ultra phone screen replacement services.",
        img: "/screens/xiaomi/xiaomi.jpg",
        price: 2500,
      },
    ]
    
  },
];

const RepairDetail = () => {
  const [quantity, setQuantity] = useState(1); // State to track quantity
  const [isBooked, setIsBooked] = useState(false); // State to track booking
  const { id: brand } = useParams(); // Access the dynamic route parameter

  const repairDetail = repairsData[brand?.toLowerCase() as keyof typeof repairsData];

  if (!repairDetail) {
    return <p>Repair details not found</p>;
  }

  // Handlers for increment and decrement
  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  // Handle booking function
  const handleBooking = () => {
    setIsBooked(true);
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
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>

          {/* Details Section */}
          <div className="md:w-1/2">
            <h1 className="text-3xl font-bold mb-4">
              {repairDetail.title} Screen Replacement
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

            {/* Dialog for booking */}
            <Dialog>
              <DialogTrigger>
                <button
                  onClick={handleBooking}
                  className="mt-4 px-6 py-3 bg-button text-white rounded-lg hover:bg-green-700"
                >
                  Book Now
                </button>
              </DialogTrigger>
              {isBooked && (
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle className="text-center text-button text-3xl">
                      <SiTicktick />
                    </DialogTitle>
                    <h1>Service added to cart successfully</h1>
                    <DialogDescription>
                      Do you want to continue browsing for more screen repair services or go to cart?
                    </DialogDescription>
                  </DialogHeader>
                  <div className="flex justify-between capitalize">
                    <button className="bg-button hover:bg-green-800 text-white p-2 rounded">
                      <Link to="/cart">View Cart and checkout</Link>
                    </button>
                    <button className="border border-button p-2 rounded">
                      <Link to="/services/screen-replacement">Continue browsing</Link>
                    </button>
                  </div>
                </DialogContent>
              )}
            </Dialog>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RepairDetail;
