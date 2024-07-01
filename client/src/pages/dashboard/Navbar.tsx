
import { SignedIn,UserButton,useUser } from '@clerk/clerk-react';
import { Link } from 'react-router-dom';
import {toast} from "react-hot-toast";


const Navbar = () => {
     //Grab the user id from Clerk
   const {user} =  useUser();
  
   
  
  return (
    <>
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
  <Link to="/"> <span className="navbar-brand mb-0 h1"> 
    Dashboard
    </span></Link>
   
   <div> <SignedIn><UserButton showName afterSignOutUrl="/sign-in"/></SignedIn></div>

  </div>
</nav>
    
    </>
  )
}

export default Navbar