import { Route, Routes } from "react-router-dom";
import Listaproductos from "../components/listaproductos.jsx"

const AppRouter = () => {
    return ( 
        <Routes>
            <Route exact path="/" element={<Listaproductos />} />
        </Routes>
     );
}
 
export default AppRouter;