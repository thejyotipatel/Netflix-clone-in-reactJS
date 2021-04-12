import React from 'react'
 
import Row from './components/Row'
import Request from './components/Request'
import Menu from './components/menu'
import Banner from './components/Banner'

const App = () =>{

    return(
        <div > 
            <Menu />
            <Banner />
            <Row 
                title='Netfliex Originals' 
                fetchUrl={Request.fetchNetfliexOriginals}
                isLargeRow
            />
            <Row title='Netfliex Top Rated' fetchUrl={Request.fetchTopRated}/>
            <Row title='Netfliex Top Rated' fetchUrl={Request.fetchTopRated}/>
            {/* <Row 
                title='Netfliex Originals' 
                fetchUrl={Request.fetchNetfliexOriginals}
                isLargeRow
                />
            <Row title='Netfliex Comedy' fetchUrl={Request.fetchComedyMovies} />
            <Row title='Netfliex Horror' fetchUrl={Request.fetchHorrorMovies} />
            <Row title='Netfliex Romance' fetchUrl={Request.fetchRomanceMovie} />
            <Row title='Netfliex Action' fetchUrl={Request.fetchActionMovies} />
            <Row title='Netfliex Documentaries' fetchUrl={Request.fetchDocumentaries} /> */}
        </div>
    )
}
export default App 