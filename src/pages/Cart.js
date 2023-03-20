import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import cartContext from '../context/cartContext'

export const Cart = () => {
    const { cart, countTotalItems, removeItem, clear, countPrecioTotal } = useContext(cartContext)
    if(cart.length === 0) {
        return (
            <main>
                <span>Tu carrito esta vacio</span>
                <Link to={'/proyecto-react'}>Volver al menú</Link>
            </main>
        )}
    return (
        <>
            <button className='btn-volver'><Link className='link-volver' to={'/proyecto-react'}>Volver</Link></button>
            <main>
                <div>
                    {cart.map((producto)=>{
                        return(
                            <div key={producto.id}>
                                <p>{producto.nombre}</p>
                                <p>${producto.precio}</p>
                                <p>cantidad:{producto.count}</p>
                                <button onClick={()=>removeItem(producto.id)}>eliminar</button>
                                <br></br>
                                <br></br>
                            </div>
                        )})}
                    <br></br>
                    <button onClick={clear}>vaciar todo el carrito</button>
                    <span>CARRITO:{countTotalItems()}</span>
                    <span>PRECIO TOTAL:{countPrecioTotal()}</span>
                </div>
            </main>
        </>
    )
}
