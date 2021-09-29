import React from 'react'

function TodoInput(props) {

    const {todo, setTodo, todoList, setTodoList} = props;
    const onChangeHandler = (e)=>{
        setTodo({...todo, t_id : todoList.length,
                          t_text : e.target.value, 
                          t_date : Date().toString})
    }
    const todoInsert = (e)=>{
        setTodoList([...todoList, todo])
    }

    return (
        <div className="todo_input_box" onChange={onChangeHandler}>
            <input placeholder="할일입력" defaultValue={todo.t_text}/>
            <button onClick={todoInsert}>추가</button>
        </div>
    )
}

export default TodoInput
