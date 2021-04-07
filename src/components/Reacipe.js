import React from 'react'

// const Reacipe = ({title, calories, image, ingredients, totalTime, cuisineType, source, url}) =>{
    const Reacipe = () =>{
        let img = require('./img.jpeg')
    return( 
       <div className="recipe">
           {/* <h1>{title} Chicken Vesuvio<span>italian{cuisineType}</span></h1> 
            <p>calories: 4228.043058200812{calories} Total Time: 60{totalTime} </p> */}
            <h1> Chicken Vesuvio <span>italian </span></h1> 
            <p className="calories">calories: 4228.043058200812  Total Time: 60</p>
            <ol>
                {/* {ingredients.map(ingredient => (
                    <li>{ingredient.text}  <span> ({ingredient.weight}gm)</span></li>
                ))} */}
                <li>2 large onions <span>(300gm)</span></li>
                <li>750 g chicken <span>(750gm)</span></li>
                <li>500 g mushrooms <span>(500gm)</span></li>
                <li>1 cup water (237gm)<span></span></li>
                <li>1 cup red wine <span>(235.2gm)</span></li>
                <li>2 teaspoons chicken stock <span> (10.00000000050721gm)</span></li>
                <li>200 ml mayonnaise <span>(195.2759811031433gm)</span></li>
                <li>200 ml cream <span>(201.53157530298427gm)</span></li>
                <li>small bunch of parsley <span>(45gm)</span></li>
                <li>1 teaspoon curry powder <span>(2gm)</span></li>
            </ol>
            {/* <p>Kenow more at <a href={url} target="_blank" rel="noopener noreferrer"> BBC Good Food{source}</a></p> 
            <img src={image} alt="food imges"/> */}
            <p>Kenow more at <a href='!#' target="_blank" rel="noopener noreferrer"> BBC Good Food</a></p> 
            <img src={img.default} /> 
       </div>  
    )
}

export default Reacipe

 
