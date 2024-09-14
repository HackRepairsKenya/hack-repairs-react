import Breadcrumbs from "@/components/BreadCrumbs"
import Footer from "@/components/mainlayout/Footer"
import Navbar from "@/components/mainlayout/Navbar"


function AboutOurProducts() {
  return (
    <div>
        <Navbar />
        <Breadcrumbs />
         {/* Hero Section */}
      <section className="relative ">
        <img
        width={600}
        height={500}
          src="/images/sell-with-us-hero.jpg"
          alt="Sell with us"
          className="w-full h-96 object-cover rounded-lg shadow-lg"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
          <h1 className="text-white text-4xl font-bold text-center">About Our Products</h1>
        </div>
      </section>
      <section className="text-center py-12 bg-gray-100 rounded-lg">
        <h1 className="text-4xl font-bold mb-4">About Our Products</h1>
        <p className="text-lg max-w-3xl mx-auto">
          At Hackrepairs, we offer a wide range of high-quality phone screens, phone accessories, 
          and professional repair services. Our products are designed to enhance your mobile experience and keep your devices in optimal condition.
        </p>
      </section>
       {/* Product Categories */}
       <section className="py-12">
        <h2 className="text-3xl font-bold text-center mb-6">Explore Our Products</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Phone Screens */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <img
              src="/path-to-image/phone-screen.jpg"
              alt="Phone Screens"
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Phone Screens</h3>
            <p className="text-gray-600">
              We provide high-quality replacement screens for various phone models, ensuring crystal-clear displays and responsive touch functionality.
            </p>
          </div>

          {/* Phone Accessories */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <img
              src="/path-to-image/phone-accessories.jpg"
              alt="Phone Accessories"
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Phone Accessories</h3>
            <p className="text-gray-600">
              From protective cases to chargers and headphones, our range of accessories is designed to complement your device and enhance its functionality.
            </p>
          </div>

          {/* Repair Services */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <img
              src="/path-to-image/repair-services.jpg"
              alt="Repair Services"
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Repair Services</h3>
            <p className="text-gray-600">
              Our professional technicians offer repair services for smartphones, computers, and laptops. We specialize in screen replacements, battery repairs, and more.
            </p>
          </div>

          {/* Computer Accessories */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <img
              src="/path-to-image/computer-accessories.jpg"
              alt="Computer Accessories"
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Computer Accessories</h3>
            <p className="text-gray-600">
              We offer a variety of computer accessories, including keyboards, mice, cables, and more, ensuring your computer setup is optimized for productivity.
            </p>
          </div>

          {/* Laptop Repairs */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <img
              src="/path-to-image/laptop-repairs.jpg"
              alt="Laptop Repairs"
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Laptop Repairs</h3>
            <p className="text-gray-600">
              Our skilled technicians provide a wide range of laptop repair services, including screen repairs, software installations, and hardware upgrades.
            </p>
          </div>

          {/* Custom Orders */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <img
              src="/path-to-image/custom-orders.jpg"
              alt="Custom Orders"
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Custom Orders</h3>
            <p className="text-gray-600">
              If you need a specific phone part or accessory, we can help you place custom orders to get exactly what you need.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default AboutOurProducts