import React from "react";

const TodoList = ({ todo, handleComplete }) => {



    return (
        <>
            {todo.task}{
                    !todo.completed &&
                    <button type="button" onClick={() => handleComplete(todo.id)}>
                        Complete
                    </button>
                }
        </>
    )

}

export default TodoList
