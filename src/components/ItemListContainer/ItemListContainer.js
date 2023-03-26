import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import './ItemListContainer.scss';
/*-------Components---------*/
import ItemList from '../ItemList/ItemList';
import Loader from '../../common/Loader/Loader';
/*--------PRODUCTOS----------*/
import productos from '../../productos';


const ItemListContainer = () => {
    const [listProducts, setListProducts] = useState([])
    const {idCategory}  = useParams()

    useEffect (() => {
        setListProducts([])
        setTimeout (()=>{
            productos().then((data) => {
                idCategory? setListProducts(data.filter((productos)=> productos.categoria === Number(idCategory))): setListProducts(data)
            })
        },2000)
    },[idCategory])

    return (
        <div className='cont-items'>
            {listProducts.length===0?<Loader/>:<ItemList Items={listProducts}/>}
        </div>
    );
};

export default ItemListContainer;