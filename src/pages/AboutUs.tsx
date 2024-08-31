import Breadcrumbs from "@/components/BreadCrumbs";
import Footer from "@/components/mainlayout/Footer";
import Navbar from "@/components/mainlayout/Navbar";
import SEO from "@/components/seo/SEO";


export default function AboutUs() {
  return (
    <div>
      <SEO 
       title="About Us -HackRepairs"
       description="We provide top-notch phone screen repair services and sell high-quality replacement screens for all major brands."
       name="HackRepairs."
       type="sell page"
        image="/hack-repairs.jpg"/>
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
          <h1 className="text-white text-4xl font-bold text-center">About us</h1>
        </div>
      </section>
     
      
        <Footer />
    </div>
  )
}
