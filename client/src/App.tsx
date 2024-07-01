import { Toaster } from 'react-hot-toast';
import './App.css'
import { Route,Routes } from 'react-router-dom'
import SignIn from './pages/auth/SignIn'
import Dashboard from './pages/dashboard/Dashboard'
import { FinancialRecordProvider } from './contexts/financialRecord'
import UpdateFinancialRecordForm from './pages/dashboard/UpdateRecordForm'
import Navbar from './pages/dashboard/Navbar';
import { SignedIn } from '@clerk/clerk-react';


function App() {
  



  return (
    <>
    <div className="container">
    <FinancialRecordProvider>
   
    <div>
<SignedIn>
<Navbar/>
</SignedIn>
 
      <div>
     
      </div>
      
      <Toaster/>
    <Routes>
      <Route element={<SignIn/>} path='/'/>
      <Route element={<Dashboard/>} path='/dashboard'/>
      <Route element={<UpdateFinancialRecordForm/>}  path="/dashboard/updateRecord/:id"/>
     
    </Routes>
    
    </div>
    </FinancialRecordProvider>

    </div>
  
    
    
    
    </>
  )
}

export default App
