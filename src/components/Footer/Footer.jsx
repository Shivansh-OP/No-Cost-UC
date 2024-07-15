import React from 'react'
import logo from '../../assets/logo.png'
import { useSelector } from 'react-redux'

export function Footer() {
    
    const currentTheme = useSelector((state) => state.theme.initialTheme);

    return (
        <>
            <footer>
                <div className='flex items-center justify-center'>
                    <hr className='w-11/12 border border-primaryColor'/>
                </div>
                <div  className='ml-28'>
                    <img src={logo} className='h-16 w-auto mt-1' alt='Logo'/>
                </div>
            </footer>
        </>
    )
}
