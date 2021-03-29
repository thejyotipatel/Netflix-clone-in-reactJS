import React from 'react'

import '../style.css' 


function TodoItems(props){
    const completedStyle = {
        fontStyle: "italic",
        color: "#191c2f71",
        textDecoration: "line-through"
    }
    return (
        <div className='todo-item'> 
            <input 
                type='checkbox' 
                checked={props.data.completed}
                onChange={() => props.handleChange(props.data.id)}
            />
            <p style={props.data.completed ? completedStyle: null}>{props.data.text}</p>
        </div>
    )
}

export default TodoItems 