import React, { useState } from 'react';
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';
// import {FaChevronDown, FaChevronUp} from 'react-icons/fa';
import Image from "next/image";
import { RiArrowRightLine } from 'react-icons/ri';


import {Member} from '../member';


const Navbar = () => {
  // const [isShown, setIsShown] = useState(false);

  // const handleClick = event => {
  //   // 👇️ toggle shown state
  //   setIsShown(current => !current);

  //   // 👇️ or simply set it to true
  //   // setIsShown(true);
  // };
  const [memberLogin, setMemberLogin] = useState(false);

  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="gpt3__navbar"  id='top'>
       <div className="gpt3__navbar-links_logo" >
        <a href="#top"><Image className='ImLogo' src='/LogoMN.png' width={50}
 height={50} style={{ borderRadius: '50%', overflow: 'hidden'}}/></a>
        </div>
        
      <div className="gpt3__navbar-links">
      
        <div className="gpt3__navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#wgpt3">Services</a></p>
          <p><a href="#possibility">Courses</a></p>
          <p><a href="#features">About</a></p>
          <p><a href="#blog">Our Team</a></p>
          <p><a href="#contactform">Contact Us</a></p>
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        
         <button type="button" className="signinPage" onClick={() => setMemberLogin(true)}>Sign in</button>
         <div className='LoginPage'>
           {memberLogin && <Member />}
         </div>
        
       
          
       
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="gpt3__navbar-menu_container scale-up-center">
          <div className="gpt3__navbar-menu_container-links">
            <p><a href="#home">Home</a></p>
            <p><a href="#wgpt3">Services</a></p>
            <p><a href="#possibility">Courses</a></p>
            <p><a href="#features">About</a></p>
            <p><a href="#blog">Our Team</a></p>
            <p><a href="#contactform">Contact Us</a></p>
          </div>
          <div className="gpt3__navbar-menu_container-links-sign">
            
          <button type="button" className="signinPage" onClick={() => setMemberLogin(true)}>Sign in</button>
         <div className='LoginPage'>
           {memberLogin && <Member />}
         </div>
          </div>
        </div>
        )}
      </div>
    </div>
  )
}

export default Navbar