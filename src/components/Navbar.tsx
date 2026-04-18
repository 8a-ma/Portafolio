import { Link } from 'react-router-dom'
import type { NavLink } from '../types/nav.types'
import { useState } from 'react'



const HomeIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9.5z" />
    <path d="M9 21V12h6v9" />
  </svg>
)

const FolderIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z" />
  </svg>
)


const Nav_Items: NavLink[] = [
    {
        label: 'Home',
        to: '/',
        icon: <HomeIcon />
    },
]


export default function Navbar() {
    // const [isOpen, setIsOpen] = useState(false)

    return (
        <>
        </>
    )
}