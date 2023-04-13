import { Route, Routes } from "react-router-dom";
import Listaproductos from "../components/listaproductos.jsx"
import Login from "../components/Login.jsx";
import SignUp from "../components/signUp.jsx";

const AppRouter = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Listaproductos />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/nueva-cuenta" element={<SignUp />} />

        </Routes>
    );
}

export default AppRouter;