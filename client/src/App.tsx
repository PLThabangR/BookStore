import { Toaster } from 'react-hot-toast';
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
      <Toaster/>
    <Routes>
      <Route element={<SignIn/>} path='/sign-in'/>
      <Route element={<Dashboard/>} path='/'/>
      <Route element={<UpdateFinancialRecordForm/>}  path="/updateRecord/:id"/>
    </Routes>

    </div>
    </FinancialRecordProvider>
    
    
    
    </>
  )
}

export default App
