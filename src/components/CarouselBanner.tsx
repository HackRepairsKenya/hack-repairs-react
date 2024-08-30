import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function CarouselBanner() {
  // Define your data here
  const data = [
    {
      title: 'We have other products',
      image: '/delivery.webp',
      list:'buy other accessories and products here',
      list2:'we sell phone ,computer and laptop spares'
       // Replace with actual image URL
    },
    
    {
      title: 'We offer door-step screen replacement services',
      image: '/delivery.webp',
      list:'book a service from us',
      list2:'pay zero cash for delivery if within Kilifi Town' // Replace with actual image URL
    },
    {
      title: 'Sell With Us',
      image: '/delivery.webp',
      list:'Register you business to sell with us',
      list2:'Get a custom dashboard to manage your products and sales'
    },
  ];

  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <div className="w-full  md:mx-4 lg:mx-auto md:mt-8 md:mb-8">
      <div className=" w-full relative h-64 lg:w-[90%] mx-auto">
        <Carousel
          plugins={[plugin.current]}
          className="w-full"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {data.map((item, index) => (
              <CarouselItem key={index} className="flex-shrink-0 hover:cursor-pointer relative h-64 bg-gray-800 w-full">
                <div className="w-[30%] p-4">
                  <h1 className="text-white absolute top-4 left-4 z-50 font-bold capitalize text-3xl">{item.title}</h1>
                </div>
                <div className="absolute z-50 top-[50%] left-[50%]  text-white">
                  <ul className="list-disc">
                    <li>{item.list}</li>
                    <li>{item.list2}</li>
                  </ul>
                </div>
                <div className="">
                <div className="absolute inset-0 left-0 bg-gray-800 bg-opacity-50"></div> 
                   <img  

                  src={item.image} className="absolute w-52 mx-auto top-4  left-[30%]   h-auto" alt={item.title}/> 
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:block" />
          <CarouselNext className="hidden sm:block" />
        </Carousel>
      </div>
    </div>
  );
}
