import "./App.css"
import React from "react"
import { Routes, Route } from "react-router-dom"
import NavBar from "./components/NavBar"
import Home from "./pages/Home"
import CoctailOfTheDay from "./pages/CoctailOfTheDay"
import Footer from "./components/Footer"

function App() {
  return (
    <div>
      <NavBar />
      <div className='container'>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/coctailOfTheDay" element={<CoctailOfTheDay />}></Route>
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
