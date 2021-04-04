import React from 'react'

import './style.css' 
import './fontawesome-free-5.15.2-web/css/all.css'


const Todo = ({text, todo, todos, setTodos}) =>{
    const completedStyle = {
        fontStyle: "italic",
        color: "#191c2f71",
        textDecoration: "line-through"
    }

    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id))
    }

    const completeHandler = ()=>{
        setTodos(todos.map(item => {
            if(item.id === todo.id){
                return{
                    ...item,
                    completed: !item.completed
                }
            }
            return item
        }))
    }
    return (
        <div  className="todo-item">  
            <li  
                style={todo.completed ? completedStyle : null}
            >{text} 
                {/* {props.data.text} */}
            </li>  
            <div> 
                <button 
                    onClick={completeHandler} 
                > 
                    <i className="btn fas fa-check"></i>
                     
                </button>
                <button 
                    onClick={deleteHandler} 
                > 
                    <i className="btn fas fa-trash"></i>
                </button> 
            </div>
             
        </div>
    )
}

export default Todo 