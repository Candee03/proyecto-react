import React, { useContext, useState } from 'react'
import Swal from 'sweetalert2'
import { BtnConFuncion, BtnLinkeadoAzul } from '../common/Buttons/BTN'
import InputForm from '../common/InputForm/InputForm'
import cartContext from '../context/cartContext'
import { createOrder } from '../services/firebase'

const Checkout = () => {
    const { cart, countPrecioTotal } = useContext(cartContext)
    const [userData, setUserData] = useState({
        fullName:'',
        numCard:'',
        email:'',
        phone:'',
        adress:''
    })

    const handleInput = (e) => {
        e.preventDefault()
        const value = e.target.value
        const input = e.target.name

        const newData = {...userData}
        newData[input] = value
        setUserData(newData)
    }

    const submitData = () => {
        const cartData = cart.map((p) => (
            {
                id: p.id,
                name: p.nombre,
                precio: p.precio,
                cantidad: p.count,
            }
        ))

        const orderData = {
            buyer: userData,
            items: cartData,
            total: countPrecioTotal(),
            timeStamp: new Date()
        }
        createOrder(orderData)
        Swal.fire({
            iconHtml:'😄',
            title: '¡Felicitaciones, tu compra se efectuó con éxito!',
            text:'Te contáctaremos para acordar el envío',
            timer:4000,
            timerProgressBar: true,
            showConfirmButton: false,
            allowOutsideClick:false,
            backdrop:'rgba(221, 255, 182, 0.582) url(https://usagif.com/wp-content/uploads/gif/confetti-25.gif)'
        }).then((result) => {
            if (result.dismiss === Swal.DismissReason.timer) {
                localStorage.removeItem('carrito')
                window.location.replace('/')
            }
        })
    }

    const clearForm = () => {
        Swal.fire({
            title: '¿Seguro que quieres borrar todo el formulario?',
            icon: 'question',
            showCancelButton: true,
            cancelButtonText:'cancelar',
            cancelButtonColor:'red',
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Si'
        }).then((result) => {
            if (result.isConfirmed) {
                setUserData({
                    fullName:'',
                    numCard:'',
                    email:'',
                    phone:'',
                    adress:''
                })
            }
        })
    }

    return (
        <main className='main-Cart'>
            <div className='cont-title'>
                <h1 className='title'>Formulario de pago</h1>
            </div>
            <div>
                <form>
                    <InputForm 
                    value={userData.fullName}
                    placeholderInput={'Nombre Apellido'} 
                    childrenLabel={'Nombre completo'} 
                    nameInput={'fullName'} 
                    onChange={handleInput}/>
                    
                    <InputForm 
                    value={userData.numCard}
                    placeholderInput={'123456789012345'} 
                    childrenLabel={'Numero de tarjeta'} 
                    nameInput={'numCard'} 
                    onChange={handleInput}/>
                    
                    <InputForm 
                    value={userData.email}
                    placeholderInput={'example@gmail.com'} 
                    childrenLabel={'Correo electrónico'} 
                    typeInput={'email'} 
                    nameInput={'email'} 
                    onChange={handleInput}/>
                    
                    <InputForm 
                    value={userData.phone}
                    placeholderInput={'4555555'} 
                    childrenLabel={'Número de teléfono'} 
                    typeInput={'tel'} 
                    nameInput={'phone'} 
                    onChange={handleInput}/>
                    
                    <InputForm 
                    value={userData.adress}
                    placeholderInput={'provincia, ciudad, calle 3333'} 
                    childrenLabel={'Dirección'} 
                    nameInput={'adress'} 
                    onChange={handleInput}/>

                </form>
            </div>
            <BtnConFuncion deshabilitado={
                (userData.fullName==='' || 
                userData.numCard==='' || 
                userData.adress==='' || 
                userData.phone==='' ||
                userData.email===''
                )} weight={'200'} size={'20px'} children={'Finalizar Compra'} margin={'3rem 0 1rem'} funcion={submitData} />
            <BtnConFuncion weight={'200'} size={'20px'} children={'borrar'} funcion={clearForm} />
            <BtnLinkeadoAzul link={'/cart'} children={'Volver al Carrito'} margin={'1rem 0 3rem'}/>
        </main>
    )
}

export default Checkout