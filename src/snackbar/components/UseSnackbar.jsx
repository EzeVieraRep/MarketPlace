import { useState } from "react";
import Snackbar from "../views/Snackbar";

const UseSnackbar = ({ msg, colorSnackbar }) => {

    const [show, setShow] = useState(true)

    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }

        setShow(false);
    };
    return (
        <Snackbar show={show} msg={msg} colorSnackbar={colorSnackbar} handleClose={handleClose}/>
    );
}

export default UseSnackbar;