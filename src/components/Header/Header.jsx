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
                    <nav className='flex flex-wrap pt-5'>
                        <div className='ml-10 sm:ml-28'> 
                            <Link to='/'>
                                <div className='flex'>
                                    <img src={logo} className='h-16 w-auto mt-1'  alt='Logo'/>
                                    <h1 className={`font-customFont text-3xl mx-4 my-5
                                        ${currentTheme === 'dark' ? 'text-white' : 'text-black'}`}>
                                        No <span className={`${currentTheme === 'dark' ? 'text-secondaryColor' : 'text-primaryColor'}`}>Cost</span> UC
                                    </h1>
                                </div>
                            </Link>
                        </div>
                        <ul className='sm:ml-auto'>
                            {
                                showDropdown ? (
                                    <XMarkIcon onClick={openDropdown}
                                        className={`size-6 mt-6 ml-28 relative sm:hidden
                                        ${currentTheme === 'dark' ? 'text-white' : 'text-black'}`}
                                    />
                                ) : (
                                    <Bars3Icon onClick={openDropdown}
                                        className={`size-6 mt-6 ml-28 relative sm:hidden
                                        ${currentTheme === 'dark' ? 'text-white' : 'text-black'}`}
                                    />
                                )
                            }
                            <div className={`sm:flex sm:space-x-6 sm:mr-28 sm:bg-transparent
                                ${showDropdown ? 'block mt-7 -ml-14 px-5 py-1 text-center rounded-xl fixed sm:mt-0' : 'hidden'}
                                ${currentTheme === 'dark' ? 'bg-white' : 'bg-black'}`}
                            >
                                {navbarItems.map((item) => (
                                    <li key={item.name}>
                                        <Button onClick={() => {
                                            navigate(item.url);
                                            closeDropdown();
                                        }}
                                        className='w-40 text-xl rounded-lg px-7 py-2 my-2.5 sm:w-auto hover:bg-secondaryColor active:bg-secondaryColor'
                                        >
                                            {item.name}
                                        </Button>
                                    </li>
                                ))}
                                <div className='space-x-4 sm:mr-28'>
                                    <button className='rounded-lg h-11 px-3 mt-2.5 border-solid border-2 border-primaryColor hover:bg-primaryColor'>
                                        <ShoppingCartIcon className={`size-6 
                                            ${currentTheme === 'dark' ? 'text-black sm:text-white' : 'text-white sm:text-black'}`}
                                        />
                                    </button>
                                    <ThemeChanger />
                                </div>
                            </div>
                        </ul>
                    </nav>
                </Container>
            </header>
        </>
    )
}
