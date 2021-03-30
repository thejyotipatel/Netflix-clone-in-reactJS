import React, {Component} from 'react' 

import TodoItems from './ToDoApp/TodoItems'
import todoData from './ToDoApp/ToDoData'

import './style.css'
  
class App extends Component{ 
    state = {
          todos: todoData
        }
 

  handleChange = (id) => {
    
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todo =>{
        if(todo.id === id){
          todo.completed = !todo.completed 
          
        }
        return todo
        })
      return {
        todos: updatedTodos 
      }
    })
  }
  
  render(){
    const todoItems = todoData.map(data => 
                                <TodoItems 
                                  key={data.id} 
                                  data={data} 
                                  handleChange={this.handleChange}
                                />
                              )
    return (
      <div className="todo-list">
        {todoItems}    
      </div>
    )
  }
   
} 
export default App 