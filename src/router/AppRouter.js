import Listaproductos from './components/Listaproductos'

const AppRuter = () => {
    return ( 
        <Routes>
            <Route exact path="/" element={<Listaproductos />} />
        </Routes>
     );
}
 
export default AppRuter;