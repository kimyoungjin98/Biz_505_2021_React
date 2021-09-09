import React, { useEffect, useState } from "react";
import { fireStore } from "../config/BBSConfig";

function BBsMain() {
  const [bbsBody, setBBsBody] = useState([]);
  const firebaseFetch = async () => {
    const bbsList = await fireStore.collection("bbs").get();

    fireStore
      .collection("bbs")
      .get()
      .then((bbsList) => {
        bbsList.forEach((bbs) => {
          const item = bbs.data();
          setBBsBody([
            ...bbsBody,
            <tr>
              <td>{item.b_date}</td>
              <td>{item.b_time}</td>
              <td>{item.b_writer}</td>
              <td>{item.b_subject}</td>
            </tr>,
          ]);
        });
      });
  };

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
