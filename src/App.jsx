import { useState } from 'react'
import './App.css'
import List from './List'
import {Route,Routes} from 'react-router-dom'
import Home from './Home'

function App() {
  const [search, setSearch] = useState('chicken')
  const [recipes,setRecipes] = useState([])

  const apiKey="f054f026da4b92426b4c0d6a07f8ff55"
  const appId="cc4402c1"

  const Api=`https://api.edamam.com/search?q=${search}&app_id=${appId}&app_key=${apiKey}`

  const fun=async ()=>{
    let res=await fetch(Api)
    let reslt= await res.json()
    setRecipes(reslt.hits)
    console.log(reslt.hits)
  }

  
  const onsubmitHandler=(e)=>{
    e.preventDefault()
    fun()
  }


  return (
<>     

  <div>
        <form onSubmit={onsubmitHandler} className='mb-12'>
        <input 
        className='h-12 w-48 rounded-lg p-6'
        placeholder='Enter some keyword'
        type='text'
        value={search}
        onChange={e=> setSearch(e.target.value)}/>
        <button type='submit' className='bg-blue-600 h-12 w-24 rounded-lg ml-6'>Click Here</button>
      </form>
      {
      recipes.map((item,i)=> <List key={i} label={item.recipe.label} image={item.recipe.image} ingredients={item.recipe.ingredientLines} recipeArr={item.recipe}/>)
}
</div>
</>       
  )
}

export default App
