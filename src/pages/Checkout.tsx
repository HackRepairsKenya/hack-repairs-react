import { useContext } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { FormLabel } from "@/components/ui/form";
import Navbar from "@/components/mainlayout/Navbar";
import Footer from "@/components/mainlayout/Footer";
import Breadcrumbs from "@/components/BreadCrumbs";
import { CartContext } from "@/context/cart";
import axios from "axios";

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

interface Order {
  id: string; // Ideally generated on the server
  clientID: string; // This should be populated with the authenticated user's client ID
  paymentStatus: string;
  deliveryStatus: string;
  products: Product[];
}

interface BillingInfo {
  id: string; // Generate a unique ID for each billing info entry
  phone: string;
  postcode: string;
  state: string;
  street: string;
  country: string;
  companyName: string;
  clientId: string; // This should be populated with the authenticated user's client ID
}

interface CheckoutData {
  name: string;
  email: string;
  billingInfo: BillingInfo[];
  orders: Order[];
}

const Checkout = () => {
  const cartContext = useContext(CartContext);
  if (!cartContext) {
    return <p>Cart context is not available.</p>;
  }

  const { cartItems, getCartTotal } = cartContext;
  const methods = useForm<CheckoutData>({
    defaultValues: {
      name: '',
      email: '',
      billingInfo: [{
        id: 'billing_info_id', // You might want to generate or manage this ID
        phone: '',
        postcode: '',
        state: '',
        street: '',
        country: '',
        companyName: '',
        clientId: 'client_id', // Include the client ID if needed
      }],
      orders: [{
        id: 'order_id', // You might want to generate this
        clientID: 'client_id', // Include the client ID if needed
        paymentStatus: 'Pending',
        deliveryStatus: 'Pending',
        products: cartItems.map(item => ({
          productPrice: item.productPrice,
          productName: item.ProductName,
          productDescription: item.productDescription,
          categoryId: item.categoryId,
          productModel: item.productModel,
          marketPrice: item.marketPrice,
          supplierName: item.supplierName,
          productQuantity: item.productQuantity,
          coverImage: item.coverImage,
        })),
      }],
    }
  });

  const { register, handleSubmit, formState: { errors } } = methods;

  const handleCheckout = async (data: CheckoutData) => {
    // Prepare orderData according to the specified schema
    const orderData = {
      name: data.name,
      email: data.email,
      billingInfo: data.billingInfo,
      orders: [{
        id: 'generated_order_id', // You can generate or manage this ID
        clientID: 'generated_client_id', // Include the authenticated user's client ID
        paymentStatus: 'Pending',
        deliveryStatus: 'Pending',
        products: data.orders[0].products,
      }]
    };

    try {
      const response = await axios.post('https://api.hackrepairs.co.ke/orders', orderData);
      console.log("Order successfully placed:", response.data);
      alert("Order placed successfully!");
    } catch (error) {
      console.error("Error placing order:", error);
      alert("Failed to place the order. Please try again.");
    }
  };

  return (
    <>
      <Navbar />
      <Breadcrumbs />
      <FormProvider {...methods}>
        <div className="container mx-auto py-8">
          <h1 className="text-3xl font-bold mb-6">Checkout</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Checkout Form */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4">Billing Details</h2>
              <form onSubmit={handleSubmit(handleCheckout)}>
                <div className="mb-4">
                  <FormLabel htmlFor="name">Name</FormLabel>
                  <input
                    id="name"
                    {...register("name", { required: "Name is required" })}
                    placeholder="John Doe"
                    className="w-full p-2 border"
                  />
                  {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                </div>
                <div className="mb-4">
                  <FormLabel htmlFor="email">Email</FormLabel>
                  <input
                    id="email"
                    {...register("email", { 
                      required: "Email is required", 
                      pattern: { value: /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/, message: "Invalid email address" } 
                    })}
                    placeholder="john.doe@example.com"
                    className="w-full p-2 border"
                  />
                  {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                </div>
                <div className="mb-4">
                  <FormLabel htmlFor="phone">Phone</FormLabel>
                  <input
                    id="phone"
                    {...register("billingInfo.0.phone", { required: "Phone number is required" })}
                    placeholder="+254 712 345 678"
                    className="w-full p-2 border"
                  />
                  {errors.billingInfo?.[0]?.phone && <p className="text-red-500 text-sm">{errors.billingInfo[0].phone.message}</p>}
                </div>
                <div className="mb-4">
                  <FormLabel htmlFor="address">Address</FormLabel>
                  <input
                    id="address"
                    {...register("billingInfo.0.street", { required: "Address is required" })}
                    placeholder="123 Main Street, Nairobi"
                    className="w-full p-2 border"
                  />
                  {errors.billingInfo?.[0]?.street && <p className="text-red-500 text-sm">{errors.billingInfo[0].street.message}</p>}
                </div>
                {/* Additional Fields (optional) */}
                <div className="mb-4">
                  <FormLabel htmlFor="postcode">Postcode</FormLabel>
                  <input
                    id="postcode"
                    {...register("billingInfo.0.postcode")}
                    placeholder="12345"
                    className="w-full p-2 border"
                  />
                </div>
                <div className="mb-4">
                  <FormLabel htmlFor="state">State</FormLabel>
                  <input
                    id="state"
                    {...register("billingInfo.0.state")}
                    placeholder="Nairobi"
                    className="w-full p-2 border"
                  />
                </div>
                <div className="mb-4">
                  <FormLabel htmlFor="country">Country</FormLabel>
                  <input
                    id="country"
                    {...register("billingInfo.0.country")}
                    placeholder="Kenya"
                    className="w-full p-2 border"
                  />
                </div>
                <div className="mb-4">
                  <FormLabel htmlFor="companyName">Company Name</FormLabel>
                  <input
                    id="companyName"
                    {...register("billingInfo.0.companyName")}
                    placeholder="Your Company Name"
                    className="w-full p-2 border"
                  />
                </div>
                <Button type="submit" className="w-full bg-button text-white rounded-lg hover:bg-green-700">
                  Place Order
                </Button>
              </form>
            </div>

            {/* Order Summary */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
              {cartItems.length === 0 ? (
                <p className="text-gray-500">Your cart is empty.</p>
              ) : (
                <div>
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex items-center border-b border-gray-200 py-4">
                      <img
                        width={100}
                        height={100}
                        src={item.coverImage}
                        alt={item.ProductName}
                        className="w-24 h-24 object-cover rounded-lg mr-4"
                      />
                      <div className="flex-grow">
                        <h3 className="text-lg font-semibold">{item.ProductName}</h3>
                        <p className="text-gray-600">Ksh {item.productPrice}</p>
                        <p className="text-gray-500">Quantity: {item.productQuantity}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-bold">Ksh {item.productPrice * item.productQuantity}</p>
                      </div>
                    </div>
                  ))}
                  <div className="mt-4 font-bold">
                    <p>Total: Ksh {getCartTotal()}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </FormProvider>
      <Footer />
    </>
  );
};

export default Checkout;
