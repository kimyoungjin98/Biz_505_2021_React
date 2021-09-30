import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const useBookContext = () => {
  return useContext(AppContext);
};

function AppContextProvider({ children }) {
  const [book, setBook] = useState({
    b_id: 0,
    b_name: "",
    b_genre: "",
  });
  const [bookList, setBookList] = useState([]);

  const providerData = { book, setBook, bookList, setBookList };

  return (
    <>
      <AppContextProvider value={providerData}>{children}</AppContextProvider>
    </>
  );
}

export default AppContextProvider;
