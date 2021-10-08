import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();
export const useUserContext = () => useContext(AppContext);

const UserContextProvider = ({ children }) => {
  const [account, setAccount] = useState({
    userid: "",
    password: "",
  });
  const [user, setUser] = useState({
    userid: "",
    password: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setAccount({ ...account, [name]: value });
    console.log(account);
  };

  const onLogin = async () => {
    const { userid, password } = account;

    if (account.userid === "" || account.userid == null) {
      alert("아이디를 입력하세요");
      return;
    }
    if (account.password === "" || account.password == null) {
      alert("비밀번호를 입력하세요");
      return;
    }

    const result = await fetch("http://localhost:8080/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:3000",
      },
      credentials: "include",
      body: JSON.stringify({
        userid,
        password,
      }),
    });
    if (result?.ok) {
      const resultUser = result.json();
      setUser(account);
      alert(userid + "님 환영합니다");
      return resultUser;
    } else {
      alert("아이디 또는 비밀번호를 확인해주세요");
      return [];
    }
  };

  const onLogout = async () => {
    const response = await fetch("http://localhost:8080/users/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:3000",
      },
      credentials: "include",
    });
    setUser({
      userid: "",
      password: "",
    });
    return response.json();
  };

  const props = {
    account,
    setAccount,
    user,
    setUser,
    onLogout,
    onChange,
    onLogin,
  };

  return <AppContext.Provider value={props}>{children}</AppContext.Provider>;
};

export default UserContextProvider;
