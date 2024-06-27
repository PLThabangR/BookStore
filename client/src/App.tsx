import { useState } from 'react'

import './App.css'
import { Route,Routes } from 'react-router-dom'
import SignIn from './pages/auth/SignIn'
import Dashboard from './pages/dashboard/Dashboard'


function App() {
  

  return (
    <>
    <div>
    <Routes>
      <Route element={<SignIn/>} path='/sign-in'/>
      <Route element={<Dashboard/>} path='/dashboard'/>
    </Routes>

    </div>
    
    
    
    </>
  )
}

export default App
