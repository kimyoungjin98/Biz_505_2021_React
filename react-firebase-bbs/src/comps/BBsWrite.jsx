import React from "react";
import "../css/write.css";

function BBsWrite() {
  return (
    <div className="write">
      <input placeholder="작성자" />
      <input placeholder="제목" />
      <input placeholder="내용" />
      <button className="btn_save">저장</button>
    </div>
  );
}

export default BBsWrite;
