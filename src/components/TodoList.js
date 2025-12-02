import React from "react";

const TodoList = ({ todos, setTodos, handleComplete }) => {



    return (

        <div>
            <h2>Child Component</h2>
            {todos.map(todo =>
            (

                <ul key={todo.id}>
                    <li>
                        <span>{todo.task}</span>
                        {!todo.completed && <button type="button" onClick={() => handleComplete(todo.id)}>
                            Complete
                        </button>}

                    </li>

                </ul>



            )

            )}
        </div>

    )

}

export default TodoList
