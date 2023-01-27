import React from 'react'
import { urlFor } from '../../lib/client'
import {PortableText} from '@portabletext/react';
import { RiArrowRightLine, RiCloseLine } from 'react-icons/ri';
import { useState } from 'react';
const MuisHome = ({muis}) => {
  const [dropBox, setDropbox] = useState(false);
  return (
    <div className='layoutS'>
      <div className='outputStyle'>
        <div className='cardBlog'>
        <p>{muis.publishedAtMuis}</p>
      <img  src={urlFor(muis.imagem)} alt="lavenderefield" className="footer-banner-image"/>
      <h1>{muis.titleMuis}</h1>
        </div>
      
      </div>
      <div className='Information'>
          <h2><a className='Information2' tabIndex={1} href="#blogs">
          Read more {dropBox
            ? <RiCloseLine  color="#000000" viewBox='0 -5 24 24' style={{verticalAlign: 'baseline'}} onClick={() => setDropbox(false)} />
            : <RiArrowRightLine  color="#000000" viewBox='0 -5 24 24' value={{ style: { verticalAlign: 'bottom'} }} onClick={() => setDropbox(true)} />}
            {dropBox && (
              <div className='Information1' id='blogs'>
                  <PortableText value={muis.muisdetails} components={components} />,
                  
              </div>
            
            )}
          </a>
          </h2>
       
        </div>
     
    </div>
  )
}
const components = {
  types: {
    code: muis => (
      <pre data-language={muis.node.language}>
        <code>{muis.node.code}</code>
      </pre>
    )
  }
}
export default MuisHome