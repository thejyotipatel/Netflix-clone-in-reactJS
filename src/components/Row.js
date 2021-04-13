import React, { useState, useEffect } from 'react'
 
import instance from './axios'
import YouTube from "./YouTube"
// import youTube from 'react-youtube'
// import moviTrailer from 'movie-trailer'

import './style.css'

const baseUrl = "https://image.tmdb.org/t/p/original/" 

const Row = ({title, fetchUrl, isLargeRow}) => {

    const [movies, setMovies] = useState([])
    const [trailerUrl, setTrailerUrl] = useState("")

    useEffect(() =>{
        fechData()
    }, [fetchUrl])

    async function fechData(){
        const req = await fetch(instance.baseURL + fetchUrl)
        const data = await req.json()
        setMovies(data.results) 
        console.log(data) 
    }

    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay: 1,
        }
    }

    const handleClick = ( movie ) => {
        if(trailerUrl){
            setTrailerUrl('')
        }else {
            setTrailerUrl(movie?.name || "")
            .then(url => {
                const urlParams = new URLSearchParams(new URL(url.search))
                setTrailerUrl(urlParams.get('v'))
            }).catch(error => console.log(error))
        }
    }

    return (
        <div className="rows">
            <h2>{title}</h2>    

            <div className="posters">
                {movies.map(movie => (
                    <img
                        key={movie.id}
                        onClick={()=> handleClick(movie)}
                        className={
                            `posters-img ${isLargeRow && "postersLarge-img"}` 
                        }
                        src={`${baseUrl}
                            ${isLargeRow ? movie.poster_path : movie.backdrop_path}
                            `} 
                        alt={movie.title} 
                    />
                )) }
                 
            </div>
           { trailerUrl &&
            <YouTube 
                videoId={trailerUrl}
                opts={opts}
            />}
        </div>
    ) 
}
export default Row; 
