import React from 'react'
import { themeChanger } from '../features/theme/themeSlice';
import { useDispatch, useSelector } from 'react-redux'
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';

export function ThemeChanger() {

    const dispatch  = useDispatch();
    const currentTheme = useSelector((state) => state.theme.initialTheme);

    const handleTheme = () => {
        dispatch(themeChanger());
    }

    const themeIcons = {
        light: <SunIcon className={`size-6 ${currentTheme === 'dark' ? 'text-black sm:text-white' : 'text-white sm:text-black'}`}/>,
        dark: <MoonIcon className={`size-6 ${currentTheme === 'dark' ? 'text-black sm:text-white' : 'text-white sm:text-black'}`}/>
    }

    return (
        <button onClick={handleTheme}
         className='rounded-lg h-11 px-3 mt-2.5 border-solid border-2 border-primaryColor hover:bg-primaryColor'
        >
            {themeIcons[currentTheme]}
        </button>
    )
}
