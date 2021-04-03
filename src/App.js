import React, {useState, useEffect} from 'react' 

import TodoItems from './components/TodoItems' 
import Form from './components/Form'

import './style.css'
  
function App() { 
   
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all")
  const [filterTodos, setFilterTodos] = useState([])
    
  useEffect(() => { 
    filterHandler()
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