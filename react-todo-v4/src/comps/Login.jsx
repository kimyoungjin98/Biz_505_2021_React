import React from "react";
import "../css/Login.css";
import { useUserContext } from "../context/UserContextProvider";

function Login() {
  const { onLogout, onLogin, onChange, user } = useUserContext();
  return (
    <div className="login">
      {user.userid ? (
        <div className="logout">
          <p>{user.userid}님 좋은하루되세요</p>
          <button onClick={onLogout}>로그아웃</button>
        </div>
      ) : (
        <div>
          <input placeholder="아이디" name="userid" onChange={onChange} />
          <input
            placeholder="비밀번호"
            name="password"
            onChange={onChange}
            type="password"
          />
          <button onClick={onLogin}>로그인</button>
        </div>
      )}
    </div>
  );
}

export default Login;
