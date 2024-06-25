import React from "react";
import baseApi from "../api/baseApi";

const usePost = (endPoint: string, body: any) => {
    const [data, setData] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const [errorMessage, setErrorMessage] = React.useState("");
    const [success, setSuccess] = React.useState(false);

    const handlePost = () => {
        setLoading(true)
        baseApi.post(endPoint, body).then((res) => {
            setLoading(false)
            setData(res.data)
            setSuccess(true)
            setTimeout(() => {
                setSuccess(false)
            }, 3000);
        }).catch((err) => {
            setLoading(false);
            setErrorMessage(err.response.data.detail);
            setTimeout(() => {
                setErrorMessage("")
            }, 4000);
        })
    }
    return [handlePost, loading, success, errorMessage, data]
}

export default usePost;