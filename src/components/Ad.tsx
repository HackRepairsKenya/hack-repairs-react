import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
interface Props{
    handleClose:()=>void
  
}

export default function Ad({handleClose}:Props) {
  interface Data {
    title:string
    image:string
    list:string
    list2:string
  }

  const data:Data[] = [
    {
      title: 'Welcome ',
      image: '/delivery.webp',
      list:'buy other accessories and products here',
      list2:'we sell phone ,computer and laptop spares'   
    }, 
    {
      title: 'We are hack repairs',
      image: '/delivery.webp',
      list:'book a service from us',
      list2:'pay zero cash for delivery if within Kilifi Town' 
    },
    {
      title: 'buy with ease',
      image: '/delivery.webp',
      list:'Register you business to sell with us',
      list2:'Get a custom dashboard to manage your products and sales'
    },
  ];
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );
  return (
    <div className="w-full ">
      <div className=" w-full  relative h-20 ">
        <Carousel
          plugins={[plugin.current]}
          className="w-full"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {data.map((item: { title: string; list: string; list2: string; image: string ; }, index: React.Key | null | undefined) => (
              <CarouselItem key={index} className="flex p-2 mx-8  justify-between hover:cursor-pointer relative  bg-gray-800 w-full">
                <div className="" onClick={handleClose}>
                  <h1 className="ml-2 text-white text-lg ">x</h1>
                </div>
                <div className="">
                  <h1 className="ml-2 text-white  font-bold capitalize text-xl">{item.title}</h1>
                </div>
                <div className=" text-white">
                  <p className="text-white  font-bold capitalize text-2xl"> call : 0741699821</p>
                </div>
                
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden " />
          <CarouselNext className="hidden " />
        </Carousel>
      </div>
    </div>
  );
}
