import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();

// export const useTodoContext = () => {
//   return useContext(AppContextProvider);
// };

// 함수 내부에서 단 한줄의 return만 있을 경우 모두 생략 가능
export const useTodoContext = () => useContext(AppContext);

const AppContextProvider = ({ children }) => {
  const [todo, setTodo] = useState({
    t_id: 0,
    t_text: "TODO 연습",
    t_isComplete: false,
  });
  const [todoList, setTodoList] = useState([
    {
      t_id: 0,
      t_text: "리액트 TODOLIST",
      t_isComplete: false,
    },
  ]);

  const onClick = (e) => {
    setTodoList([...todoList, todo]);
  };

  const onKeypress = (e) => {
    if (e.key === "Enter") {
      setTodoList([...todoList, todo]);
    }
  };

  const onChange = (e) => {
    setTodo({
      ...todo,
      t_id: todoList[todoList.length - 1].t_id + 1,
      t_text: e.target.value,
      t_isComplete: false,
    });
  };
  const tododelete = (id) => {};
  const completeToggle = (id) => {};

  const propsData = {
    onClick,
    onKeypress,
    onChange,
    todo,
    todoList,
    tododelete,
    completeToggle,
  };

  return (
    <AppContext.Provider value={propsData}>{children}</AppContext.Provider>
  );
};

export default AppContextProvider;
