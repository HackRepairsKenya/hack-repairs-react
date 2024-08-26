
const Hero = () => {
  return (
    <div className="h-screen relative">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 items-center gap-8 h-full">
        <div className="text-center flex flex-col justify-center items-center lg:items-start z-50 lg:text-left h-full">
          <h2 className="text-3xl font-bold text-white md:text-black md:text-6xl">
            Phone Screen Repair & Sales
          </h2>
          <p className="mt-6 text-xl md:text-lg text-white md:text-gray-600">
            We provide top-notch phone screen repair services and sell high-quality replacement screens for all major brands.
          </p>
          <div className="mt-8 bg-[#003300] hover:bg-green-800 transition duration-300 p-4 text-white py-2 px-6 rounded-full text-lg">
            <button >Explore Services</button>
          </div>
        </div>
        <div className="h-screen absolute md:relative inset-0 flex items-center justify-center md:justify-end">
          <img
          
            src="/heroim.png"
            alt="Phone Repair"
            className="w-full h-full"
          />
          <div className="absolute bg-black inset-0 bg-opacity-50 md:hidden"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
