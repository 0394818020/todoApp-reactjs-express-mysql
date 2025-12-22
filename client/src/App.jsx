import { useState } from 'react'
import HomePage from './pages/homePage.jsx'
import NotFound from './pages/NotFound.jsx'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router'
import './App.scss'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navigate to={'/homepage'}/>}/>
          <Route path='/homepage' element={<HomePage/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
