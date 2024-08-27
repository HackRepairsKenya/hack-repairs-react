
import Brands from '@/components/home/Brand'
import Categories from '@/components/home/Categories'
import Hero from '@/components/home/Hero.tsx'
import OtherProducts from '@/components/home/OtherProducts'
import Repairs from '@/components/home/Repairs'
import WhyHR from '@/components/home/WHYHR'
import Footer from '@/components/mainlayout/Footer'
import Navbar from '@/components/mainlayout/Navbar.tsx'
import SEO from '@/components/seo/SEO'
export default function Home() {
  
  return (
    <div>
      
      
      <SEO
title='HackRepairs'
description=' We provide top-notch phone screen repair services and sell high-quality replacement screens for all major brands.'
name='HackRepairs.'
type='home page' />

<Navbar />
       <Hero/>
      <WhyHR />
       <Categories />
       <Repairs />
       <OtherProducts />
       <Brands />
       <Footer />
    </div>
  ) 
}
