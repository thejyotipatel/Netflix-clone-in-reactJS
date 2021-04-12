import React, {useState, useEffect} from 'react'

import instance from './axios'
import Request from './Request'

import './style.css'

const Banner = () => {

    const [movie, setMovie] = useState([])

    useEffect(() =>{
        fetchData()
    }, [])

    async function fetchData(){
        const req = await fetch(instance.baseURL + Request.fetchNetfliexOriginals)
        const data = await req.json()
        setMovie(data.results[
            Math.floor(Math.random() * data.results.length - 1)
        ]) 
    }

    const maxDesc = (str, n) =>{
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }

    return (
        <header className="banner"
            style={{
                background: 'cover',
                backgroundImage:`url(
                  "https://image.tmdb.org/t/p/original/${movie ?.backdrop_path}" )`,
                backgroundPosition: "center center"
            }}
        >
            <div className="banner-contant">
                <h1 className="banner-title">
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                <div className="banner-buttons">
                    <button className="banner-button">Play</button>
                    <button className="banner-button">My List</button>
                </div>
                <h1 className="desc">
                    {maxDesc(movie?.overview, 150)}
                </h1>
            </div>

            <div className="banner-fadeBottom"></div>
        </header>
    )
}
export default Banner 