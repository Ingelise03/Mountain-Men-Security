import React from 'react'
import { NapierHome } from '../member/stuff';
import { client } from '../lib/client';

import Link from 'next/link';
const Nap = ({ Napi}) => (
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
  <h1>NEWS IN NAPIER</h1>
  </div>
 
       
          </div>
         
<div className='blogs'>
   <div  className="marquee">
    <div className="maylike-products-container track" >
    {Napi?.map((napier)=>  (<NapierHome key={napier._id} napier ={napier}  />) )}
    </div>
   </div>
    
  </div>
    </div>
    
  
);
export const getServerSideProps = async () => {
    const queryNapi = '*[_type == "napier"]';
    const Napi = await client.fetch(queryNapi);
    return {
      props: { Napi }
    };
}
export default Nap
