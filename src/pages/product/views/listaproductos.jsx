import {useState} from 'react'
import TarjetaProducto from './product-card'
import '../Productos.css'
import { Button } from 'react-bootstrap';

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
  imagen: '/src/pages/product/flores.jpg'
}
const Tarjeta4 = {
  id: 4,
  nombre: 'Tarjeta 4',
  precio: 4000,
  cantidad: 4,
  imagen: '/src/pages/product/flores.jpg'
}


const arrayProductos = [Tarjeta1,Tarjeta2,Tarjeta3,Tarjeta4]

const Listaproductos = () => {

  const ONLINE = localStorage.getItem('isLoggedIn')

  const [Conectado, setConectado] = useState(ONLINE)


  if (Conectado === false)
return (
    <div className='Global'>
    <div className='ContainerProductos'>
    {arrayProductos.map((producto)=>{
      return <TarjetaProducto key={producto.id} nombre={producto.nombre} precio={producto.precio} cantidad={producto.cantidad} imagen={producto.imagen} />
    })}
    </div>
    </div>
  )
  else return(
    <div className='Global'>
    <div className='Contboton'>
    <Button className='BotonAgregar' variant='outline-primary' href="/agregar-producto" size='sm'> 🗹 Agregar Producto</Button>
    </div>
    <div className='ContainerProductos'>
    {arrayProductos.map((producto)=>{
      return <TarjetaProducto key={producto.id} nombre={producto.nombre} precio={producto.precio} cantidad={producto.cantidad} imagen={producto.imagen} />
    })}
    </div>
    </div>
  )
}

export default Listaproductos