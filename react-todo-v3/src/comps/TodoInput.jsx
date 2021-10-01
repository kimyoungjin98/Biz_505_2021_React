import React from "react";
import { useTodoContext } from "../context/AppContextProvider";

function TodoInput() {
  const { todo, onChange, onClick, onKeyPress, inputId } = useTodoContext();
  return (
    <div className="form">
      <input
        value={todo.t_text}
        onChange={onChange}
        onKeyPress={onKeyPress}
        ref={inputId}
      />
      <button className="btn_insert" onClick={onClick}>
        추가
      </button>
    </div>
  );
}

export default TodoInput;
