import { createContext, useContext } from "react";
import { useState } from "react";

const AppContext = createContext();

export const useUserContext = () => {
  return useContext(AppContext);
};

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({
    userid: "",
    password: "",
    re_password: "",
    email: "",
  });

  const providerData = { user, setUser };
  return <AppContext.Provider value={providerData}>{children}</AppContext.Provider>;
};

export default UserContextProvider;
