import React from 'react'
import TarjetaProducto from './product-card'
import '../Productos.css'

const Tarjeta1 = {
  id: 1,
  nombre: 'Tarjeta 1',
  precio: 1000,
  cantidad: 1,
  imagen: '/src/pages/product/flores.jpg'
}
const Tarjeta2 = {
  id: 2,
  nombre: 'Tarjeta 2',
  precio: 2000,
  cantidad: 2,
  imagen: '/src/pages/product/flores.jpg'
}
const Tarjeta3 = {
  id: 3,
  nombre: 'Tarjeta 3',
  precio: 3000,
  cantidad: 3,
  imagen: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.microtech.es%2Fblog%2Fc%25C3%25B3mo-limpiar-tu-stock-de-productos-que-no-se-han-vendido&psig=AOvVaw0T8LXhgGk25DiO4pUXvt95&ust=1681427463677000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCMjcxMe7pf4CFQAAAAAdAAAAABAc'
}
const Tarjeta4 = {
  id: 4,
  nombre: 'Tarjeta 4',
  precio: 4000,
  cantidad: 4,
  imagen: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.microtech.es%2Fblog%2Fc%25C3%25B3mo-limpiar-tu-stock-de-productos-que-no-se-han-vendido&psig=AOvVaw0T8LXhgGk25DiO4pUXvt95&ust=1681427463677000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCMjcxMe7pf4CFQAAAAAdAAAAABAc'
}




const arrayProductos = [Tarjeta1,Tarjeta2,Tarjeta3,Tarjeta4]

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