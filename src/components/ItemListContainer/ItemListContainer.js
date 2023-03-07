import './ItemListContainer.scss';
import React, { useEffect, useState } from "react";
import ItemList from '../ItemList/ItemList';
import productos from '../../productos';
import { useParams } from 'react-router-dom';


const ItemListContainer = () => {
    const [listProducts, setListProducts] = useState([])
    const {idCategory}  = useParams()

    useEffect (() => {
        productos().then((data) => {
            idCategory? setListProducts(data.filter((productos)=> productos.categoria === Number(idCategory))): setListProducts(data)
        })
    },[idCategory])

    return (
        <div className='cont-items'>
            <ItemList Items={listProducts}/>
        </div>
    );
};

export default ItemListContainer;