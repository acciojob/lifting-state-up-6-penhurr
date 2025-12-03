import React from "react";

const TodoList = ({ todo, handleComplete }) => {



    return (

        <div>
            <p><span>{todo.task}</span>{
                !todo.completed && 
                <button type="button" onClick={()=>handleComplete(todo.id)}>
                    complete
                </button>
            }</p>
        </div>

    )

}

export default TodoList
