import React from 'react'
import Cnavbar from './Cnavbar'
import MenProductsPage from '../Products/MenProducts'
import WomenProducts from '../Products/WomensProducts'
import NavBar from '../Nav/NavBar'

const Combined = () => {
  return (
    <div>
        <NavBar/>
        <Cnavbar/>
        <MenProductsPage/>
        <WomenProducts/>
    </div>
  )
}

export default Combined