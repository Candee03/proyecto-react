import React, { useContext } from 'react'
import cartContext from '../context/cartContext'
import { BtnConFuncion, BtnLinkeadoAzul, BtnLinkeadoBlanco } from '../common/Buttons/BTN'

export const Cart = () => {
    const { cart, countTotalItems, removeItem, clear, countPrecioTotal } = useContext(cartContext)
    if(cart.length === 0) {
        return (
            <main className='main-Cart'>
                <div className='cont-cart'>
                    <span>Tu carrito está vacio</span>
                    <BtnLinkeadoAzul margin ={'1rem'} link={'/'} children={'Volver al menú'}/>
                </div>
            </main>
        )}
    return (
        <>
            <BtnLinkeadoBlanco link={'/'} children={'Volver'} position={'absolute'}/>
            <main className='main-Cart'>
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
                            {cart.map((producto)=>{
                                return(
                                    <tr>
                                        <td>#{producto.id}</td>
                                        <td><img alt='' style={{width:'5rem'}} src={producto.img[0]}></img></td>
                                        <td>{producto.nombre}</td>
                                        <td>${producto.precio}</td>
                                        <td>{producto.count}</td>
                                        <td><BtnConFuncion funcion={()=>removeItem(producto.id)} children={'X'} size={'16px'} padding={'0.2rem 0.5rem'} margin={'0'}/></td>
                                        <td>${producto.count*producto.precio}</td>
                                    </tr>
                            )})}
                        </tbody>
                    </table>
                    <div>
                        <p>Cantidad Total: {countTotalItems()}</p>
                        <p>Precio Total: ${countPrecioTotal()}</p>
                        <BtnConFuncion funcion={clear} children={'Vaciar todo el carrito'} size={'16px'} padding={'0.2rem 0.5rem'} />
                    </div>
                </div>
            </main>
        </>
    )
}
