import React from 'react';
import Link from 'next/link';

import Image from "next/image";

const sNavbar = () => {


  return (
    <div className="navbar-container">
      <div className='LogoSLink'>
      <p className="logoS">
        <Link href="/">Back to Main Page</Link>   
      </p>
      <Image src='/_CompanyLogo.png' alt='logos' width={300} height={100} />
      </div>

    </div>
  )
}

export default sNavbar