import React from 'react'
import ItemListContainer from '../components/ItemListContainer/ItemListContainer'
// import { exportData } from '../services/firebase'

const Home = () => {
    return (
      <main>
        
        {/* ----boton de exportar data---- */}
        {/* <button onClick={exportData}>exportar</button> */}
        <ItemListContainer />
      </main>
    )
}
export default Home
