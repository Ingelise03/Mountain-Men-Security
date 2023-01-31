import React from 'react'
import { Link } from "react-router-dom";
const Home = () => {
   
  return (
    <div className='hometime'>
   <div className='hometime'>
   <div className='homeLinks'>
  <p>Don't have an account?</p>   <Link to="/register"><button>Register now</button></Link>
  </div>
    <div className='homeLinks'>
         <p>Already have an account? </p> <Link to="/login"><button>Login now</button></Link> 
     </div>
   </div>
 
     
  </div>
  )
}

export default Home