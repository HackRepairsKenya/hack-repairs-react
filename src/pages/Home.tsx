import CarouselBanner from "@/components/CarouselBanner";
import Brands from "@/components/home/Brand";
import Categories from "@/components/home/Categories";
import Hero from "@/components/home/Hero.tsx";
import OtherProducts from "@/components/home/OtherProducts";
import Repairs from "@/components/home/Repairs";
import WhyHR from "@/components/home/WHYHR";
import Footer from "@/components/mainlayout/Footer";
import Navbar from "@/components/mainlayout/Navbar.tsx";
import SEO from "@/components/seo/SEO";
import FloatingButton from "@/components/shared/FloatingButton";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useEffect, useState } from "react";

export default function Home() {
  const [showModal, setShowModal] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 7000);

    // Clear the timeout if the component is unmounted before the timeout completes
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <SEO
        title="HackRepairs - Quality Screens, Quality Services"
        description="We provide top-notch phone screen repair services and sell high-quality replacement screens for all major brands."
        name="HackRepairs."
        type="website"
        url="https://hackrepairs.co.ke/"
        image="https://hackrepairs.co.ke/hack-repairs.jpg"
        metaKeywords="home,hack repairs, kilifi,screens, screen replacement,phone spares,tecno ,nokia,samsung,oppo"
      />

      <Navbar />
      <Hero />
      <CarouselBanner />
      <WhyHR />
      <Categories />
      <Repairs />
      <OtherProducts />
      <Brands />
      
      <Footer />
      <FloatingButton />

      {showModal && (
  <Dialog open={showModal} onOpenChange={setShowModal} >
    <DialogContent >
      <DialogHeader>
        <DialogTitle className="mt-2">Is Your Phone Screen Cracked or Damaged?</DialogTitle>
        <DialogDescription className="flex flex-col gap-4">
          <p>Don't let a cracked screen ruin your day! We offer fast and reliable on-door screen replacement services right here in <span className="font-bold text-black">Kilifi</span>, <span className="font-bold text-black">Malindi</span> & <span className="font-bold text-black">Mombasa</span>. Our expert technicians are just a call away, ready to provide you with a top-quality repair right at your doorstep.</p>
          {/* <p>Why choose us?</p>
          <ul>
            <li><strong>Convenience:</strong> No need to travel or wait in long lines. We come to you!</li>
            <li><strong>Quick Service:</strong> Get your phone repaired in no time with minimal disruption to your day.</li>
            <li><strong>Quality Parts:</strong> We use high-quality replacement screens to ensure a long-lasting fix.</li>
            <li><strong>Expert Technicians:</strong> Our skilled professionals handle your device with care and precision.</li>
          </ul> */}
          <p>Book your appointment today and enjoy a hassle-free repair experience. Your phone will look and work like new again!</p>
          <button className="bg-button p-2  rounded-lg text-white">book now</button>
        </DialogDescription>
      </DialogHeader>
    </DialogContent>
  </Dialog>
)}

    </div>
  );
}
