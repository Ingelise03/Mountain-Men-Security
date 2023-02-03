import React from 'react';
import Image from "next/image";


const footer = () => {
  return (
    <div className='containerss'>
      <Image src='/_CompanyLogo.png'  width={499} height={200}/>
      <div className='info'>
        <p>Contact us to live a better life.</p>
      </div>
      
    </div>
  )
}

export default footer