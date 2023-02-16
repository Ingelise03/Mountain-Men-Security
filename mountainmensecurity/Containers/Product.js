import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

import { urlFor } from '../lib/client';

const Product = ({ product: { image, name, slug, price } }) => {
  return (
    <div className='contentB' id='alarms'>
      <Head>
      <title>Mountain Men Security</title>
  <meta property="og:title" content=" Mountain Men Security products" />
  <meta property="og:description" content="Mountain Men Security is a professional private security company situated in Muizenberg, South Africa. The company was established by a team of dedicated ex-military and police officers who pride themselves on their expertise." />

 
  <meta property="og:url" content="https://mountain-men-security.vercel.app/product/" />
  <meta property="og:type" content="website" />
  <meta name="robots" content="index, follow"/>
  <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"/>
  <meta name="google-site-verification" content="Q9XMfuMHo6G38b2nco588oEV5kgPKZVhnbDEHUmlPbI" />
  <meta property= "og:site_name" content='Mountain Men Security products'/>
  <link rel="canonical" href="https://mountain-men-security.vercel.app/product/" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Link href={`/product/${slug.current}`}>
      <div className="product-card">
          <img 
            src={urlFor(image && image[0])}
            width={250}
            height={250}
            className="product-image"
          />
          <div className='productNamefit'>
          <p className="product-name">{name}</p>
          </div>
         
          <p className="product-price">R{price}</p>
        </div>
      </Link>
        
      
    </div>
  )
}

export default Product