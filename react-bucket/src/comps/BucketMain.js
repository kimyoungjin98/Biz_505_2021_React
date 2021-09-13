import React from "react";

function BucketMain() {
  return (
    <div className="b_main">
      <input placeholder="버킷에 추가할 내용을 입력하세요"></input>

      <table>
        <thead>
          <tr>
            <th>FLAG</th>
            <th>날짜</th>
            <th>BUCKET</th>
            <th>완료</th>
            <th>취소</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>일반</td>
            <td>2021-09-01</td>
            <td>리액트 정복</td>
            <td>완료</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default BucketMain;
