import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../../assets/logo.png'
import { Button, Container, ThemeChanger } from '../index'
import { useSelector } from 'react-redux'
import { Bars3Icon, ShoppingCartIcon, XMarkIcon } from '@heroicons/react/24/outline'

export function Header() {

    const navigate = useNavigate()
    const currentTheme = useSelector((state) => state.theme.initialTheme)

    const navbarItems = [
        {
            name: 'UC Purchase',
            url: '/uc-purchase', 
        },
        {
            name: 'Upgradable Guns',
            url: '/upgradable-guns', 
        },
        {
            name: 'Super Cars',
            url: '/super-cars', 
        },
        {
            name: 'Max Suits',
            url: '/max-suits', 
        },
    ]
    
    const [showDropdown, setShowDropdown] = useState(false);

    const openDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    const closeDropdown = () => {
        setShowDropdown(false);
    }
 
    return (
        <>
            <header>
                <Container>
                    <nav className='flex justify-center items-center space-x-28 sm:p-5 sm:justify-evenly sm:space-x-72'>
                        <Link to='/'>
                            <div className='flex justify-center items-center space-x-2 mt-4 sm:mt-1'>
                                <img src={logo} className='h-14 w-auto sm:h-16' alt='Logo'/>
                                <h1 className={`font-customFont text-3xl
                                    ${currentTheme === 'dark' ? 'text-whiteColor' : 'text-blackColor'}`}
                                >
                                    No <span className={`${currentTheme === 'dark' ? 'text-secondaryColor' : 'text-primaryColor'}`}>Cost</span> UC
                                </h1>
                            </div>
                        </Link>
                        <ul>
                            {
                                showDropdown ? (
                                    <XMarkIcon onClick={openDropdown}
                                        className={`size-6 relative mt-2 sm:hidden
                                        ${currentTheme === 'dark' ? 'text-whiteColor' : 'text-blackColor'}`}
                                    />
                                ) : (
                                    <Bars3Icon onClick={openDropdown}
                                        className={`size-6 relative mt-2 sm:hidden
                                        ${currentTheme === 'dark' ? 'text-whiteColor' : 'text-blackColor'}`}
                                    />
                                )
                            }
                            <div className='flex justify-end items-start'>
                                <div className={`sm:flex sm:items-center sm:space-x-6 sm:bg-transparent
                                    ${showDropdown ? 'absolute w-40 text-center mt-3 p-3 rounded-lg' : 'hidden'}
                                    ${currentTheme === 'dark' ? 'bg-whiteColor' : 'bg-blackColor'}`}
                                >
                                    {navbarItems.map((item) => (
                                        <li key={item.name}>
                                            <Button onClick={() => {
                                                navigate(item.url);
                                                closeDropdown();
                                            }}
                                            className='rounded-lg text-xl w-32 py-1 my-1.5 hover:bg-secondaryColor active:bg-secondaryColor
                                                sm:w-auto sm:px-7 sm:py-2'
                                            >
                                                {item.name}
                                            </Button>
                                        </li>
                                    ))}
                                    <div className='space-x-5 sm:-mt-1.5'>
                                        <button className='rounded-lg h-11 px-3 border-solid border-2 border-primaryColor hover:bg-primaryColor'>
                                            <ShoppingCartIcon className={`size-6 
                                                ${currentTheme === 'dark' ? 'text-blackColor sm:text-whiteColor' : 'text-whiteColor sm:text-blackColor'}`}
                                            />
                                        </button>
                                        <ThemeChanger />
                                    </div>
                                </div>
                            </div>
                        </ul>
                    </nav>
                </Container>
            </header>
        </>
    )
}
