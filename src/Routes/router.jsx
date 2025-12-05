import { createBrowserRouter } from "react-router";
import RouteLayout from "../layouts/RouteLayout";
import Home from "../Pages/Home";
import Coverage from "../Pages/Coverage/Coverage";
import AuthLayouts from "../layouts/AuthLayouts";
import Login from "../Pages/Auth/Login/Login";
import Register from "../Pages/Auth/Register/Register";

export const router = createBrowserRouter([
    {
      path: "/",
      Component: RouteLayout,
      children: [
        {
            index: true,
            Component:Home
        },
        {
          path: '/coverage',
          Component: Coverage,
          loader: ()=> fetch('/servicecenter.json').then(res=> res.json())
        }
      ]
    },
    {
      path: '/',
      Component: AuthLayouts,
      children: [
        {
          path: '/login',
          Component: Login
        },
        {
          path: '/register',
          Component: Register
        }
      ]
    }
  ]);