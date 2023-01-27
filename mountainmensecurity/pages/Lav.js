import React from 'react'
import { LavenderHome } from '../member/stuff';
import { client } from '../lib/client';

import Link from 'next/link';
const Lav = ({ lavenders}) => (
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
  <h1>NEWS IN LAVENDER</h1>
  </div>
 
       
          </div>
         
<div className='blogs'>
   <div  className="marquee">
    <div className="maylike-products-container track" >
    {lavenders?.map((lavender)=>  (<LavenderHome key={lavender._id} lavender ={lavender}  />) )}
    </div>
   </div>
    
  </div>
    </div>
    
  
);
export const getServerSideProps = async () => {
    const query = '*[_type == "lavender"]';
    const lavenders = await client.fetch(query);
    return {
      props: { lavenders }
    };
}
export default Lav
//lavender={lavenders.length > 0 && lavenders[0]}