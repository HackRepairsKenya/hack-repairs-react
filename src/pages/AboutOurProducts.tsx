import Footer from "@/components/mainlayout/Footer"
import Navbar from "@/components/mainlayout/Navbar"


function AboutOurProducts() {
  return (
    <div>
        <Navbar />
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
      <Footer />
    </div>
  )
}

export default AboutOurProducts