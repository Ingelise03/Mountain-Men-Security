import React from 'react';
import Product from '../Containers/Product';
import { client } from '../lib/client';
import Head from 'next/head';
// import OnlineC from './Containers/onlineC';
import Layout from '../Shop/Layout'
import { Toaster } from 'react-hot-toast';
const productStore = ({products}) => (


  <Layout>
    <Toaster/>
    <Head>
    <title>Mountain Men Security online store</title>
    <meta property="og:url" content="https://mountain-men-security.vercel.app/productStore" />
    <meta property= "og:description" content='Mountain Men Security is a professional private security provider, specialising in both personal and commercial protection services across the Western Cape. We provide a wide range of security services and a 24/7 rapid response armed response, we also offer a rangee of products to secure your home'/>
    </Head>
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