import { useContext, useEffect, useState } from "react";
import { SiTicktick } from "react-icons/si";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import Navbar from "@/components/mainlayout/Navbar";
import Footer from "@/components/mainlayout/Footer";
import { Link, useParams } from "react-router-dom";
import Breadcrumbs from "@/components/BreadCrumbs";
import { CartContext } from "@/context/cart";
;
interface Product {
  title: string;
  img: string;
  quantity:number;
  oldPrice: number;
  newPrice: number;
  id: number;
}

interface Repair {
  id: number;
  title: string;
  screen: Product[];
}

const categories: Repair[] = [
  {
    id: 0,
    title: "Tecno",
    screen: [
      {
        id: 1,
        title: "Tecno Camon 15",
        img: "/screens/tecno/tecnoscreen.png",
        oldPrice: 2000,
        newPrice: 1800,
        quantity:1
      },
      {
        id: 2,
        title: "Tecno Spark 7p",
        img: "/screens/tecno/tecnoscreen.png",
        oldPrice: 2500,
        newPrice: 2300,
        quantity:1
      },
    ],
  },
  {
    id: 2,
    title: "Samsung",
    screen: [
      {
        id: 1,
        title: "Samsung Galaxy S10",
        img: "/screens/samsung/samsungscreen.png",
        oldPrice: 3000,
        quantity:1,

        newPrice: 2800,
      },
    ],
  },
];


const CategoryDetail = () => {
  const { categoryId, productId } = useParams<{ categoryId: string; productId: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [category, setCategory] = useState<Repair | null>(null);
  const [quantity] = useState(1); 
  
  const cartContext = useContext(CartContext);

  // Check if CartContext is undefined
  if (!cartContext) {
    return <p>Cart context is not available.</p>;
  }
  const { addToCart,decreaseQuantity, increaseQuantity} = cartContext;
  

  useEffect(() => {
    // Find the category and product based on the params
    const foundCategory = categories.find(cat => cat.id === parseInt(categoryId || ""));
    const foundProduct = foundCategory?.screen.find(prod => prod.id === parseInt(productId || ""));

    setCategory(foundCategory || null);
    setProduct(foundProduct || null);
  }, [categoryId, productId]);

  if (!product || !category) return <div>Product or category not found</div>;


  return (
    <>
      <Navbar />
      <Breadcrumbs />
      <div className="container mx-auto py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Image Section */}
          <div className="md:w-1/2">
            <img
              src={product.img}
              alt={product.title}
              className="rounded-lg shadow-md"
            />
          </div>

          {/* Details Section */}
          <div className="md:w-1/2">
            <h1 className="text-3xl font-bold mb-4">{product.title} Screen</h1>
            <p className="text-gray-600 mb-4">
              Get the best quality screen replacement for {product.title}.
            </p>

            {/* Price Details */}
            <div className="mb-4">
              <p className="text-lg text-gray-500 line-through">Ksh {product.oldPrice}</p>
              <p className="text-2xl font-bold">Ksh {product.newPrice}</p>
            </div>

            {/* Quantity Selector */}
            <div className="mb-4 flex items-center space-x-4">
              <button
                onClick={()=>decreaseQuantity(product)}
                className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
              >
                -
              </button>
              <span className="text-xl">{quantity}</span>
              <button
                onClick={()=>increaseQuantity(product)}
                className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
              >
                +
              </button>
            </div>

            {/* Total Price */}
            <div className="mb-4">
              <p className="text-xl font-semibold">
                Total Price: Ksh {product.newPrice * quantity}
              </p>
            </div>

            {/* Add to Cart Button with Dialog */}
            <Dialog>
              <DialogTrigger>
                <button onClick={()=>addToCart(product)} className="mt-4 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700">
                  Add to Cart
                </button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle className="text-center text-green-600 text-3xl">
                    <SiTicktick />
                  </DialogTitle>
                  <h1 className="text-center text-lg">
                    Product added to cart successfully
                  </h1>
                  <DialogDescription className="text-center">
                    Do you want to continue browsing or go to your cart for checkout?
                  </DialogDescription>
                </DialogHeader>

                {/* Actions */}
                <div className="flex justify-between mt-4">
                  <button className="bg-green-600 hover:bg-green-700 text-white p-2 rounded">
                    <Link to="/cart">View Cart and Checkout</Link>
                  </button>
                  <button className="border border-green-600 p-2 rounded">
                    <Link to="/">Continue Browsing</Link>
                  </button>
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
