import { Button, Form } from "react-bootstrap";
import '../signUp.css'
import { Link } from "react-router-dom";
import { useState } from "react";
const SignUp = () => {
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

    return (
        <div className='conteiner'>
            <form className='formSignUp'>
                <div className="avatar_Container">
                    <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                        <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                    </svg>

                </div>
                <h1 className="title">Registrate</h1>
                <div className='item'>
                    <Form.Group className="mb-3">
                        <Form.Label>email</Form.Label>
                        <Form.Control required type='email' placeholder="ingrese el email" name="email" onChange={changeInput} value={email} autoComplete="username" />
                    </Form.Group>
                </div>
                <div className='item'>
                    <Form.Group className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='password' placeholder="ingrese contraseña" onChange={changeInput} value={password} autoComplete="new-password" />
                    </Form.Group>
                </div>
                <div className='item'>
                    <Form.Group className="mb-3">
                        <Form.Label>confirmar Password</Form.Label>
                        <Form.Control type="password" name='confirmPassword' placeholder="confirmar contraseña" onChange={changeInput} value={confirmPassword} autoComplete="current-password" />
                    </Form.Group>
                </div>

                <div className='input_container'>
                    <Button type="submit" variant={!signUpButtonDisabled() ? "primary" : "secondary"} onSubmit={onSubmit} disabled={signUpButtonDisabled()}>
                        REGISTRARME
                    </Button>
                </div>
                <div className='item login'>
                    <p>ya tienes cuenta? <Link to={"/login"} className="link">logeate</Link></p>
                </div>
            </form>
        </div>
    );
}

export default SignUp;