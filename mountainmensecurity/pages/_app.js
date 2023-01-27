import '../styles/globals.css'
import { StateContext } from './context/StateContext'
import { Toaster } from 'react-hot-toast';
import Layout from './Shop/Layout'
function MyApp({ Component, pageProps }) {
  return (
   <StateContext>

   <Component {...pageProps} />
   
       
   </StateContext>
   
    
  )
}

export default MyApp
