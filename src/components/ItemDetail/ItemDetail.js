import React, {useContext} from "react";
import ItemCount from "../ItemCount/ItemCount";
import './ItemDetail.scss'
import cartContext from "../../context/cartContext";
import { Link } from "react-router-dom";

const ItemDetail = ({producto}) =>{
    const { addItem, isInCart } = useContext(cartContext)
    const addToCart = (count) => {
        alert(`agregaste ${count} ${producto.nombre} al carrito`)
        addItem(producto, count)
    }
    if (isInCart(producto.id)){
        return( 
            <div className="cont-detail">
                <li className="li-cont-detail">
                    <img className="img-producto" src={producto.img}/>
                    <div className="cont-descripcion">
                        <p className="p-nombre">{producto.nombre}</p>
                        <p className="p-precio">${producto.precio}</p>
                        <p className="p-descripcion">Descripcion del producto:{producto.description}</p>
                    </div>
                </li>
                <div className="div-cont-agregar">
                    <Link to={'/cart'}>IR AL CARRITO</Link>
                </div>
            </div>
        )
    }
    return( 
    <div className="cont-detail">
        <li className="li-cont-detail">
            <img className="img-producto" src={producto.img}/>
            <div className="cont-descripcion">
                <p className="p-nombre">{producto.nombre}</p>
                <p className="p-precio">${producto.precio}</p>
                <p className="p-descripcion">Descripcion del producto:{producto.description}</p>
            </div>
        </li>
        <div className="div-cont-agregar">
            <div className="cont-agregar">
                <ItemCount initial={1} stock={producto.stock} addToCart={addToCart} />
            </div>
        </div>
    </div>
    )
}

export default ItemDetail;