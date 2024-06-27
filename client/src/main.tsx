import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {ClerkProvider} from "@clerk/clerk-react";
import { BrowserRouter } from 'react-router-dom';

const PUBLISHABLE_KEYS = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
if(!PUBLISHABLE_KEYS){
  throw new Error("Missing public keys")

}
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <ClerkProvider  publishableKey={PUBLISHABLE_KEYS}>
    <App />
    </ClerkProvider>
    </BrowserRouter>
   
  </React.StrictMode>,
)
