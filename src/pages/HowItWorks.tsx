import Breadcrumbs from '@/components/BreadCrumbs';
import Footer from '@/components/mainlayout/Footer';
import Navbar from '@/components/mainlayout/Navbar';
import SEO from '@/components/seo/SEO';
import React from 'react';

const HowItWorks: React.FC = () => {
interface Testimonies{
    name: string;
    descriptiom: string;}
    const testimonies:Testimonies[] = [
        {
            name:'Dan Kibet',
            descriptiom:'Got my laptop fixed here. Excellent customer service and quick turnaround.'
        },
        
        {
            name:'Effie Onyango',
            descriptiom:'Fast delivery on accessories and very affordable prices. Will shop again'
        },
        {
            name:'Eldine Daniel',
            descriptiom:'Fantastic service! My phone screen was replaced in no time. Highly recommend!'
        }
    ] as const
  return (
    <div>
        <Navbar />
        <SEO title="Services -HackRepairs"
     description="We provide top-notch phone screen repair services and sell high-quality replacement screens for all major brands."
     name="HackRepairs."
     type="website"
     url="https://hackrepairs.co.ke/how-it-works"
     metaKeywords="hackrepairs,hack repairs, how-it-works,Hack,Repairs,How it works,How It Works"
     image="/hack-repairs.jpg" />
        <Breadcrumbs />
        <section className="relative ">
        <img
        width={600}
        height={500}
          src="/images/sell-with-us-hero.jpg"
          alt="Sell with us"
          className="w-full h-96 object-cover rounded-lg shadow-lg"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
          <h1 className="text-white text-4xl font-bold text-center">How It Works</h1>
        </div>
      </section>
    <div className="max-w-7xl mx-auto p-6">
      {/* Introduction Section */}
      <section className="text-center py-10">
        <h1 className="text-4xl font-bold mb-4">How It Works</h1>
        <p className="text-lg">
          Buying phone screens, accessories, and booking repair services for your devices has never been easier. Follow these simple steps to get started.
        </p>
      </section>

      {/* Step-by-Step Guide Section */}
      <section className="space-y-12">
        <div className="flex flex-col lg:flex-row items-center gap-6">
          <div className="lg:w-1/4">
            <div className="text-center p-4">
              <span className="text-3xl text-button">1</span>
              <h2 className="text-xl font-semibold my-2">Choose Your Product or Service</h2>
              <p>Select from a wide range of phone screens, accessories, and services for your devices.</p>
            </div>
          </div>
          <div className="lg:w-1/4">
            <div className="text-center p-4">
              <span className="text-3xl text-button">2</span>
              <h2 className="text-xl font-semibold my-2">Add to Cart or Request Service</h2>
              <p>Add products to your cart or schedule repair services for your device.</p>
            </div>
          </div>
          <div className="lg:w-1/4">
            <div className="text-center p-4">
              <span className="text-3xl text-button">3</span>
              <h2 className="text-xl font-semibold my-2">Secure Checkout</h2>
              <p>Proceed to checkout with secure payment options and provide billing details.</p>
            </div>
          </div>
          <div className="lg:w-1/4">
            <div className="text-center p-4">
              <span className="text-3xl text-button">4</span>
              <h2 className="text-xl font-semibold my-2">Confirmation & Delivery</h2>
              <p>Receive a confirmation and have your product delivered or service scheduled.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-10">
        <h2 className="text-3xl font-bold text-center mb-6">Why Choose Us?</h2>
        <div className="flex flex-col lg:flex-row justify-around items-center">
          <div className="text-center lg:w-1/3 p-4">
            <span className="text-2xl text-green-500">✓</span>
            <h3 className="text-xl font-semibold">Certified Technicians</h3>
            <p>All repairs are carried out by our certified experts.</p>
          </div>
          <div className="text-center lg:w-1/3 p-4">
            <span className="text-2xl text-green-500">✓</span>
            <h3 className="text-xl font-semibold">Fast Delivery</h3>
            <p>We ensure prompt delivery of all orders within the stated time frame.</p>
          </div>
          <div className="text-center lg:w-1/3 p-4">
            <span className="text-2xl text-green-500">✓</span>
            <h3 className="text-xl font-semibold">Warranty on Repairs</h3>
            <p>All repair services come with a warranty to ensure customer satisfaction.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-10">
        <h2 className="text-3xl font-bold text-center mb-6">Customer Testimonials</h2>
        <div className="flex flex-col lg:flex-row justify-around space-y-6 lg:space-y-0">
            {testimonies.map((testimony,index)=>
             <div key={index} className="bg-gray-100 p-4 rounded-lg text-center">
             <p>{testimony.descriptiom}</p>
             <span className="block mt-4 text-sm font-bold">- {testimony.name}</span>
           </div>)}
         
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-10">
        <h2 className="text-3xl font-bold text-center mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div className="bg-gray-100 p-4 rounded-lg">
            <h3 className="font-semibold">How long does it take to replace a screen?</h3>
            <p>Most screen replacements are completed within 1 hour.</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <h3 className="font-semibold">What payment methods are accepted?</h3>
            <p>We accept major credit cards, mobile payments, and PayPal.</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <h3 className="font-semibold">Do you offer warranties on repairs?</h3>
            <p>Yes, all our repairs come with a 3-month warranty.</p>
          </div>
        </div>
      </section>

      {/* Get Started Button */}
      {/* <section className="py-10 text-center">
        <button onClick={()=>navigate('/')} className="bg-button text-white px-6 py-3 rounded-md text-lg hover:bg-green-800 transition">
          Get Started
        </button>
      </section> */}
    </div>
    <Footer />
    </div>
  );
};

export default HowItWorks;
