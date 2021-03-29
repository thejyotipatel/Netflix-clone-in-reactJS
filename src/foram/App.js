import React, {Component} from 'react'

class App extends Component{
    constructor(){
        super()
        this.state ={
            fName: '',
            lName: ''
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e){
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
    }

    render(){
        return(
            <form>
                <input 
                    type='text'
                    value={this.state.fName} 
                    name='fName' 
                    placeHolder='first name' 
                    onChange={this.handleChange} 
                />
                <br/>
                <input 
                    type='text'
                    value={this.state.lName} 
                    name='lName' 
                    placeHolder='last name'  
                    onChange={this.handleChange}
                />
                <h1>{this.state.fName}  {this.state.lName}</h1>
            </form>
        )
    }
}
export default App