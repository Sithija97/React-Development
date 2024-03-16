import { Home, Layout } from "@/components/pages";
import { Orders } from "@/components/pages/orders";
import { Settings } from "@/components/pages/settings";
import { Users } from "@/components/pages/users";
import { createBrowserRouter } from "react-router-dom";

export const ROOT = "/";
export const USERS = "/users";
export const ORDERS = "/orders";
export const SETTINGS = "/settings";

export const router = createBrowserRouter([
  {
    path: ROOT,
    element: <Layout />,
    children: [
      {
        path: ROOT,
        element: <Home />,
      },
      {
        path: USERS,
        element: <Users />,
      },
      {
        path: ORDERS,
        element: <Orders />,
      },
      {
        path: SETTINGS,
        element: <Settings />,
      },
    ],
  },
]);
