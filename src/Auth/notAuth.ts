import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";


const notAuth = () => {
    const navigate = useNavigate();

    const notAuthenticated = () => {
        Cookies.remove("token");
        Cookies.remove("userId");
        navigate("/login");
    }

    return notAuthenticated
}

export default notAuth;