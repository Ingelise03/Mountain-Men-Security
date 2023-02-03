import React from 'react'
import { useState } from 'react';
import {useRef} from 'react';
import emailjs from '@emailjs/browser';
import { RiArrowRightLine, RiCloseLine } from 'react-icons/ri';
import Image from "next/image";

const ContactForm = () => {
    const [dropBox, setDropbox] = useState(false);
   
    
        const form = useRef();
        const sendEmail = (e) => {
            e.preventDefault();
           
            const { name, email, message } = e.target.elements
            let conFom = {
                name: name.value,
                email: email.value,
                message: message.value,
            }
            console.log(conFom)
            emailjs.sendForm('service_3rd2cuq', 'template_ydp1iuu', form.current, 'UE49k_J__26sukNMb')
              .then((result) => {
                  console.log(result.text);
              }, (error) => {
                  console.log(error.text);
              });
          };
        
    return (
        <div className="mt-5" id='contactform'>

            <h2 className="mb-3">Contact Form</h2>
            <form ref = {form} onSubmit={sendEmail}>
                <div className='containers'>
                    <div className='containers1'>
                        <div className="name">
                            <label className="form-label" htmlFor="name">
                                Name
                            </label>
                            <input className="form-control" type="text" id="name" name="user_name" required />
                            <label className="form-label" htmlFor="email">
                                Email
                            </label>
                            <input className="form-control" type="email" id="email"  name="user_email" required />
                            <label className="form-label" htmlFor="message">
                                Message
                            </label>
                            <textarea className="form-control" id="message" name="message" required />
                            <div className='send'>
                                <button className="btn btn-danger" type="submit" value="Send">
                                    Send
                                </button>
                            </div>

                        </div>
                       
                    </div>
                    <div className='containers3'>
                        <h2>Other forms of contact</h2>
                        <p><a className='size' tabIndex={1} href="#contact">Contact {dropBox
                            ? <RiCloseLine  color="#000000" viewBox='0 -5 24 24' onClick={() => setDropbox(false)} />
                            : <RiArrowRightLine  color="#000000" viewBox='0 -5 24 24' onClick={() => setDropbox(true)} />}
                            {dropBox && (
                                <div className='containers0' id='contact'>
                                    <div className='contact'>
                                        <h2>Contact details</h2>
                                        <h2>Email</h2>
                                        <a className='email' href="mailto:info@mountainmen.co.za">info@mountainmen.co.za</a>
                                        <h2>Whatsap Us</h2>
                                        <a aria-label="Chat on WhatsApp" href="https://wa.me/+27824562827">
                                            <Image alt="Chat on WhatsApp" src='/WhatsAppButtonWhiteMedium.png'  height={40} width={200}/></a>
                                            <div className='fb'>
                                <h2>Social Media</h2>
                                        <a className='fb' href="https://www.facebook.com/MountainMenServices/">
                                                <Image src='/facebook.png' alt='facebook'layout="responsive"height={50} width={50} />
                                        </a>
                                        <a className='fb' href="https://www.instagram.com/mountain_men_security/?hl=en">
                                                <Image src='/instagram.png' alt='insta' layout="responsive"height={50} width={50}/>
                                        </a>
                                        <a className='fb' href="https://mobile.twitter.com/mmsecurity">
                                                <Image src='/twitter.png' alt='twit'layout="responsive"height={50} width={50}/>
                                        </a>
                                </div>
                                    </div>
                                </div>
                            )}</a></p>




                    </div>

                    <div className='containers2'>
                        <div className='contact'>
                            <h2>Contact details</h2>
                            <h2>Email</h2>
                            <a className='email' href="mailto:info@mountainmen.co.za">info@mountainmen.co.za</a>
                            <h2>Whatsap Us</h2>
                            <a aria-label="Chat on WhatsApp" href="https://wa.me/+27824562827">
                            <Image alt="Chat on WhatsApp" src='/WhatsAppButtonWhiteMedium.png'  height={40} width={200}/></a>
                                <div className='fb'>
                                <h2>Social Media</h2>
                                        <a  href="https://www.facebook.com/MountainMenServices/">
                                        <Image src='/facebook.png' alt='facebook'layout="responsive"height={50} width={50} />
                                        </a>
                                        <a href="https://www.instagram.com/mountain_men_security/?hl=en">
                                        <Image src='/instagram.png' alt='insta' layout="responsive"height={50} width={50}/>
                                        </a>
                                        <a  href="https://mobile.twitter.com/mmsecurity">
                                        <Image src='/twitter.png' alt='twit' layout="responsive"height={50} width={50}/>
                                        </a>
                                </div>
                                
                        </div>
                    </div>

                </div>





            </form>


        </div>
    )
}
export default ContactForm