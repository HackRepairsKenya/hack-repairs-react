// AuthContext.tsx
import React, { createContext, useState, useEffect, ReactNode } from 'react';

import { useNavigate } from 'react-router-dom';

interface AuthContextProps {
  token: string | null;
  setToken: (token: string | null) => void;
  signOut: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, setTokenState] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    // On load, check for token in localStorage
    const savedToken = localStorage.getItem('authToken');
    if (savedToken) {
      setTokenState(savedToken);
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

  const signOut = () => {
    setToken(null);
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ token, setToken, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
