import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Form from "../components/Form/Form";
import {Layout} from "../components/Layout";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "Register",
          element: <Form />,
        },
        // {
        //   path: "categories/:categoryID",
        //   element: <Categories />,
        // },
      ],
    },]);

export default router;