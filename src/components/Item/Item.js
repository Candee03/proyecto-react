import React from "react";
import './Item.scss';
import { BtnLinkeadoBlanco } from "../../common/Buttons/BTN";

const Item = ({producto}) =>{
    return( 
    <li className="li-cont">
        <img alt="" className="img-producto" src={producto.img[0]}/>
        <div className="cont-descripcion">
            <p className="precio-description-card">${producto.precio}</p>
            <p className="nombre-description-card">{producto.nombre}</p>
            <p className="description-card">{producto.description}</p>
        </div>
        <BtnLinkeadoBlanco link={`/detail/${producto.id}`} children={'Ver Detalle'} margin={'0 0.5rem 0.5rem 0.5rem'}/>
    </li>
    )
}

export default Item;