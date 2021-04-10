import React from 'react'
 
import Row from './components/Row'
import Request from './components/Request'

const App = () =>{

    return(
        <div>
            <h1>Hello React! </h1>
            <Row title='Netfliex Orignals' fetchUrl={Request.fetchNetfliexOriginals} />
            <Row title='Netfliex Tranding' fetchUrl={Request.fetchTopRated}/>
        </div>
    )
}
export default App 