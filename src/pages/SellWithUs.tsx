import React from 'react';
import { TiWorld } from "react-icons/ti";
import { MdDashboard, MdSecurity, MdSupportAgent } from "react-icons/md";
import Navbar from '@/components/mainlayout/Navbar';
import Footer from '@/components/mainlayout/Footer';
import { Link } from 'react-router-dom';
import SEO from '@/components/seo/SEO';
import Breadcrumbs from '@/components/BreadCrumbs';
const SellWithUsPage: React.FC = () => {
  return (
    <>
    <SEO
        title="Sell With Us -HackRepairs"
        description="We provide top-notch phone screen repair services and sell high-quality replacement screens for all major brands."
        name="HackRepairs."
        type="sell page"
      />
    <Navbar />
    <Breadcrumbs />
    <div className="container mx-auto p-6">
    
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
          <h1 className="text-white text-4xl font-bold text-center">Start Selling with Us</h1>
        </div>
      </section>
      
      {/* Why Sell With Us Section */}
      <section className="mb-12 pt-12 bg-gray-100">
        <h2 className="text-3xl font-semibold text-center mb-6">Why Sell With Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: Large Customer Base */}
          <div className="text-center flex flex-col justify-center items-center p-4">
            <h3 className="text-[3rem] text-button font-semibold mb-2">
              <TiWorld />
            </h3>
            <h3 className="text-lg font-semibold mb-2">Large Customer Base</h3>
            <p className='text-sm'>Access millions of potential customers worldwide.</p>
          </div>
          {/* Card 2: Seller Dashboard */}
          <div className="text-center  flex flex-col justify-center items-center p-4">
            <h3 className="text-[3rem] text-button font-semibold mb-2">
              <MdDashboard />
            </h3>
            <h3 className="text-lg font-semibold mb-2">Seller Dashboard</h3>
            <p className='text-sm'>Manage your listings with ease using our intuitive dashboard.</p>
          </div>
          {/* Card 3: Secure Payments */}
          <div className="text-center flex flex-col justify-center items-center p-4">
            <h3 className="text-[3rem] text-button font-semibold mb-2">
              <MdSecurity />
            </h3>
            <h3 className="text-lg font-semibold mb-2">Secure Payments</h3>
            <p className='text-sm'>Receive payments securely through our trusted platform.</p>
          </div>

          {/* Card 4: 24/7 Support */}
          <div className="text-center flex flex-col justify-center items-center p-4">
            <h3 className="text-[3rem] text-button font-semibold mb-2">
              <MdSupportAgent />
            </h3>
            <h3 className="text-lg font-semibold mb-2">24/7 Support</h3>
            <p className='text-sm'>Our support team is available around the clock to assist you.</p>
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      <section className="mb-12 bg-gray-100 p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-center mb-6">What Our Sellers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="mb-4">&quot;Selling on this platform has boosted my business. The process is seamless and efficient.&quot;</p>
            <h4 className="text-xl font-semibold">John Doe</h4>
            <p className="text-sm text-gray-600">Electronics Seller</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="mb-4">&quot;The customer support team is always ready to help. Highly recommend!&quot;</p>
            <h4 className="text-xl font-semibold">Jane Smith</h4>
            <p className="text-sm text-gray-600">Fashion Designer</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="mb-4">&quot;I&apos;ve reached more customers than I ever imagined. It&apos;s been a game-changer for my business.&quot;</p>
            <h4 className="text-xl font-semibold">Michael Johnson</h4>
            <p className="text-sm text-gray-600">Handmade Crafts</p>
          </div>
        </div>
      </section>
      {/* Call to Action Section */}
      <section className="text-center">
        <h2 className="text-3xl font-semibold mb-4">Ready to Start Selling?</h2>
        <p className="text-lg mb-6">Sign up today and take your business to the next level.</p>
        <button className="bg-button text-white px-6 py-3 rounded-md text-lg font-semibold shadow-lg">
          <Link to='/sell-with-us/sell'> Get Started</Link>
        </button>
      </section>
    </div>
    <Footer />
    </>
  );
};

export default SellWithUsPage;