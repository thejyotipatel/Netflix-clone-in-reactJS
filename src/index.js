import React from 'react'
import ReactDOM from 'react-dom'

import TodoItems from './ToDoApp/TodoItems'
import todoData from './ToDoApp/ToDoData'
// import Quote from './Quotes/Quote'
// import quotes from './Quotes/QuotesData' 
import './style.css'

function App() {
  const todoItems = todoData.map(data => <TodoItems key={data.id} data={data}/>)
  return (
    <div className="todo-list">
      {todoItems}   
    </div>
  )
}

// function App(){
//   const quoteComponents = quotes.map(quote => <Quote key={quote.id} text={quote.text} author={quote.author}/>)
//   return (
//     <div> 
//       {quoteComponents}
//     </div>
//   )
// }

ReactDOM.render( <App />,document.getElementById('root'))
