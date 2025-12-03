import { createBrowserRouter } from "react-router";
import RouteLayout from "../layouts/RouteLayout";
import Home from "../Pages/Home";

export const router = createBrowserRouter([
    {
      path: "/",
      Component: RouteLayout,
      children: [
        {
            index: true,
            Component:Home
        }
      ]
    },
  ]);