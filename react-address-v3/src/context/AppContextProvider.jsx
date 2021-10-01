import React, { createContext, useContext, useRef, useState } from "react";

const AppContext = createContext();

export const useAddrContext = () => useContext(AppContext);

const AppContextProvider = ({ children }) => {
  let nextId = useRef(0);

  const [address, setAddress] = useState({
    a_id: 0,
    a_name: "이름",
    a_tel: "010-0000-0000",
    a_addr: "주소",
    a_age: "나이",
  });

  const [addrBook, setAddrBook] = useState([]);

  const addrClear = () => {
    setAddress({ ...address, a_name: "", a_tel: "", a_addr: "", a_age: "" });
  };

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setAddress({ ...address, [name]: value, a_id: nextId.current });
  };

  const addrBookInsert = () => {
    if (address.a_name === "") {
      alert("이름을 입력해주세요");
      return;
    } else if (address.a_addr === "") {
      alert("주소를 입력해주세요");
      return;
    } else if (address.a_tel === "") {
      alert("전화번호를 입력해주세요");
      return;
    } else if (address.a_age == 0) {
      alert("나이를 입력해주세요");
      return;
    }
    setAddrBook([...addrBook, address]);
    nextId.current++;
    addrClear();
  };

  const onDelete = (e) => {
    if (window.confirm("클릭한 주소를 삭제합니다")) {
      const a_id = Number(e.target.closest("TR").dataset.id);
      const index = addrBook.findIndex((find) => find.a_id === a_id);
      const _addrBook = addrBook.filter((addr) => index !== addr.a_id);
      setAddrBook(_addrBook);

      console.log(_addrBook);
    }
  };

  const propsData = {
    address,
    setAddress,
    addrBook,
    setAddrBook,
    onChangeHandler,
    addrBookInsert,
    onDelete,
  };

  return (
    <AppContext.Provider value={propsData}>{children}</AppContext.Provider>
  );
};

export default AppContextProvider;
