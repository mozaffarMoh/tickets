import axios from "axios";
import Cookies from 'js-cookie';

const baseApi = axios.create({
    baseURL: "http://localhost:8080",
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
    },
});


baseApi.interceptors.request.use(
    (config: any) => {
        const token = Cookies.get("token");
        if (token) {
            config.headers["Authorization"] = `Bearer ${token}`;
        }
        return config;
    },
    (error: any) => {
        return Promise.reject(error);
    }
);



export default baseApi