import React from 'react'
import "./components.css"

const TarjetaProducto = ({nombre, precio, cantidad, imagen}) => {


  return (

    <div className='ContainerTarjeta'>
    <h2> Tarjeta Producto</h2>
    <img src={imagen} alt={nombre} />
    <p>Nombre: {nombre}</p>
    <p>Precio: {precio}</p>
    <p>Cantidad: {cantidad}</p>
    </div>
  )
}

export default TarjetaProducto