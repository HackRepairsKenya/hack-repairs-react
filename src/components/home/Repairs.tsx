import { useState, useEffect } from 'react';
import {  useAnimation } from 'framer-motion';

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
    <div className="mx-8 my-8">
      {/* Available Repairs Section */}
    
        <div className=' flex gap-4 justify-between'>
       <p className='font-bold text-lg md:text-2xl'>Phone Screen Replacement</p> 
       
        <div className=" bg-green-800  hover:bg-green-700 transition duration-300 p-4 text-white py-2  rounded-lg md:text-lg">
          <Link to="/services/screen-replacement" className="flex items-center justify-center gap-2">
            <span>View All</span>
        
          </Link>
        </div>
        </div>
      
      <section className="  mt-6">
        <div className="">
          
                  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
                    {availableRepairs[0].screen.map((product,index) => (
                      <ScreenRepaircard
                        key={index}
                        repair={product}
                        handleBooking={() => handleBooking(0, product.id)} category={0} product={0}                      />
                    ))}
                  </div>
                
              
        </div>
        
      </section>
    </div>
  );
};
export default Repairs;
