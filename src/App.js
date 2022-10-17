import './App.css'
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import CocktailOfTheDay from './pages/CocktailOfTheDay'
import Footer from './components/Footer'
import Alcoholic from './pages/Alcoholic'
import NonAlcoholic from './pages/NonAlcoholic'
import PageNotFound from './pages/PageNotFound'

function App() {
  return (
    <div>
      <NavBar />
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/cocktailOfTheDay' element={<CocktailOfTheDay />}></Route>
          <Route path='/alcoholic' element={<Alcoholic />}></Route>
          <Route path='/non-alcoholic' element={<NonAlcoholic />}></Route>
          <Route path='*' element={<PageNotFound />}></Route>
        </Routes>
      </div>
      <Footer />
    </div>
  )
}
export default App