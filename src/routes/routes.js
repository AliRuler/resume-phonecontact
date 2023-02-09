import {createBrowserRouter} from "react-router-dom";
import Home from "../Pages/Home/Home";
import {Layout} from "../components/Layout";
import NewContact from "../Pages/Contacts/ShowContact";
import ShowContact from "../Pages/Contacts/ShowContact";
import Register from "../Pages/Contacts/Register/Register";
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
          element: <Register />,
        },
        {
          path:"/:Namecontact",
          element: <ShowContact/>
        }
      ],
    },]);

export default router;