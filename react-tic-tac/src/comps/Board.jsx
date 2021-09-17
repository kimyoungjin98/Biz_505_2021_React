import React, { useState } from "react";
import {RenderSquare, calcWinner} from "../modules/Main";

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [oxFlag, setOxFlag] = useState(true);

  //   const change = (_squares) => {
  //     setSquares([..._squares, squares]);
  //   };

  const change = (num, count) => {

    if(calcWinner(squares)) return;

    // if(문자열변수) : 문자열 변수 값이 null, undefinded, "" 이면 무조건 false
    // 아니면 true
    if(squares[num]) return;

    // count++
    const _squares = [...squares];
    // _squares[num] = count % 2 == 0 ? "X" : "O";
    _squares[num] = oxFlag ? "O" : "X"
    setSquares(_squares);
    setOxFlag(!oxFlag)    
  };
  const player = oxFlag ? "O" : "X"
  const winner = calcWinner(squares)
  const msg = winner ? `winner : ${winner}` : `player : ${player}` 

  const onRestart = ()=>{
    let active = document.querySelectorAll(".active")
    for(let i = 0 ; i < active.length ; i++){
      active[i].classList.remove("active"); 
    }
    
    setSquares(Array(9).fill(""))
    setOxFlag(!oxFlag)
    
    // setSquares(Array(9).fill(null))
  }
  
  return (
    <div className="btn_box">
      <RenderSquare squares={squares} change={change}/>
      <h3>{msg}</h3>
      <div>{winner ? (<button className="btn_restart" onClick={onRestart}>다시 시작</button>) : "" }</div>
      {/* <div>{RenderSquare(squares)}</div> */}
    </div>
  );
}

export default Board;
