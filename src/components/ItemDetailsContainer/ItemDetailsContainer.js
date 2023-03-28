import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
/*-------Components---------*/
import Loader from "../../common/Loader/Loader";
import ItemDetail from "../ItemDetail/ItemDetail";
/*-------------FIREBASE-------------*/
import { getSingleProductsFromDataBase } from '../../services/firebase';



const ItemDetailsContainer = () => {
    const [listProduct, setListProduct] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const {idProduct} = useParams()
    
    const traerDatos = async () => {
        let product =  await getSingleProductsFromDataBase(idProduct);
        setListProduct(product)
        setIsLoading(false)
    }
    useEffect (() => {
        traerDatos()
    }, [])

    return (
        <div className='cont-items'>
            {isLoading? <Loader/>:<ItemDetail producto={listProduct}/>}
        </div>
    );
};

export default ItemDetailsContainer;