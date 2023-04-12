import React from 'react'
import "./Productos.css"

const TarjetaProducto = ({nombre, precio, cantidad, imagen}) => {


  return (

    <div className='ContainerTarjeta'>
    <img className='imagencard' src={imagen} alt={nombre} />
    <p>Nombre: {nombre}</p>
    <p>Precio: {precio}</p>
    <p>Cantidad: {cantidad}</p>
    <button>Info</button>
    <button>Contactar</button>
    </div>
  )
}

export default TarjetaProducto