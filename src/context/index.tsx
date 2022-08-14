import { createContext, useEffect, useState } from "react";

const initialState = {
  token: "",
};
export const AppContext = createContext<{ token: string }>(initialState);

const AppContextProvider = ({ children }: any) => {
  const [token, setToken] = useState<string>("");

  useEffect(() => {
    const setData = async () => {};
    setData();
  }, [token]);

  //Context Data
  const data = {
    token,
  };

  return <AppContext.Provider value={data}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
