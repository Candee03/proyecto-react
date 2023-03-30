import { createContext, useState } from "react";
/*----------Import de SWEETALERT---------*/
import Swal from 'sweetalert2'

/*-----------Context del carrito------------- */
const cartContext = createContext({
    cart:[]
})

/*-----------Provider del carrito------------- */
const CartContextProvider= (props) => {
    const cartStorage = JSON.parse(localStorage.getItem('carrito'));
    const [cart, setCart] = useState(cartStorage? cartStorage:[])


    const addItem = (producto, count) => {
        const newCart ={...producto, count}
        setCart([...cart, newCart])
        /*----add to storage---*/
        const cartStorage = [...cart, newCart]
        localStorage.setItem('carrito', JSON.stringify(cartStorage));
    }
    const removeItem = (id) => {
        const productosFiltrados = cart.filter((items)=> items.id !== id)
        setCart(productosFiltrados)
        localStorage.setItem('carrito', JSON.stringify(productosFiltrados));
    }
    const clear = () => {
        Swal.fire({
            title: '¿Seguro que quieres vaciar el carrito?',
            text:'Se borrarán los productos que guardaste',
            icon: 'question',
            showCancelButton: true,
            cancelButtonText:'cancelar',
            cancelButtonColor:'red',
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Si, estoy seguro'
        }).then((result) => {
            if (result.isConfirmed) {
            setCart([])
            localStorage.setItem('carrito', JSON.stringify([]));
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