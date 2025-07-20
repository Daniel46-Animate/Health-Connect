import React from 'react'
import { Routes, Route } from 'react-router'
import Homepage from './Pages/Homepage'
import './App.css'

const App = () => {
  return (
    <div>
       
      <Routes>
        <Route path='/' element={<Homepage />} />
      </Routes>

    </div>
  )
}

export default App