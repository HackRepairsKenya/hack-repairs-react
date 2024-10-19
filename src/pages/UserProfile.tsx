import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext'; // Import the custom hook
import { FaAddressCard, FaBox, FaUser } from 'react-icons/fa6'; // Import the icons
import Footer from '@/components/mainlayout/Footer';
import Navbar from '@/components/mainlayout/Navbar';
import { CiLogout } from 'react-icons/ci';
import { IoMdArrowBack } from 'react-icons/io';

const Profile: React.FC = () => {
  const { token, signOut } = useAuth(); // Use the token and logout from context
  const [userData, setUserData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<string>('profile'); // Manage the active tab state
  const [showSidebar, setShowSidebar] = useState<boolean>(true); // Control sidebar visibility

  useEffect(() => {
    const fetchUserDetails = async (token: string | null) => {
      if (!token) {
        setError('No token available. Please log in.');
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get(`https://api.hackrepairs.co.ke/client/${token}`, {
          headers: {
            Authorization: `Bearer ${token}`, // Pass the token in the Authorization header
          },
        });
        setUserData(response.data);
      } catch (error: any) {
        setError('Error fetching user details.');
      } finally {
        setLoading(false);
      }
    };

    fetchUserDetails(token); // Fetch user details using the token
  }, [token]);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    if (window.innerWidth < 768) {
      setShowSidebar(false); // Hide sidebar on small screens when a tab is clicked
    }
  };

  const handleBackToMenu = () => {
    setShowSidebar(true); // Show the sidebar again when back to menu is clicked
  };

  // Mapping activeTab values to display-friendly names
  const activeTabName = {
    profile: 'Profile',
    orders: 'Orders',
    address: 'Address',
  }[activeTab];

  if (loading) {
    return <p>Loading user data...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!userData) {
    return <p>No user data available</p>;
  }

  return (
    <div>
      <Navbar />
      <div className="flex  mx-2 md:mx-6 flex-col md:flex-row bg-gray-100">
        {/* Sidebar */}
        {showSidebar ? (
          <aside className="md:w-1/4 w-full flex flex-col bg-white mt-3 mb-3 shadow-lg pt-6 space-y-6">
            <nav className="space-y-8 p-4 md:h-[90%]">
              <a
                href="#profile"
                onClick={() => handleTabClick('profile')}
                className={`flex items-center space-x-2 text-gray-700 hover:text-green-800 ${
                  activeTab === 'profile' ? 'text-green-800 font-bold' : ''
                }`}
              >
                <FaUser /> <span>My HackRepairs Account</span>
              </a>
              <a
                href="#orders"
                onClick={() => handleTabClick('orders')}
                className={`flex items-center space-x-2 text-gray-700 hover:text-green-800 ${
                  activeTab === 'orders' ? 'text-green-800 font-bold' : ''
                }`}
              >
                <FaBox /> <span>Orders</span>
              </a>
              <a
                href="#address"
                onClick={() => handleTabClick('address')}
                className={`flex items-center space-x-2 text-gray-700 hover:text-green-800 ${
                  activeTab === 'address' ? 'text-green-800 font-bold' : ''
                }`}
              >
                <FaAddressCard /> <span>Address</span>
              </a>
              {/* Logout button */}
              <button
                onClick={signOut}
                className="flex items-center space-x-2 text-white bg-red-600 p-2 rounded-lg w-1/2 text-center hover:text-red-800"
              >
                <CiLogout /> <span>Logout</span>
              </button>
            </nav>
          </aside>
        ) : (
          <button
            onClick={handleBackToMenu}
            className="md:hidden flex justify-between bg-white items-center space-x-2 text-gray-800 u text-sm mb-4"
          >
            <IoMdArrowBack />
            <span>({activeTabName})</span> {/* Display the current active tab */}
          </button>
        )}

        {/* Main Content */}
        <main className="flex-1 md:p-4 ">
          {activeTab === 'profile' && (
            <section id="profile" className="bg-white p-4 md:p-6 rounded-lg shadow-lg mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">Account Details</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                <div className="bg-gray-100 p-4 rounded-lg shadow">
                  <h3 className="text-lg md:text-xl font-semibold">Name</h3>
                  <p className="text-gray-700">{userData.name}</p>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg shadow">
                  <h3 className="text-lg md:text-xl font-semibold">Email</h3>
                  <p className="text-gray-700">{userData.email}</p>
                </div>
              </div>
            </section>
          )}

          {activeTab === 'orders' && (
            <section id="orders" className="bg-white md:p-6 rounded-lg shadow-lg mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 hidden md:flex text-gray-800">Orders</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                <div className="bg-gray-100 p-4 rounded-lg shadow">
                  <h3 className="text-lg md:text-xl font-semibold">Order #1</h3>
                  <p><strong>Item:</strong> Phone Screen</p>
                  <p><strong>Amount:</strong> $50</p>
                  <p><strong>Status:</strong> Delivered</p>
                </div>
                {/* Add more orders as needed */}
              </div>
            </section>
          )}

          {activeTab === 'address' && (
            <section id="address" className="bg-white p-4 md:p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">Address</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                <div className="bg-gray-100 p-4 rounded-lg shadow">
                  <h3 className="text-lg md:text-xl font-semibold">Street</h3>
                  <p className="text-gray-700">1234 Main St</p>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg shadow">
                  <h3 className="text-lg md:text-xl font-semibold">City</h3>
                  <p className="text-gray-700">Nairobi</p>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg shadow">
                  <h3 className="text-lg md:text-xl font-semibold">Postal Code</h3>
                  <p className="text-gray-700">00100</p>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg shadow">
                  <h3 className="text-lg md:text-xl font-semibold">Country</h3>
                  <p className="text-gray-700">Kenya</p>
                </div>
              </div>
            </section>
          )}
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
