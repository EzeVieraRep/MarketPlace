import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import './login.css'
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

    const isEmpty = (aField) => {
        return aField === "";
    };
    const loginButtonDisabled = () => {
        return isEmpty(email) || isEmpty(password);
    };
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
                    <i className="bi bi-person-circle"></i>
                </div>
                <div>
                    <h3 className="title">Iniciar Sesion</h3>
                </div>
                <div className="textField_container">
                    <Form.Group className="mb-3">
                        <Form.Label>email</Form.Label>
                        <Form.Control type='email' placeholder="ingrese el email" name="email" onChange={changeInput}/>
                    </Form.Group>
                </div>
                <div className="textField_container">
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='password' placeholder="Password" onChange={changeInput} />
                    </Form.Group>
                </div>
                <div className="button_container">
                    <Button variant="primary" type="submit" disabled={loginButtonDisabled()}>INICIAR SESION</Button>
                </div>
                <div className="link_container">
                    <Link to="#" className="link">
                        te olvidaste la contraseña?
                    </Link>
                    <Link to={"/nueva-cuenta"} className="link">
                        {"no tienes cuenta? Registrate"}
                    </Link>
                </div>
            </form>
        </div>
    );
}

export default Login;