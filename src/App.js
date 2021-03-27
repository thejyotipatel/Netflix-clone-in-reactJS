import React, {Component} from 'react'

// function App(){
//     return (
//         <div class> 
//             <input type="checkbox" /> 
//             <p>this is paragraph 1</p>
//         </div>
//     )
// }

class App extends Component{
    constructor (){
      super();
      this.state = {
        name: "BTS",
        age: 22
      }
    }
    render(){
      return(
        <div>
          <h1>{this.state.name}</h1>
          <h3>{this.state.age}</h3>
        </div>
      )
    }
}
export default App