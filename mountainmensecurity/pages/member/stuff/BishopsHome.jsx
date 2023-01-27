import React from 'react'
import { urlFor } from '../../../lib/client'
import { RiArrowRightLine, RiCloseLine } from 'react-icons/ri';
import { useState } from 'react';
import {PortableText} from '@portabletext/react';

const BishopsHome = ({Bisho}) => {
  const [dropBox, setDropbox] = useState(false);
  return (
    <div className='layoutS'>
      
  <div className='outputStyle'>
      
      <div className='cardBlog'>
        <p>{Bisho.publishedAtBis}</p>
        <div>
        <img  src={urlFor(Bisho.imageBis)} alt="lavenderefield" className="footer-banner-image"/>
        </div>
        
      
        <h1>{Bisho.titleBis}</h1>
       
        
        </div>
        
    </div>
    <div className='Information'>
          <h2><a className='Information2' tabIndex={1} href="#blogs">
          Read more {dropBox
            ? <RiCloseLine  color="#000000" viewBox='0 -5 24 24' style={{verticalAlign: 'baseline'}} onClick={() => setDropbox(false)} />
            : <RiArrowRightLine  color="#000000" viewBox='0 -5 24 24' value={{ style: { verticalAlign: 'bottom'} }} onClick={() => setDropbox(true)} />}
            {dropBox && (
              <div className='Information1' id='blogs'>
                  <PortableText value={Bisho.bisdetails} components={components} />
                  
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
    code: Bisho => (
      <pre data-language={Bisho.node.language}>
        <code>{Bisho.node.code}</code>
      </pre>
    )
  }
}

export default BishopsHome