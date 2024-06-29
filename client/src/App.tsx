import { useState } from 'react'

import './App.css'
import { Route,Routes } from 'react-router-dom'
import SignIn from './pages/auth/SignIn'
import Dashboard from './pages/dashboard/Dashboard'
import { FinancialRecordProvider } from './contexts/financialRecord'
import UpdateFinancialRecordForm from './pages/dashboard/UpdateRecordForm'


function App() {
  

  return (
    <>
    <FinancialRecordProvider>
    <div>
    <Routes>
      <Route element={<SignIn/>} path='/sign-in'/>
      <Route element={<Dashboard/>} path='/'/>
      <Route element={<UpdateFinancialRecordForm/>}  path="/updateTask/:id"/>
    </Routes>

    </div>
    </FinancialRecordProvider>
    
    
    
    </>
  )
}

export default App
