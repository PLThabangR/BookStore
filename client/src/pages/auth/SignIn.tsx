import {SignedIn,SignedOut,SignInButton,SignOutButton,UserButton,SignUpButton} from "@clerk/clerk-react"

const SignIn = () => {
  return (
    <>
    <div className="sign-in-container">
        <SignedOut>
            <SignUpButton mode="modal"/>
            <SignInButton mode="modal"/>

        </SignedOut>
        <SignedIn>
            <UserButton/>
        </SignedIn>
    </div>
    
    </>
  )
}

export default SignIn