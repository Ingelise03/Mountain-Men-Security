import React from 'react';
import Image from "next/image";
import { useState } from 'react';
import { RiArrowRightLine, RiCloseLine } from 'react-icons/ri';

const Shop = () => {
  const [dropBox, setDropbox] = useState(false);
  const [dropBox1, setDropbox1] = useState(false);
  const [dropBox2, setDropbox2] = useState(false);
  return (
    <div className='coursecontainer' id='possibility'>
      <div className='shop'>
        <div className='heading'>
          <h1>Shop our Services</h1>
        </div>
        <div className='Containers1'>
        <div className='option' id='alarm'>
        <p><a className='size' tabIndex={1} href="#alarm1">Learn more about our Alarm instalation packages {dropBox
                            ? <RiCloseLine  color="#000000" viewBox='0 -5 24 24' style={{verticalAlign: 'baseline'}} onClick={() => setDropbox(false)} />
                            : <RiArrowRightLine  color="#000000" viewBox='0 -5 24 24' value={{ style: { verticalAlign: 'bottom'} }} onClick={() => setDropbox(true)} />}
                            {dropBox && (
                              <div className='Scontainer' id='alarm1'>
                                <h2>We offer Alarm monitoring and instalations to improve your safety</h2>
                                <div>
                                <div className='course1'>
                                <Image className='image' src='/protect.png' height={25}  width={25} alt='protect' />
                                  <p>place holder</p>
                                </div>
                                <div className='course1'>
                                <Image className='image' src='/protect.png' height={25}  width={25} alt='protect'/>
                                  <p>place holder</p>
                                </div>
                                <div className='course1'>
                                <Image className='image' src='/protect.png' height={25}  width={25} alt='protect' />
                                  <p>place holder</p>
                                </div>
                              </div>
                              </div>
                                
                            )}</a></p>
        </div>
        <div className='option' id='camera' >
        <p><a className='size' tabIndex={1} href="#camera1">Learn more about our CCTV packages {dropBox1
                            ? <RiCloseLine  color="#000000" viewBox='0 -5 24 24' onClick={() => setDropbox1(false)} />
                            : <RiArrowRightLine  color="#000000" viewBox='0 -5 24 24' onClick={() => setDropbox1(true)} />}
                            {dropBox1 && (
                              <div className='Scontainer' id='camera1'>
                                <h2>We offer CCTV monitoring and instalations to improve your safety</h2>
                                <div>
                                <div className='course1'>
                                <Image className='image' src='/wallCamera.png' height={25}  width={25} alt='cam' />
                                  <p>place holder</p>
                                </div>
                                <div className='course1'>
                                <Image className='image' src='/wallCamera.png' height={25}  width={25} alt='cam' />
                                  <p>place holder</p>
                                </div>
                                <div className='course1'>
                                <Image className='image' src='/wallCamera.png' height={25}  width={25} alt='cam' />
                                  <p>place holder</p>
                                </div>
                              </div>
                              </div>
                                
                            )}</a></p>
        </div>
        <div className='option' id='courses'>
        <p><a className='size' tabIndex={1} href="#courseL">Learn more about our courses {dropBox2
                            ? <RiCloseLine  color="#000000" viewBox='0 -5 24 24' onClick={() => setDropbox2(false)} />
                            : <RiArrowRightLine  color="#000000" viewBox='0 -5 24 24' onClick={() => setDropbox2(true)} />}
                            {dropBox2 && (
                              <div className='Scontainer' id='courseL'>
                                <h2>We offer Courses to improve you sense of safety</h2>
                                <div>
                                <div className='course1'>
                                <Image className='image' src='/grad.png' height={25}  width={25} alt='grad' />
                                  <p>place holder</p>
                                </div>
                                <div className='course1'>
                                <Image className='image' src='/grad.png' height={25}  width={25} alt='grad'  />
                                  <p>place holder</p>
                                </div>
                                <div className='course1'>
                                <Image className='image' src='/grad.png' height={25}  width={25} alt='grad' />
                                  <p>place holder</p>
                                </div>
                              </div>
                              </div>
                                
                            )}</a></p>
        </div>
        
        </div>
      
        
      </div>
      
    </div>
  )
}

export default Shop