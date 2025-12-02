import React from "react";

const TodoList = ({ todos, setTodos, handleComplete }) => {



    return (

        <div>
            <h2>Child Component</h2>
            {todos.map(todo =>
            (
                <div key={todo.id}>
                    <ul>
                        <li>{todo.task}</li>
                        {!todo.completed && <button type="button" onClick={() => handleComplete(todo.id)}>
                        Complete
                    </button>}
                    </ul>
                    

                </div>
            )

            )}
        </div>

    )

}

export default TodoList
