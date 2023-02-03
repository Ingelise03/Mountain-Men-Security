import React from 'react';

import Image from 'next/future/image';



const header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
         <div className="gpt3__header-content">
    
       <Image className='Mountains' src='/mountainwaves.gif' width={2000} height={1000} objectFit="cover"/>
      
    </div>

    
    </div>
  )
}

export default header