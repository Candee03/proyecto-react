import React from 'react'
import { Link } from 'react-router-dom'
import ItemDetailsContainer from '../components/ItemDetailsContainer/ItemDetailsContainer'

export const Details = () => {
    return (
        <>
        <button className='btn-volver'><Link className='link-volver' to={'/proyecto-react'}>Volver</Link></button>
        <main>
            <ItemDetailsContainer />
        </main>
        </>
    )
}
