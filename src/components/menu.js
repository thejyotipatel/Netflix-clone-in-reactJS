import React, { useEffect, useState } from 'react'

import './style.css'

const Menu = () => {

    const[show, handleShow] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () =>{
            if(window.scrollY > 100){
                handleShow(true)
            }else handleShow(false)
        })
        return () =>{
            window.removeEventListener("scroll")
        }
    }, [])
    return(
        <div className={`menu-bar ${ show && "menu-black"}`}> 
            <img
                className="menu-logo" 
                src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg" 
                alt="Netflixlogo"/> 
        </div>  
    )
}

export default Menu