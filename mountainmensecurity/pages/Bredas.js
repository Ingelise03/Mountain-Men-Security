import React from 'react'
import { BredasdorpHome } from './member/stuff';
import { client } from '../lib/client';
import Link from 'next/link';
const Bredas = ({  Bred }) => (
    <div className='contentB'>
      <div className='HeaderB'>
      <div className='backLink'>
       <ul>
            <li>
            <Link href={'/'}>Back to main page</Link>
            </li>
          </ul></div>
          <div className='HeadingP'>
  <h1>NEWS IN BREDASDORP</h1>
  </div>
      </div>
  
  <div className='blogs'>
  <div  className="marquee">
  <div className="maylike-products-container track" >
  {Bred?.map((Breda)=>  (<BredasdorpHome key={Breda._id} Breda ={Breda}  />) )}
  </div>
  </div>
    
 
  </div>
    
    </div>
    
  
);
export const getServerSideProps = async () => {
    
    const queryBred = '*[_type == "bredasdorp"]';
    const Bred = await client.fetch(queryBred);
    return {
      props: { Bred }
    };
}
export default Bredas