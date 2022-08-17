import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { useContext, useState, useEffect, createContext } from "react";
export const authContext = createContext<any>({});
export const useAuth = () => {
  const context = useContext(authContext);
  return context;
};

const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const signup = (email: string, password: string) =>
    createUserWithEmailAndPassword(auth, email, password);

  const login = async (email: string, password: string) =>
    signInWithEmailAndPassword(auth, email, password);

  const logout = () => signOut(auth);
  return (
    <authContext.Provider value={{ user, signup, login, logout }}>
      {children}
    </authContext.Provider>
  );
};

export default AuthProvider;
