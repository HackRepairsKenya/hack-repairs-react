import { Link, useNavigate } from "react-router-dom";
// service props types
interface serviceprops {
  title: string;
  img: string;
  link: string;
  description:string
}

export default function ServicesCard({ title, img, link,description }: serviceprops) {
  const navigate = useNavigate();
  // handle card click
  const handleClick = () => {
    navigate(`${link}`);
  };
  return (
    <div
      className="w-68 h-auto  bg-gray-100  p-2 transition-transform duration-500 ease-in-out hover:scale-105   hover:cursor-pointer  "
      onClick={handleClick}
    >
      <div className='w-full'>
        <img
          width={400}
          height={400}
          className="w-full h-48 object-contain"
          src={img}
          alt={title}
        />
      </div>
      <div className="p-2 flex justify-center  w-full hover:text-gray-900 ">
        <h2 className="text-lg hover:text-gray-90 text-green-900  font-bold">{title}</h2>
      </div>
      <div className=" flex justify-center w-full ">
        <h2 className="text-md text-gray-500 ">{description}</h2>
      </div>
      <div className='flex p-2 justify-center'>
      <Link className='bg-green-800 text-center p-2 rounded-md capitalize text-white' to={""}>learn more</Link>
    </div></div>
  );
}