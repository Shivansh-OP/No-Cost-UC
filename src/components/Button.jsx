import React from 'react'

export function Button({
    children,
    type = 'button',
    bgColor = 'bg-primaryColor',
    font = 'font-customFont',
    className = '',
    ...props
}) {

    return (
        <button className={`${bgColor} ${font} ${className}`} {...props}>
            {children}
        </button>
    )
}
