import React from 'react'
import { KirstenHofHome } from '../member/stuff';
import { client } from '../lib/client';

import Link from 'next/link';
const Kirsten = ({ Kirsts}) => (
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
  <h1>NEWS IN Kirstenhof</h1>
  </div>
 
       
          </div>
         
<div className='blogs'>
   <div  className="marquee">
    <div className="maylike-products-container track" >
    {Kirsts?.map((kirst)=>  (<KirstenHofHome key={kirst._id} kirst ={kirst}  />) )}
    </div>
   </div>
    
  </div>
    </div>
    
  
);
export const getServerSideProps = async () => {
    const queryKirsts = '*[_type == "kirstenhof"]';
    const Kirsts = await client.fetch(queryKirsts);
    return {
      props: { Kirsts }
    };
}
export default Kirsten
