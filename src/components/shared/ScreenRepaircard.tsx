
interface Repair {
  img: string;
  type: string;
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
    onClick={() => handleBooking(repair.type)}
      key={index}
      className="bg-white w-40 md:w-52
       h-auto mb-4 hover:cursor-pointer relative border border-gray-200 rounded-lg shadow-md overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
    >
      <div className="bg-button absolute right-2 z-50 rounded-lg top-2 text-white h-[2rem] flex items-center justify-center  w-[4rem]"><p className='text-sm animate-pulse text-center'>{discount()}% off</p></div>
      <img
       
        className=" "
        src={repair.img}
        alt={repair.type}
        
      />

      <div className="p-2 flex text-gray-800 justify-between items-center  w-full ">
        <div>
          <h2 className="text-sm font-semibold ">{repair.type}</h2>
          <p className="text-sm  font-bold">Ksh {repair.newPrice}</p>
        </div>
        <div className="text-right">
          <p className="text-sm line-through">Ksh {repair.oldPrice}</p>
        </div>
      </div>
    </div>
  );
};
export default ScreenRepairCard;