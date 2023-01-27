import React from 'react';


import Link from 'next/link';
const Shop = () => {

  return (
    <div className='coursecontainer' id='possibility'>
      <div className='shop'>
        <div className='heading'>
          <h1>Shop our Services</h1>
        </div>
        <div className='Containers1'>
          <div className='shopers'>
            <p>View our productss and services, click on the link below to see our catalogue</p>
          </div>
        <div className='option' id='alarm'>
        <ul>
            <li>
            <Link href={'/productStore'}>Visit our online catalogue </Link>
            </li>
          </ul>
       
        </div>
   
     
        
        </div>
      
        
      </div>
      
    </div>
  )
}

export default Shop
