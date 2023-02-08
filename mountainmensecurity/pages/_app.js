import '../styles/global.css'
import { StateContext } from '../context/StateContext'
import { DefaultSeo } from 'next-seo'
import nextSeoConfig from '../next-seo.config'
function MyApp({ Component, pageProps }) {
  return (
    
   <StateContext>
<DefaultSeo  
title='Mountain Men Security, Private Security, Armed Response' 
description='Trusted Armed Response and private Security'
openGraph= {{
 type: 'website',
 locale: 'en_IE',
 url: 'https://mountain-men-security.vercel.app/',
 site_name: 'Mountain Men Security',
}}
twitter ={{
  handle: '@MMSecurity',
  site: '@MMSecurity '
  }
}



     />
   <Component {...pageProps} />
   
       
   </StateContext>
   
    
  )
}

export default MyApp
