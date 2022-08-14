import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useContext, useState } from "react";
import { createContext } from "react";
import { useEffect } from "react";

export const authContext = createContext<any>({});
export const useAuth = () => {
  const context = useContext(authContext);
  return context;
};

const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState<any>(null);
  const signup = (email: string, password: string) =>
    createUserWithEmailAndPassword(auth, email, password);

  const login = async (email: string, password: string) =>
    signInWithEmailAndPassword(auth, email, password);

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

  return (
    <authContext.Provider value={{ user, signup, login }}>
      {children}
    </authContext.Provider>
  );
};

export default AuthProvider;
