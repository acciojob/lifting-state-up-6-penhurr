import React from "react";

const TodoList = ({ todo, handleComplete }) => {



    return (

        <ul>
            <li>
                {todo.task}{
                    !todo.completed &&
                    <button type="button" onClick={() => handleComplete(todo.id)}>
                        Complete
                    </button>
                }
            </li>
        </ul>



    )

}

export default TodoList
