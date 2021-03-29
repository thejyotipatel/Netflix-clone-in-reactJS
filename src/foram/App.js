import React, {Component} from 'react'
import FromUI from './FromUI'

class App extends Component{
    
    state ={
            fName: '',
            lName: '',
            age: null,
            gender: '', 
            reading: false,
            danceing: false,
            running: false,
            music: false
 
        }
         
    handleChange = (e) => {
        const {name, value, type, checked} = e.target 
        type === "checkbox" ?
            this.setState({
                [name]: checked
            })
        :
        this.setState({
                [name]: value
            })
        }

    render(){
        return(
             <FromUI 
                handleChange = {this.handleChange}
                data={this.state}
             />
        )
    }
}
export default App