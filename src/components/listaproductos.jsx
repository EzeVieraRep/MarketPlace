import React from 'react'
import TarjetaProducto from './Product-card'

const Tarjeta1 = {
  id: 1,
  nombre: 'Tarjeta 1',
  precio: 1000,
  cantidad: 1,
  imagen: 'https://www.tarjetas.com/wp-content/uploads/2019/05/tarjeta-1.jpg'
}
const Tarjeta2 = {
  id: 2,
  nombre: 'Tarjeta 2',
  precio: 2000,
  cantidad: 2,
  imagen: 'https://www.tarjetas.com/wp-content/uploads/2019/05/tarjeta-2.jpg'
}
const Tarjeta3 = {
  id: 3,
  nombre: 'Tarjeta 3',
  precio: 3000,
  cantidad: 3,
  imagen: 'https://www.tarjetas.com/wp-content/uploads/2019/05/tarjeta-3.jpg'
}
const arrayProductos = [Tarjeta1,Tarjeta2,Tarjeta3]

const Listaproductos = () => {

  return (
    <div className='ContainerProductos'>
    {arrayProductos.map((producto)=>{
      return <TarjetaProducto key={producto.id} nombre={producto.nombre} precio={producto.precio} cantidad={producto.cantidad} imagen={producto.imagen} />
    })}
    </div>
  )
}

export default Listaproductos