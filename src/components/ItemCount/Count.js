import React, { useState } from 'react'
import { BtnConFuncion } from "../../common/Buttons/BTN";
import './ItemCount.scss'


const ItemCount = ({initial, stock, addToCart}) => {
    const [count, setCount] = useState(1);
    const decrease = () => {
        if(count>initial){
            setCount(count -1 );
        }
    };

    const increase = () => {
        if(stock>count){
            setCount(count + 1);
        }
    };

    return( 
        <div className='div-count'>
            <div className='cont-decreaseIncrease'>
                <BtnConFuncion key={count} funcion={decrease} children={'-'}/>
                <span className='span-count'> {count} </span>
                <BtnConFuncion deshabilitado={count >= stock} funcion={increase} children={'+'}/>
            </div>
            <BtnConFuncion padding={'1rem'} funcion={()=> addToCart(count)} children={'Agregar al carrito'}/>
        </div>
    )
}

export default ItemCount