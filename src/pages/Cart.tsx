
import { useState } from "react";
interface CartItem {
  id: number;
  title: string;
  img: string;
  price: number;
  quantity: number;
}
import Footer from "@/components/mainlayout/Footer";
import Navbar from "@/components/mainlayout/Navbar";
import { Link } from "react-router-dom";
import Breadcrumbs from "@/components/BreadCrumbs";

const initialCartItems: CartItem[] = [
  {
    id: 1,
    title: "Tecno Screen",
    img: "/screens/tecno/tecnos.jpeg",
    price: 1800,
    quantity: 1,
  },
  {
    id: 2,
    title: "Samsung Screen",
    img: "/screens/samsung/samsung.jpg",
    price: 2300,
    quantity: 2,
  },
];

const Cart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>(initialCartItems);

  const handleQuantityChange = (id: number, newQuantity: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleRemoveItem = (id: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <>
    <Navbar />
    <Breadcrumbs />
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      <div className="bg-white shadow-md rounded-lg p-4">
        {cartItems.length === 0 ? (
          <p className="text-center text-gray-500">Your cart is empty.</p>
        ) : (
              <div>
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center border-b border-gray-200 py-4">
                <img
                width={200}
                height={200}
                  src={item.img}
                  alt={item.title}
                  className="w-24 h-24 object-cover rounded-lg mr-4"
                />
                <div className="flex-grow">
                  <h2 className="text-xl font-semibold">{item.title}</h2>
                  <p className="text-gray-600">Ksh {item.price}</p>
                  <div className="flex items-center mt-2">
                    <button
                      onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                      disabled={item.quantity <= 1}
                      className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg"
                    >
                      -
                    </button>
                    <span className="mx-2">{item.quantity}</span>
                    <button
                      onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                      className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg"
                    >
                      +
                    </button>
                    <button
                      onClick={() => handleRemoveItem(item.id)}
                      className="ml-4 px-4 py-2  text-red-500  hover:text-red-400 rounded-lg"
                    >
                      Remove
                    </button>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold">Ksh {item.price * item.quantity}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-6 flex justify-between items-center">
          <h2 className="text-xl font-semibold">Total:</h2>
          <p className="text-2xl font-bold">Ksh {getTotalPrice()}</p>
        </div>

        <button className="mt-6 px-6 py-3 bg-button text-white rounded-lg hover:bg-green-700">
         <Link to='/checkout'>Proceed to Checkout</Link> 
        </button>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Cart;