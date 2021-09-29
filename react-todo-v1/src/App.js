import logo from './logo.svg';
import './App.css';
import TodoInput from './comps/TodoInput';
import TodoList from './comps/TodoList';
import { useState } from 'react';

function App() {

  const [todo, setTodo] = useState({
    t_id : 0,
    t_date : "",
    t_text : "",
  });

  const [todoList, setTodoList] = useState([]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>TODO LIST</h1>
      </header>
      <TodoInput todo={todo} setTodo={setTodo} todoList={todoList} setTodoList={setTodoList}/>
      <TodoList todoList={todoList}/>
    </div>
  );
}

export default App;
