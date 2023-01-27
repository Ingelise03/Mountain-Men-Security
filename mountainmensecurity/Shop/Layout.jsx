import React from 'react';
import Head from 'next/head';
import SFooter from './SFooter';
import SNav from './sNav';


const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Head>
        <title>Mountain Men Store</title>
      </Head>
     <header>
     <SNav />
     </header>
        
      
      <main className="main-container">
        {children}
      </main>
      <SFooter/>
    </div>
  )
}

export default Layout