import React from "react";

/**
 * 객체지향의 탄생
 * 기존에 잘~~ 만들어진 클래스를 가져다가
 * 마치 부품을 조립하는 방식으로 프로그래밍을 하자~~
 * 잘~~ 만들어진 클래스가 있는데
 * 기능을 좀 추가하고 싶다 그러면 상속을 받고, 일부를 변경하여 내것으로 만들어서 재사용했다
 * 객체지향의 가장 큰 단점 상속받은 부모 클래스를 잘~~ 알아야 된다
 * 상속받은 부모클래스가 변경되면 내 클래스도 변경하거나 버려야 된다
 *
 * 부모와 자식 클래스간에 결합도가 높아진다
 * 응집도는 낮아진다
 *
 * 좋은 모듈은 서로 결합도가 낮고, 응집도는 높아야 한다
 *
 * 이러한 상속의 단점을 보완하는 디자인 패턴 개념이 나오는데 -> 확장
 * 파사드 패턴이라고도 한다
 *
 */

function Mybutton({ onClick, children }) {
  const myStyle = {
    padding: "10px",
    width: "20%",
    border: "1px solid rgb(84, 181, 219)",
    color: "white",
    backgroundColor: "rgb(84, 131, 219)",
    fontSize: "16px",
    cursor: "pointer",
  };
  return (
    <button style={myStyle} onClick={onClick}>
      {children}
    </button>
  );
}

export default Mybutton;
