import {createBrowserRouter} from "react-router-dom";
import Home from "../Pages/Home/Home";
import {Layout} from "../components/Layout";
import NewContact from "../Pages/Contacts/NewContact";
import EditContact from "../Pages/Contacts/EditContact"
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
        {
          path: "Edit/:Namecontact",
          element: <EditContact />,
        },
      ],
    },]);

export default router;