import React, { useState, useEffect } from 'react'
 
import instance from './axios'
import './style.css'
const baseUrl = "https://image.tmdb.org/t/p/original"
const img = require("./thumbs/01.jpg")
const Row = ({title, fetchUrl}) => {
    const [movies, setMovies] = useState([])

    useEffect(() =>{
        fechData()
    }, [fetchUrl])

    async function fechData(){
        const req = await fetch(instance.baseURL + fetchUrl)
        const data = await req.json()
        setMovies(data.results)
        console.log(data.results)
    }

    return (
        <div className="rows">
            <h2>{title}</h2>

            <div className="posters">
                {/* {movies.map(movie => (
                    key={movie.id}
                    // <img src={`${baseUrl}${movie.poster_path}`} alt={movie.title} />
                )) } */}
                <img  src={ img.default} alt="hello"/>
                <img src={ img.default} alt="hello"/>
                <img src={ img.default} alt="hello"/>
                <img src={ img.default} alt="hello"/>
                <img src={ img.default} alt="hello"/>
                <img src={ img.default} alt="hello"/>
                <img src={ img.default} alt="hello"/>
                <img src={ img.default} alt="hello"/>
                <img src={ img.default} alt="hello"/>
                <img src={ img.default} alt="hello"/>
                <img src={ img.default} alt="hello"/>
                <img src={ img.default} alt="hello"/>
                <img src={ img.default} alt="hello"/>
                <img src={ img.default} alt="hello"/>
                <img src={ img.default} alt="hello"/>
                <img src={ img.default} alt="hello"/>
            </div>
        </div>
    )
}
export default Row; 
