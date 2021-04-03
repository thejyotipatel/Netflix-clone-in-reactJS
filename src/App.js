import React, {useState} from 'react' 

import TodoItems from './components/TodoItems' 
import Form from './components/Form'

import './style.css'
  
function App() { 
   
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
    
  return (
    <div className="todo-list">
      <Form 
        inputText={inputText}
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
      />  
      <TodoItems
        todos={todos}
        setTodos={setTodos}
      /> 
    </div>
  )
   
} 
export default App 