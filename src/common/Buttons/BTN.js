import React from 'react'
import { Link } from 'react-router-dom'
import './btn.scss'

const BtnLinkeadoBlanco = (props) => {
  const styleBtn = {
    backgroundColor:'#F8FCFF',
    color:'black',
    padding: '0.5rem',
    borderRadius: '10px',
    border: '1px black dashed',
    margin: props.margin || '3rem 0 0 3rem',
    position: props.position || 'inline-block',
  }
  return (
    <Link style={styleBtn} to={props.link}>{props.children}</Link>
  )
}

const BtnLinkeadoAzul = (props) => {
  const styleBtn = {
    backgroundColor:'rgb(156, 231, 248)',
    color:'black',
    padding: '0.5rem',
    borderRadius: '10px',
    border: '1px black dashed',
    margin: props.margin || '3rem 0 0 3rem',
    position: props.position || 'inline-block',
  }
  return (
    <Link style={styleBtn} to={props.link}>{props.children}</Link>
  )
}

const BtnConFuncion = (props) => {
  const styleBtn = {
    backgroundColor:'rgb(156, 231, 248)',
    color:'black',
    padding: props.padding || '0.3rem 1rem',
    borderRadius: '10px',
    border: '1px black dashed',
    margin: props.margin || '1rem',
    fontSize: props.size || '20px',
    fontWeight: 'bold'
  }
  return (
    <button className='btn' disabled={props.deshabilitado || false} onClick={props.funcion} style={styleBtn}>{props.children}</button>
  )
}



export {BtnLinkeadoBlanco}
export {BtnLinkeadoAzul}
export {BtnConFuncion}