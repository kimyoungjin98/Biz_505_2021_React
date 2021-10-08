import TodoMain from "./comps/TodoMain";
import TodoInput from "./comps/TodoInput";
import TodoList from "./comps/TodoList";
import "./App.css";
import Login from "./comps/Login";
import UserContextProvider from "./context/UserContextProvider";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <UserContextProvider>
          <Login />
        </UserContextProvider>
        <TodoMain header="TODO LIST" form={<TodoInput />}>
          <TodoList />
        </TodoMain>
      </header>
    </div>
  );
}

export default App;
