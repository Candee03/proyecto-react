import React from "react";
import './Item.scss';
import { Link } from "react-router-dom";

const Item = ({producto}) =>{
    return( 
    <li className="li-cont">
        <img className="img-producto" src={producto.img}/>
        <div className="cont-descripcion">
            <p className="p-description-card">Nombre:{producto.nombre}</p>
            <p className="p-description-card">Precio:${producto.precio}</p>
        </div>
        <button className="btn-detail">
            <Link className="link-detail" to={`/detail/${producto.id}`}>Ver Detalle</Link>
        </button>
    </li>
    )
}

export default Item;