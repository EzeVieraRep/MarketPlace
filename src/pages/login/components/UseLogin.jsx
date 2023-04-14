import { useState } from 'react';
import Login from '../views/Login'
const useLogin = () => {

    // hook de user
    const [user, setUser] = useState({
        email: "",
        password: "",
    });

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

    };

    return (
        <Login loginButtonDisabled={loginButtonDisabled} changeInput={changeInput} onSubmit={onSubmit} />
    );
}

export default useLogin;