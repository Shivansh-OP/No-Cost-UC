import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../../assets/logo.png'
import { Button, Container, ThemeChanger } from '../index'
import { useSelector } from 'react-redux'
import { ShoppingCartIcon } from '@heroicons/react/24/outline'

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
    

    return (
        <>
            <header>
                <Container>
                    <nav className='flex flex-wrap pt-5'>
                        <div className='ml-28'> 
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
                        <ul className='flex space-x-6 ml-auto mr-16'>
                            {navbarItems.map((item) => (
                                <li key={item.name}>
                                    <Button onClick={() => navigate(item.url)}
                                     className='text-xl rounded-lg px-7 py-2 my-2.5 hover:bg-secondaryColor active:bg-secondaryColor'
                                    >
                                        {item.name}
                                    </Button>
                                </li>
                            ))}
                        </ul>
                        <div className='space-x-4 mr-28'>
                            <button className='rounded-lg h-11 px-3 mt-2.5 border-solid border-2 border-primaryColor hover:bg-primaryColor'>
                                <ShoppingCartIcon className={`size-6 ${currentTheme === 'dark' ? 'text-white' : 'text-black'}`}/>
                            </button>
                            <ThemeChanger />
                        </div>
                    </nav>
                </Container>
            </header>
        </>
    )
}
