import React, { useState } from 'react';
import ViewTransactions from './View';

// Define the type for transaction item
interface Transaction {
  id: string;
  date: string;
  customerName: string;
  totalAmount: number;
  paymentMethod: string;
  status: string;
}

// Define the type for props
interface TransactionsProps {
  transactions: Transaction[];
}

const Transactions: React.FC<TransactionsProps> = ({ transactions }) => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleCall = () => {
    setShowModal(true);
  };

  const handleCallClose = () => {
    setShowModal(false);
  };

  return (
    <div className="overflow-x-auto bg-white rounded-lg shadow-lg mt-3 border">
      <table className="table-auto min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50 font-semibold text-sm">
          <tr>
            <th className="px-6 py-3 text-left text-xs tracking-wider">Transaction ID</th>
            <th className="px-6 py-3 text-left text-xs tracking-wider">Date</th>
            <th className="px-6 py-3 text-left text-xs tracking-wider">Customer Name</th>
            <th className="px-6 py-3 text-left text-xs tracking-wider">Total Amount</th>
            <th className="px-6 py-3 text-left text-xs tracking-wider">Payment Method</th>
            <th className="px-6 py-3 text-left text-xs tracking-wider">Status</th>
            <th className="px-6 py-3 text-left text-xs tracking-wider">Action</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {transactions.map((transaction, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap text-sm">{transaction.id}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm">{transaction.date}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm">{transaction.customerName}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm">{transaction.totalAmount}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm">{transaction.paymentMethod}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm">{transaction.status}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm">
                <button
                  onClick={handleCall}
                  className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold py-2 px-4 rounded"
                >
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showModal && <ViewTransactions closeTransactions={handleCallClose} />}
    </div>
  );
};

export default Transactions;
