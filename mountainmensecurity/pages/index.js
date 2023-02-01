

import { React } from 'react';

import { Footer, Blog, Services, Features, Shop, Header } from '../Containers';
import { ContactForm, Navbar } from '../Components';
import { NextSeo } from 'next-seo';

const Home = () => {
  return (
  <div className='App'>
  <div className='gradient__bg'>
    <NextSeo
    title='Welcome to Mountain Men Security'
    openGraph={{
      url: 'https://mountain-men-security.vercel.app/'
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