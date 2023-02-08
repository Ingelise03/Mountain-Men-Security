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
            <button className="ideaButton" onClick={() => setDropbox(true)}>
              <h3>To view News in your neighbourhood enter the key provided to you by Mountain Men Security</h3>
           {dropBox &&  <div  id='moreinfo'>
                  
                  {show1 && (
                    <div className="profileLogin">
                      <div>
                      <input
                    type="text"
                    className="passwordText"
                    value={newpassword}
                    onChange={(e) => newsetPassword(e.target.value)}
                    placeholder="Token"
                  />
                      </div>
                      <div className="ideaBut">
                      <button onClick={handleClick}>Submit</button>
                      </div>
                   
                     
                    </div>
                   
                  )}
             
               
                </div>} 
               

              </button>
          </div>
        </div>
        {showLav && (
          <div className="option">
          <ul>
            <li>
            <Link href={'/Lav'}>View here</Link>
            </li>
          </ul>
          </div>
         
        )}
        {showMuis && (
          <div className="option">
          <ul>
            <li>
            <Link href={'/Mui'}>View here</Link>
            </li>
          </ul>
          </div>
          
        )}
        {showBishops && (
          <div className="option">
          <ul>
            <li>
            <Link href={'/Bishop'}>View here</Link>
            </li>
          </ul>
          </div>
         
        )}
         {showBreda && (
          <div className="option">
          <ul>
            <li>
            <Link href={'/Bredas'}>View here</Link>
            </li>
          </ul>
          </div>
         
        )}
         {showKalkJ && (
          <div className="option">
          <ul>
            <li>
            <Link href={'/KalkJames'}>View here</Link>
            </li>
          </ul>
          </div>
         
        )}
        {showKirst && (
          <div className="option">
          <ul>
            <li>
            <Link href={'/Kirsten'}>View here</Link>
            </li>
          </ul>
          </div>
         
        )}
        {showLakes && (
          <div className="option">
          <ul>
            <li>
            <Link href={'/Lake'}>View here</Link>
            </li>
          </ul>
          </div>
         
        )}
        {showNap && (
          <div className="option">
          <ul>
            <li>
            <Link href={'/Nap'}>View here</Link>
            </li>
          </ul>
          </div>
         
        )}
        {showRiv && (
          <div className="option">
          <ul>
            <li>
            <Link href={'/River'}>View here</Link>
            </li>
          </ul>
          </div>
         
        )}
        {showTokai && (
          <div className="option">
          <ul>
            <li>
            <Link href={'/Tok'}>View here</Link>
            </li>
          </ul>
          </div>
         
        )}
      </div>
    </div>
  );
}

export default Dashboard;