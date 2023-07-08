"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { signIn, signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { AiOutlineMenu } from 'react-icons/ai';

const Header = () => {

    const [menusIsOpen, setMenuIsOpen] = useState(false);

    const { status, data } = useSession();


    const handleLoginClick = () => signIn();
    const handleMenuClick = () => setMenuIsOpen(!menusIsOpen);
    const handleLogoutClick = () => {
        setMenuIsOpen(false);
        signOut();
    }

    return (
        <div className="container mx-auto p-5 py-0 h-[93px] flex justify-between items-center">
            <Link href='/'>
                <div className="relative h-[32px] w-[182px]">
                    <Image src='/Logo.png' alt='FSW' fill />
                </div>
            </Link>

            {status === 'unauthenticated' && (
                <button
                    className='text-primary text-sn font-semibold'
                    onClick={handleLoginClick}>
                    Login
                </button>
            )}

            {status === 'authenticated' && data?.user && (
                <div className="flex items-center gap-3 border-grayLighter border border-solid p-2 px-3 rounded-full relative">
                    <AiOutlineMenu
                        size={16}
                        onClick={handleMenuClick}
                        className='cursor-pointer'
                    />

                    <Image
                        width={35}
                        height={35}
                        src={data.user.image!}
                        alt={data.user.name!}
                        className='rounded-full shadow-md'
                    />

                    {menusIsOpen && (
                        <div className=" z-50 absolute top-14 left-0 w-full h-[100px] bg-white rounded-lg shadow-md flex flex-col justify-center items-center">

                            <Link href='/my-trips' onClick={() => setMenuIsOpen(false)}>
                                <button className='text-primary pb-2 border-b border-grayLighter border-solid text-xs font-semibold'>
                                    Minhas viagens
                                </button>
                            </Link>

                            <button className='pt-2 text-primary text-xs font-semibold' onClick={handleLogoutClick}>
                                Logout
                            </button>
                        </div>
                    )}

                </div>
            )}

        </div>
    )
}

export default Header;