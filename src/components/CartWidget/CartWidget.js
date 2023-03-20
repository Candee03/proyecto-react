import './CartWidget.scss'
import CartLogo from '../../img/cart.png'
import React, { useContext } from "react";
import cartContext from '../../context/cartContext'
import { Link } from 'react-router-dom';


const CartWidget = () => {
    const {cart} = useContext(cartContext)
    return (
        <Link to={'/cart'} className="cart-widget">
            <img className='cart-img' src={ CartLogo }></img>
            <span className="counter">{cart.length}</span>
        </Link>
    );
};

export default CartWidget;