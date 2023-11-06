import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/dashboard";
import DefaultLayout from "../layouts/AdminLayout";
import AuthLayout from "../layouts/AuthLayout";
import LoginPage from "../pages/login";
import RegisterPage from "../pages/register";
import UserLayout from "../layouts/UserLayout";
import ECommerce from "../pages/e-commerce";
import Verified from "../pages/verified";

const RouterComp = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  },
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
      {
        path: "/verified",
        element: <Verified />,
      },
    ],
  },
  {
    path: "/",
    element: <UserLayout />,
    children: [
      {
        path: "/e-commerce",
        element: <ECommerce />,
      },
    ],
  },
]);

export default RouterComp;
