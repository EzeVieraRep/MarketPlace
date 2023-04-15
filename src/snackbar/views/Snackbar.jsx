
import { ToastContainer } from 'react-bootstrap';
import Toast from 'react-bootstrap/Toast';

const Snackbar = ({ msg, colorSnackbar, show, handleClose }) => {
    return (
        <ToastContainer position="bottom-center" className="p-3">

            <Toast bg={colorSnackbar.toLowerCase()} className="d-inline-block m-1" show={show} onClose={handleClose} autohide>
                <Toast.Body className={"Success" === 'Dark' && 'text-white'}>
                    {msg}
                </Toast.Body>
            </Toast>
        </ToastContainer>
    );
}

export default Snackbar;