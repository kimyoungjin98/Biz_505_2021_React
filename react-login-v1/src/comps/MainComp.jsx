import React from "react";
import LoginForm from "./LoginForm";
import { Route } from "react-router-dom";
import MainNav from "./MainNav";
import JoinForm from "./JoinForm";
import BBs from "./BBs";
import Notice from "./Notice";
import { useUserContext } from "../context/UserContextProvider";

// 네비게이션 항목을 props로 받아오기
function MainComp() {
  const { user, setUser } = useUserContext();

  // const nav = [
  //   {
  //     menu: "HOME",
  //     menu: "공지사항",
  //     menu: "자유게시판",
  //     menu: "로그인",
  //     menu: "회원가입",
  //   },
  // ];
  const navList = [
    { id: 0, title: "Home", link: "/" },
    { id: 1, title: "공지사항", link: "/notice" },
    { id: 2, title: "자유게시판", link: "/bbs" },
    user?.userid
      ? { id: 3, title: "로그아웃", link: "/logout", align: true }
      : { id: 3, title: "로그인", link: "/login", align: true },
    user?.userid
      ? { id: 4, title: "마이페이지", link: "/mypage" }
      : { id: 4, title: "회원가입", link: "/join" },
  ];
  return (
    <MainNav navList={navList}>
      <Route path="/" exact>
        <div>홈화면</div>
      </Route>
      <Route path="notice" exact>
        <Notice />
      </Route>
      <Route path="/bbs" exact>
        <BBs />
      </Route>
      <Route path="/login" exact>
        <LoginForm />
      </Route>
      <Route path="/join" exact>
        <JoinForm />
      </Route>
      <Route path="/logout">
        <div onClick={() => setUser([])}>d</div>
      </Route>
    </MainNav>
  );
}

export default MainComp;
