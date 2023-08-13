import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import AddNewMovie from './pages/AddNewMovie'
import { SingleMovie } from './pages/SingleMovie'

function App() {

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/addMovie' exact element={<AddNewMovie/>} />
        <Route path='/movie/:id' exact element={<SingleMovie/>} />
      </Routes>
    </div>
  )
}

export default App
