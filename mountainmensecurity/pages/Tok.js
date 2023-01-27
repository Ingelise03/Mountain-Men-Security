import React from 'react'
import { TokaiHome } from '../member/stuff';
import { client } from '../lib/client';

import Link from 'next/link';
const Tok = ({ Toki}) => (
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
  <h1>NEWS IN TOKAI, CONSTANTIA, WESTLAKE AND FERNWOOD</h1>
  </div>
 
       
          </div>
         
<div className='blogs'>
   <div  className="marquee">
    <div className="maylike-products-container track" >
    {Toki?.map((Toka)=>  (<TokaiHome key={Toka._id} Toka ={Toka}  />) )}
    </div>
   </div>
    
  </div>
    </div>
    
  
);
export const getServerSideProps = async () => {
    const queryToki = '*[_type == "tokai"]';
    const Toki = await client.fetch(queryToki);
    return {
      props: { Toki }
    };
}
export default Tok
