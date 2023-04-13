import React from 'react'
import "./Productos.css"

const TarjetaProducto = ({nombre, precio, cantidad, imagen}) => {


  return (

    <div className='ContainerTarjeta'>
    <img className='imagencard' src={imagen} alt={nombre} />
    <div className='infocard'>
    <h5>Nombre: {nombre}</h5>
    <h5>Precio: {precio}</h5>
    <h5>Cantidad: {cantidad}</h5>
    </div>
    <button>Info</button>
    <button>Contactar</button>
    </div>
  )
}

export default TarjetaProducto