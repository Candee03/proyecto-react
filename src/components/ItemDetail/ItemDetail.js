import React, {useContext} from "react";
import cartContext from "../../context/cartContext";
import './ItemDetail.scss'
/*----------Components--------------*/
import ItemCount from "../ItemCount/ItemCount";
import { BtnLinkeadoAzul } from "../../common/Buttons/BTN";
import ImgSelector from "../ImgSelector/ImgSelector";
/*-------Import SWEETALERT----------*/
import Swal from 'sweetalert2'


const ItemDetail = ({producto}) =>{
    const { addItem, isInCart } = useContext(cartContext)
    
    const addToCart = (count) => {
        Swal.fire({
            title:'¡Se agregó el producto al carrito!',
            icon:"success",
            confirmButtonColor:'#0077bc'
        })
        addItem(producto, count)
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
        {isInCart(producto.id)?<BtnLinkeadoAzul link={'/cart'} children={'IR AL CARRITO'}/>:
        <div className="div-cont-agregar">
            {producto.stock===1&&<p className="p-ultimaUnidad">¡Es la ultima unidad!</p>}
            <ItemCount initial={1} stock={producto.stock} addToCart={addToCart} />
        </div>}
    </div>
    )
}

export default ItemDetail;