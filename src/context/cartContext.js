import { createContext, useState } from "react";
/*----------Import de SWEETALERT---------*/
import Swal from 'sweetalert2'

/*-----------Context del carrito------------- */
const cartContext = createContext({
    cart:[]
})
/*-----------Provider del carrito------------- */
const CartContextProvider= (props) => {
    const [cart, setCart] = useState([])

    /*-----------Funciones del carrito------------- */
    const addItem = (producto, count) => {
        const newCart ={...producto, count}
        setCart([...cart, newCart])
    }
    const removeItem = (id) => {
        const productosFiltrados = cart.filter((items)=> items.id !== id)
        setCart(productosFiltrados)
    }
    const clear = () => {
        Swal.fire({
            title: '¿Seguro que quieres vaciar el carrito?',
            text:'Se borrarán los productos que guardaste',
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: 'red',
            confirmButtonText: 'Si, estoy seguro'
        }).then((result) => {
            if (result.isConfirmed) {
            setCart([])
            }
        })
    }
    const countTotalItems = () => {
        let total = 0
        cart.forEach((producto) => {
            total += producto.count
        })
        return total
    }
    const countPrecioTotal = () => {
        let total = 0
        cart.forEach((producto) => {
            total += producto.precio*producto.count
        })
        return total
    }
    const isInCart = (id) => {
        const productoRepetido = cart.some((item)=> item.id === id)
        return productoRepetido
    }
    
    return(
        <cartContext.Provider value={{ 
            cart, 
            addItem, 
            countTotalItems, 
            clear, 
            removeItem, 
            isInCart, 
            countPrecioTotal
        }}>
            {props.children}
        </cartContext.Provider>
    )
}

export {CartContextProvider};
export default cartContext;