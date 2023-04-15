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

        login( email, password)
    };

    // esto tiene que ir en un context
    const login = (email, password) => {
        if (USER.username === email) {
            if (USER.password === password) {
                setIsLoggedIn(true);
                localStorage.setItem('isLoggedIn', true);
                navigate("/")
            } else {
                console.log("la contraseña esta mal")
                localStorage.setItem('isLoggedIn', false);
            }

        } else {
            console.log("el email esta mal")
            localStorage.setItem('isLoggedIn', false);
        }
    }


    useEffect(() => {
        if (isLoggedIn) {
            navigate("/")
        }
    }, [])

    return (
        <Login loginButtonDisabled={loginButtonDisabled} changeInput={changeInput} onSubmit={onSubmit} />
    );
}

export default useLogin;