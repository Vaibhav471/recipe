import React from 'react'
import { Link } from 'react-router-dom';


function List({label,image,ingredients,recipeArr}) {

  const fun=()=>{
    localStorage.setItem("obj",JSON.stringify({recipeArr}))

  }

  return (
    <>
   
      <div className='flex mt-12 bg-zinc-600 text-white p-10 rounded-lg'>
        <div>
    <img src={image} className='flex-grow size-40 rounded-md' />
    <h1 className='font-black'>{label}</h1>
    </div>

    <ul className='flex-grow'>
      <h2 className='mb-12 text-yellow-200 font-black'>ingredients</h2>
        {
        ingredients.map((item,i) => <li key={i} >{item}</li>)
        
        }
        </ul>
        <Link to="/home">
        <button onClick={fun} className=''>Read More...</button>
        </Link>
        </div>
       
   
    </>
  )
}

export default List