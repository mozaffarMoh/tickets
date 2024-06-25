import React from "react";
import baseApi from "../api/baseApi";

const useGet = (endPoint: string) => {
    const [data, setData] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const [success, setSuccess] = React.useState(false);
    const [errorMessage, setErrorMessage] = React.useState("");

    const getData = () => {

        setLoading(true)
        setSuccess(false);
        baseApi.get(endPoint).then((res) => {
            setLoading(false)
            setData(res.data)
            setSuccess(true)
        }).catch((err) => {
            setLoading(false);
            setErrorMessage(err.data?.data)
            endPoint.includes("check-token") && setData(err?.response?.data)

        })
    }
    React.useEffect(() => {
        if (!endPoint.includes("check-token")) {
            getData()
        }
    }, [])
    return [data, loading, getData, success, errorMessage, setData]
}

export default useGet;