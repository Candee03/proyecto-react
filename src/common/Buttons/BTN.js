import React from 'react'
import { Link } from 'react-router-dom'
import './btn.scss'

const BtnLinkeadoBlanco = ({margin, position, link, children, size}) => {
  const styleBtn = {
    backgroundColor:'#F8FCFF',
    color:'black',
    fontSize: size || '16px',
    padding: '0.5rem',
    borderRadius: '10px',
    border: '1px black dashed',
    margin: margin || '4rem 0 0 10rem',
    position: position || 'inline-block',
  }
  return (
    <Link style={styleBtn} to={link}>{children}</Link>
  )
}

const BtnLinkeadoAzul = ({margin, position, link, children, size}) => {
  const styleBtn = {
    backgroundColor:'rgb(156, 231, 248)',
    color:'black',
    fontSize: size || '16px',
    padding: '0.5rem',
    borderRadius: '10px',
    border: '1px black dashed',
    margin: margin || '4rem 0 0 10rem',
    position: position || 'inline-block',
  }
  return (
    <Link style={styleBtn} to={link}>{children}</Link>
  )
}

const BtnConFuncion = ({padding, margin, size, deshabilitado, funcion, children, weight}) => {
  const styleBtn = {
    textTransform: 'capitalize',
    backgroundColor:'rgb(156, 231, 248)',
    color:'black',
    padding: padding || '0.3rem 1rem',
    borderRadius: '10px',
    border: '1px black dashed',
    margin: margin || '1rem',
    fontSize: size || '20px',
    fontWeight: weight||'bold'
  }
  return (
    <button className='btn' disabled={deshabilitado || false} onClick={funcion} style={styleBtn}>{children}</button>
  )
}



export {BtnLinkeadoBlanco}
export {BtnLinkeadoAzul}
export {BtnConFuncion}