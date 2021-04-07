import React from 'react'

const Reacipe = ({title, calories, image, ingredients, totalTime, cuisineType, source, url}) =>{
    
    return( 
       <div className="recipe">
           <h1>{title}<span> { cuisineType}</span></h1> 
            <p>calories: {calories} <span>Total Time: {totalTime}</span> </p>
             
            <ol>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}  <span> ({ingredient.weight}gm)</span></li>
                ))} 
            </ol>

            <p>Kenow more at <a href={url} target="_blank" rel="noopener noreferrer">{source}</a></p> 
            <img src={image} alt="food imges"/>
             
       </div>  
    )
}

export default Reacipe

 
