
import {Link} from 'react-router-dom';
import React from 'react';
const Footer: React.FC = () => {

  // our services
  const services = [
    {
      title:'Screen Repairs'
    },
    {
      title:'Screen Replacement'
    },
    {
      title:'Phone Accessories'
    }
  ]
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-wrap -mx-6">
          <div className="w-full md:w-1/3 px-6 mb-6 md:mb-0">
            <h5 className="text-xl font-bold mb-4">PhoneRepair</h5>
            <p className="text-gray-400">
              We provide top-notch phone screen repair services and sell high-quality replacement screens for all major brands.
            </p>
          </div>
          <div className="w-full md:w-1/3 px-6 mb-6 md:mb-0">
            <h5 className="text-xl font-bold mb-4">Services</h5>
            <ul className="list-none">
              {services.map((link,index)=>{
                return (
                  <li className="mb-2" key={index}>
                  <Link to="#services" className="text-gray-400 hover:text-white transition">{link.title}</Link>
                </li>
                )
              })}
             
            </ul>
          </div>
          <div className="w-full md:w-1/3 px-6">
            <h5 className="text-xl font-bold mb-4">Contact Us</h5>
            <ul className="list-none">
              <li className="mb-2">
                <span className="text-gray-400">Hack repairs, Kilifi</span>
              </li>
              <li className="mb-2">
                <span className="text-gray-400">Email: info@hackrepairs.co.ke</span>
              </li>
              <li className="mb-2">
                <span className="text-gray-400">Phone: +254 741 699 821</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center text-gray-400 mt-10">
          &copy; 2024 Hack-Repairs. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;