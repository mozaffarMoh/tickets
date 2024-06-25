import { Button } from "@mui/material";
import "./Login.scss";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import React from "react";
import usePost from "../../Custom-hooks/usePost";
import useInput from "../../Custom-hooks/useInput";
import { endPoint } from "../../api/endPoint";
import { Loading } from "../../Components";

const Login = () => {
  const [inputFormData, handleChangeInputData]: any = useInput();
  const [handleLoginPost, loading, success, errorMessage]: any = usePost(
    endPoint.login,
    inputFormData
  );
  const loginSuccess = () => toast("Login success");
  const loginFail = () => toast(errorMessage);

  const inputArray = [
    { placeholder: "Username", name: "username", type: "text" },
    { placeholder: "Password", name: "password", type: "password" },
  ];

  const handleLogin = (e: any) => {
    e.preventDefault();
    handleLoginPost();
  };

  React.useEffect(() => {
    if (!loading) {
      success && loginSuccess();
      errorMessage && loginFail();
    }
  }, [success, errorMessage]);

  return (
    <div className="login flexCenter">
      {loading && <Loading />}
      <ToastContainer />
      <form className="login-field flexCenterColumn" onSubmit={handleLogin}>
        <h1>Login</h1>
        {inputArray.map((item: any, index: number) => {
          return (
            <input
              required
              key={index}
              placeholder={item.placeholder}
              name={item.name}
              type={item.type}
              onChange={(e: any) => handleChangeInputData(e.target)}
            />
          );
        })}
        <Button type="submit" variant="contained" color="success">
          Login
        </Button>
        <Link to={"/register"}>dont have an account !!</Link>
      </form>
    </div>
  );
};

export default Login;
