
import Head from 'next/head';
import { React } from 'react';

import { Footer, Blog, Services, Features, Shop, Header } from '../Containers';
import { ContactForm, Navbar } from '../Components';
import { NextSeo } from 'next-seo';


const Home = () => {
  return (
  <div className='App'>
  <div className='gradient__bg'>
    <Head>
      <title>Mountain Men Security</title>
      <meta property="og:title" content="Mountain Men Security Website" />
  <meta property="og:description" content="Mountain Men Security, private security" />
  <meta property="og:url" content="https://mountain-men-security.vercel.app/" />
  <meta property="og:type" content="website" />
  <meta name='description' content='private security, armed response, mountain men security' />
  <meta name="robots" content="index, follow"/>
  <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"/>
    </Head>
    <NextSeo
    title='Welcome to Mountain Men Security'
    description='Private security company in Muizenberg'
    openGraph={{
      url: 'https://mountain-men-security.vercel.app/',
     tags: ['Armed Response', 'Private security', 'Alarms']

      
    }}
    twitter={{
      handle: '@MountainMen',
      site: '@MountainMen',
      cardType: 'summary_large_image',
    }}
    />
    <Navbar />
    <Header />
  </div>
  <Services />
  <Features />
  <Shop />
  <Blog />
  <ContactForm />
  <Footer />
</div>

)
 
  }

export default Home