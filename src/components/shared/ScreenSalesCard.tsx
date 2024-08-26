
interface Sales {
  img: string;
  title: string;
  oldPrice: number;
  newPrice: number;

}
interface ScreensalesCardProps {
  sales: Sales;
  index: number;
  handleBooking: (title: string) => void;
}
const ScreenSalesCard: React.FC<ScreensalesCardProps> = ({
  sales,
  index,
  handleBooking,
}) => {
  // calculate discount
  const discount = ()=>{
    const discount = sales.oldPrice - sales.newPrice
    return Math.floor(discount/sales.oldPrice*100)
  }
  return (
    <div
    onClick={() => handleBooking(sales.title)}
      key={index}
      className="bg-white hover:cursor-pointer w-48 md:w-52 h-auto relative border border-gray-200 rounded-lg shadow-md overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
    >
        <div className="bg-button absolute right-2 z-50 top-2 text-white h-[2rem] flex items-center justify-center  w-[4rem]"><p className='text-sm animate-bounce text-center'>{discount()}% off</p></div>
      <img
        width={200}
        height={200}
        src={sales.img}
        alt={sales.title}
        
      
      />
      <div className="p-2 flex text-gray-800 justify-between items-center  w-full ">
        <div>
          <h2 className="text-lg font-semibold ">{sales.title}</h2>
          <p className="text-lg font-bold">Ksh {sales.newPrice}</p>
        </div>
        <div className="text-right">
          <p className="text-sm line-through">Ksh {sales.oldPrice}</p>  
        </div>
      </div>
    </div>
  );
};
export default ScreenSalesCard;