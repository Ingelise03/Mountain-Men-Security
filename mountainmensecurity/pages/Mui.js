import React from 'react'
import {  MuisHome } from './member/stuff';
import { client } from '../lib/client';
import Link from 'next/link';
const MUI = ({  muiss }) => (
    <div className='contentB'>
      <div className='HeaderB'>
      <div className='backLink'>
       <ul>
            <li>
            <Link href={'/'}>Back to main page</Link>
            </li>
          </ul></div>
          <div className='HeadingP'>
  <h1>NEWS IN MUIZENBERG, Mids, Marine estate, and Marina da Gama </h1>
  </div>
      </div>
  
  <div className='blogs'>
  <div  className="marquee">
  <div className="maylike-products-container track" >
  {muiss?.map((muis)=>  (<MuisHome key={muis._id} muis ={muis}  />) )}
  </div>
  </div>
    
 
  </div>
    <div>MUI</div>
    </div>
    
  
);
export const getServerSideProps = async () => {
    
    const queryMuis = '*[_type == "muis"]';
    const muiss = await client.fetch(queryMuis);
    return {
      props: { muiss }
    };
}
export default MUI