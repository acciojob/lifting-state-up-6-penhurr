import React from "react";

const TodoList = ({ todo, handleComplete }) => {



    return (

        
            <p>{todo.task}{
                !todo.completed && 
                <button type="button" onClick={()=>handleComplete(todo.id)}>
                    Complete
                </button>
            }</p>
        

    )

}

export default TodoList
