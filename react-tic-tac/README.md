# Tic Tac

## 9개의 버튼 중에서 한개를 클릭하면

- 현재 보이는 문자열을 원하는 문자열로 변경하기
- onClick을 수행하면 index 값을 alert()으로 보이기
- data-index 설정하기
- 클릭된 버튼에 보이는 값은 squares[index] 값이다
- 클릭을 하면 index 값을 추출하여 squares[index] = "A" 담기
- square 변수는 단순한 변수가 아니고 state이다
- state는 만든 곳(함수, 컴포넌트) 이외의 곳에서는 값을 변경할 수 없다
- squares는 Board.jsx에서 생성(useState())했기 때문에 Board.jsx에서 변경하는 코드(함수)를 작성하고 RenderSquares에게 전달하고
  실행하여 변경할 수 있도록 해야 한다.

## React에서 state로 선언된 배열은 직접 변경 불가

square[index] = "B" 할 수 없다
const 임시배열 = [...squares]
임시배열[index]="B"

setSquares(임시배열)
