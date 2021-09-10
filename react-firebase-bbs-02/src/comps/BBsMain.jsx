import React, { useEffect, useState, useCallback } from "react";
import { fireStore } from "../config/BBSConfig";
import { useHistory } from "react-router-dom";

function BBsMain() {
  //   let bbsBody = [];
  const router = useHistory();
  const [bbsData, setBBsData] = useState([]);
  const firebaseFetch = async () => {
    const result = await fireStore.collection("bbs").get();
    /**
     * firestore로부터 수신된 데이터 중에서 실제 BBS 데이터객체만 추출하여 bbsList 배열로 만들기
     */
    const bbsList = result.docs.map((doc) => {
      const id = doc.id;
      return { ...doc.data(), id: doc.id };
    });
    setBBsData(bbsList);
  };

  const fetchCallback = useCallback(firebaseFetch, []);

  useEffect(fetchCallback, [fetchCallback]);

  const bbsBody = bbsData.map((bbs) => {
    return (
      <tr
        key={bbs.id}
        data-id={bbs.id}
        onClick={(e) => {
          const id = e.target.closest("TR").dataset.id;
          alert(id);
          router.push(`/detail/${id}`);
        }}
      >
        <td>{bbs.b_date}</td>
        <td>{bbs.b_time}</td>
        <td>{bbs.b_writer}</td>
        <td>{bbs.b_subject}</td>
      </tr>
    );
  });

  return (
    <table className="bbs_list">
      <thead>
        <tr>
          <th>작성일자</th>
          <th>작성시각</th>
          <th>작성자</th>
          <th>제목</th>
        </tr>
      </thead>
      <tbody>{bbsBody}</tbody>
    </table>
  );
}

export default BBsMain;
