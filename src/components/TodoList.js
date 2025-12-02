import React from "react";

const TodoList = ({ todos, setTodos, handleComplete }) => {



    return (

        <div>
            <h2>Child Component</h2>
            {todos.map(todo =>
            (
                <div key={todo.id}>
                    <ul>
                        <li>{todo.task}
                            {!todo.completed && <button type="button" onClick={() => handleComplete(todo.id)}>
                            Complete
                        </button>}
                        </li>
                        
                    </ul>

                </div>
            )

            )}
        </div>

    )

}

export default TodoList
