import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../login.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
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
        <div className="container">
            <form className="form" onSubmit={onSubmit}>
                <div className="avatar_Container">
                    <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                        <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                    </svg>
                </div>
                <div>
                    <h3 className="title">Iniciar Sesion</h3>
                </div>
                <div className="textField_container">
                    <Form.Group className="mb-3">
                        <Form.Label>email</Form.Label>
                        <Form.Control type='email' placeholder="ingrese el email" name="email" onChange={changeInput} />
                    </Form.Group>
                </div>
                <div className="textField_container">
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='password' placeholder="Password" onChange={changeInput} />
                    </Form.Group>
                </div>
                <div className="button_container">
                    <Button variant={!loginButtonDisabled() ? "primary" : "secondary"} type="submit" disabled={loginButtonDisabled()}>INICIAR SESION</Button>
                </div>
                <div className="link_container">
                    <p className="link">Se te olvidaste la contraseña? <Link to="#" className="link">
                        recuperala
                    </Link></p>
                    <p className="link">no tienes cuenta? <Link to={"/nueva-cuenta"} >
                        registrate
                    </Link></p>
                </div>
            </form>
        </div>
    );
}

export default Login;