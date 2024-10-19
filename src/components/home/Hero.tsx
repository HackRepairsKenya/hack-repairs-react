import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="h-screen relative">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2  gap-8 h-full">
        <div className="text-center z-10 flex flex-col mt-[20%] lg:items-start lg:text-left h-full">
          <h2 className="text-4xl font-bold  md:text-black md:text-4xl">
          Your Trusted Partner for Repairs & Accessories
          </h2>
          <p className="mt-6 text-xl md:text-lg  md:text-gray-600">
            We provide top-notch phone & laptop repair services and sell high-quality accessories for all major brands.
          </p>
          <div className="mt-8 bg-green-800 hover:bg-green-800 transition duration-300 p-4 text-white py-2 px-6 rounded-full text-lg">
            <Link className="font-bold" to='/services'>Explore Services</Link>
          </div>
        </div>
        <div className="h-screen  absolute md:relative inset-0 flex items-center justify-center md:justify-end">
          <img
          
            src="/doctor.png"
            alt="Phone Repair"
            className="w-full object-cover h-full"
          />
          <div className="absolute bg-white inset-0 bg-opacity-75 md:hidden"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
