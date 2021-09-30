import React from "react";
import TodoItem from "./TodoItem";
import { useTodoContext } from "../context/AppContextProvider";

function TodoList() {
  const { todoList } = useTodoContext();
  const viewList = todoList.map(({ t_id, t_text, t_isComplete }) => {
    return (
      <TodoItem key={t_id} t_id={t_id} t_text={t_text} checked={t_isComplete} />
    );
  });
  return <div>{viewList}</div>;
}

export default TodoList;
