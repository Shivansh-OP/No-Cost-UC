import React from 'react'
import logo from '../../assets/logo.png'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { Button } from '../index';
import { Github, Mail, Twitter } from 'lucide-react';

export function Footer() {
    
    const currentTheme = useSelector((state) => state.theme.initialTheme);

    return (
        <>
            <footer>
                <hr className={`border 
                    ${currentTheme === 'dark' ? 'border-secondaryColor' : 'border-primaryColor'}`}
                />
                <div className='space-x-6 my-5 sm:flex sm:justify-around sm:items-start sm:space-x-60 sm:my-7'>
                    <div className='flex justify-center items-center space-x-2'>
                        <img src={logo} className='h-14 w-auto sm:h-16' alt='Logo' />
                        <h1 className={`font-customFont text-3xl
                            ${currentTheme === 'dark' ? 'text-whiteColor' : 'text-blackColor'}`}
                        >
                            No <span className={`${currentTheme === 'dark' ? 'text-secondaryColor' : 'text-primaryColor'}`}>Cost</span> UC
                        </h1>
                    </div>
                    <div className='sm:flex sm:justify-center sm:items-start sm:space-x-36'>
                        <div className='hidden sm:block'>
                            <h2 className={`font-customFont text-2xl underline my-2.5
                                ${currentTheme === 'dark' ? 'text-whiteColor' : 'text-blackColor'}`}>
                                Products
                            </h2>
                            <ul>
                                <li className='mb-0.5'>
                                    <Link to='/uc-purchase'
                                        className={`font-customFont text-xl
                                        ${currentTheme === 'dark' ? 'text-whiteColor hover:text-secondaryColor' : 'text-blackColor hover:text-primaryColor' }`}
                                    >
                                        UC Purchase
                                    </Link>
                                </li>
                                <li className='mb-0.5'>
                                    <Link to='/upgradable-guns'
                                        className={`font-customFont text-xl
                                        ${currentTheme === 'dark' ? 'text-whiteColor hover:text-secondaryColor' : 'text-blackColor hover:text-primaryColor' }`}
                                    >
                                        Upgradable Guns
                                    </Link>
                                </li>
                                <li className='mb-0.5'>
                                    <Link to='/super-cars'
                                        className={`font-customFont text-xl
                                        ${currentTheme === 'dark' ? 'text-whiteColor hover:text-secondaryColor' : 'text-blackColor hover:text-primaryColor' }`}
                                    >
                                        Super Cars
                                    </Link>
                                </li>
                                <li className='mb-0.5'>
                                    <Link to='/max-suits'
                                        className={`font-customFont text-xl
                                        ${currentTheme === 'dark' ? 'text-whiteColor hover:text-secondaryColor' : 'text-blackColor hover:text-primaryColor' }`}
                                    >
                                        Max Suits
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className='text-center sm:pr-32 sm:text-left'>
                            <h2 className={`font-customFont text-2xl underline my-2.5
                                    ${currentTheme === 'dark' ? 'text-whiteColor' : 'text-blackColor'}`}>
                                    Legals
                            </h2>
                            <ul>
                                <li className='mb-0.5'>
                                    <Link to='/terms-and-conditions'
                                            className={`font-customFont text-xl
                                            ${currentTheme === 'dark' ? 'text-whiteColor hover:text-secondaryColor' : 'text-blackColor hover:text-primaryColor' }`}
                                        >
                                            Terms &amp; Conditions
                                    </Link>
                                </li>
                                <li className='mb-0.5'>
                                    <Link to='/privacy-policy'
                                            className={`font-customFont text-xl
                                            ${currentTheme === 'dark' ? 'text-whiteColor hover:text-secondaryColor' : 'text-blackColor hover:text-primaryColor' }`}
                                        >
                                            Privacy Policy
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center items-center'>
                    <hr className={`border w-4/5
                        ${currentTheme === 'dark' ? 'border-secondaryColor' : 'border-primaryColor'}`}
                    />
                </div>
                <div className='py-5 sm:flex sm:justify-around sm:items-center sm:space-x-96'>
                    <h3 className={`font-customFont text-lg text-center
                        ${currentTheme === 'dark' ? 'text-whiteColor' : 'text-blackColor'}`}>
                        &copy; Copyright 2024. All Rights Reserved by No <span className={`${currentTheme === 'dark' ? 'text-secondaryColor' : 'text-primaryColor'}`}>Cost</span> UC.
                    </h3>
                    <div className='flex justify-center items-center space-x-6 my-5'>
                        <Button className='rounded-full p-3'>
                            <Mail size={24} strokeWidth={1.5}
                                className={`${currentTheme === 'dark' ? 'text-whiteColor' : 'text-blackColor'}`}
                            />
                        </Button>
                        <Button className='rounded-full p-3'>
                            <Twitter size={24} strokeWidth={1.5}
                                className={`${currentTheme === 'dark' ? 'text-whiteColor' : 'text-blackColor'}`}
                            />
                        </Button>
                        <Button className='rounded-full p-3'>
                            <Github size={24} strokeWidth={1.5}
                                className={`${currentTheme === 'dark' ? 'text-whiteColor' : 'text-blackColor'}`}
                            />
                        </Button>
                    </div>
                </div>
            </footer>
        </>
    )
}
