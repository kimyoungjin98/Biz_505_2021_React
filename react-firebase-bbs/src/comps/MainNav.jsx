import React from "react";
import { NavLink } from "react-router-dom";

function MainNav() {
  const navStyle = {
    color: "white",
    textDecoration: "none",
  };

  return (
    <div>
      <nav className="main_nav">
        <li>
          <NavLink to="/" activeStyle={navStyle} exact>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/write" activeStyle={navStyle}>
            글쓰기
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" activeStyle={navStyle}>
            로그인
          </NavLink>
        </li>
        <li>
          <NavLink to="/join" activeStyle={navStyle}>
            회원가입
          </NavLink>
        </li>
      </nav>
    </div>
  );
}

export default MainNav;
