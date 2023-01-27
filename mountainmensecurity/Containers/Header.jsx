import React from 'react';

import Image from 'next/future/image';



const header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
         <div className="gpt3__header-content" style={{ position: 'relative', overflow: 'hidden', height: '100%' }}>
    
       <Image className='Mountains' src='/mountainwaves.gif' fill alt='mountains' priority/>
      
    </div>

    
    </div>
  )
}

export default header
//width={2000} height={1000}