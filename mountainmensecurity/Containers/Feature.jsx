import React from 'react';
import { useState } from 'react';
import { RiArrowRightLine, RiCloseLine } from 'react-icons/ri';

import Head from 'next/head';



const Features = () => {
  const [dropBox, setDropbox] = useState(false);
  const [dropBox1, setDropbox1] = useState(false);
  const [dropBox2, setDropbox2] = useState(false);
  
  return(
  <div className="gpt3__features section__padding" id="about">
    <Head>
    <title>Mountain Men Security</title>
  <meta property="og:title" content=" About Mountain Men Security" />
  <meta property="og:description" content="Mountain Men Security is a professional private security company situated in Muizenberg, South Africa. The company was established by a team of dedicated ex-military and police officers who pride themselves on their expertise." />

 
  <meta property="og:url" content="https://mountain-men-security.vercel.app/#about" />
  <meta property="og:type" content="website" />
  <meta name="robots" content="index, follow"/>
  <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"/>
  <meta name="google-site-verification" content="Q9XMfuMHo6G38b2nco588oEV5kgPKZVhnbDEHUmlPbI" />
  <meta property= "og:site_name" content='Mountain Men Security'/>
  <link rel="canonical" href="https://mountain-men-security.vercel.app/#about" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <div className='containsAll'>
    <div className='heading2'>
    <div className='heading1'>
      <h1 className="gradient__text">PROTECTING LIVES EVERY DAY</h1>
      <h1 className="gradient__text">MAKING LIFE BETTER</h1>
      </div>
    </div>
     
    <div className="gpt3__features-heading">
     
    <div className='ourFeatures'><a className='size' tabIndex={1} href="#drop1"><h1 className="gradient__text">ABOUT MOUNTAINMEN SECURITY  {dropBox
          ? <RiCloseLine viewBox='0 -5 24 24' color="#fff"  onClick={() => setDropbox(false)} />
          : <RiArrowRightLine viewBox='0 -5 24 24'  color="#fff"  onClick={() => setDropbox(true)} />}
        {dropBox && (
          <div className='drop' id='drop1'>
          <p>Mountain Men was founded on the idea of combating crime in an unorthodox way. This has resulted in an unusually high arrest rate, which caused criminal activity to drop in our areas of operation.
          Our method of operation has highlighted the ineffectiveness of traditional security concepts. As we continue to grow our company and people,
          we are positioning ourselves to effectively combat the ever-changing crime trends that we currently experience and will continue to experience 
          in the future.</p>
          </div>
        )}
    </h1></a></div>
    </div>
      <div className="gpt3__features-heading">
      <div className='ourFeatures'><a className='size' tabIndex={1} href="#drop2"><h1 className="gradient__text"> OUR NATURE {dropBox1
          ? <RiCloseLine viewBox='0 -5 24 24'  color="#fff"  onClick={() => setDropbox1(false)} />
          : <RiArrowRightLine viewBox='0 -5 24 24'  color="#fff" onClick={() => setDropbox1(true)} />}
        {dropBox1 && (
          <div className='drop' id='drop2'>
          <p>ARMED RESPONSE, BY NATURE, IS A REACTIVE SERVICE. </p>
          <p>WHAT WE OFFER IS TO REDUCE CRIME IN YOUR COMMUNITY.</p>
          <p>SO THAT ARMED RESPONSE IS THE LAST LINE OF DEFENCE.</p>
         <p>We are a South African security company based in your area. We are owner operated with hands on experience in all areas of security. We are the only security company that engages, follows up and arrests criminals. We integrate technology and proven crime fighting techniques to ensure realistic results.</p>
         </div>
        )}
      </h1> </a></div>
      
      </div>
      <div className="gpt3__features-heading">
      <div className='ourFeatures'><a className='size' tabIndex={1} href="#drop3"><h1 className="gradient__text">MOUNTAIN MEN’S HISTORY {dropBox2
          ? <RiCloseLine viewBox='0 -5 24 24'  color="#fff"  onClick={() => setDropbox2(false)} />
          : <RiArrowRightLine viewBox='0 -5 24 24' color="#fff" onClick={() => setDropbox2(true)} />}
        {dropBox2 && (
          <div className='drop' id='drop3'>
         <p>In 1998 former South African Police Force Murder and Robbery detective, Allan Dillon, retired police officer, Patrick Freeman, and friend, Billy Bownes, began conducting neighbourhood crime prevention duties in the Lakeside area in their spare time as a result of an increase in criminal activities in the Lakeside area. With their combined police experience and good knowledge of the area, criminals were being apprehended whilst breaking into houses and motor vehicles and soon the community were calling the three crime fighters “The Mountain Men”.This subsequently led to the formation of a security company which has grown from three persons patrolling Lakeside on bicycles and conducting observation duties from the mountain above Lakeside to a structured security company with 70 plus employees, a 24 hour control room which monitors alarm systems, dispatches our own armed response vehicles, monitors CCTV live and on event activations, as well as interfaces between SAPS, Metro Police, National Parks Board, Neighbourhood watches and members of the public..</p>
         </div>
        )}
    
      </h1></a></div>
      </div>
  </div>
    </div>
   
  )
}

export default Features