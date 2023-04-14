import { Route, Routes } from "react-router-dom";
import Listaproductos from "../pages/product/views/listaproductos"
import UseLogin from "../pages/login/components/UseLogin";
import SignUp from "../pages/login/views/SignUp";

const AppRouter = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Listaproductos />} />
            <Route exact path="/login" element={<UseLogin />} />
            <Route exact path="/nueva-cuenta" element={<SignUp />} />

        </Routes>
    );
}

export default AppRouter;