import '../styles/global.css'
import { StateContext } from '../context/StateContext'
import { DefaultSeo } from 'next-seo'
import nextSeoConfig from '../next-seo.config'
function MyApp({ Component, pageProps }) {
  return (
    
   <StateContext>
<DefaultSeo{...nextSeoConfig}/>
   <Component {...pageProps} />
   
       
   </StateContext>
   
    
  )
}

export default MyApp
