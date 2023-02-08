import React, { useState } from 'react';
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';
// import {FaChevronDown, FaChevronUp} from 'react-icons/fa';
import Image from "next/image";

// import {  useNavigate } from "react-router-dom";

import {Dashboard} from '../member';


const Navbar = () => {
  // const navigate = useNavigate();
  const [memberLogin, setMemberLogin] = useState(false);

  const [toggleMenu, setToggleMenu] = useState(false);
  
  
  return (
    <div className="gpt3__navbar"  id='top'>
       <div className="gpt3__navbar-links_logo" >
        <a href="#top"><Image className='ImLogo' src='/LogoMN.png' width={50}
 height={50} style={{ borderRadius: '50%', overflow: 'hidden'}} alt='logo'/></a>
        </div>
        
      <div className="gpt3__navbar-links">
      
        <div className="gpt3__navbar-links_container">
          <div className='links'><a href="#home">Home</a></div>
          <div className='links'><a href="#wgpt3">Services</a></div>
          <div className='links'><a href="#possibility">Shop</a></div>
          <div className='links'><a href="#about">About</a></div>
          <div className='links'><a href="#blog">Our Team</a></div>
          <div className='links'><a href="#contactform">Contact Us</a></div>
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        
      
      <button type="button" className="signinPage"onClick={() => setMemberLogin(true)}>View News</button>
         <div className='LoginPage'>
           {memberLogin && (
           <div className='page'>
                 
                 <div className='Pagehead'>
           
                  <div className='trials'>
                  
                    
                    <div className='tryBar'>
                      <div className='trybarHead'>
                      <h1>Neighbourhood news </h1>
                      </div>
                  
                       <div className='ownContain'> {memberLogin && <Dashboard/>}</div>
                       </div>
                    <div className='topbar'>
                      <button type="button" className="exit"onClick={()=> setMemberLogin(false)}>Exit</button> 
                    </div>
                </div>
                 </div>               
           </div>      
            )}
           
         </div>
      
          
       
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="gpt3__navbar-menu_container scale-up-center">
          <div className="gpt3__navbar-menu_container-links">
          <div className='links'><a href="#home">Home</a></div>
          <div className='links'><a href="#wgpt3">Services</a></div>
          <div className='links'><a href="#possibility">Shop</a></div>
          <div className='links'><a href="#about">About</a></div>
          <div className='links'><a href="#blog">Our Team</a></div>
          <div className='links'><a href="#contactform">Contact Us</a></div>
          </div>
          <div className="gpt3__navbar-menu_container-links-sign">
          <button type="button" className="signinPage"onClick={() => setMemberLogin(true)}>View News</button>
         <div className='LoginPage'>
        
            
           {memberLogin && (
           <div className='page'>
                 
                 <div className='Pagehead'>
                 
                  <div className='trials'>
                 <h1>Neighbourhood news </h1>  
                 
                  {memberLogin && <Dashboard/>}
                  <button type="button" className="exit"onClick={() => setMemberLogin(false)}>Exit</button> 
                </div>
                
                  
                 </div>
              
           </div>
            )}
           
         </div>
      
          </div>
        </div>
        )}
      </div>
    </div>
  )
}

export default Navbar