
import Brands from '@/components/home/Brand'
import Categories from '@/components/home/Categories'
import Hero from '@/components/home/Hero.tsx'
import OtherProducts from '@/components/home/OtherProducts'
import Repairs from '@/components/home/Repairs'
import WhyHR from '@/components/home/WHYHR'
import Footer from '@/components/mainlayout/Footer'
import Navbar from '@/components/mainlayout/Navbar.tsx'
import { useEffect } from 'react'

export default function Home() {
  useEffect(()=>{
    document.title='Home -Hack repars'
  })
  return (
    <div>
      

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
