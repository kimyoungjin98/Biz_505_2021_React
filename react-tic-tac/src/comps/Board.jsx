import React, { useState } from "react";
import RenderSquare from "../modules/Main";

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));

  //   const change = (_squares) => {
  //     setSquares([..._squares, squares]);
  //   };

  const change = (num, index) => {
    const _squares = [...squares];
    _squares[num] = index % 2 == 0 ? "X" : "O";
    setSquares(_squares);
  };

  return (
    <div className="btn_box">
      <div>
        <h3>다음 플레이어 : 0</h3>
      </div>
      <RenderSquare squares={squares} change={change} />
      {/* <div>{RenderSquare(squares)}</div> */}
    </div>
  );
}

export default Board;
