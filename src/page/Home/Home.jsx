import React, { useState, useEffect } from "react";
import AdminProfile from "../../components/AdminProfile/AdminProfile";
import UserList from "../../components/UserList/UserList";
import { useLoaderData } from "react-router-dom";
import { axiosInstance } from "../../api/Api";

//getting the users from the API
const getUsers = async () => {
  const { data } = await axiosInstance.get("/users");
  return data;
};

const Home = () => {
  const [user, setUser] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const res = await getUsers();
      setIsLoading(false);
      setUser(res);
    })();
  }, []);

  if (isLoading) {
    return <div>Loading</div>;
  }

  return (
    <div>
      <AdminProfile />
      <UserList users={user} />
    </div>
  );
};

export default Home;
