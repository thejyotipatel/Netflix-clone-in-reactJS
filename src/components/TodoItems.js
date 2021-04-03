import React from 'react'

import Todo from './Todo'

const TodoItems = ({ todos, setTodos, filterTodos }) => { 
    return ( 
        <div>
            <ul className='todo'>
                {filterTodos.map((todo) =>(
                    <Todo 
                        setTodos={setTodos}
                        todos={todos}
                        key={todo.id}    
                        todo={todo}
                        text={todo.text}
                    /> 
                ))}
            </ul>
        </div>
    )
} 

export default TodoItems 