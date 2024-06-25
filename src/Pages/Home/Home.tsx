import "./Home.scss";
import { Button, Input } from "@mui/material";
import withAuth from "../../Auth/WithAuth";
import { RootState } from "../../store";
import { useSelector } from "react-redux";

const Home = () => {
  const isAuth = useSelector((state: RootState) => state.isAuth.value);

  console.log("check is : ", isAuth);
  return (
    <div className="home flexCenterColumn">
      <Button>Test</Button>
      <Input />
    </div>
  );
};

export default withAuth(Home);
