import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login&Register/Login";
import Register from "../Pages/Login&Register/Register";
import UserHome from "../Pages/UserPages/UserHome";
import AgentHome from "../Pages/AgentPages/AgentHome";
import AdminHome from "../Pages/AdminPages/AdminHome";
import SendMoney from "../Pages/UserPages/SendMoney";
import Recharge from "../Pages/UserPages/Recharge";
import CashOut from "../Pages/UserPages/CashOut";
import CashIn from "../Pages/UserPages/CashIn";
import CheckBalance from "../Pages/UserPages/CheckBalance";
import UserTransactions from "../Pages/UserPages/UserTransactions";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        // element:<Home></Home>
        element: <Login></Login>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },

      ////////////////////user pages////////////////
      {
        path: "/userHome",
        element: <UserHome></UserHome>,
      },
      {
        path: "/sendMoney",
        element: <SendMoney></SendMoney>,
      },
      {
        path: "/recharge",
        element: <Recharge></Recharge>,
      },
      {
        path: "/cashOut",
        element: <CashOut></CashOut>
      },
      {
        path: "/cashIn",
        element: <CashIn></CashIn>
      },
      {
        path: "/checkBalance",
        element: <CheckBalance></CheckBalance>
      },
      {
        path: "/userTransactions",
        element: <UserTransactions></UserTransactions>
      },

      ///////////////////Agent Pages////////////////////
      {
        path: "/agentHome",
        element: <AgentHome></AgentHome>,
      },
      {
        path: "/adminHome",
        element: <AdminHome></AdminHome>,
      },
    ],
  },
]);
export default router;
