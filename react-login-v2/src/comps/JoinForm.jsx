import React, { useState } from "react";
import "../css/Join.css";
import { fetchJoin } from "../modules/fetchModule";
import { useUserContext } from "../context/UserContextProvider";
import { MyButton } from "./MyButton";
import { useHistory } from "react-router-dom";

export const JoinForm = () => {
  // const { user, setUser } = useUserContext();
  const [joinUser, setJoinUser] = useState({
    userid: "",
    password: "",
    re_password: "",
    email: "",
  });

  const history = useHistory();

  // const joinTextId = useRef();
  // const joinTextPw = useRef();
  // const joinTextPwC = useRef();
  // const joinTextE = useRef();

  const onChangeAccount = (e) => {
    // setJoin({ ...join, [e.target.name]: e.target.value });
    const { name, value } = e.target;
    // setUser({ ...user, [name]: value });
    setJoinUser({ ...joinUser, [name]: value });
    console.log("user", joinUser);
  };

  const onSubmintAccount = async (e) => {
    // if(user.userid === "") 는 문자열이 없는 경우만 사용하다보니
    // 요새는 null값과 false를 함께 비교하기 위해 밑의 코드를 선호한다.
    // if (!user?.userid) {
    if (!joinUser?.userid) {
      alert("아이디를 입력해야 합니다");
      return;
    }
    // if (!user?.password) {
    if (!joinUser?.password) {
      alert("비밀번호를 입력해야 합니다");
      return;
    }
    // if (!user.re_password) {
    if (!joinUser.re_password) {
      alert("비밀번호 확인을 입력해주세요");
      return;
    }
    // if (user.password !== user.re_password) {
    if (joinUser.password !== joinUser.re_password) {
      alert("비밀번호 확인이 일치하지 않습니다.");
      return;
    }
    // if (!user?.email) {
    if (!joinUser?.email) {
      alert("이메일 주소는 필수항목입니다");
      return;
    }
    // 서버로 보낼 데이터를 json타입으로 준비하기
    const joinData = {
      // userid: user.userid,
      // password: user.password,
      // email: user.email,
      userid: joinUser.userid,
      password: joinUser.password,
      email: joinUser.email,
    };
    fetchJoin(joinData);
    history.replace("/login");
    // 이렇게만 하면 get방식으로 보내지기 때문에 POST로 보내기 위해
    // 기타 옵션 및 항목들을 붙여주기
  };

  return (
    <div className="join_form">
      <input
        onChange={onChangeAccount}
        name="userid"
        value={joinUser.userid}
        type="text"
        placeholder="아이디를 입력해주세요"
      />
      <input
        onChange={onChangeAccount}
        name="password"
        type="jpassword"
        value={joinUser.password}
        placeholder="비밀번호를 입력해주세요"
      />
      <input
        onChange={onChangeAccount}
        name="re_password"
        type="password"
        value={joinUser.re_password}
        placeholder="비밀번호를 한번 더 입력해주세요"
      />
      <input
        onChange={onChangeAccount}
        name="email"
        type="email"
        value={joinUser.email}
        placeholder="E_mail을 입력해주세요"
      />
      <MyButton onClick={onSubmintAccount} backgroundColor="green">
        회원가입
      </MyButton>
      {/* <button onClick={onSubmintAccount}>회원가입</button> */}
    </div>
  );
};
