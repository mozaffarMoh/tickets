import React from "react";
import notAuth from "./notAuth";
import useGet from "../Custom-hooks/useGet";
import { RootState } from "../store";
import { useDispatch, useSelector } from "react-redux";
import { Loading } from "../Components";
import { setIsAuth } from "../Slices/isAuthSlice";
const withAuth = (Component: React.FC<any>) => {
  const WithAuthComponent: React.FC<any> = (props: any) => {
    const notAuthenticated = notAuth();
    const isAuth = useSelector((state: RootState) => state.isAuth.value);
    const dispatch = useDispatch();
    const [, , getData, success]: any = useGet("/store");
    const [dataCheckToken, , handleCheckToken]: any = useGet("/check-token?userId=123");

    React.useEffect(() => {
      getData();
    }, []);

    React.useEffect(() => {
      success && handleCheckToken();
    }, [success]);

    React.useEffect(() => {
      if (dataCheckToken) {
        dispatch(setIsAuth(dataCheckToken?.isAuth));
      }
    }, [dataCheckToken]);
    

    React.useEffect(() => {
      if (isAuth === false) {
        notAuthenticated();
      }
    }, [isAuth]);

    if (isAuth === null) {
      return <Loading />;
    }

    return isAuth ? <Component {...props} /> : null;
  };

  return WithAuthComponent;
};

export default withAuth;
