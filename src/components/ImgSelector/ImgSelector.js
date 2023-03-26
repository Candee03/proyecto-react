import React, { useState } from 'react'
import './ImgSelector.scss'


const ImgSelector = ({imagenes}) => {
    const [imgActive, setImgActive] = useState(imagenes[0])

    const changeImg= (linkImg) => {
        setImgActive(linkImg)
    }

    return (
        <div className='container'>
            <div className='container-img'>
                <img alt='' className='main-img' src={imgActive}></img>
            </div>

            <div className='selector-container'>
                {imagenes.map((imagen, id) => <button key={id} onClick={()=>changeImg(imagen)}><img alt='' className={imgActive===imagen?'active':'inactive'} src={imagen}></img></button>)}
            </div>
        </div>  
    )
}

export default ImgSelector