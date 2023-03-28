import './NavBar.scss'
import React from "react";
import Logo from '../Logo/Logo';
import CartWidget from '../../components/CartWidget/CartWidget';
import { Link } from 'react-router-dom';


const NavBar = () => {
    return (
        <header className='header'>
            <Link to={'/'}><Logo /></Link>
            <div>
                <ul className='ul-links'>
                    <li className="li-navbar"><Link className="link-navbar" to={'/'}>Home</Link></li>
                    <li className="li-navbar"><Link className="link-navbar" to={'/category/accesorios'}>Accesorios</Link></li>
                    <li className="li-navbar"><Link className="link-navbar" to={'/category/ropa'}>Ropa</Link></li>
                    <li className="li-navbar"><Link className="link-navbar" to={'/category/infantil'}>Infantil</Link></li>
                    <li className="li-navbar"><Link className="link-navbar" to={'/sobre-nosotros'}>Sobre Nosotros</Link></li>
                </ul>
            </div>
            <div>
                <CartWidget />
            </div>
        </header>
    )
};

export default NavBar;