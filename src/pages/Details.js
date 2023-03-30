import React from 'react'
import { BtnLinkeadoAzul } from "../common/Buttons/BTN";
import ItemDetailsContainer from '../components/ItemDetailsContainer/ItemDetailsContainer'

const Details = () => {
    return (
        <>
        <BtnLinkeadoAzul link={`/`} children={'Ir al menú'} position={'absolute'}/>
        <main>
            <ItemDetailsContainer />
        </main>
        </>
    )
}
export default Details
