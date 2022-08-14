import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useContext } from "react";
import { createContext } from "react";

export const authContext = createContext<any>({});
export const useAuth = () => {
  const context = useContext(authContext);
  return context;
};

const AuthProvider = ({ children }: any) => {
  const signup = (email: string, password: string) =>
    createUserWithEmailAndPassword(auth, email, password);
  //Context Data
  const user = {
    login: false,
  };

  return (
    <authContext.Provider value={{ user, signup }}>
      {children}
    </authContext.Provider>
  );
};

export default AuthProvider;
