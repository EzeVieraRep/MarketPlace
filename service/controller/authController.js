import bcryptjs from "bcryptjs"
import jwt from "jsonwebtoken"
import User from '../models/User'

export const register = async (req, res) => {
    try {
        const { password} = req.body

        let user = req.body
        
        const salt = await bcryptjs.genSalt(10)
        user.password = await bcryptjs.hash(password, salt)

        const newUser = await User.create(user)

        const payload = { user: { id: newUser.id } };
        jwt.sign(payload, process.env.SECRETA, { expiresIn: 3600, },
            (error, token) => {
                if (error) throw error;

                //mensaje de confirmacion
                res.status(200).json({ token, msg: "se a registrado con exito" });
            }
        );
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "hubo un error" });

    }
}