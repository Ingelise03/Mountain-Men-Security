import React from 'react'
import { urlFor } from '../../lib/client'
import { RiArrowRightLine, RiCloseLine } from 'react-icons/ri';
import { useState } from 'react';
import {PortableText} from '@portabletext/react';

const KirstenHofHome = ({kirst}) => {
  const [dropBox, setDropbox] = useState(false);
  return (
    <div className='layoutS'>
      
  <div className='outputStyle'>
      
      <div className='cardBlog'>
        <p>{kirst.publishedAtKirts}</p>
        <div>
        <img  src={urlFor(kirst.imageKirst)} alt="lavenderefield" className="footer-banner-image"/>
        </div>
        
      
        <h1>{kirst.titleKirst}</h1>
       
        
        </div>
        
    </div>
    <div className='Information'>
          <h2><a className='Information2' tabIndex={1} href="#blogs">
          Read more {dropBox
            ? <RiCloseLine  color="#000000" viewBox='0 -5 24 24' style={{verticalAlign: 'baseline'}} onClick={() => setDropbox(false)} />
            : <RiArrowRightLine  color="#000000" viewBox='0 -5 24 24' value={{ style: { verticalAlign: 'bottom'} }} onClick={() => setDropbox(true)} />}
            {dropBox && (
              <div className='Information1' id='blogs'>
                  <PortableText value={kirst.kirstdetails} components={components} />
                  
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
    code: kirst => (
      <pre data-language={kirst.node.language}>
        <code>{kirst.node.code}</code>
      </pre>
    )
  }
}

export default KirstenHofHome