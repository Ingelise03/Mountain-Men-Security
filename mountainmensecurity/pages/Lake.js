import React from 'react'
import { LakesideHome } from './member/stuff';
import { client } from '../lib/client';

import Link from 'next/link';
const Lake = ({ Lakes}) => (
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
  <h1>NEWS IN Lakeside</h1>
  </div>
 
       
          </div>
         
<div className='blogs'>
   <div  className="marquee">
    <div className="maylike-products-container track" >
    {Lakes?.map((side)=>  (<LakesideHome key={side._id} side ={side}  />) )}
    </div>
   </div>
    
  </div>
    </div>
    
  
);
export const getServerSideProps = async () => {
    const queryLakes = '*[_type == "lakeside"]';
    const Lakes = await client.fetch(queryLakes);
    return {
      props: { Lakes }
    };
}
export default Lake
