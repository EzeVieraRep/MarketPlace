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
    <Badge bg="info" as="Button">
      Info
    </Badge>
    <Badge bg="secondary" as="Button">
      Contactar
    </Badge>
    </div>
    </div>
  )
}

export default TarjetaProducto