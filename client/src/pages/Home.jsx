import React from "react";
import { useSelector } from "react-redux";

// import { listOfUsers } from "../redux/actions/user";
import AdminDashboard from "./AdminDashboard";
import UserDashboard from "./UserDashboard";

const Home = () => {

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

//   useEffect(() => {
//     dispatch(listOfUsers());
//   }, [dispatch]);

  return (
    <>
    {userInfo.isAdmin ? < AdminDashboard /> : < UserDashboard /> }
    </>
  );
};

export default Home;
