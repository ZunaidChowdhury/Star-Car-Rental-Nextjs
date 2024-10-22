import { IconProps } from '@/types'
import React from 'react'

const PersonsIcon = ({width="24px", height="24px", color="#000000"}: IconProps) => {
    return (
        <svg fill={color} height={height} width={width} viewBox="-7 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.625 12.875c-1.844 0-3.313-1.469-3.313-3.313s1.469-3.344 3.313-3.344 3.344 1.5 3.344 3.344-1.5 3.313-3.344 3.313zM7.563 12.313c-1.344 0-2.438-1.094-2.438-2.438s1.094-2.438 2.438-2.438c1.375 0 2.469 1.094 2.469 2.438s-1.094 2.438-2.469 2.438zM18.188 18.031c0 0.094 0 0.219-0.031 0.313h0.031v7.875h-9.094v-4.125h-4.844v-2.063h-4.25v-4.906c0-1.5 1.219-2.719 2.719-2.719 1.063 0 1.938 0.563 2.406 1.438 0.625-0.656 1.469-1.094 2.438-1.094 1.344 0 2.5 0.781 3.031 1.938 0.813-0.75 1.875-1.188 3.031-1.188 2.531 0 4.563 2.031 4.563 4.531zM2.719 12.031c-1.094 0-2-0.875-2-2 0-1.094 0.906-2 2-2 1.125 0 2 0.906 2 2 0 1.125-0.875 2-2 2z"></path>
        </svg>
    )
}

export default PersonsIcon