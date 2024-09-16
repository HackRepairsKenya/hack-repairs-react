import { useEffect, useState } from 'react';
import axios from 'axios';
import OrdersTable from "./OrdersTable";
import { Order } from '@/utils/types';

// Define the interface for an order


interface ClientOrdersProps {
  orders: Order[];
}

const ClientOrders: React.FC<ClientOrdersProps> = ({ orders }) => {
  const [clientOrders, setOrders] = useState<Order[]>(orders);

  useEffect(() => {
    fetchOrders();
  }, []); // Empty dependency array ensures fetchOrders runs only once

  const fetchOrders = async () => {
    try {
      const response = await axios.get<Order[]>("https://api.wemitraders.co.ke/orders");
      setOrders(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const tabs = [
    { name: 'All Orders', content: <OrdersTable clientOrders={clientOrders} /> },
    { name: 'Completed', content: <OrdersTable clientOrders={clientOrders.filter(order => order.status === 'Completed')} /> },
    { name: 'Delivered', content: <OrdersTable clientOrders={clientOrders.filter(order => order.status === 'Delivered')} /> },
    { name: 'Undelivered', content: <OrdersTable clientOrders={clientOrders.filter(order => order.status === 'Undelivered')} /> },
  ];

  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <div className="overflow-x-auto bg-white rounded-lg shadow-lg mt-3 border">
      <div className="flex flex-col justify-between bg-gray-100 w-full">
        <div className="w-full">
          <div className="flex space-x-4 border-b-2 border-gray-300">
            {tabs.map((tab, index) => (
              <button
                key={index}
                className={`text-sm text-gray-500 font-semibold py-2 px-4 transition rounded-t outline-none duration-300 ${
                  index === activeTab
                    ? 'border-t-2 border-blue-500 bg-blue-200 text-blue-500'
                    : 'text-black'
                }`}
                onClick={() => setActiveTab(index)}
              >
                {tab.name}
              </button>
            ))}
          </div>
          <div className="p-4 bg-white rounded shadow">
            {tabs[activeTab].content}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientOrders;
