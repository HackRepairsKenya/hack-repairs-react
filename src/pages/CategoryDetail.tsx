import { useContext, useEffect, useState } from "react";
import { SiTicktick } from "react-icons/si";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import Navbar from "@/components/mainlayout/Navbar";
import Footer from "@/components/mainlayout/Footer";
import { Link, useParams } from "react-router-dom";
import Breadcrumbs from "@/components/BreadCrumbs";
import { CartContext } from "@/context/cart";
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

const CategoryDetail = () => {
  const { productId } = useParams<{ productId: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [availableProducts, setAvailableProducts] = useState<Product[]>([]);
  const [quantity] = useState(1); 

  const cartContext = useContext(CartContext);

  // Check if CartContext is undefined
  if (!cartContext) {
    return <p>Cart context is not available.</p>;
  }

  const { addToCart} = cartContext;

  const fetchProducts = async () => {
    try {
      const response = await axios.get("https://api.hackrepairs.co.ke/products");
      setAvailableProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    // Find the product based on the productId
    const foundProduct = availableProducts.find((prod) => prod.id === productId);
    setProduct(foundProduct || null);
  }, [productId, availableProducts]);

  if (!product) {
    return <p>Product not found.</p>;
  }

  return (
    <>
      <Navbar />
      <Breadcrumbs />
      <div className="container mx-auto py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Image Section */}
          <div className="md:w-1/2">
            <img
              src={product.coverImage}
              alt={product.ProductName}
              className="rounded-lg shadow-md"
            />
          </div>

          {/* Details Section */}
          <div className="md:w-1/2">
            <h1 className="text-3xl font-bold mb-4">{product.productName} </h1>
            <p className="text-gray-600 mb-4">
               {product.productDescription}.
            </p>

            {/* Price Details */}
            <div className="mb-4">
              <p className="text-lg text-gray-500 line-through">Ksh {product.MarketPrice}</p>
              <p className="text-2xl font-bold">Ksh {product.productPrice}</p>
            </div>

            {/* Quantity Selector
            <div className="mb-4 flex items-center space-x-4">
              <button
                onClick={()=>decreaseproductQuantity(product)}
                className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
              >
                -
              </button>
              <span className="text-xl">{quantity}</span>
              <button
                onClick={() => increaseproductQuantity(product)}
                className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
              >
                +
              </button>
            </div> */}

            {/* Total Price */}
            <div className="mb-4">
              <p className="text-xl font-semibold">
                Total Price: Ksh {product.productPrice * quantity}
              </p>
            </div>

            {/* Add to Cart Button with Dialog */}
            <Dialog>
              <DialogTrigger>
                <button onClick={() => addToCart(product)} className="mt-4 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700">
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
