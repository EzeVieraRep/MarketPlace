import { useState } from 'react'
import SignUp from '../views/SignUp'

const UseSignUp = () => {


    const [user, setUser] = useState({
        email: "",
        password: "",
        confirmPassword: ""
    })

    const changeInput = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }
    const onSubmit = (e) => {
        e.preventDefault();

    };

    const signUpButtonDisabled = () => isEmpty(email) || isEmpty(password) || isEmpty(confirmPassword)

    const isEmpty = (aField) => aField === "";

    const { email, password, confirmPassword } = user

    return (<SignUp changeInput={changeInput} onSubmit={onSubmit} signUpButtonDisabled={signUpButtonDisabled} email={email} password={password} confirmPassword={confirmPassword} />);
}

export default UseSignUp;