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
        count: 0
      }
      this.countChange = this.countChange.bind(this)
    }
    countChange(){
        this.setState(prevState =>{
            return {
                count : prevState.count + 1
            }
        })
    }
    render(){
      return(
        <div>
          <h1 style={{textAlign: centar}}>{this.state.count}</h1>
          <button onClick={this.countChange}>Change!</button>
        </div>
      )
    }
}
export default App