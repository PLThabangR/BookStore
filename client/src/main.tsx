import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {ClerkProvider} from "@clerk/clerk-react"

//Import the .env variable
const PUBLSHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
//If no key do not run the app
if(!PUBLSHABLE_KEY){
  throw new Error("Missing Publishable key")
}
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={PUBLSHABLE_KEY}>
    <App />
    </ClerkProvider>
   
  </React.StrictMode>,
)
