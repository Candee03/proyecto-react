import { createContext, useState } from "react";

const cartContext = createContext({
    cart:[]
})

const CartContextProvider= (props) => {
    const [cart, setCart] = useState([])

    const addItem = (producto, count) => {
        const newCart ={...producto, count}
        setCart([...cart, newCart])
    }
    const removeItem = (id) => {
        const productosFiltrados = cart.filter((items)=> items.id !== id)
        setCart(productosFiltrados)
    }
    const clear = () => {
        setCart([])
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
        <cartContext.Provider value={{ cart, addItem, countTotalItems, clear, removeItem, isInCart, countPrecioTotal }}>
            {props.children}
        </cartContext.Provider>
    )
}

export {CartContextProvider};
export default cartContext;