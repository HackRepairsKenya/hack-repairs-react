
import Categories from '@/components/home/Categories'
import Hero from '@/components/home/Hero.tsx'
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
      
       <Categories />
       <Footer />
    </div>
  )
}
