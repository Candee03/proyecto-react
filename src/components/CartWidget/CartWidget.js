import './CartWidget.scss'
import CartLogo from '../../img/cart.png'
import React from "react";
import { Link } from 'react-router-dom';


const CartWidget = () => {
    return (
        <Link to={'/'} className="cart-widget">
            <img className='cart-img' src={ CartLogo }></img>
            <span className="counter">1</span>
        </Link>
    );
};

export default CartWidget;