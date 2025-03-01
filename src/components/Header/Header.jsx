import React, { useState, useRef, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../../assets/logo.png'
import { Button, Container, ThemeChanger } from '../index'
import { useSelector } from 'react-redux'
import { ShoppingCart, Menu, X } from 'lucide-react'

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
    const dropdownRef = useRef(null);
    
    useEffect(() => {
        const handleDropdown = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowDropdown(false);
            }
        };

        document.addEventListener('mousedown', handleDropdown);
        
        return () => {
            document.addEventListener('mousedown', handleDropdown);
        };
    }, [])

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
                    <nav className={`flex justify-center items-center space-x-28 pb-2 fixed top-0 left-0 right-0 z-50 sm:p-4 sm:justify-evenly sm:space-x-72
                        ${currentTheme === 'dark' ? 'bg-blackColor text-whiteColor' : 'bg-whiteColor text-blackColor'}`}
                    >
                        <Link to='/'>
                            <div className='flex justify-center items-center space-x-2 mt-4 sm:mt-1'>
                                <img src={logo} className='h-14 w-auto sm:h-16 ' alt='Logo'/>
                                <h1 className={`font-customFont text-3xl 
                                    ${currentTheme === 'dark' ? 'text-whiteColor' : 'text-blackColor'}`}
                                >
                                    No {' '}
                                    <span className={`${currentTheme === 'dark' ? 'text-secondaryColor' : 'text-primaryColor'}`}>
                                        Cost
                                    </span> {' '}
                                    UC
                                </h1>
                            </div>
                        </Link>
                        <ul>
                            {
                                showDropdown ? (
                                    <X size={24} strokeWidth={1.5}
                                        onClick={openDropdown}
                                        className={`relative mt-2 sm:hidden
                                        ${currentTheme === 'dark' ? 'text-whiteColor' : 'text-blackColor'}`}
                                    />
                                ) : (
                                    <Menu size={24} strokeWidth={1.5}
                                        onClick={openDropdown}
                                        className={`relative mt-2 sm:hidden
                                        ${currentTheme === 'dark' ? 'text-whiteColor' : 'text-blackColor'}`}
                                    />
                                )
                            }
                            <div className='flex justify-center items-start'>
                                <div ref={dropdownRef}
                                    className={`left-1/2 transform -translate-x-1/2
                                        sm:flex sm:items-center sm:space-x-6 sm:bg-transparent sm:transform-none
                                        ${showDropdown ? 'absolute w-11/12 text-center mt-10 p-3 rounded-lg' : 'hidden'}
                                        ${currentTheme === 'dark' ? 'bg-whiteColor text-blackColor sm:text-whiteColor' : 'bg-blackColor text-whiteColor sm:text-blackColor'}`}
                                >
                                    {navbarItems.map((item) => (
                                        <li key={item.name}>
                                            <Button onClick={() => {
                                                navigate(item.url);
                                                closeDropdown();
                                            }}
                                            className='rounded-lg text-xl w-64 py-1.5 my-1.5 hover:bg-secondaryColor active:bg-secondaryColor
                                                sm:w-auto sm:px-7 sm:py-2'
                                            >
                                                {item.name}
                                            </Button>
                                        </li>
                                    ))}
                                    <div className='space-x-5 sm:-mt-1.5'>
                                        <Button className='rounded-lg h-11 px-3 bg-transparent border-solid border-2 border-primaryColor hover:bg-primaryColor'>
                                            <ShoppingCart size={24} strokeWidth={1.5}
                                                className={`${currentTheme === 'dark' ? 'text-blackColor sm:text-whiteColor' : 'text-whiteColor sm:text-blackColor'}`}
                                            />
                                        </Button>
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
