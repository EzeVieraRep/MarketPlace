import clienteAxios from "../config/Axios";

export default class ServiceLogin {

    async login(data) {
        console.log(data);
        const response = clienteAxios.post("/api/auth/login", data)
        return response
    }
}