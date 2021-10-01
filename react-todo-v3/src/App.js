import TodoMain from "./comps/TodoMain";
import TodoInput from "./comps/TodoInput";
import TodoList from "./comps/TodoList";
import logo from "./logo.svg";
import CompButton from "./comps/CompButton";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* TodoMain.jsx Layout을 사용하여 TODO 화면을 구현 */}
      </header>
      <TodoMain header="오늘 할일" form={<TodoInput />}>
        <TodoList />
      </TodoMain>
      <CompButton onClick={() => alert("집에가자")}>우리로</CompButton>
    </div>
  );
}

export default App;
