import './NavBar.scss'
import React from "react";
import Logo from '../Logo/Logo';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';


const NavBar = () => {
    return (
        <header className='header'>
            <Link to={'/proyecto-react/'}><Logo /></Link>
            <div>
                <ul className='ul-links'>
                    <li className="li-navbar"><Link className="link-navbar" to={'/proyecto-react/'}>Home</Link></li>
                    <li className="li-navbar"><Link className="link-navbar" to={'/category/1'}>Accesorios</Link></li>
                    <li className="li-navbar"><Link className="link-navbar" to={'/category/2'}>Ropa</Link></li>
                    <li className="li-navbar"><Link className="link-navbar" to={'/category/3'}>Infantil</Link></li>
                </ul>
            </div>
            <div>
                <CartWidget />
            </div>
        </header>
    )
};

export default NavBar;