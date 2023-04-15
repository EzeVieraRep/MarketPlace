import { useEffect, useState } from 'react';
import Login from '../views/Login'
import { useNavigate } from 'react-router-dom';



const USER = {
    username: "admin@admin.com",
    password: "admin"
}
const useLogin = () => {
    const navigate = useNavigate();

    // hook de user
    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [msg, setMsg] = useState("")
    const [colorSnackbar, setColorSnackbar] = useState("")
    const [open, setOpen] = useState(true)
    // destroyoning del hook user
    const { email, password } = user;

    const isEmpty = (aField) => aField === "";

    const loginButtonDisabled = () => isEmpty(email) || isEmpty(password);

    const changeInput = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        });
    };

    const onSubmit = (e) => {
        e.preventDefault();

        login(email, password)
    };

    // esto tiene que ir en un context
    const login = (email, password) => {
        if (USER.username === email) {
            if (USER.password === password) {
                setIsLoggedIn(true);
                localStorage.setItem('isLoggedIn', true);
                setMsg("se a logeado con exito")
                setColorSnackbar("success");
                navigate("/")
            } else {
                setMsg("la contraseña esta mal")
                setColorSnackbar("Danger");
                localStorage.setItem('isLoggedIn', false);

            }

        } else {
            setMsg("el email esta mal")
            setColorSnackbar("Danger");
            localStorage.setItem('isLoggedIn', false);
        }
        setOpen(true)
        setTimeout(() => {
        setOpen(false)
            
        }, 5000);
    }


    useEffect(() => {
        if (isLoggedIn) {
            navigate("/")
        }
    }, [])

    return <Login open={open} loginButtonDisabled={loginButtonDisabled} changeInput={changeInput} onSubmit={onSubmit} msg={msg}
            colorSnackbar={colorSnackbar} />
    
}

export default useLogin;