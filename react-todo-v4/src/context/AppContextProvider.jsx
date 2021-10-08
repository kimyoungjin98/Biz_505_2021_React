import React, { createContext, useContext, useState, useRef } from "react";

const AppContext = createContext();

export const useTodoContext = () => {
  return useContext(AppContext);
};

function AppContextProvider({ children }) {
  const nextId = useRef(0);
  const inputId = useRef();

  const [todo, setTodo] = useState({
    t_id: 0,
    t_text: "",
    t_comp: false,
  });

  const [todoList, setTodoList] = useState([]);

  const onChange = (e) => {
    const t_text = e.target.value;

    setTodo({ ...todo, t_text, t_id: nextId.current });
  };

  const todoInsert = () => {
    if (todo.t_text === "") {
      alert("할 일을 입력하세요");
      inputId.current.focus();
      return;
    }
    setTodoList([...todoList, todo]);
    nextId.current++;
    todoClear();
  };

  const todoClear = () => {
    setTodo({ t_id: nextId.current, t_text: "", t_comp: false });
  };

  const todoDelete = (e) => {
    if (window.confirm("삭제하시겠습니까?")) {
      const t_id = e.target.dataset.todoId;
      const _todoList = todoList.filter((todo) => todo.t_id != t_id);
      console.log(_todoList);
      setTodoList(_todoList);
    }
  };

  const onClick = (e) => todoInsert();
  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      todoInsert();
    } else if (e.key === "Escape") {
      todoClear();
    }
  };

  const onCompClick = (e) => {
    const t_id = Number(e.target.dataset.todoId);
    const index = todoList.findIndex((todo) => todo.t_id === t_id);

    const selectTodo = todoList[index];
    const _todoList = [...todoList];
    _todoList[index] = {
      ...selectTodo,
      t_comp: !selectTodo.t_comp,
    };

    setTodoList(_todoList);
  };

  const propsStore = {
    todo,
    todoList,
    onChange,
    onClick,
    onKeyPress,
    inputId,
    todoDelete,
    onCompClick,
  };

  return (
    <AppContext.Provider value={propsStore}>{children}</AppContext.Provider>
  );
}

export default AppContextProvider;
