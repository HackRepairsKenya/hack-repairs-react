// AuthContext.tsx
import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

// Define the shape of the Auth context
interface AuthContextProps {
  token: string | null;
  setToken: (token: string | null) => void;
  signOut: () => void;
  user: string | null;  // Add user to context
  setUser: (user: string | null) => void; // Function to set user
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, setTokenState] = useState<string | null>(null);
  const [user, setUserState] = useState<string | null>(null); // Manage user state
  const navigate = useNavigate();

  useEffect(() => {
    // On load, check for token in localStorage
    const savedToken = localStorage.getItem('authToken');
    const savedUser = localStorage.getItem('authUser'); // Check if user is saved
    if (savedToken) {
      setTokenState(savedToken);
    }
    if (savedUser) {
      setUserState(savedUser); // Set user from localStorage
    }
  }, []);

  const setToken = (token: string | null) => {
    if (token) {
      localStorage.setItem('authToken', token);
    } else {
      localStorage.removeItem('authToken');
    }
    setTokenState(token);
  };

  const setUser = (user: string | null) => {
    if (user) {
      localStorage.setItem('authUser', user);
    } else {
      localStorage.removeItem('authUser');
    }
    setUserState(user);
  };

  const signOut = () => {
    setToken(null);
    setUser(null); // Clear user data on sign out
    navigate('/');
  };

  return (
    <AuthContext.Provider value={{ token, setToken, signOut, user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the Auth context
export const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
