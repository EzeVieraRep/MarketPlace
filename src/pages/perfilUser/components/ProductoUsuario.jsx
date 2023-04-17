import React from 'react'
import '../userPerfil.css'
import { Button } from 'react-bootstrap'

export const ProductoUsuario = ({id, nombre, cantidad, precio, imagen}) => {
  return (
    <div className='MiniProducto'>
    <img className='MiniImagen' src={imagen} alt='imagen mini'></img>
    <h5 className='textoMini'>Nombre:{nombre}</h5>
    <h5 className='textoMini'>Cantidad:{cantidad}</h5>
    <h5 className='textoMini'>Precio:{precio}</h5>
    <div className='Botones'>
    <Button variant='success' size='sm'> Editar </Button>
    <Button variant='danger' size='sm'> X </Button>
    </div>


    </div>
  )
}
