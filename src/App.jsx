import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import DashboardLayout from "./layout/DashboardLayout";
import Home from "./page/Home/Home";
import History from "./page/History/History";
// import { usersData } from "./api/Api";
import { usersData } from "./assets/constant";
import Profile from "./components/userProfile/Profile";
import AddUser from "./components/Form/AddUser";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        // loader: usersData,
      },
      {
        path: "/user/:id",
        element: <Profile/>,
      },
      {
        path: "/history",
        element: <History />,
      },
      {
        path: "/add_user",
        element:<AddUser/>,
      },
    ],
  },
]);

function App() {
  return (
    <div className="">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
