'use client'

import { onAuthStateChanged, getAuth, User, sendEmailVerification } from 'firebase/auth';
import firebase_app from '../firebase/firebase-config';
import { SetStateAction, useContext, useEffect, useState } from 'react';
import { createContext, ReactNode } from 'react';  // Importa ReactNode

interface AuthContextProps {
  user: User | null;
  setInfoUserGlobal: React.Dispatch<SetStateAction<object>>;
  infoUserGlobal: object;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuthContext debe utilizarse dentro de un AuthContextProvider');
  }
  return context;
};

interface AuthContextProviderProps {
  children: ReactNode; 
}

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [infoUserGlobal, setInfoUserGlobal] = useState({})

  const auth = getAuth(firebase_app);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      setUser(authUser);
      if (!authUser?.emailVerified && authUser) {
        sendEmailVerification(authUser)
      }
      setLoading(false);
    });
     return () => unsubscribe();
  }, [auth, infoUserGlobal]);

  return (
    <AuthContext.Provider value={{ user, setInfoUserGlobal, infoUserGlobal }}>
      {loading ? <div>Loading...</div> : children}
    </AuthContext.Provider>
  );
};
