import { Button } from "@mui/material";
import "./Register.scss";
import { Link } from "react-router-dom";
import { Loading } from "../../Components";
import { ToastContainer, toast } from "react-toastify";
import React from "react";
import { endPoint } from "../../api/endPoint";
import useInput from "../../Custom-hooks/useInput";
import usePost from "../../Custom-hooks/usePost";

const Register = () => {
  const [inputFormData, handleChangeInputData]: any = useInput();
  const [handleRegisterPost, loading, success, errorMessage]: any = usePost(
    endPoint.register,
    inputFormData
  );
  const loginSuccess = () => toast("Create account success");
  const loginFail = () => toast(errorMessage);

  const inputArray = [
    { placeholder: "Email", name: "email", type: "email" },
    { placeholder: "Username", name: "username", type: "text" },
    { placeholder: "Password", name: "password", type: "password" },
  ];

  const handleRegister = (e: any) => {
    e.preventDefault();
    handleRegisterPost();
  };

  React.useEffect(() => {
    if (!loading) {
      success && loginSuccess();
      errorMessage && loginFail();
    }
  }, [success, errorMessage]);

  return (
    <div className="register flexCenter">
      {loading && <Loading />}
      <ToastContainer />
      <form
        className="register-field flexCenterColumn"
        onSubmit={handleRegister}
      >
        <h1>Create Account</h1>
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
        <Button type="submit" variant="contained" color="warning">
          Create Account
        </Button>
        <Link to={"/login"}>I have an account !!</Link>
      </form>
    </div>
  );
};

export default Register;
