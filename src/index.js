import React from 'react'
import ReactDOM from 'react-dom'

import App from './foram/App'

// import TodoItems from './ToDoApp/TodoItems'
// import todoData from './ToDoApp/ToDoData'
// import './style.css'
 
// import Quote from './Quotes/Quote'
// import quotes from './Quotes/QuotesData' 
//}

// class Header extends React.Component{
//   render(){
//     return (
//         <header>
//           <p>Welcome, {this.props.username}</p>
//         </header>
//       )
//   }
// }

// class Greeting extends Component{
//   render(){ 
//     const date = new Date() 
//     return(
//     <h3>{(date.getHours() - 12) + ":" + date.getMinutes() + ":" + date.getSeconds()}</h3>
//     )
//   } 
// }

// function App(){
//   const quoteComponents = quotes.map(quote => <Quote key={quote.id} text={quote.text} author={quote.author}/>)
//   return (
//     <div> 
//       {quoteComponents}
//     </div>
//   )
// }

// class App extends React.Component{
//   constructor(){
//     super()
//     this.state = {
//       todos: todoData
//     }

//     this.handleChange = this.handleChange.bind(this)
//   }

//   handleChange (id){
//     this.setState(prevState => {
//       const updatedTodos = prevState.todos.map(todo =>{
//         if(todo.id === id){
//           todo.completed = !todo.completed 
          
//         }
//         return todo
//         })
//       return {
//         todos: updatedTodos 
//       }
//     })
//   }
  
//   render(){
//     const todoItems = todoData.map(data => <TodoItems key={data.id} data={data} handleChange={this.handleChange}/>)
//     return (
//       <div className="todo-list">
//         {todoItems}    
//       </div>
//     )
//   }
   
// } 


ReactDOM.render(<App />,document.getElementById('root'))
