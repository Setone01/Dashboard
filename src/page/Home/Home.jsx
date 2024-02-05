import React, {useState, useEffect} from "react";
import AdminProfile from "../../components/AdminProfile/AdminProfile";
import UserList from "../../components/UserList/UserList";
// import { useLoaderData } from "react-router-dom";
// import { usersData } from "../../assets/constant";

const Home = () => {
  //fetching users from API
  // const [user, setUser] = useState([]);
  // const data = usersData

  // useEffect(() => {
  //   setUser(data);
  // }, []);      
  return (
    <div>
      <AdminProfile />
      <UserList/>
    </div>
  );
};

export default Home;
