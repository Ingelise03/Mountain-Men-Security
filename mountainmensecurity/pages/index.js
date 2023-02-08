
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
      <meta property="og:title" content="Mountain Men Security" />
  <meta property="og:description" content="Mountain Men Security is a professional private security company situated in Muizenberg, South Africa. The company was established by a team of dedicated ex-military and police officers who pride themselves on their expertise." />
  <meta property= "og:description" content='Mountain Men Security is a professional private security provider, specialising in both personal and commercial protection services across the Western Cape. We provide a wide range of security services and a 24/7 rapid response armed response'/>
 
  <meta property="og:url" content="https://mountain-men-security.vercel.app/" />
  <meta property="og:type" content="website" />
  <meta name="robots" content="index, follow"/>
  <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"/>
  <meta name="google-site-verification" content="Q9XMfuMHo6G38b2nco588oEV5kgPKZVhnbDEHUmlPbI" />
  <meta property= "og:site_name" content='Mountain Men Security'/>
  <link rel="canonical" href="https://mountain-men-security.vercel.app/" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <NextSeo
    title='Mountain Men Security'
    description='Mountain Men Security is a private security and armed response company located in Muizenberg, South Africa. Our uniformed security teams can be seen patrolling the streets of Cape Town and surrounding areas to protect you and your family.'
    openGraph={{
      url: 'https://mountain-men-security.vercel.app/',
     tags: ['Armed Response', 'Private security', 'Alarms', 'Security Company near me', 'Private Security in Muizenberg', 'Mountain men', 'Mountain Men Security']

      
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