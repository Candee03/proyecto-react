import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../../common/Loader/Loader";
import productos from "../../productos";
import ItemDetail from "../ItemDetail/ItemDetail";


const ItemDetailsContainer = () => {
    const {idProduct} = useParams()
    const [listProduct, setListProduct] = useState([])
    
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