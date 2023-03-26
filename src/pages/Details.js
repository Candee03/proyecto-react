import React from 'react'
import { BtnLinkeadoBlanco } from "../common/Buttons/BTN";
import ItemDetailsContainer from '../components/ItemDetailsContainer/ItemDetailsContainer'

const Details = () => {
    return (
        <>
        <BtnLinkeadoBlanco link={'/'} children={'Volver'} position={'absolute'}/>
        <main>
            <ItemDetailsContainer />
        </main>
        </>
    )
}
export default Details
