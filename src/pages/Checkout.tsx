import { useContext, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/mainlayout/Navbar";
import Footer from "@/components/mainlayout/Footer";
import Breadcrumbs from "@/components/BreadCrumbs";
import { CartContext } from "@/context/cart"; // Make sure CartContextType is imported
import axios from "axios";
import Alert from "@mui/material/Alert";
import { useNavigate } from "react-router-dom";

interface Product {
  productPrice: number;
  productName: string;
  productDescription: string;
  categoryId: string;
  productModel: string;
  marketPrice: number;
  supplierName: string;
  productQuantity: number;
  coverImage: string;
}

interface CheckoutData {
  clientID: string | null;
  paymentStatus: string;
  deliveryStatus: string;
  products: Product[];
}

const Checkout = () => {
  const cartContext = useContext(CartContext);
  const [clientID, setClientID] = useState<string | null>(null);
  const [orderStatus, setOrderStatus] = useState<boolean>(false);
  const navigate=useNavigate()

  // Get cartItems and total safely from context or fallback to empty array
  const cartItems = cartContext?.cartItems || [];
  const getCartTotal = cartContext?.getCartTotal || (() => 0);

  // Fetch clientID from localStorage on component mount
  useEffect(() => {
    const storedClientID = localStorage.getItem("client_id");
    setClientID(storedClientID);
  }, []);

  // Handle Checkout
  const handleCheckout = async (e: React.FormEvent) => {
    e.preventDefault();

    // Map the cart items to fit the Product schema
    const products = cartItems.map((item: any) => ({
      productPrice: item.productPrice,
      productName: item.ProductName,
      productDescription: item.productDescription,
      categoryId: item.categoryId,
      productModel: item.productModel,
      marketPrice: item.marketPrice,
      supplierName: item.supplierName,
      productQuantity: item.productQuantity,
      coverImage: item.coverImage,
    }));

    const orderData: CheckoutData = {
      clientID: clientID,
      paymentStatus: "Pending",
      deliveryStatus: "Pending",
      products: products,
    };

    try {
      const response = await axios.post(
        "https://api.hackrepairs.co.ke/orders",
        orderData
      );
      console.log("Order successfully placed:", response.data);
      setOrderStatus(true);
      localStorage.removeItem("cartItems");
     setTimeout(()=>{
      navigate('/')

     },3000) 
    } catch (error) {
      console.error("Error placing order:", error);
      alert("Failed to place the order. Please try again.");
    }
  };

  return (
    <>
      {/* Conditionally render either the order summary or success message */}
      {orderStatus ? (
        <div className="absolute top-2 left-4">
          <Alert variant="filled" severity="success">
            Order placed successfully!Redirecting ...
          </Alert>
          </div>
        ) : (
          <div>
      <Navbar />
      <Breadcrumbs />
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-6">Checkout</h1>

      
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Order Summary */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
              {cartItems.length === 0 ? (
                <p className="text-gray-500">Your cart is empty.</p>
              ) : (
                <div>
                  {cartItems.map((item: any, index: number) => (
                    <div
                      key={index} // Using index as a fallback key, though using a unique id is better if available
                      className="flex items-center border-b border-gray-200 py-4"
                    >
                      <img
                        width={100}
                        height={100}
                        src={item.coverImage}
                        alt={item.ProductName}
                        className="w-24 h-24 object-cover rounded-lg mr-4"
                      />
                      <div className="flex-grow">
                        <h3 className="text-lg font-semibold">
                          {item.ProductName}
                        </h3>
                        <p className="text-gray-600">Ksh {item.productPrice}</p>
                        <p className="text-gray-500">
                          Quantity: {item.productQuantity}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-bold">
                          Ksh {item.productPrice * item.productQuantity}
                        </p>
                      </div>
                    </div>
                  ))}
                  <div className="mt-4 font-bold">
                    <p>Total: Ksh {getCartTotal()}</p>
                  </div>
                </div>
              )}
              <Button
                onClick={handleCheckout}
                className="w-full bg-button text-white rounded-lg hover:bg-green-700 mt-4"
              >
                Place Order
              </Button>
            </div>
          </div>
          
        
      </div>
      
      <Footer /></div>)}
    </>
  );
};

export default Checkout;
