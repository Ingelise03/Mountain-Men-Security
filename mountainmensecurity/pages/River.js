import React from 'react'
import { RiviersonderendHome } from './member/stuff';
import { client } from '../lib/client';

import Link from 'next/link';
const River = ({ Riv}) => (
    <div className='contentB'>
 <div className='HeaderB'>
  <div className='backLink'>
  <ul>
            <li>
            <Link href={'/'}>Back to main page</Link>
            </li>
          </ul>
          
  </div>
  <div className='HeadingP'>
  <h1>NEWS IN Riviersonderend</h1>
  </div>
 
       
          </div>
         
<div className='blogs'>
   <div  className="marquee">
    <div className="maylike-products-container track" >
    {Riv?.map((RSE)=>  (<RiviersonderendHome key={RSE._id} RSE ={RSE}  />) )}
    </div>
   </div>
    
  </div>
    </div>
    
  
);
export const getServerSideProps = async () => {
    const queryRiv = '*[_type == "riviersonderend"]';
    const Riv = await client.fetch(queryRiv);
    return {
      props: { Riv }
    };
}
export default River
