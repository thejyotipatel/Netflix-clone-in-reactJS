import React, {Component} from 'react'

// function App(){
//     return (
//         <div class> 
//             <input type="checkbox" /> 
//             <p>this is paragraph 1</p>
//         </div>
//     )
// }

// class App extends Component{
//     constructor (){
//       super();
//       this.state = {
//         unreadMessage: []
//       } 
//     } 

//     render(){
//       return(
//         <div>
//           {
//             this.state.unreadMessage.length > 0 &&
//             <h1>You have {this.state.unreadMessage.length} unread messages!</h1>
//           }
//         </div>
//       )
//     }
// }

class App extends Component{
  constructor (){
    super();
    this.state = { 
      isLoggedIn: false
    } 
    this.onChange = this.onChange.bind(this)
  } 

  onChange(){ 
    this.setState(prevState => {
      return {
        isLoggedIn: !prevState.isLoggedIn
      }
    })
  }

  render(){
    let butText = this.state.isLoggedIn ? "LOG OUT" : "LOG IN"
    let displayText = this.state.isLoggedIn ? "Logged in" : "Logged out"
    return(
      <div>
        <button onClick={this.onChange}>{butText}</button>
        <h1>{displayText}</h1>
      </div>
    )
  }
}
export default App