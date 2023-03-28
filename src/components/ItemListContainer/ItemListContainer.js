import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import './ItemListContainer.scss';
/*-------Components---------*/
import ItemList from '../ItemList/ItemList';
import Loader from '../../common/Loader/Loader';
/*--------FIREBASE----------*/
import { getProductsByCategoryFromDataBase, getProductsToDataBase } from "../../services/firebase";


const ItemListContainer = () => {
    const [listProducts, setListProducts] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const {idCategory} = useParams();


    const traerDatos = async () => {
        setIsLoading(true)
        if(idCategory === undefined) {
            let products =  await getProductsToDataBase();
            setListProducts(products)
            setIsLoading(false)
        } else {
            let products =  await getProductsByCategoryFromDataBase(idCategory);
            setListProducts(products)
            setIsLoading(false)
        }
    }
    
    useEffect (() => {
        traerDatos()
    },[idCategory])

    return (
        <div className='cont-items'>
            {isLoading?<Loader/>:<ItemList Items={listProducts}/>}
        </div>
    );
};

export default ItemListContainer;