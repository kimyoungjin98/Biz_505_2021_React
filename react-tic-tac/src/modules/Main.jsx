import React, { useState } from "react";

const arrayEx = () => {
  const arrayRow = [0, 0, 0];
  const arrayCol = [0, 0, 0];

  const btn_div = arrayRow.map((row) => {
    const cols = arrayCol.map((col) => {
      // 한 라인의 버튼 만들기
      return <button></button>;
    });
    // 각 라인의 컴포넌트 만들기
    return <div>{cols}</div>;
  });

  /**
   * 다차원 배열
   * 배열 속에 요소가 배열로 이루어진 배열
   * a = [1, 2, 3, 4, 5]
   * console.log( a[0] )
   * a[0] = 3
   *
   * b = [
   * 		[1, 2, 3, 4, 5]
   * ]
   * c = [
   *     [
   *        [1 ,2 ,3 ,4 ,5 ]
   *     ]
   * ]
   */
};

let count = 0;
const RenderSquare = (props) => {
  const { squares, change } = props;

  const arrayBox = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];

  const onButtonClick = (e) => {
    const num = e.target.dataset.num;
    e.target.classList.add("active")
    // if(squares[num] != null && squares[num] === ""){
    //   return;
    // }
    // count++
    // const tg = e.target;
    // if (tg.tagName === "BUTTON") {
    //   _squares[num] = "B";
    //   change(_squares);
    change(num, count);
    //   }
  };

  let i = 0;
  const buttons = arrayBox.map((subBox) => {
    const buttonCols = subBox.map(() => {
      return (
        <button onClick={onButtonClick} data-num={i}>
          {squares[i++]}
        </button>
      );
    });
    return <div className="btn_list">{buttonCols}</div>;
  });
  return buttons;
};

/**
 * 0 1 2
 * 3 4 5
 * 6 7 8
 * 
 */
const winList = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4 ,8],
  [2, 4, 6]
]
const calcWinnerFor = (squares) =>{

  // if(squares[0] && squares[0] === squares[1] && squares[0] === squares[2]){
  //   return squares[0];
  // }

  for(let i = 0 ; i < winList.length ; i++){
    // const col_0 = winList[i][0];
    // const col_1 = winList[i][1];
    // const col_2 = winList[i][2];
    // 배열의 분해, 배열의 비구조화 코드
    const [col_0, col_1, col_2] = winList[i]
    if(squares[col_0] && squares[col_0] === squares[col_1] && squares[col_0] === squares[col_2]){
      return squares[col_0];
    }
  }  
  return null; 
}

const calcWinner = (squares)=>{
  
  // const 결과 = 원본.map()
  // 결과의 배열 개수와 원본의 배열 개수는 항상 같다
  // 내용은 map의 return 결과에 따라 달라진다

  // const 결과 = 원본.filter()
  // 결과의 배열개수 <= 원본보다 작거나 같다
  // filter()의 return이 true 일때만 결과에 배열을 추가한다

  // 이 코드에서 비교결과가 true 이면 return true 한 것과 같고
  // 그때 win 의 값이 result에 담기게 된다
  // result는 개수가 없거나 1개인 배열이 된다
  const result =  winList.filter(win=>{ 
    const [col_0, col_1, col_2] = win
    return squares[col_0] && 
           squares[col_0] === squares[col_1] &&
           squares[col_0] === squares[col_2]
  })

  return result.length && squares[result[0][0]] 
}

export {RenderSquare , calcWinner};
