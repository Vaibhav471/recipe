import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Home from './Home'
import App from './App'

function Dash() {

    const [data, setData] = ('36')

  return (
    <Routes>
        <Route path='/' Component={App}/>
        <Route path='/home' Component={Home}/>
    </Routes>
  )
}

export default Dash