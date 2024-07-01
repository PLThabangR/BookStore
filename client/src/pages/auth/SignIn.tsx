import {SignedIn,SignedOut,SignInButton,SignOutButton,UserButton,SignUpButton, RedirectToSignIn} from "@clerk/clerk-react"
import { Navigate, Navigator } from "react-router-dom"
import "./auth.css"

const SignIn = () => {
  
  return (
    <>
    <div className="back">
    <h1>Finance Management Platform </h1>
    <div className="sign-in-container">
   
        <SignedOut>
            <SignUpButton mode="modal"/>
            <SignInButton mode="modal"/>
            
        </SignedOut>
        <SignedIn>
            <Navigate  to="/"/>
        </SignedIn>
    </div>

    </div>
   
    
    </>
  )
}

export default SignIn