import {SignedIn,SignedOut,SignInButton,SignOutButton,UserButton,SignUpButton, RedirectToSignIn} from "@clerk/clerk-react"
import { Navigate, Navigator } from "react-router-dom"

const SignIn = () => {
  
  return (
    <>
    <div className="sign-in-container">

        <SignedOut>
            <SignUpButton mode="modal"/>
            <SignInButton mode="modal"/>
            
        </SignedOut>
        <SignedIn>
            <Navigate  to="/"/>
        </SignedIn>
    </div>
    
    </>
  )
}

export default SignIn