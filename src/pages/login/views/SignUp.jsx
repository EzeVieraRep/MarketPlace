import { Button, Form } from "react-bootstrap";
import '../signUp.css'
const SignUp = () => {
    return (
        <div className='conteiner'>
            <form className='formSignUp'>
                <div className="avatar_Container">
                    <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                        <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                    </svg>

                </div>
                <h1 className="title">Registrate</h1>
                <div className='item'>
                    <Form.Group className="mb-3">
                        <Form.Label>email</Form.Label>
                        <Form.Control type='email' placeholder="ingrese el email" name="email" />
                    </Form.Group>
                </div>
                <div className='item'>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='password' placeholder="Password" />
                    </Form.Group>
                </div>
                <div className='item'>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='confirmPassword' placeholder="confirmar contraseña" />
                    </Form.Group>
                </div>

                <div className='input_container'>
                    <Button type="submit" variant="primary">
                        REGISTRARME
                    </Button>
                </div>

                <p>OR</p>

                
            </form>
        </div>
    );
}

export default SignUp;