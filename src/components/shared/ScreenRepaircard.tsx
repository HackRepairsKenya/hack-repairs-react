
interface Repair {
  img: string;
  title: string;
  oldPrice: number;
  newPrice: number;
}
interface ScreenRepairCardProps {
  repair: Repair;
  index: number;
  handleBooking: (title: string) => void;
}
const ScreenRepairCard: React.FC<ScreenRepairCardProps> = ({
  repair,
  index,
  handleBooking,
}) => {
  // calculate discount
  const discount = ()=>{
    const discount = repair.oldPrice - repair.newPrice
    return Math.floor(discount/repair.oldPrice*100)
  }
  return (
    <div
    onClick={() => handleBooking(repair.title)}
      key={index}
      className="bg-white w-40 md:w-52 hover:cursor-pointer h-auto relative border border-gray-200 rounded-lg shadow-md overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
    >
      <div className="bg-button absolute right-2 z-50 top-2 text-white h-[2rem] flex items-center justify-center  w-[4rem]"><p className='text-sm animate-pulse text-center'>{discount()}% off</p></div>
      <img
        width={200}
        height={200}
        
        className=" "
        src={repair.img}
        alt={repair.title}
      />

      <div className="p-2 flex text-gray-800 justify-between items-center  w-full ">
        <div>
          <h2 className="text-lg font-semibold ">{repair.title}</h2>
          <p className="text-lg font-bold">Ksh {repair.newPrice}</p>
        </div>
        <div className="text-right">
          <p className="text-sm line-through">Ksh {repair.oldPrice}</p>
         
        </div>
      </div>
    </div>
  );
};
export default ScreenRepairCard;