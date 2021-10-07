import React, { useState } from "react";
import "../css/Login.css";

function Login() {
  const [account, setAccount] = useState({
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
      return resultUser;
    } else {
      return [];
    }
  };

  return (
    <div className="login">
      <div>
        <input placeholder="아이디" name="userid" onChange={onChange} />
        <input placeholder="비밀번호" name="password" onChange={onChange} />
        <button onClick={onLogin}>로그인</button>
      </div>
    </div>
  );
}

export default Login;
