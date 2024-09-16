import Header from "../components/admin-dashboard/Header";
import ClientOrders from "../components/admin-dashboard/orders/ClientOrders";
import { Order } from "../utils/types";
const orders: Order[] = []; 

const Orders: React.FC = () => {
  return (
    <div className="flex bg-slate-200">
      <div className="w-full min-h-[100vh] bg-slate-200 p-2 flex flex-col">
        <Header />
        <ClientOrders orders={orders} />
      </div>
    </div>
  );
};

export default Orders;
