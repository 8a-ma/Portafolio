import { Link } from 'react-router-dom'
import type { NavLink } from '../types/nav.types'



const links: NavLink[] = [
    {label: 'Inicio', to: '/'},
    {label: 'Sobre mi', to: '/about'}
]

export default function Navbar() {
    return (
        <nav>
            {
                links.map(link => (
                    <Link key={link.to} to={link.to}>{link.label}</Link>
                ))
            }
        </nav>
    )
}