import React from "react";

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

interface ScreenRepairCardProps {
  repair: Product;
  category: string;
  product: string;
  handleBooking: (category: string, product: string) => void;
}

const ScreenRepairCard: React.FC<ScreenRepairCardProps> = ({
  repair,
  category,
  product,
  handleBooking,
}) => {
  // Calculate discount
  const discount = () => {
    const discount = repair.marketPrice - repair.productPrice;
    return Math.floor((discount / repair.marketPrice) * 100);
  };

  
  return (
    <div
      onClick={() => handleBooking(category, product)}
      className="bg-gradient-to-b from-slate-200 w-40 md:w-52 h-auto mb-4 hover:cursor-pointer relative  rounded-lg shadow-md overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
    >
      <div className="bg-button absolute right-2 z-50 rounded-lg top-2 text-white h-[2rem] flex items-center justify-center w-[4rem]">
        <p className="text-sm animate-pulse text-center">{discount()}% off</p>
      </div>
      <img className="w-36 h-auto" src={repair.coverImage} alt={repair.ProductName} />

      <div className="p-2 flex text-gray-800 justify-between items-center w-full">
        <div>
          <h2 className="text-sm font-semibold">{repair.ProductName}</h2>
          <p className="text-sm font-bold">Ksh {repair.productPrice}</p>
        </div>
        <div className="text-right">
          <p className="text-sm line-through">Ksh {repair.marketPrice}</p>
        </div>
      </div>
    </div>
  );
};

export default ScreenRepairCard;
