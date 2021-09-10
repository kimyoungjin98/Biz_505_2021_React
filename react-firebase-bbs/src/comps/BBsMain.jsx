import React, { useEffect, useState } from "react";
import { fireStore } from "../config/BBSConfig";
import { useHistory } from "react-router-dom";

function BBsMain() {
  const [bbsData, setBBsData] = useState([]);
  const history = useHistory();
  const firebaseFetch = async () => {
    const result = await fireStore.collection("bbs").get();
    const bbsList = result.docs.map((doc) => {
      const id = doc.id;
      return { ...doc.data(), id };
    });

    setBBsData(bbsList);
  };

  const bbsBody = bbsData.map((bbs) => {
    const onClick = (e) => {
      const id = e.target.closest("TR").dataset.id;
      history.push(`/detail/${id}`);
    };
    return (
      <tr key={bbs.id} data-id={bbs.id} onClick={onClick}>
        <td>{bbs.b_date}</td>
        <td>{bbs.b_time}</td>
        <td>{bbs.b_writer}</td>
        <td>{bbs.b_subject}</td>
      </tr>
    );
  });

  useEffect(firebaseFetch, []);

  return (
    <div>
      <table>
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
    </div>
  );
}

export default BBsMain;
