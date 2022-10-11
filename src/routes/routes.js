import {createBrowserRouter} from "react-router-dom";
import Home from "../Pages/Home/Home";
import {Layout} from "../components/Layout";
import NewContact from "../Pages/Contacts/NewContact";

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
          element: <NewContact />,
        },
        // {
        //   path: "categories/:categoryID",
        //   element: <Categories />,
        // },
      ],
    },]);

export default router;