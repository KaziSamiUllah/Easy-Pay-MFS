import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login&Register/Login";
import Register from "../Pages/Login&Register/Register";
import UserHome from "../Pages/UserPages/UserHome";
import AgentHome from "../Pages/AgentPages/AgentHome";
import AdminHome from "../Pages/AdminPages/AdminHome";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
            path: "/",
            element:<Home></Home>
        },
        {
            path: "/login",
            element:<Login></Login>
        },
        {
            path: "/register",
            element:<Register></Register>
        },
        {
            path: "/userHome",
            element:<UserHome></UserHome>
        },
        {
            path: "/agentHome",
            element:<AgentHome></AgentHome>
        },
        {
            path: "/adminHome",
            element: <AdminHome></AdminHome>
        },

      ]
    },
  ]);
  export default router;