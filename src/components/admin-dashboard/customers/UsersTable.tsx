import { IoTrashOutline } from "react-icons/io5";
import { HiPencil } from "react-icons/hi2";
import { FiPlus } from "react-icons/fi";
import axios from 'axios';

// Define types for User and Props
interface User {
  id: string;
  name: string;
  email: string;
}

interface UsersTableProps {
  users: User[];
  admin: boolean;
}

const UsersTable: React.FC<UsersTableProps> = ({ users, admin }) => {
  const handleDelete = async (customerId: string) => {
    let url = 'https://api.wemitraders.co.ke/clients';
    try {
      if (admin) {
        url = 'https://api.wemitraders.co.ke/admins';
      }

      await axios.delete(url, {
        data: {
          id: customerId,
        },
      });
    } catch (error) {
      console.error("Error deleting customer:", error);
    }
  };

  return (
    <>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-black bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Id
            </th>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Email
            </th>
            <th scope="col" className="px-6 py-3">
              Account Verification
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((customer, index) => (
            <tr key={index} className="bg-white border-b">
              <td className="px-6 py-4 whitespace-nowrap text-black">{customer.id}</td>
              <td className="px-6 py-4 whitespace-nowrap text-black">{customer.name}</td>
              <td className="px-6 py-4 whitespace-nowrap text-black">{customer.email}</td>
              <td className="px-6 py-4 whitespace-nowrap text-black">{"False"}</td>
              <td className="px-6 py-4">
                <button className="font-medium text-blue-600 dark:text-blue-500 hover:underline mr-2">
                  <HiPencil />
                </button>
                <button className="font-medium text-white  mr-2 bg-sky-500 p-1 rounded-full">
                  <FiPlus />
                </button>
                <button
                  className="font-medium text-red-600 dark:text-blue-500 hover:underline"
                  onClick={() => handleDelete(customer.id)}
                >
                  <IoTrashOutline />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default UsersTable;
