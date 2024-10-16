import { useState } from 'react';

export default function useToken() {
  // Retrieve the token from session storage
  const getToken = () => {
    const tokenString = sessionStorage.getItem('token');
    if (!tokenString) return null; // Handle null or undefined tokenString safely
    const userToken = JSON.parse(tokenString);
    return userToken?.token || null; // Ensure we return null if the token is missing
  };

  const [token, setToken] = useState(getToken()); // Initialize state with the token

  // Save the token in session storage and update the state
  const saveToken = (userToken: { token: string; }) => {
    sessionStorage.setItem('token', JSON.stringify(userToken));
    setToken(userToken.token); // Update state with the new token
  };

  return {
    setToken: saveToken, // Expose the saveToken function
    token // Expose the token value
  };
}
