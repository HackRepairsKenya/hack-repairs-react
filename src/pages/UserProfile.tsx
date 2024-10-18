import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

// Replace this URL with your actual backend API endpoint
const API_URL = 'https://api.hackrepairs.co.ke/clients/';
  

const Profile: React.FC = () => {
  const { userId } = useParams<{ userId: string }>(); // Get the userId from URL parameters
  const [userData, setUserData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`${API_URL}?id=${userId}`);
        setUserData(response.data);
      } catch (error:any) {
        setError(error.message);
        alert('try again later')
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [userId]);

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
    <div className="bg-white shadow-md rounded-lg p-6 max-w-md mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-4 text-gray-800">User Profile</h1>
      <p className="text-lg"><strong>Name:</strong> {userData.name}</p>
      <p className="text-lg"><strong>Email:</strong> {userData.email}</p>
      <p className="text-lg"><strong>Role:</strong> {userData.role}</p>
    </div>
  );
};

export default Profile;
