import TodoMain from "./comps/TodoMain";
import TodoInput from "./comps/TodoInput";
import TodoList from "./comps/TodoList";

function App() {
  return (
    <TodoMain form={<TodoInput></TodoInput>} header="오늘 할일">
      <TodoList />
    </TodoMain>
  );
}

export default App;
