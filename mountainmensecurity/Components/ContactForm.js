import React from 'react'

import Image from "next/image";

const ContactForm = () => {
   
        
    return (
        <div className="mt-5" id='contactform'>

           
<h2 className="mb-3">Contact US</h2>
                  
                    <div className='containers2'>
                    
                        <div className='contact'>
                      
                           <div className='ContactFormInfo'>
                           <h2>Email</h2>
                            <a className='email' href="mailto:info@mountainmen.co.za">info@mountainmen.co.za</a>
                           </div>
                           <div className='ContactFormInfo'>
                           <h2>Whatsap Us</h2>
                            <a aria-label="Chat on WhatsApp" href="https://wa.me/+27711924305">
                            <Image alt="Chat on WhatsApp" src='/WhatsAppButtonWhiteMedium.png'  height={40} width={200}/></a>
                           </div>
                           
                         
                        </div>
                        <div className='fb'>
                                <h2>Social Media</h2>
                                <div className='SocialMedia'>
                                        <a  href="https://www.facebook.com/MountainMenServices/">
                                        <Image src='/facebook.png' alt='facebook'layout="responsive"height={50} width={50} />
                                        </a>
                                        <a href="https://www.instagram.com/mountain_men_security/?hl=en">
                                        <Image src='/instagram.png' alt='insta' layout="responsive"height={50} width={50}/>
                                        </a>
                                        <a  href="https://mobile.twitter.com/mmsecurity">
                                        <Image src='/twitter.png' alt='twit' layout="responsive"height={50} width={50}/>
                                        </a>
                                        <a  href="https://www.tiktok.com/@mountain_men_security">
                                        <Image src='/tiktok.png' alt='tik' layout="responsive"height={50} width={50}/>
                                        </a>
                                </div>
                                       
                            </div>
                                
                    </div>

                </div>





         
    )
}
export default ContactForm