import Head from 'next/head'
import Image from 'next/image'


import { Footer, Blog, Services, Features, Shop, Header } from './Containers';
import { ContactForm, Navbar } from './Components';

export default function Home() {
  return (
    <div className='App'>
    <div className='gradient__bg'>
      <Navbar/>
      <Header/>
    </div>
    <Services/>
    <Features/>
    <Shop/>
    <Blog/>
    <ContactForm/>
    <Footer/>
</div>
  )
}
