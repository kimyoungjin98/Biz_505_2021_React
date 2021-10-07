import TodoMain from "./comps/TodoMain";
import TodoInput from "./comps/TodoInput";
import TodoList from "./comps/TodoList";
import "./App.css";
import Login from "./comps/Login";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Login />
        <TodoMain header="TODO LIST" form={<TodoInput />}>
          <TodoList />
        </TodoMain>
      </header>
    </div>
  );
}

export default App;
