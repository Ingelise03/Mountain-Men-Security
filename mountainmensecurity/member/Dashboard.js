import React, { useEffect, useState } from "react";



import Link from 'next/link';
function Dashboard() {
  const [dropBox, setDropbox] = useState(false);
  const accessTokenL = 'Lav';
  const accessTokenM = 'Muis';
  const accessTokenBish = 'Bishops';
  const accessTokenBreda = 'Breda';
  const accessTokenKalkJ = 'KalkJames';
  const accessTokenKalkirst = 'Kirst';
  const accessTokenLake = 'Lakes';
  const accessTokenNap = 'Nap';
  const accessTokenRiver = 'River';
  const accessTokenTok = 'Tokai';

  const [newpassword, newsetPassword] = useState("");
  const [show, setShow] = useState(false);
  const [showLav, setShowLav] = useState(false);
  const [showMuis, setShowMuis] = useState(false);
  const [showBishops, setShowBishops] = useState(false);
  const [showBreda, setShowBreda] = useState(false);
  const [showKalkJ, setShowKalkJ] = useState(false);
  const [showKirst, setShowKirst] = useState(false);
  const [showLakes, setShowLakes] = useState(false);
  const [showNap, setShowNap] = useState(false);
  const [showRiv, setShowRiv] = useState(false);
  const [showTokai, setShowTokai] = useState(false);
  const [show1, setShow1] = useState(true);
  function handleClick (){
   
    if (newpassword == accessTokenL) {
       setShow(true);
       setShow1(false);
       setShowLav(true);
     
    }
    if (newpassword == accessTokenM) {
      setShow(true);
      setShow1(false);
      setShowMuis(true);
     
   }
   if (newpassword == accessTokenBish) {
    setShow(true);
    setShow1(false);
    setShowBishops(true);
   
 }
 if (newpassword == accessTokenBreda) {
  setShow(true);
  setShow1(false);
  setShowBreda(true);
 
}
if (newpassword == accessTokenKalkJ) {
  setShow(true);
  setShow1(false);
  setShowKalkJ(true);
 
}
if (newpassword == accessTokenKalkirst) {
  setShow(true);
  setShow1(false);
  setShowKirst(true);
 
}
if (newpassword == accessTokenLake) {
  setShow(true);
  setShow1(false);
  setShowLakes(true);
 
}
if (newpassword == accessTokenNap) {
  setShow(true);
  setShow1(false);
  setShowNap(true);
 
}
if (newpassword == accessTokenRiver) {
  setShow(true);
  setShow1(false);
  setShowRiv(true);
 
}
if (newpassword == accessTokenTok) {
  setShow(true);
  setShow1(false);
  setShowTokai(true);
 
}
else if (newpassword!=accessTokenTok
   && newpassword!=accessTokenRiver
   && newpassword!=accessTokenNap 
   && newpassword!=accessTokenLake
   && newpassword!=accessTokenKalkirst
   && newpassword!=accessTokenKalkJ
   && newpassword!=accessTokenBreda
   && newpassword!=accessTokenBish
   && newpassword!=accessTokenM
   && newpassword!=accessTokenL){
  alert("Be sure you entered the password correctly, be midful of Capital and lowercase letters.");
}

  };



  return (
    <div className="dashboard">
      <div className="dashboard__container">
      
        <div className="profile">
          <div className='idea' >
            
   
 
          </div>
        </div>
       
         
         
        
      </div>
    </div>
  );
}

export default Dashboard;