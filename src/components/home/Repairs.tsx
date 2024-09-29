import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { FaArrowRightLong } from 'react-icons/fa6';
import { Link, useNavigate } from 'react-router-dom';
import ScreenRepaircard from '../shared/ScreenRepaircard';

interface Screen {
  oldPrice: number;
  newPrice: number;
  img: string;
  type: string;
  id:number
}

interface Repair {
  id: number;
  title: string;
  screen: Screen[];
}


const typingAnimation = {
  hidden: { width: 0 },
  visible: (i: number) => ({
    width: `${i}ch`,
    transition: {
      duration: i * 0.1,
      ease: 'linear',
    },
  }),
};

const Repairs: React.FC = () => {
  const navigate = useNavigate();
  const controls = useAnimation();
  const [hasAnimated, setHasAnimated] = useState<boolean>(false);

  const handleBooking = (category:number,Product:number) => {
    // Navigate to the detailed view page using the type as part of the URL.
    navigate(`/category/${category}/product/${Product}}`);
  };

  const availableRepairs: Repair[] = [
    {
      id: 0,
      title: "Tecno",
      screen: [
        {
          id:1,
          type: "Tecno Camon 15",
          img: "/phone-screen.png",
          oldPrice: 2000,
          newPrice: 1800,
        },
        {
          id:1,
          type: "Tecno Spark 7p",
          img: "/phone-screen.png",
          oldPrice: 2500,
          newPrice: 2300,
        },
        {
          id:1,
          type: "Tecno Spark 7p",
          img: "/phone-screen.png",
          oldPrice: 2500,
          newPrice: 2300,
        },
        {
          id:1,
          type: "Tecno Spark 7p",
          img: "/phone-screen.png",
          oldPrice: 2500,
          newPrice: 2300,
        },
        
      ],
    },
    {
      id: 1,
      title: "Samsung",
      screen: [
        {
          id:1,
          type: "Samsung Galaxy S10",
          img: "/phone-screen.png",
          oldPrice: 3000,
          newPrice: 2800,
        },
        
      ],
    },
    
  ];
  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('animatedText');
      if (element) {
        const { top } = element.getBoundingClientRect();
        if (top <= window.innerHeight && !hasAnimated) {
          controls.start('visible');
          setHasAnimated(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [controls, hasAnimated]);

  return (
    <div className="mx-6 md:ml-8 md:mx-0 my-8">
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
      <section className="md:p-4 mt-6">
        <div className="">
          
                  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4  gap-4">
                    {availableRepairs[0].screen.map((product,index) => (
                      <ScreenRepaircard
                        key={index}
                        repair={product}
                        handleBooking={() => handleBooking(0, product.id)} category={0} product={0}                      />
                    ))}
                  </div>
                
              
        </div>
        <div className="mt-8 md:w-[20%] bg-[#003300] hover:bg-green-800 transition duration-300 p-4 text-white py-2 px-6 rounded-full text-lg">
          <Link to="/services/screen-replacement" className="flex items-center justify-center gap-2">
            <span>Explore More</span>
            <span className="animate-ping">
              <FaArrowRightLong />
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
};
export default Repairs;
