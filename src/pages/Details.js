import React from 'react'
import { BtnLinkeadoBlanco } from "../common/Buttons/BTN";
import ItemDetailsContainer from '../components/ItemDetailsContainer/ItemDetailsContainer'

export const Details = () => {
    return (
        <>
        <BtnLinkeadoBlanco link={'/'} children={'Volver'} position={'absolute'}/>
        <main>
            <ItemDetailsContainer />
        </main>
        </>
    )
}
