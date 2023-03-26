import React, { useContext } from "react";
import cartContext from '../../context/cartContext'
import './CartWidget.scss'
import CartLogo from '../../img/cart.png'
import { Link } from 'react-router-dom';


const CartWidget = () => {
    const {cart} = useContext(cartContext)

    return (
        <Link to={'/cart'} className="cart-widget">
            <img alt='' className='cart-img' src={ CartLogo }></img>
            {cart.length!==0 && <span className="counter">{cart.length}</span>}
        </Link>
    );
};

export default CartWidget;