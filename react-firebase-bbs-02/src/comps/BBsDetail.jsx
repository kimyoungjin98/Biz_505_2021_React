import React, { useCallback, useEffect, useState } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import { fireStore } from "../config/BBSConfig";
import "../css/write.css";

function BBsDetail() {
  const router = useHistory();
  const match = useRouteMatch();
  const docId = match.params.id;

  const [bbs, setBBs] = useState({
    b_date: "",
    b_time: "",
    b_writer: "",
    b_subject: "",
    b_content: "",
  });

  const findByIdFetch = useCallback(async () => {
    if (docId) {
      const result = await fireStore.collection("bbs").doc(docId).get();
      if (result.data()) {
        setBBs(result.data());
      }
    }
  });

  useEffect(findByIdFetch, [findByIdFetch]);

  const onDelete = () => {
    if (window.confirm("삭제할까요?")) {
      fireStore
        .collection("bbs")
        .doc(docId)
        .delete()
        .then((result) => {
          router.push("/");
        });
    }
  };

  return (
    <div className="bbs_detail">
      <h1>DETAIL</h1>
      <div>
        <label>작성일자</label>
        <span>{bbs.b_date}</span>
      </div>
      <div>
        <label>작성시각</label>
        <span>{bbs.b_time}</span>
      </div>
      <div>
        <label>작성자</label>
        <span>{bbs.b_writer}</span>
      </div>
      <div>
        <label>제목</label>
        <span>{bbs.b_subject}</span>
      </div>
      <div>
        <label>내용</label>
        <span>{bbs.b_content}</span>
      </div>
      <div className="bbs_btn_box">
        <button
          onClick={() => {
            router.push("/");
          }}
        >
          처음으로
        </button>
        <button
          onClick={() => {
            router.push(`write/${docId}`);
          }}
        >
          수정
        </button>
        <button onClick={onDelete}>삭제</button>
      </div>
    </div>
  );
}

export default BBsDetail;
