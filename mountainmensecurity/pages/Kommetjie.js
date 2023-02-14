import React from 'react'
import { KomHome } from '../member/stuff';
import { client } from '../lib/client';
import Link from 'next/link';
const Kommetjie = ({  Komm }) => (
    <div className='contentB'>
      <div className='HeaderB'>
      <div className='backLink'>
       <ul>
            <li>
            <Link href={'/'}>Back to main page</Link>
            </li>
          </ul></div>
          <div className='HeadingP'>
  <h1>NEWS IN Kommetjie</h1>
  </div>
      </div>
  
  <div className='blogs'>
  <div  className="marquee">
  <div className="maylike-products-container track" >
  {Komm?.map((Kom)=>  (<KomHome key={Kom._id} Breda ={Kom}  />) )}
  </div>
  </div>
    
 
  </div>
    
    </div>
    
  
);
export const getServerSideProps = async () => {
    
    const queryKomm= '*[_type == "kommetjie"]';
    const Komm = await client.fetch(queryKomm);
    return {
      props: { Komm }
    };
}
export default Kommetjie