import React from 'react'

const TarjetaProducto = ({nombre, precio, cantidad, imagen}) => {


  return (

    <div>
    <h2> Tarjeta Producto</h2>
    <img src={imagen} alt={nombre} />
    <p>Nombre: {nombre}</p>
    <p>Precio: {precio}</p>
    <p>Cantidad: {cantidad}</p>
    </div>
  )
}

export default TarjetaProducto