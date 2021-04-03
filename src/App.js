import React, {useState, useEffect} from 'react' 

import TodoItems from './components/TodoItems' 
import Form from './components/Form'

import './style.css'
  
function App() { 
   
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all")
  const [filterTodos, setFilterTodos] = useState([])
    
  useEffect(() =>{
    getLocalTodos()
  }, [])

  useEffect(() => { 
    filterHandler()
    saveLocalTodos()
  }, [todos, status])

  const filterHandler = () => {
    switch(status){
      case 'completed':
        setFilterTodos(todos.filter(todo => todo.completed === true))
        break;
      case 'uncompleted':
        setFilterTodos(todos.filter(todo => todo.completed === false))
        break;
      default:
        setFilterTodos(todos)
        break;
    }
  }

  
  const saveLocalTodos = () => { 
      localStorage.setItem("todos", JSON.stringify(todos))
  }

  const getLocalTodos = () => {
    if(localStorage.getItem("todos") === null){
      localStorage.setItem("todos", JSON.stringify([]))
    }else{
      //localStorage.setItem("todos", JSON.stringify(todos))
      let todosLocal = JSON.parse(localStorage.getItem("todos"))
      setTodos(todosLocal)
    }
  }
  return (
    <div className="todo-list">
      <Form 
        inputText={inputText}
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos} 
        setStatus={setStatus}
      />  
      <TodoItems
        todos={todos}
        setTodos={setTodos} 
        filterTodos={filterTodos}
      /> 
    </div>
  )
   
} 
export default App 