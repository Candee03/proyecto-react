import './NavBar.scss'
import React, { Children } from "react";
import Logo from '../Logo/Logo';
import CartWidget from '../../components/CartWidget/CartWidget';
import { Link, useLocation } from 'react-router-dom';


const NavBar = () => {
    let location = useLocation()
    return (
        <header className='header'>
            <Link to={'/'}><Logo /></Link>
            <div>
                <ul className='ul-links'>
                    <li className="li-navbar"><Link className='link-navbar' style={location.pathname==='/'?{color:'rgb(0, 146, 194)', fontWeight:'bold'}:{color:'black'}} to={'/'}>Home</Link></li>
                    <li className="li-navbar"><Link className='link-navbar' style={location.pathname==='/category/accesorios'?{color:'rgb(0, 146, 194)', fontWeight:'bold'}:{color:'black'}} to={'/category/accesorios'}>Accesorios</Link></li>
                    <li className="li-navbar"><Link className="link-navbar" style={location.pathname==='/category/ropa'?{color:'rgb(0, 146, 194)', fontWeight:'bold'}:{color:'black'}} to={'/category/ropa'}>Ropa</Link></li>
                    <li className="li-navbar"><Link className="link-navbar" style={location.pathname==='/category/infantil'?{color:'rgb(0, 146, 194)', fontWeight:'bold'}:{color:'black'}} to={'/category/infantil'}>Infantil</Link></li>
                </ul>
            </div>
            <div>
                <CartWidget />
            </div>
        </header>
    )
};

export default NavBar;