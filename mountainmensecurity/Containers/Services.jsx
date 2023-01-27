import React from 'react';
import Feature from '../Components/Features';


import Image from "next/image";

const Services = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
      <div className='styling'>
      <div className="gpt3__whatgpt3-feature">
      <Feature title="Services" text="We offer state of the art solutions for security. Designed to ptomote a clear concious." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">Have a security problem? We have the solution!!</h1>
      
    </div>
    <div className="container1">
    <h1>Explore our services</h1>
    <div className='owner'>
   
      <div className='gpt3__whatgpt3-container'>
     
    <div className='container'>
      <div className='CCTV'>
        <Image className='image' src='/wallCamera.png' height={25}  width={25} alt='cam'/>
        <p><a href="#camera">CCTV</a></p>
      </div>
      <div className='CCTV'>
      <Image className='image' src='/siren.png' height={25}  width={25}alt='siren'/>
        <p>Armed Response</p>
      </div>
      <div className='CCTV'>
      <Image className='image' src='/detective.png' height={25}  width={25} alt='detective'/>
        <p>Criminal Investigations</p>
      </div>
      <div className='CCTV'>
      <Image className='image' src='/protect.png' height={25}  width={25} alt='protect'/>
        <p><a href="#alarm">Alarm Instalations</a></p>
      </div>
      <div className='CCTV'>
      <Image className='image' src='/farm.png' height={25}  width={25} alt='farm' />
        <p>AGRI Security</p>
      </div>
      </div>
      <div className='container'>
      <div className='CCTV'>
      <Image className='image' src='/grad.png' height={25}  width={25} alt='grad' />
        <p><a href="#courses">Online Courses</a></p>
      </div>
      
      <div className='CCTV'>
      <Image className='image' src='/mount.png' height={25}  width={25} alt='mount'/>
        <p>Mountain Observation</p>
      </div>
      <div className='CCTV'>
      <Image className='image' src='/monitoring.png' height={25}  width={25} alt='mont'/>
        <p>ALarm Monitoring</p>
        </div>
        <div className='CCTV'>
        <Image className='image' src='/alert.png' height={25}  width={25} alt='alert'/>
        <p>Patrol Services</p>
        </div>
        <div className='CCTV'>
        <Image className='image' src='/track.png' height={25}  width={25} alt='track'/>
        <p>Man Tracking</p>
        </div>
      </div>
      
    </div>
    
    </div>
    
      
       
    </div>
    
      </div>
   
    
        
  </div>
  )
}

export default Services