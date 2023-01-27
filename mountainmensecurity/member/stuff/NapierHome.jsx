import React from 'react'
import { urlFor } from '../../../lib/client'
import { RiArrowRightLine, RiCloseLine } from 'react-icons/ri';
import { useState } from 'react';
import {PortableText} from '@portabletext/react';

const NapierHome = ({napier}) => {
  const [dropBox, setDropbox] = useState(false);
  return (
    <div className='layoutS'>
      
  <div className='outputStyle'>
      
      <div className='cardBlog'>
        <p>{napier.publishedAtNap}</p>
        <div>
        <img  src={urlFor(napier.imageNap)} alt="lavenderefield" className="footer-banner-image"/>
        </div>
        
      
        <h1>{napier.titleNap}</h1>
       
        
        </div>
        
    </div>
    <div className='Information'>
          <h2><a className='Information2' tabIndex={1} href="#blogs">
          Read more {dropBox
            ? <RiCloseLine  color="#000000" viewBox='0 -5 24 24' style={{verticalAlign: 'baseline'}} onClick={() => setDropbox(false)} />
            : <RiArrowRightLine  color="#000000" viewBox='0 -5 24 24' value={{ style: { verticalAlign: 'bottom'} }} onClick={() => setDropbox(true)} />}
            {dropBox && (
              <div className='Information1' id='blogs'>
                  <PortableText value={napier.napdetails} components={components} />
                  
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
    code: napier => (
      <pre data-language={napier.node.language}>
        <code>{napier.node.code}</code>
      </pre>
    )
  }
}

export default NapierHome