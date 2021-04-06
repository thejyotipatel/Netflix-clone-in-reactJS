import React, {useEffect, useState} from 'react'  
 
import './components/fontawesome-free-5.15.2-web/css/all.css'

import Reacipe from './components/Reacipe'

const App = () => {
  const APP_ID = '4ab33b7a'
  const APP_KEY = '4aa7688319e288abdd0f3996657e0a13'
  
  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState('chicken')

  useEffect(() =>{ 
    getRecipes()
  }, [query])

  const getRecipes = async () =>{
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    )

    const data = await response.json()
    setRecipes(data.hits) 
    
    console.log(data)

  }

  const updateSearch = e => {
    setSearch(e.target.value)  
  }

  const getSearch = e => {
    e.preventDefault()
    setQuery(search)
    setSearch("")
  }
  return (
    <div onSubmit={getSearch} className="App">
      <h1>Hello React</h1> 
      <form 
        action="" 
        className="search-form">

        <input 
          type="text" 
          className="search-bar"
          value={search}  
          onChange={updateSearch}
        />

        <button 
          className="search-button" 
          types="submit">
          <i className="fas fa-search"></i>
        </button>

      </form>

      {recipes.map(recipe =>( 
        <Reacipe 
          key={recipe.recipe.label}
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
          cuisineType={recipe.recipe.cuisineType}
          source={recipe.recipe.source}
          totalTime={recipe.recipe.totalTime}
          url={recipe.recipe.url}
        />
      ))}
    </div>
  )
   
} 

export default App 