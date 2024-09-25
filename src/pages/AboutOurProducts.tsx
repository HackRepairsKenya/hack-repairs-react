import Breadcrumbs from "@/components/BreadCrumbs";
import Footer from "@/components/mainlayout/Footer";
import Navbar from "@/components/mainlayout/Navbar";
import SEO from "@/components/seo/SEO";

function AboutOurProducts() {
  const productCategories = [
    {
      image: "/screens/tecno//tecnoscreen.png",
      name: "Phone Screens",
      description:
        "We provide high-quality replacement screens for various phone models, ensuring crystal-clear displays and responsive touch functionality.",
    },
    {
      image: "/phone-accessories.png",
      name: "Phone Accessories",
      description:
        " From protective cases to chargers and headphones, our range of accessories is designed to complement your device and enhance its functionality.",
    },
    {
      image:'/c-accessories.png',
      name:'Computer accessories',
      description:' We offer a variety of computer accessories, including keyboards, mice, cables, and more, ensuring your computer setup is optimized for productivity.'
    },
    {
      image:'/laptop-repair.png',
      name:'laptop repairs',
      description:'Our skilled technicians provide a wide range of laptop repair services, including screen repairs, software installations, and hardware upgrades.'
    },
    {
      image:'/heroim.png',
      name:'repair services',
      description:' Our professional technicians offer repair services for smartphones, computers, and laptops. We specialize in screen replacements,battery repairs, and more.'
    },
    {
      image:'/custom-order.jpg',
      name:'custom orders',
      description:'If you need a specific phone part or accessory, we can help you place custom orders to get exactly what you need.'
    },

  ];
  return (
    <div>
      <SEO  
        title="About Our Products"
        description="We provide top-notch phone screen repair services and sell high-quality replacement screens for all major brands."
        name="HackRepairs."
        type="website"
        image="https://hackrepairs.co.ke/about-our-products.png"
        metaKeywords="phone screen repairs, screen replacement, Tecno screen, Samsung screen, iPhone screen, phone accessories, HackRepairs, Kenya"
        url="https://hackrepairs.co.ke/about-our-products" />
      <Navbar />
      <Breadcrumbs />
      {/* Hero Section */}
      <section className="relative  h-96">
        <img
        
          src="/about-our-products.png"
          alt="Sell with us"
          className="w-full h-full object-contain"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-gray-800  ">
          <h1 className="text-white text-4xl font-bold text-center">
            About Our Products
          </h1>
        </div>
      </section>
      <section className="text-center py-12 bg-gray-100 rounded-lg">
        <h1 className="text-4xl font-bold mb-4">About Our Products</h1>
        <p className="text-lg max-w-3xl mx-auto">
          At Hackrepairs, we offer a wide range of high-quality phone screens,
          phone accessories, laptop accessories and professional repair services. Our products are
          designed to enhance your mobile experience and keep your devices in
          optimal condition.
        </p>
      </section>
      {/* Product Categories */}
      <section className="py-12 mx-8">
        <h2 className="text-3xl font-bold text-center mb-6">
          Explore Our Products
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {productCategories.map((p, index) => (
            <div
              key={index}
              className="bg-white p-2 rounded-lg shadow-md text-center hover:cursor-pointer  transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
            >
              <div className="flex justify-center items-center">
                
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-48 h-48 object-contain  mb-4"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{p.name}</h3>
              <p className="text-gray-600">{p.description}</p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default AboutOurProducts;
