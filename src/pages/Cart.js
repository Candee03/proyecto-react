import React, { useContext } from 'react'
import cartContext from '../context/cartContext'
import { BtnConFuncion, BtnLinkeadoAzul, BtnLinkeadoBlanco } from '../common/Buttons/BTN'

const Cart = () => {
    const { cart, countTotalItems, removeItem, clear, countPrecioTotal } = useContext(cartContext)

    return (
        <>
            <BtnLinkeadoBlanco link={'/'} children={'Volver'} position={'absolute'}/>
            <main className='main-Cart'>
                <div className='cont-title'>
                    <h1 className='title'>Mi Carrito:</h1>
                </div>
                {cart.length === 0?
                <div className='cont-cart'>
                    <h2>Tu carrito está vacio</h2>
                    <BtnLinkeadoAzul margin ={'1rem'} link={'/'} children={'Volver al menú'}/>
                </div>:
                <div className='cont-cart'>
                    <table className='table'>
                        <tbody>
                            <tr>
                                <th>id</th>
                                <th>Imagen</th>
                                <th>Producto</th>
                                <th>Precio</th>
                                <th>Cantidad</th>
                                <th>Remover</th>
                                <th>Total</th>
                            </tr>
                            {cart.map((producto, id)=>{
                                return(
                                    <tr key={id}>
                                        <td style={{width:'0.5rem'}}>#{producto.id}</td>
                                        <td><img alt='' style={{width:'6rem'}} src={producto.img[0]}></img></td>
                                        <td>{producto.nombre}</td>
                                        <td>${producto.precio}</td>
                                        <td>{producto.count}</td>
                                        <td><BtnConFuncion funcion={()=>removeItem(producto.id)} children={'X'} size={'16px'} padding={'0.2rem 0.5rem'} margin={'0'}/></td>
                                        <td>${producto.count*producto.precio}</td>
                                    </tr>
                            )})}
                        </tbody>
                    </table>
                    <div className='cont-resumen'>
                        <p className='p-resumen-carrito'>Cantidad Total: {countTotalItems()}</p>
                        <p className='p-resumen-carrito'>Precio Total: ${countPrecioTotal()}</p>
                        <BtnConFuncion funcion={clear} children={'Vaciar todo el carrito'} size={'16px'} padding={'0.2rem 0.5rem'} margin ={'1rem 0'}/>
                    </div>
                    <div className='cont-btn-comprar'>
                        <BtnLinkeadoAzul size={'20px'} children={'Comprar'} link={'/checkout'} margin={'1rem'}/>
                    </div>
                </div>
                }
            </main>
        </>
    )
}

export default Cart