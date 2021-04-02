import React from 'react'

import '../style.css' 
import '../../../../webside for web serises/fontawesome-free-5.15.2-web/css/all.css'


const TodoItems = (props) =>{
    const completedStyle = {
        fontStyle: "italic",
        color: "#191c2f71",
        textDecoration: "line-through"
    }
    return (
        <div className='todo'>  
            <li 
                className="todo-item"
                // style={props.data.completed ? completedStyle: null}
            >hello
                {/* {props.data.text} */}
            </li> 
            <div> 
                <button 
                    onClick={() => props.handleChange(props.data.id)} 
                > 
                    <i className="btn fas fa-check"></i>
                </button>
                <button 
                    onClick={() => props.handleChange(props.data.id)} 
                > 
                    <i className="btn fas fa-trash"></i>
                </button>
            </div>
             
        </div>
    )
}

export default TodoItems 