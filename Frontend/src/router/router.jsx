import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/dashboard";
import DefaultLayout from "../layouts/AdminLayout";
import AuthLayout from "../layouts/AuthLayout";
import LoginPage from "../pages/login";
import RegisterPage from "../pages/register";
import UserLayout from "../layouts/UserLayout";
import ECommerce from "../pages/e-commerce";

const RouterComp = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
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
    ],
  },
  {
    path: "/",
    element: <UserLayout />,
    children: [
      {
        path: "/commerce",
        element: <ECommerce />,
      },
    ],
  },
]);

export default RouterComp;
