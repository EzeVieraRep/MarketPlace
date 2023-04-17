import React from 'react'
import Button from 'react-bootstrap/Button';
import "../userPerfil.css"
import { DisplayProduct } from '../components/DisplayProduct';

const DATOS_USUARIO = {
    usuario: "Javier",
    email: "test@gmail.com",
    imagen: "src/pages/header/views/img/585e4beacb11b227491c3399.png"
}

const Perfilview = () => {
  return (
    <div className='Principal'>
        <div className='ContenedorPerfil'>
    <div className='DatosUsuario'>
        <img className='imagenPerfil' src={DATOS_USUARIO.imagen} alt='fotoperfil'></img>
        <h4><i>Nombre de usuario: </i> {DATOS_USUARIO.usuario}</h4>
        <h4><i>Email: </i> {DATOS_USUARIO.email}</h4>
    </div>
    <div className='textoConector'>
    <h3 className='Conector'>Mis Productos:</h3>
    </div>
    <div className='VisorProductos'>
        <DisplayProduct />
    </div>

    </div>
    </div>
    
  )
}

export default Perfilview