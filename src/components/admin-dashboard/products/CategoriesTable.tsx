import { useState, useEffect } from 'react';
import axios from 'axios';
import { IoTrashOutline } from 'react-icons/io5';
import { HiPencil } from 'react-icons/hi2';
import UpdateCategoryModal from './UpdateCategoriesModal';
import { Product } from '@/utils/types';

interface Category {
  id: number;
  name: string;
  products: Product[];
}

const CategoriesTable: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [updateCategory, setUpdateCategory] = useState<boolean>(false);
  const [category, setCategory] = useState<Category | null>(null);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const [toBeDeleted, setToBeDeleted] = useState<number | null>(null);

  const activateCategory = (selectedCategory: Category) => {
    setUpdateCategory(true);
    setCategory(selectedCategory);
  };

  const closeUpdateCategory = () => {
    setUpdateCategory(false);
    setCategory(null);
  };

  const fetchCategories = async () => {
    try {
      const response = await axios.get<Category[]>('https://api.wemitraders.co.ke/categories');
      setCategories(response.data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []); // Empty dependency array to run only once on component mount

  const handleDelete = (categoryId: number) => {
    setIsDeleting(true);
    setToBeDeleted(categoryId);
  };

  const deleteCategory = async () => {
    if (toBeDeleted === null) return;

    try {
      const delReq = await axios.delete('https://api.wemitraders.co.ke/categories', {
        data: {
          id: toBeDeleted,
        },
      });

      if (delReq.status === 200) {
        setIsDeleting(false);
        setToBeDeleted(null);
        fetchCategories(); // Refresh categories after deletion
      }
    } catch (error) {
      console.error('Error deleting category:', error);
    }
  };

  return (
    <div>
      {isDeleting && (
        <div className="flex fixed top-0 left-0 justify-center items-center w-full h-full bg-gray-600 bg-opacity-50">
          <div className="bg-white rounded shadow-lg p-[2rem] h-[35%] w-[30%] border">
            <p className="font-semibold">Confirm you want to delete this category & related subcategories?</p>
            <div className="mt-5">
              <button
                onClick={deleteCategory}
                className="bg-blue-500 mr-5 hover:bg-blue-700 text-sm text-white font-bold py-2 px-4 rounded mb-4 outline-none"
              >
                Ok
              </button>
              <button
                onClick={() => setIsDeleting(false)}
                className="bg-red-500 mr-5 hover:bg-red-700 text-sm text-white font-bold py-2 px-4 rounded mb-4 outline-none"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-black bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">Index</th>
            <th scope="col" className="px-6 py-3">Category Id</th>
            <th scope="col" className="px-6 py-3">Category Name</th>
            <th scope="col" className="px-6 py-3">Total Subcategories</th>
            <th scope="col" className="px-6 py-3">Total Products</th>
            <th scope="col" className="px-6 py-3">Action</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((item, index) => (
            <tr key={item.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <td className="px-6 py-4 text-black">{index + 1}</td>
              <td className="px-6 py-4 text-black">{item.id}</td>
              <td className="px-6 py-4 text-black">{item.name}</td>
              <td className="px-6 py-4 text-black">{item.products.length}</td>
              <td className="px-6 py-4">
                <button
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline mr-2"
                  onClick={() => activateCategory(item)}
                >
                  <HiPencil />
                </button>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="font-medium text-red-600 dark:text-blue-500 hover:underline"
                >
                  <IoTrashOutline />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {updateCategory && category && (
        <UpdateCategoryModal handleCatClose={closeUpdateCategory} category={category} />
      )}
    </div>
  );
};

export default CategoriesTable;
