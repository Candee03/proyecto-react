import React, { useState } from 'react'
import './ItemCount.scss'


const ItemCount = ({initial, stock, addToCart}) => {
    const [count, setCount] = useState(1);
    const decrease = () => {
        if(count>initial){
            setCount(count -1 );
        }
    };

    const increase = () => {
        if(count<stock){
            setCount(count + 1);
        }
    };

    return( 
        <div className='div-count'>
            <button className='btn-count' key={count} onClick={decrease}>-</button>
            <span className='span-count'> {count} </span>
            <button className='btn-count' key={count >= 1} onClick={increase}> +</button>
            <button className="agreg-carr" onClick={()=> addToCart(count)}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount