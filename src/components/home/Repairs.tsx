

import {useState,useEffect} from 'react'
import { motion, useAnimation } from "framer-motion";
import { FaArrowRightLong } from "react-icons/fa6";
import ScreenRepairCard from '../shared/ScreenRepaircard';
import { Link, useNavigate } from 'react-router-dom';

interface Repair {
  title: string;
  img: string;
  oldPrice: number;
  newPrice: number;
}
const typingAnimation = {
  hidden: { width: 0 },
  visible: (i: number) => ({
    width: `${i}ch`,
    transition: {
      duration: i * 0.1,
      ease: "linear",
    },
  }),
};
const Repairs = () => {
  const navigate = useNavigate();
  const controls = useAnimation();
  const [hasAnimated, setHasAnimated] = useState(false);
  const handleBooking = (title: string) => {
    navigate(`/brand/${title.toLowerCase()}`);
  };

  const availableRepairs: Repair[] = [
    {
      title: "Tecno",
      img: "/screens/tecno/tecnoscreen.png",
      oldPrice: 2000,
      newPrice: 1800,
    },
    {
      title: "Samsung",
      img: "/screens/tecno/tecnoscreen.png",
      oldPrice: 2500,
      newPrice: 2300,
    },
    {
      title: "Itel",
      img: "/screens/tecno/tecnoscreen.png",
      oldPrice: 1500,
      newPrice: 1400,
    },
    {
      title: "Xiaomi",
      img: "/screens/tecno/tecnoscreen.png",
      oldPrice: 2200,
      newPrice: 2000,
    },
  ];
  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("animatedText");
      if (element) {
        const { top } = element.getBoundingClientRect();
        if (top <= window.innerHeight && !hasAnimated) {
          controls.start("visible");
          setHasAnimated(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls, hasAnimated]);

  return (
    <div className=" md:ml-8 mx-8 md:mx-0 my-8">
        
      {/* Available Repairs Section */}
      <motion.h1
        id="animatedText"
        className="text-2xl font-bold capitalize overflow-hidden whitespace-nowrap"
        variants={typingAnimation}
        initial="hidden"
        animate={controls}
        custom={20} // Adjust this value based on the length of your text
      >
        Repair Your Screen Now !!
      </motion.h1>
      <section className="md:p-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {availableRepairs.map((repair, index) => (
            <div key={index}>
            <ScreenRepairCard repair={repair} index={index} handleBooking={handleBooking} />
          </div>))}
        </div>
        <div className="mt-8 md:w-[20%] bg-[#003300] hover:bg-green-800 transition duration-300 p-4 text-white py-2 px-6 rounded-full text-lg">
            <Link to="/services/screen-replacement" className="flex items-center justify-center gap-2 ">
             <span>Explore More</span> 
              <span className="animate-ping"><FaArrowRightLong /></span>
            </Link>
          </div>
      </section>
      
    </div>
  );
};
export default Repairs;