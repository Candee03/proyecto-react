import React from "react";
import Item from '../Item/Item'
import './ItemList.scss';

const ItemList = ({Items}) => {
    return (
        <ul className='ul-productos'>
            {Items.map(p => <Item key={p.id} producto={p}/>)}
        </ul>
    )
}

export default ItemList;