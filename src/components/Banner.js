import React, {useState, useEffect} from 'react'

import instance from './axios'
import Request from './Request'

const Banner = () => {

    const [movie, setMovie] = useState([])

    useEffect(() =>{
        fetchData()
    }, [])

    async function fetchData(){
        const req = await fetch(instance.baseURL + Request.fetchNetfliexOriginals)
        const data = await req.json()
        setMovie(data.results[
            Math.floor(Math.random() * req.data.results.length - 1)
        ]) 
    }

    return (
        <header className="banner"
            style={{
                background: 'cover',
                backgroundImage:`url(
                  "https://image.tmdb.org/t/p/original/${movie ?.backdrop_path}"  
                )`,
                backgroundPosition: "center center"
            }}
        >
            <div className="banner-contant">
                <h1>
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                <div className="banner-buttons">
                    <button className="banner-button">Play</button>
                    <button className="banner-button">My List</button>
                </div>
                <h1 className="desc">
                    {movie?.overview}
                </h1>
            </div>
        </header>
    )
}
export default Banner 