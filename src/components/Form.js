import React from 'react'

import '../style.css'
import './fontawesome-free-5.15.2-web/css/all.css'

const Form = ({setInputText, inputText, todos, setTodos}) =>{

    const inputHandler = (e) => {
        console.log(e.target.value)
        setInputText(e.target.value)
    }

    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos,
            {
                text: inputText,
                completed: false,
                id: Math.random() * 100
            }
        ])
        console.log(todos)
    }

    return (
        <form>
            <input 
                type="text"  
                placeholder="Add list items"
                className="todo-input"
                onChange={inputHandler}
            />

            <button 
                type="submit" 
                onClick={submitTodoHandler}
                className="submitBtn">
                <i className="fas fa-plus-square"></i>
            </button>

            <select name="todos">
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
            </select>  
        </form>
    )
}

export default Form