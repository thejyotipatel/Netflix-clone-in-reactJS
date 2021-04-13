import React from 'react'
 
import Row from './components/Row'
import Request from './components/Request'
import Menu from './components/Menu'
import Banner from './components/Banner'

import './components/style.css'

const App = () =>{

    return(
        <div className="App"> 
            <Menu />
            <Banner />
            <Row 
                title='Netfliex Originals' 
                fetchUrl={Request.fetchNetfliexOriginals}
                isLargeRow={true}
            />
            <Row 
                title='Netfliex Comedy' 
                fetchUrl={Request.fetchComedyMovies} 
            />
            <Row 
                title='Netfliex Horror' 
                fetchUrl={Request.fetchHorrorMovies} 
            />
            <Row 
                title='Netfliex Romance'
                fetchUrl={Request.fetchRomanceMovie}
              />
            <Row 
                title='Netfliex Action' 
                fetchUrl={Request.fetchActionMovies} 
            />
            <Row 
                title='Netfliex Documentaries' 
                fetchUrl={Request.fetchDocumentaries}
            />
        </div>
    )
}
export default App 