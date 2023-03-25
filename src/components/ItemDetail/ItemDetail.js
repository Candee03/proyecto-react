import React, {useContext} from "react";
import ItemCount from "../ItemCount/ItemCount";
import './ItemDetail.scss'
import cartContext from "../../context/cartContext";
import { BtnLinkeadoAzul } from "../../common/Buttons/BTN";
import ImgSelector from "../ImgSelector/ImgSelector";

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
                    {producto.img && <ImgSelector imagenes={producto.img}/>}
                    <div className="cont-descripcion">
                        <p className="p-nombre">{producto.nombre}</p>
                        <p className="p-precio">${producto.precio}</p>
                        <p className="p-descripcion">Descripcion del producto:{producto.description}</p>
                    </div>
                </li>
                <BtnLinkeadoAzul link={'/cart'} children={'IR AL CARRITO'}/>
            </div>
        )
    }
    return( 
    <div className="cont-detail">
        <li className="li-cont-detail">
            {producto.img && <ImgSelector imagenes={producto.img}/>}
            <div className="cont-descripcion">
                <p className="p-nombre">{producto.nombre}</p>
                <p className="p-precio">${producto.precio}</p>
                <p className="p-descripcion">Descripcion: {producto.description}</p>
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