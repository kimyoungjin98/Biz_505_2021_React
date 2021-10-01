import React from "react";
import TodoItem from "./TodoItem";
import { useTodoContext } from "../context/AppContextProvider";

function TodoList() {
  const { todoList } = useTodoContext();
  const viewList = todoList.map((item) => {
    return <TodoItem key={item.t_id} todo={item} />;
  });
  return <div>{viewList}</div>;
}

export default TodoList;
