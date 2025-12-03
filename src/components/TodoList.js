import React from "react";

const TodoList = ({ todo, handleComplete }) => {



    return (
        <li>
            {todo.task}{
                    !todo.completed &&
                    <button type="button" onClick={() => handleComplete(todo.id)}>
                        Complete
                    </button>
                }
        </li>
    )

}

export default TodoList
