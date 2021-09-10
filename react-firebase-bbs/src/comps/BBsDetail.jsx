import { React, useEffect, useState } from "react";
import { useRouteMatch } from "react-router-dom";
import { fireStore } from "../config/BBSConfig";
import "../css/detail.css";

function BBsDetail() {
  const match = useRouteMatch();
  const id = match.params.id;

  const [bbs, setBBs] = useState({
    b_writer: "",
    b_date: "",
    b_time: "",
    b_subject: "",
    b_content: "",
  });

  const findById = async () => {
    const result = await fireStore.collection("bbs").doc(id).get();
    if (result.data()) {
      setBBs(result.data());
    }
  };

  useEffect(findById, []);

  return (
    <div className="detail_box">
      <div>
        <label>작성일자</label>
        <label>{bbs.b_date}</label>
      </div>
      <div>
        <label>작성시각</label>
        <label>{bbs.b_time}</label>
      </div>
      <div>
        <label>글쓴이</label>
        <label>{bbs.b_writer}</label>
      </div>
      <div>
        <label>제목</label>
        <label>{bbs.b_subject}</label>
      </div>
      <div>
        <label>내용</label>
        <label>{bbs.b_content}</label>
      </div>
    </div>
  );
}

export default BBsDetail;
