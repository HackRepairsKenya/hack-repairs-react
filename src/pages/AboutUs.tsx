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
       type="website"
       url="https://hackrepairs.co.ke/about"
       metaKeywords="about,hack repairs,website"
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
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-gray-800 rounded-lg">
          <h1 className="text-white text-4xl font-bold text-center">About us</h1>
        </div>
       
      </section>
      <section className="text-center py-12 bg-gray-100 rounded-lg">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-lg max-w-3xl mx-auto">
          At hackRepairs, we specialize in selling high-quality phone screens ,phone accessories, laptop accessories, computer accessories
          and providing top-notch repair services for smartphones, computers, and laptops. 
          Our commitment is to deliver the best customer experience and ensure the longevity of your devices.
        </p>
      </section>
       {/* Mission, Vision, and Values */}
       <section className="py-12">
        <h2 className="text-3xl font-bold text-center mb-6">Our Mission, Vision & Values</h2>
        <div className="flex flex-col lg:flex-row gap-6 text-center">
          <div className="bg-white p-6 rounded-lg shadow-md flex-1">
            <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
            <p>To provide our customers with high-quality phone screens and accessories, and to deliver reliable and professional repair services for smartphones, computers, and laptops.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex-1">
            <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
            <p>To become the leading provider of phone accessories and repair services, known for our exceptional quality, service, and commitment to customer satisfaction.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex-1">
            <h3 className="text-xl font-semibold mb-4">Our Values</h3>
            <p>We value integrity, customer focus, innovation, and the pursuit of excellence. Our goal is to foster long-lasting relationships with our customers by providing exceptional products and services.</p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 bg-gray-100 rounded-lg">
        <h2 className="text-3xl font-bold text-center mb-6">Meet the Team</h2>
        <div className="flex flex-col lg:flex-row gap-6 justify-center">
          {/* Team Member 1 */}
          <div className="text-center">
            <img
              className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
              src="ceo.jpg"
              alt="Team Member 1"
            />
            <h3 className="text-xl font-semibold">Job wafula</h3>
            <p className="text-gray-600">Founder & CEO</p>
            <p className="text-sm mt-2">With over 4 years of experience in the tech  and repair industry, leads our team with a passion for technology and innovation.</p>
          </div>
          {/* Team Member 2 */}
          <div className="text-center">
            <img
              className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
              src="/clarah.jpg"
              alt="Team Member 2"
            />
            <h3 className="text-xl font-semibold">Clarah Karembo</h3>
            <p className="text-gray-600">Chief Technician</p>
            <p className="text-sm mt-2">Clarah  is a certified technician with extensive expertise in phone and laptop repairs. She ensures every repair meets the highest standards.</p>
          </div>
          {/* Team Member 3 */}
          <div className="text-center">
            <img
              className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
              src="/brighton.jpg"
              alt="Team Member 3"
            />
            <h3 className="text-xl font-semibold">Brighton Chebor</h3>
            <p className="text-gray-600">Customer Support Manager</p>
            <p className="text-sm mt-2">Brighton leads our customer support team, ensuring all customer inquiries are handled efficiently and professionally.</p>
          </div>
        </div>
      </section>
     
      
        <Footer />
    </div>
  )
}
