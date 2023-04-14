import React from 'react'
import "../Productos.css"
import {Button, Badge} from 'react-bootstrap';

const TarjetaProducto = ({nombre, precio, cantidad, imagen}) => {


  return (

    <div className='ContainerTarjeta'>
    <img className='imagencard' src={imagen} alt={nombre} />
    <div className='infocard'>
    <p><i>Nombre:</i> {nombre}</p>
    <p><i>Precio:</i> {precio}</p>
    <p><i>Cantidad:</i> {cantidad}</p>
    </div>
    <div className='BotonesCard'>
    <Button variant="outline-info p-1 m-1" size='sm'>Info</Button>
    <Button variant="outline-secondary" size='sm'>Contactar</Button>
    </div>
    </div>
  )
}

export default TarjetaProducto