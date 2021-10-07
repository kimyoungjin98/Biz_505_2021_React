import React, { useEffect } from "react";
import { useUserContext } from "../context/UserContextProvider";

export const BBs = () => {
  const { user, setUser } = useUserContext();

  return (
    <div>
      <h1>자유게시판</h1>
      <h3>USERID : {user.userid}</h3>
    </div>
  );
};
