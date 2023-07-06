import React from 'react';
import Image from 'next/image';

const Footer = () => {

    return (
        <div className='bg-walterWhite p-5 flex flex-col justify-center items-center'>
            <Image src='/logo.png' width={133} height={23} alt='FullStack Week' />
            <p className='text-sm font-medium mt-1 text-primaryDarker'>Todos os direitos reservados.</p>
        </div>
    )
}

export default Footer;