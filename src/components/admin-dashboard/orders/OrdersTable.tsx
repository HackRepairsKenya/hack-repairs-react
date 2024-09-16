import { useState } from "react";
import ViewOrders from './ViewOrder';
import { Order } from "@/utils/types";


// Define the interface for component props
interface OrdersTableProps {
  clientOrders: Order[];
}

const OrdersTable: React.FC<OrdersTableProps> = ({ clientOrders }) => {
  const [showModal, setShowModal] = useState(false);

  const handleCall = () => {
    setShowModal(true);
  };

  const handleCallClose = () => {
    setShowModal(false);
  };

  return (
    <div>
      <table className="table-auto min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50 font-semibold text-sm">
          <tr>
            <th className="px-6 py-3 text-left text-xs text-black tracking-wider">Order ID</th>
            <th className="px-6 py-3 text-left text-xs text-black tracking-wider">Customer Name</th>
            <th className="px-6 py-3 text-left text-xs text-black tracking-wider">Date</th>
            <th className="px-6 py-3 text-left text-xs text-black tracking-wider">Total Amount</th>
            <th className="px-6 py-3 text-left text-xs text-black tracking-wider">Shipping Address</th>
            <th className="px-6 py-3 text-left text-xs text-black tracking-wider">Payment Status</th>
            <th className="px-6 py-3 text-left text-xs text-black tracking-wider">Order Status</th>
            <th className="px-6 py-3 text-left text-xs text-black tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {clientOrders && clientOrders.map((order) => (
            <tr key={order.id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm">{order.id}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm">{order.clientID}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm">{order.dateCreated}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm">{order.totalAmount}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm">{order.shippingAddress}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm">{order.paymentStatus}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm">{order.deliveryStatus}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm">
                <button onClick={handleCall} className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold py-2 px-4 rounded">
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showModal && <ViewOrders closeOrder={handleCallClose} />}
    </div>
  );
};

export default OrdersTable;
