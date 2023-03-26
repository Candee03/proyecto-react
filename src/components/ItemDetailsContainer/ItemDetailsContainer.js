import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
/*-------Components---------*/
import Loader from "../../common/Loader/Loader";
import ItemDetail from "../ItemDetail/ItemDetail";
/*--------PRODUCTOS----------*/
import productos from "../../productos";


const ItemDetailsContainer = () => {
    const {idProduct} = useParams()
    const [listProduct, setListProduct] = useState([])
    
    /*-------------FIREBASE-------------*/
    useEffect (() => {
        setTimeout(() => {
            productos().then((data) => {
                setListProduct(data.find((producto)=> producto.id === Number(idProduct)));
            })
        }, 2000)
    }, [])

    return (
        <div className='cont-items'>
            {listProduct.length===0? <Loader/>:<ItemDetail producto={listProduct}/>}
        </div>
    );
};

export default ItemDetailsContainer;