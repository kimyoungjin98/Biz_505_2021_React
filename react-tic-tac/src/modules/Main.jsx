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

let index = 0;
const RenderSquare = (props) => {
  const { squares, change } = props;

  const arrayBox = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];

  const onButtonClick = (e) => {
    index++;
    // const tg = e.target;
    // if (tg.tagName === "BUTTON") {
    const num = e.target.dataset.num;
    //   _squares[num] = "B";
    //   change(_squares);
    change(num, index);
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
    return <div>{buttonCols}</div>;
  });
  return buttons;
};

export default RenderSquare;
