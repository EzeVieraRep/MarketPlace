import { Route, Routes } from "react-router-dom";
import Listaproductos from "../pages/product/views/listaproductos"
import UseSignUp from "../pages/login/components/UseSignUp";
import UseCreateEditProduct from "../pages/productCrud/components/UseCreateEditProduct";
import UserPerfil from "../pages/perfilUser/components/UserPerfil";
import Login from "../pages/login2/Login";

const AppRouter = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Listaproductos />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/nueva-cuenta" element={<UseSignUp />} />
            <Route exact path="/agregar-producto" element={<UseCreateEditProduct />} />
            <Route exact path="/perfil-usuario" element={<UserPerfil />} />
        </Routes>
    );
}

export default AppRouter;