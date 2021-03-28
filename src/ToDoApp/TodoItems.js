import React from 'react'

import '../style.css' 

function TodoItems(props){
    return (
        <div className='todo-item'> 
            <input type='checkbox' checked={props.data.completed}  />
            <p>{props.data.text}</p>
        </div>
    )
}

export default TodoItems 