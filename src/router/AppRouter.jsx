import { Route, Routes } from "react-router-dom";
import Listaproductos from "../components/listaproductos.jsx"
import Login from "../components/Login.jsx";

const AppRouter = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Listaproductos />} />
            <Route exact path="/login" element={<Login />} />

        </Routes>
    );
}

export default AppRouter;