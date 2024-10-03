import { useState, useEffect } from 'react';
import {  useAnimation } from 'framer-motion';


import { Link, useNavigate } from 'react-router-dom';
import ScreenRepaircard from '../shared/ScreenRepaircard';
import axios from 'axios';

interface Product {
  id: string;
  ProductName: string;
  productQuantity: number;
  productPrice: number;
  marketPrice: number;
  categoryId: string; 
  productModel: string;
  supplierName: string;
  coverImage: string;
  productDescription: string;
}





const Repairs: React.FC = () => {
  const navigate = useNavigate();
  const controls = useAnimation();
  const [hasAnimated, setHasAnimated] = useState<boolean>(false);
  const [availableProducts, setAvailableProducts] = useState<Product[]>([]);

  const handleBooking = (category:string,Product:string) => {
    // Navigate to the detailed view page using the type as part of the URL.
    navigate(`/category/${category}/product/${Product}}`);
  };

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




  const fetchProducts = async () => {
    try {
      const response = await axios.get("https://api.hackrepairs.co.ke/products");
      setAvailableProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
  useEffect(()=>{
    fetchProducts
  },[])

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
                    {availableProducts.map((product,index) => (
                      <ScreenRepaircard
                        key={index}
                        repair={product}
                        handleBooking={() => handleBooking(product.id, product.id)} category={''} product={''}                        />
                    ))}
                  </div>
                
              
        </div>
        
      </section>
    </div>
  );
};
export default Repairs;
