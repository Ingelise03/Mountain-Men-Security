import React from 'react';
import Product from './Containers/Product';
import { client } from '../lib/client';

// import OnlineC from './Containers/onlineC';
import Layout from './Shop/Layout'
import { Toaster } from 'react-hot-toast';
const productStore = ({products}) => (


  <Layout>
    <Toaster/>
    <div className='contentB'>
      <div className='ShopHeader'>
      <h1>Welcome to our Products and Services catalogue</h1>
      </div>
    
    <div className="products-container">

{products?.map((product) => <Product key={product._id} product={product} />)}

</div>
    </div>


  </Layout>

  


)

export const getServerSideProps = async () => {
    const query = '*[_type == "product"]';
    const products = await client.fetch(query);
    
  
  
    return {
      props: { products }
    }
  }
export default productStore