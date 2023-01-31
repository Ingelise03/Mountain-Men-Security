import React from 'react'
import { BishopsHome } from '../member/stuff';
import { client } from '../lib/client';
import Link from 'next/link';
const Bishop = ({  Bish }) => (
    <div className='contentB'>
      <div className='HeaderB'>
      <div className='backLink'>
       <ul>
            <li>
            <Link href={'/'}>Back to main page</Link>
            </li>
          </ul></div>
          <div className='HeadingP'>
  <h1>NEWS IN Bishopscourt</h1>
  </div>
      </div>
  
  <div className='blogs'>
  <div  className="marquee">
  <div className="maylike-products-container track" >
  {Bish?.map((Bisho)=>  (<BishopsHome key={Bisho._id} Bisho ={Bisho}  />) )}
  </div>
  </div>
    
 
  </div>
    
    </div>
    
  
);
export const getServerSideProps = async () => {
    
    const queryBish = '*[_type == "bishopscourt"]';
    const Bish = await client.fetch(queryBish);
    return {
      props: { Bish }
    };
}
export default Bishop