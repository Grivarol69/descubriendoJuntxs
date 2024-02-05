'use client'

import { onAuthStateChanged, getAuth, User, sendEmailVerification } from 'firebase/auth';
import firebase_app from '../firebase/firebase-config';
import { SetStateAction, useContext, useEffect, useState } from 'react';
import { createContext, ReactNode } from 'react';  // Importa ReactNode

interface AuthContextProps {
  user: User | null;
  infoUserGlobal: string | null;
  setInfoUserGlobal: React.Dispatch<SetStateAction<string | null>>
  persistirSesion: (user: any) => void;
  logged: any;
  logoutReal: any
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
  const [infoUserGlobal, setInfoUserGlobal] = useState(window.localStorage.getItem('user'))
  const [logged, setLogged] = useState(useState(window.localStorage.getItem('userLogged')))

  const auth = getAuth(firebase_app);

  const persistirSesion = (user: any) => {
    try {
      const trueWord: any = ['true']
      setInfoUserGlobal(JSON.stringify(user))
      setLogged(trueWord)
      window.localStorage.setItem('user', JSON.stringify(user))
      window.localStorage.setItem('userLogged', 'true')
      console.log(logged);

    } catch (error) {
      alert(error);
    }
  }

  const logoutReal = () => {
    const falseWord: any = ['false']
    setLogged(falseWord)
    window.localStorage.setItem('userLogged', 'false')
  }

  useEffect(() => {
    const falseWord: any = ['false']
    const falseObject: any = {}
    setInfoUserGlobal(falseObject)
    setLogged(falseWord)
    window.localStorage.setItem('user', falseObject)
    window.localStorage.setItem('userLogged', 'false')

  }, [])

  useEffect(() => {

    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      setUser(authUser);
      if (!authUser?.emailVerified && authUser) {
        sendEmailVerification(authUser)
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, [auth]);


  return (
    <AuthContext.Provider value={{ user, infoUserGlobal, persistirSesion, setInfoUserGlobal, logged, logoutReal }}>
      {loading ? <div>Loading...</div> : children}
    </AuthContext.Provider>
  );
};
