import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Trending from './components/Trending'

const App = () => {
  return (
    <div className='w-full h-screen bg-[#1f1E24] flex'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/trending' element={<Trending />} />
      </Routes>
    </div>
  )
}

export default App