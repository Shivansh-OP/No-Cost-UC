import React from 'react'
import { themeChanger } from '../features/theme/themeSlice';
import { useDispatch, useSelector } from 'react-redux'
import { Moon, Sun } from 'lucide-react';

export function ThemeChanger() {

    const dispatch  = useDispatch();
    const currentTheme = useSelector((state) => state.theme.initialTheme);

    const handleTheme = () => {
        dispatch(themeChanger());
    }

    const themeIcons = {
        light: <Sun size={24} strokeWidth= {1.5} className={`${currentTheme === 'dark' ? 'text-black sm:text-white' : 'text-white sm:text-black'}`}/>,
        dark: <Moon size={24} strokeWidth= {1.5} className={`${currentTheme === 'dark' ? 'text-black sm:text-white' : 'text-white sm:text-black'}`}/>
    }

    return (
        <button onClick={handleTheme}
         className='rounded-lg h-11 px-3 mt-2.5 border-solid border-2 border-primaryColor hover:bg-primaryColor'
        >
            {themeIcons[currentTheme]}
        </button>
    )
}
