import React, { useState, useEffect } from 'react'
 
import instance from './axios'

import './style.css'

const baseUrl = "https://image.tmdb.org/t/p/original/" 

const Row = ({title, fetchUrl, isLargeRow}) => {

    const [movies, setMovies] = useState([])

    useEffect(() =>{
        fechData()
    }, [fetchUrl])

    async function fechData(){
        const req = await fetch(instance.baseURL + fetchUrl)
        const data = await req.json()
        setMovies(data.results) 
        console.log(data) 
    }

    return (
        <div className="rows">
            <h2>{title}</h2>

            <div className="posters">
                {movies.map(movie => (
                    <img
                        key={movie.id}
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
        </div>
    ) 
}
export default Row; 
