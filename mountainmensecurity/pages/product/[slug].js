import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai';
import Link from 'next/link';
import { client, urlFor } from '../../lib/client';
import  Product  from '../Containers/Product';
import {  StateContext, useStateContext } from '../context/StateContext';
import { Toaster } from 'react-hot-toast';
import Layout from '../Shop/Layout'
const ProductDetails = ({ product, products }) => {
  const { image, name, details, price } = product;
  const [index, setIndex] = useState(0);
  const { decQty, incQty, qty, onAdd, setShowCart } = useStateContext();

  const handleBuyNow = () => {
    onAdd(product, qty);

    setShowCart(true);
  }

  return (
  
    <Layout>
      <Toaster/>
      <div className='contentB'>
      <div className='backLink'>
  <ul>
            <li>
            <Link href={'/productStore'}>Back to products</Link>
            </li>
          </ul>
          
  </div>
      <div className="product-detail-container">
        <div>
          <div className="image-container">
            <img src={urlFor(image && image[index])} className="product-detail-image" />
          </div>
          
        </div>

        <div className="product-detail-desc">
          <h1>{name}</h1>
       
          <h4>Details: </h4>
          <p>{details}</p>
          <p className="price">R{price}</p>
         
        </div>
       
      </div>
      <div className='product-detail-contact'>
            <a href='#shopus'><h2>
            To know more or order installation and inspection please click here
            </h2></a>
           
          </div>
      <div className="maylike-products-wrapper">
          <h2>You may also like</h2>
          <div className="marquee">
            <div className="maylike-products-container track">
              {products.map((item) => (
                <Product key={item._id} product={item} />
              ))}
            </div>
          </div>
      </div>
    </div>
    </Layout>

   
  )
}

export const getStaticPaths = async () => {
  const query = `*[_type == "product"] {
    slug {
      current
    }
  }
  `;

  const products = await client.fetch(query);

  const paths = products.map((product) => ({
    params: { 
      slug: product.slug.current
    }
  }));

  return {
    paths,
    fallback: 'blocking'
  }
}

export const getStaticProps = async ({ params: { slug }}) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const productsQuery = '*[_type == "product"]'
  
  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);

  console.log(product);

  return {
    props: { products, product }
  }
}

export default ProductDetails