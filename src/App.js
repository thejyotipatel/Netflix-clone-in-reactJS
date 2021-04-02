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
      <TodoItems setInputText={setInputText}/>
       <h1>{ inputText}</h1>
    </div>
  )
   
} 
export default App 