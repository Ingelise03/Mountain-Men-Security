import React from 'react'
import { KalkBayStJamesHome } from '../member/stuff';
import { client } from '../lib/client';
import Link from 'next/link';
const KalkJames = ({  Kalks }) => (
    <div className='contentB'>
      <div className='HeaderB'>
      <div className='backLink'>
       <ul>
            <li>
            <Link href={'/'}>Back to main page</Link>
            </li>
          </ul></div>
          <div className='HeadingP'>
  <h1>NEWS IN Kalk Bay and St. James</h1>
  </div>
      </div>
  
  <div className='blogs'>
  <div  className="marquee">
  <div className="maylike-products-container track" >
  {Kalks?.map((kalk)=>  (<KalkBayStJamesHome key={kalk._id} kalk ={kalk}  />) )}
  </div>
  </div>
    
 
  </div>
    
    </div>
    
  
);
export const getServerSideProps = async () => {
    
    const queryKalk = '*[_type == "kalkBaystjames"]';
    const Kalks = await client.fetch(queryKalk);
    return {
      props: { Kalks }
    };
}
export default KalkJames