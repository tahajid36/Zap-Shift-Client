import { createBrowserRouter } from "react-router";
import RouteLayout from "../layouts/RouteLayout";
import Home from "../Pages/Home";
import Coverage from "../Pages/Coverage/Coverage";

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
  ]);